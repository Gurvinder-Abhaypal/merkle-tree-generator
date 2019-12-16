import { Reducer } from "redux";
import { AppActionTypes, AppActions, AppState } from "./types";

const initialState: AppState = {
  inputMethod: "direct-input",
  inputs: [],
  encryptionAlgorithm: ""
};

const appReducer: Reducer<AppState, AppActionTypes> = (
  state: AppState = initialState,
  action: AppActionTypes
) => {
  switch (action.type) {
    case AppActions.ALTER_INPUT_METHOD:
        state.inputMethod = action.payload;
        return state;

    case AppActions.ALTER_INPUT:
        state.inputs = action.payload;
        return state;
      
    case AppActions.ALTER_ENCRYPTION_ALGORITHM:
        state.encryptionAlgorithm = action.payload;
        return state;

    default:
      return state;
  }
};

export default appReducer;