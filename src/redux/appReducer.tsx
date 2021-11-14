import { me } from "./authReduces";

const SET_INITIALIZE: string = "app/SET_INITIALIZE";

export type InitialStateType = {
  initialized: boolean
};

let initialState: InitialStateType = {
  initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZE:
      return { ...state, initialized: true }

    default:
      return state;
  }
}

type SetInitializeActionType = {
  type: typeof SET_INITIALIZE
} 

export const setInitialize = (): SetInitializeActionType => ({ type: SET_INITIALIZE });

export const initializeApp = () => {
  return (dispatch: any) => {
    let promise = dispatch(me());

    Promise.all([promise]).then(() => { dispatch(setInitialize()) });
  }
}

export default appReducer;