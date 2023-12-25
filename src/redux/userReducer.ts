import { TestsResults, User } from "../utils/types";

const SET_USER = 'SET_USER';
const SET_RESULTS = 'SET_RESULTS';

export const userState: InitialState = {
  item: null,
};

type InitialState = {
  item: User | null,
};

const userReducer = (
  state = userState,
  action: ActionTypes,
): InitialState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        item: action.payload,
      };

    case SET_RESULTS:
      if (!state.item) {
        return { ...state }
      }

      return {
        ...state,
        item: {
          ...state.item,
          testsResults: [
            ...state.item.testsResults,
            action.payload,
          ]
        }
      }
  
    default:
      break;
  }
  return state;
}

//action creators
export const setUserAC = (user: User | null): SetUser => {
  return {
    type: SET_USER,
    payload: user,
  }
}

export const setNewResultsAC = (result: TestsResults): SetResults => {
  return {
    type: SET_RESULTS,
    payload: result
  }
}

type SetUser = {
  type: typeof SET_USER,
  payload: User | null,
}

type SetResults = {
  type: typeof SET_RESULTS,
  payload: TestsResults,
}

type ActionTypes = SetUser | SetResults;

export default userReducer;
