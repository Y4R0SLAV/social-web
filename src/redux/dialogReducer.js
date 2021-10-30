const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.messageBody }]
      };;

    default:
      return state;
  }
}

export const sendMessage = (messageBody) => ({ type: SEND_MESSAGE, messageBody });

export default dialogReducer;