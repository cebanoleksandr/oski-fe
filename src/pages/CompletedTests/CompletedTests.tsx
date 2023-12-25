import { useNavigate } from 'react-router-dom';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './CompletedTests.scss';
import { getPreparedTests } from '../../utils/helpers';
import { setTestsAC } from '../../redux/testsReducer';

export const CompletedTests = () => {
  const user = useAppSelector(state => state.user.item);
  const query = useAppSelector(state => state.search.query);
  const testIds = user?.testsResults.map(t => t.testId) || [];
  const tests = useAppSelector(state => state.tests.items);
  const preparedTests = getPreparedTests(tests.filter(t => testIds.includes(t.id)), query);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(preparedTests);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setTestsAC(items));
  }

  if (!user) {
    navigate('/login');
  }

  if (!preparedTests.length) {
    return <h1 className="text-center">
      There are no completed tests!
    </h1>
  }

  return (
    <div className="completed-tests">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul className="test-list" {...provided.droppableProps} ref={provided.innerRef}>
              {preparedTests.map((test, index) => (
                <Draggable
                  key={test.id}
                  draggableId={test.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className="test-item"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <img
                        src="data:image/jpeg;base64,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"
                        className="test-card-image mb10"
                        alt=""
                      />

                      <h3 className="mb10">{test.title}</h3>

                      <p>
                        Your result is {user?.testsResults.find(r => r.testId === test.id)?.result}
                      </p>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
