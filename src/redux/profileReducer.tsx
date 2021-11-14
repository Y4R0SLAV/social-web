import { profileApi } from '../api/api'
import { PostType, ProfileType, ContactsType, PhotosType } from '../types/types'

const ADD_POST = "profile/ADD-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE_POST"
const SET_PHOTO = "profile/SET_PHOTO"

let initialState = {
  posts: [
    { id: 1, message: "It's my first post", likesCount: 12 },
    { id: 2, message: "Hi! How are you?", likesCount: 11 },
    { id: 3, message: "It's my last post", likesCount: 2 }
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: ""
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      if (action.newPostBody) {
        return {
          ...state,
          posts: [...state.posts, { id: 3, message: action.newPostBody, likesCount: 0 }]
        }
      }
      return state

    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }

    case SET_STATUS:
      return {
        ...state, status: action.status
      }

    case DELETE_POST:
      return {
        ...state, posts: state.posts.filter(u => u.id !== action.postId)
      }

    case SET_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType
      }
    default:
      return state
  }
}


type AddPostActionType = { type: typeof ADD_POST, newPostBody: string }
export const addPost = (newPostBody: string): AddPostActionType => ({ type: ADD_POST, newPostBody })


type DeletePostActionType = { type: typeof DELETE_POST, postId: number }
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })


type SetUserProfileActionType = {type: typeof SET_USER_PROFILE, profile: ProfileType}
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusActionType = {type: typeof SET_STATUS, status: string}
const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })

type SetPhotoActionType = {type: typeof SET_PHOTO, photos: PhotosType}
const setPhoto = (photos: PhotosType): SetPhotoActionType => ({ type: SET_PHOTO, photos })


export const getProfile = (userId: number) => async (dispatch : any) => {
  let data = await profileApi.getProfile(userId)
  dispatch(setUserProfile(data))
}

export const getUserStatus = (userId: number) => async (dispatch : any) => {
  let data = await profileApi.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateUserStatus = (status: string) => async (dispatch : any) => {
  let data = await profileApi.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}


export const savePhoto = (file: any) => async (dispatch : any) => {
  let data = await profileApi.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(setPhoto(data.data.photos))
  }
}

export const setProfileData = (profile: ProfileType) => async (dispatch : any) => {
  let data = await profileApi.setProfileData(profile)
  if (data.resultCode === 0) {
    dispatch(setUserProfile(profile))
  }
}


export default profileReducer