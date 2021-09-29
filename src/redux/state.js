let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log('check check check');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { // {type: 'ADD-POST', otherData: ...}
    if (action.type === "ADD-POST") {
      this._state.profilePage.posts.push({
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      });
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;