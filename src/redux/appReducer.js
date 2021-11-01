import { me } from "./authReduces";

const SET_INITIALIZE = "SET_INITIALIZE";

let initialState = {
  initialized: false
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE:
      return { ...state, initialized: true }

    default:
      return state;
  }
}

export const setInitialize = () => ({ type: SET_INITIALIZE });

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(me());

    Promise.all([promise]).then(() => { dispatch(setInitialize()) });
  }
}

export default appReducer;