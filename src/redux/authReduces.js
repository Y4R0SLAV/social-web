import { loginApi } from './../api/api'

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true }

    default:
      return state;
  }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const loginButton = () => {
  return (dispatch) => {
    loginApi.isLogin().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data.id, data.data.email, data.data.login));
      }
    });
  }
}

export const toLogin = (email, password, rememberMe) => {
  return (dispatch) => {
    loginApi.toLogin(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.userId, email, email));
      }
    });
  }
}




export default authReducer;