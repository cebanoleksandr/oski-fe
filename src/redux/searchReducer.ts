const SET_QUERY = 'SET_QUERY';

export const searchState: InitialState = {
  query: '',
};

type InitialState = {
  query: string,
};

const searchReducer = (
  state = searchState,
  action: ActionTypes,
): InitialState => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
  
    default:
      break;
  }
  return state;
}

//action creators
export const setQueryAC = (query: string): SetQuery => {
  return {
    type: SET_QUERY,
    payload: query,
  }
}

type SetQuery = {
  type: typeof SET_QUERY,
  payload: string,
}

type ActionTypes = SetQuery;

export default searchReducer;
