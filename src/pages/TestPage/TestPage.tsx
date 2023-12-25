import { useNavigate, useParams } from 'react-router-dom';
import './TestPage.scss';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setTestAC } from '../../redux/testReducer';
import { getTestById } from '../../api/tests';
import { Result } from '../../utils/types';
import cn from 'classnames';
import { setNewResultsAC } from '../../redux/userReducer';
import { setNewResults } from '../../api/auth';

export const TestPage = () => {
  const { testId } = useParams();
  const id = testId ? +testId : 0;
  const test = useAppSelector(state => state.currentTest.item);
  const dispatch = useDispatch();
  const [isFinish, setIsFinish] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const questionsCount = test?.questions.length;
  const [results, setResults] = useState<Result[]>([]);
  const [isCongrats, setIsCongrats] = useState(false);
  const correct = results.filter(r => r.isCorrect).length;
  const user = useAppSelector(state => state.user.item);
  const navigate = useNavigate();

  useEffect(() => {
    getTestById(id)
      .then((response) => {
        dispatch(setTestAC(response.data))
      })
  }, [id]);

  const nextQuestionHandler = () => {
    if (questionNumber === questionsCount) {
      const updatedResults = {
        testId: test?.id || 1,
        result: `${correct + 1}/${questionsCount}`,
        results
      }
      
      setIsFinish(true);
      setIsCongrats(true);
      setTimeout(() => {
        setIsCongrats(false);
        setNewResults(user?.userId || 1, updatedResults)
          .then((response) => {
            dispatch(setNewResultsAC(response.data));
          })
      }, 3000);
    } else {
      const nextQuestion = questionNumber + 1;

      setQuestionNumber(nextQuestion);
    }
  }

  const chooseOptionHandler = (option: number) => {
    const isCorrect = option === test?.questions[questionNumber - 1].correctIndex;
    const questionId = test?.questions[questionNumber - 1].id || 1;
    const newResults = [...results, {questionId, isCorrect}];
    const selector = `.options:nth-child(${option < 2 ? 1 : 2}) .option:nth-child(${option % 2 + 1})`
    const selectedOption = document.querySelector(selector);

    if (selectedOption) {
      selectedOption.classList.add(isCorrect ? 'success' : 'error');
    }

    setResults(newResults);
    setTimeout(() => {
      selectedOption?.classList.remove(isCorrect ? 'success' : 'error');
      nextQuestionHandler();
    }, 1500);
  }

  if (!user) {
    navigate('/login');
  }

  if (!!user?.testsResults.find(r => r.testId === id) && !isFinish) {
    return <h1 className="text-center">
      You have already passed this test.
      Your result is {user?.testsResults.find(r => r.testId === id)?.result}
    </h1>
  }

  return (
    <div className="test-page">
      <div className={cn('test-area bg-light', {
        'congratulations': isCongrats
      })}>
        <h1 className="text-center mb10">{test?.title}</h1>

        {!isFinish ? (
          <>
            <h3 className="mb10">
              {test?.questions[questionNumber - 1].question}
            </h3>

            <div className="options-container mb10">
              <div className="options">
                <div className="option" onClick={() => chooseOptionHandler(0)}>
                  A: {test?.questions[questionNumber - 1].options[0]}
                </div>

                <div className="option" onClick={() => chooseOptionHandler(1)}>
                  B: {test?.questions[questionNumber - 1].options[1]}
                </div>
              </div>

              <div className="options">
                <div className="option" onClick={() => chooseOptionHandler(2)}>
                  C: {test?.questions[questionNumber - 1].options[2]}
                </div>

                <div className="option" onClick={() => chooseOptionHandler(3)}>
                  D: {test?.questions[questionNumber - 1].options[3]}
                </div>
              </div>
            </div>

            <p className="text-center">
              {questionNumber}/{questionsCount}
            </p>
          </>
        ) : (
          <>
            <h3 className=" text-center mb10">
              Congratulations! Your result: {correct}/{questionsCount} 
            </h3>

            <ol>
              {results.map(result => (
                <li key={result.questionId}>
                  <span className="mr10">
                    {test?.questions.find(q => q.id === result.questionId)?.question}
                  </span>

                  <span>
                    {result.isCorrect ? (
                      <i className="fa fa-check text-success"></i>
                    ) : (
                      <i className="fa fa-close text-danger"></i>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}
