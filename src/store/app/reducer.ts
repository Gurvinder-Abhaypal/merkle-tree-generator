import { Reducer } from "redux";
import { AppActionTypes, AppActions, AppState } from "./types";
import produce from "immer";

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
      return  produce(state, draftState => {
        draftState.inputMethod = action.payload;
      });      

    case AppActions.ALTER_INPUT:
      return produce(state, draftState => {
        draftState.inputs = action.payload;
      });
      
    case AppActions.ALTER_ENCRYPTION_ALGORITHM:
      return produce(state, draftState => {
        draftState.encryptionAlgorithm = action.payload;
      });

    default:
      return state;
  }
};

export default appReducer;