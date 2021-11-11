import { loginApi, secureApi } from './../api/api';

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data };
    case SET_CAPTCHA_URL:
      return { ...state, captchaUrl: action.url };
    default:
      return state;
  }
}


const setCaptchaUrl = (url) => ({ type: SET_CAPTCHA_URL, url });

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const me = () => async (dispatch) => {
  const data = await loginApi.me();
  if (data.resultCode === 0) {
    dispatch(setUserData(data.data.id, data.data.email, data.data.login, true));
  }
  return data;
}

export const login = (values, setFieldError) => async (dispatch) => {
  const { email, password, rememberMe, captcha } = values;
  const data = await loginApi.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(me());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    setFieldError("rememberMe", data.messages[0]);
  }
}

export const logout = () => async dispatch => {
  const data = await loginApi.logout();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
}

export const getCaptchaUrl = () => async dispatch => {
  const data = await secureApi.getCaptchaUrl();
  dispatch(setCaptchaUrl(data.url));
}


export default authReducer;