import { profileApi } from './../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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

    default:
      return state;
  }
}

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    })
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
  }
}



export default profileReducer;