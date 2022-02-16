import { createStore } from 'redux';
import appReducer from './App/appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(appReducer
,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
