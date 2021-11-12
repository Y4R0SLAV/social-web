import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReduces';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

window.store = store;

export default store;