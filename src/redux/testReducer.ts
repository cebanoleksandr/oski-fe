import { Test } from "../utils/types";

const SET_TEST = 'SET_TEST';

export const testState: InitialState = {
  item: null,
};

type InitialState = {
  item: Test | null,
};

const testReducer = (
  state = testState,
  action: ActionTypes,
): InitialState => {
  switch (action.type) {
    case SET_TEST:
      return {
        ...state,
        item: action.payload,
      };
  
    default:
      break;
  }
  return state;
}

//action creators
export const setTestAC = (test: Test | null): SetTest => {
  return {
    type: SET_TEST,
    payload: test,
  }
}

type SetTest = {
  type: typeof SET_TEST,
  payload: Test | null,
}

type ActionTypes = SetTest;

export default testReducer;

