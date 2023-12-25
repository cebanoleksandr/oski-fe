export type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export type Test = {
  id: number;
  title: string;
  questions: Question[];
}

export type Result = {
  questionId: number;
  isCorrect: boolean;
}

export type User = {
  userId: number;
  fullName: string;
  email: string;
  password: string;
  isAuth: boolean;
  testsResults: TestsResults[];
}

export type TestsResults = {
  testId: number;
  result: string;
  results: Result[];
}
