import { Reducer } from "redux";
import { AppActionTypes, AppActions, AppState } from "./types";

const initialState: AppState = {
  inputMethod: "direct-input",
  inputs: []
};

const appReducer: Reducer<AppState, AppActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AppActions.ALTER_INPUT_METHOD:
      return { ...state, inputMethod: action.payload };
    case AppActions.ALTER_INPUT:
      return { ...state, inputs: action.payload };
    case AppActions.ALTER_ENCRYPTION_ALGORITHM:
      return { ...state, encryptionAlgorithm: action.payload };
    default:
      return state;
  }
};

export default appReducer;
