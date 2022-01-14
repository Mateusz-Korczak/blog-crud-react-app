import { createStore, combineReducers } from 'redux';
import state from './initialState';
import postsReducer from './postsRedux';

const subreducers = {
  posts: postsReducer,
};
const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
