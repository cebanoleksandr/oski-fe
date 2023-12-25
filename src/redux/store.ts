import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import testsReducer from './testsReducer';
import testReducer from './testReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  tests: testsReducer,
  currentTest: testReducer,
  user: userReducer,
  search: searchReducer
});

const store: Store<RootState> = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export default store;
