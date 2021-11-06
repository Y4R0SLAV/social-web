import { profileApi } from './../api/api';

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SET_PHOTO = "profile/SET_PHOTO";

let initialState = {
  posts: [
    { id: 1, message: "It's my first post", likesCount: 12 },
    { id: 2, message: "Hi! How are you?", likesCount: 11 },
    { id: 3, message: "It's my last post", likesCount: 2 }
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (action.newPostBody) {
        return {
          ...state,
          posts: [...state.posts, { id: 3, message: action.newPostBody, likesCount: 0 }]
        }
      }
      return state;

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
        profile: { ...state.profile, photos: action.photos }
      }
    default:
      return state;
  }
}

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });
const setPhoto = (photos) => ({ type: SET_PHOTO, photos });


export const getProfile = (userId) => async (dispatch) => {
  let data = await profileApi.getProfile(userId);
  dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
  let data = await profileApi.getStatus(userId);
  dispatch(setStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
  let data = await profileApi.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let data = await profileApi.savePhoto(file);
  console.log(data);
  console.log(file);
  if (data.resultCode === 0) {
    dispatch(setPhoto(data.data.photos));
  }
}



export default profileReducer;