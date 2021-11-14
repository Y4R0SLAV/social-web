const SEND_MESSAGE = "SEND-MESSAGE"

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" }
  ] as Array<DialogType>,

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasytra" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" }
  ] as Array<MessageType>
};

export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.messageBody }]
      }

    default:
      return state;
  }
}

type sendMessageActionType = {type: typeof SEND_MESSAGE, messageBody: string}
export const sendMessage = (messageBody: string): sendMessageActionType => ({ type: SEND_MESSAGE, messageBody })

export default dialogReducer