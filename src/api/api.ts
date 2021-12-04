import axios from "axios"
import { Url } from "url"
import { ProfileType } from "../types/types"

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "23cebb0e-751f-4abb-9499-dd7054d8a790"
  }
})

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`).then(response => response.data)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(response => response.data)
  }
}
export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

export enum ResultCodeWithCaptcha {
  CaptchaIsRequired = 10
}

export type MeResponse = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

export type LoginResponse = {
    data: {
      userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeWithCaptcha
    messages: Array<string>
  }

export type LogoutResponse = {
  data: {
    userId: number
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}

type dataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}

export const loginApi = {
  me() {
    return instance.get<MeResponse>(`/auth/me`).then(response => response.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return instance.post<dataType, LoginResponse>('auth/login', { email, password, rememberMe, captcha })
  },
  logout() {
    return instance.delete<LogoutResponse>('auth/login').then(response => response.data)
  }
}

export const profileApi = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`).then(response => response.data)
  },

  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`).then(response => response.data)
  },

  updateStatus(status: string) {
    return instance.put('profile/status', { status: status }).then(response => response.data)
  },

  savePhoto(file: any) {
    const formData = new FormData()
    formData.append("image", file)
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    }).then(response => response.data)
  },

  setProfileData(profile: ProfileType) {
    return instance.put('profile', profile).then(response => response.data)
  }
}



export const secureApi = {
  getCaptchaUrl() {
    return instance.get<{url: string}>('security/get-captcha-url').then(response => response.data)
  }
}

