import { rerender } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi! How are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 }
    ],
    newPostText: "it kamasytra"
  },
  messagePage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" }
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it-kamasytra" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" }
    ]
  }
}

export let addPost = () => {
  state.profilePage.posts.push({
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  });

  state.profilePage.newPostText = "";

  rerender(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerender(state);
}

export default state;