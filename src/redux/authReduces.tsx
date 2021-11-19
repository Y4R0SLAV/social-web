import { loginApi, secureApi } from '../api/api'
import { Dispatch } from "react"
import { AppStateType } from "./reduxStore"
import { ThunkAction } from "redux-thunk"

const SET_USER_DATA = "auth/SET_USER_DATA"
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL"

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState


const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data }
    case SET_CAPTCHA_URL:
      return { ...state, captchaUrl: action.url }
    default:
      return state
  }
};

//actions:
type ActionsType = SetCaptchaUrlActionType | SetUserDataActionType

type SetCaptchaUrlActionType = {
  type: typeof SET_CAPTCHA_URL,
  url: string
}
const setCaptchaUrl = (url: string): SetCaptchaUrlActionType => ({ type: SET_CAPTCHA_URL, url })


type UserDataType = {
  userId: number | null, email: string | null,
  login: string | null, isAuth: boolean 
}
type SetUserDataActionType = {
  type: typeof SET_USER_DATA,
  data: UserDataType
}
export const setUserData = (userId: number | null, email: string | null,
                            login: string | null, isAuth: boolean): SetUserDataActionType => (
                              { type: SET_USER_DATA, data: { userId, email, login, isAuth } })


// thunks: 
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const me = (): ThunkType => async (dispatch) => {
  const data = await loginApi.me()
  if (data.resultCode === 0) {
    dispatch(setUserData(data.data.id, data.data.email, data.data.login, true))
  }
  return data;
}


type ValuesDataType = { email: string, password: string, rememberMe: boolean, captcha: string | null }

export const login = (values: ValuesDataType, setFieldError: Function): ThunkType => async (dispatch) => {
  const { email, password, rememberMe, captcha } = values
  const data = await loginApi.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0) {
    dispatch(me())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    setFieldError("rememberMe", data.messages[0])
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  const data = await loginApi.logout()
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await secureApi.getCaptchaUrl()
  dispatch(setCaptchaUrl(data.url))
}


export default authReducer