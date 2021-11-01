import { loginApi } from './../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data }

    default:
      return state;
  }
}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const me = () => async (dispatch) => {
  let data = await loginApi.me();
  if (data.resultCode === 0) {
    dispatch(setUserData(data.data.id, data.data.email, data.data.login, true));
  }
  return data;
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await loginApi.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(me());
  } else {
    dispatch(stopSubmit('login', { _error: data.messages.length > 0 ? data.messages[0] : 'some error' }));
  }
}

export const logout = () => async dispatch => {
  let data = await loginApi.logout()
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
}
export default authReducer;