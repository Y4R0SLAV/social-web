const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ],
  newPostText: "it kamasytra"
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: 3,
        message: state.newPostText,
        likesCount: 0
      });
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export default profileReducer;