import { profileApi } from './../api/api';

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ],
  newPostText: "it kamasytra",
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 3, message: state.newPostText, likesCount: 0 }],
        newPostText: ""
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };

    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }

    case SET_STATUS:
      return {
        ...state, status: action.status
      }

    default:
      return state;
  }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });

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