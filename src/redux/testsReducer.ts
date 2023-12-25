import { Test } from "../utils/types";

const SET_TESTS = 'SET_TESTS';

export const testsState: InitialState = {
  items: [],
};

type InitialState = {
  items: Test[],
};

const testsReducer = (
  state = testsState,
  action: ActionTypes,
): InitialState => {
  switch (action.type) {
    case SET_TESTS:
      return {
        ...state,
        items: action.payload,
      };
  
    default:
      break;
  }
  return state;
}

//action creators
export const setTestsAC = (tests: Test[]): SetTests => {
  return {
    type: SET_TESTS,
    payload: tests,
  }
}

type SetTests = {
  type: typeof SET_TESTS,
  payload: Test[],
}

type ActionTypes = SetTests;

export default testsReducer;
