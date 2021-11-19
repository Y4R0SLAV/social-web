import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReduces'
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer'

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
})

type RootReducerType = typeof rootReducer  // (globalState: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>
export type DialogsPageType = ReturnType<typeof dialogReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

// @ts-ignore
window.__store__ = store

export default store