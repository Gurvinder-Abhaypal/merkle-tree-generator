import { AppActions, AppActionTypes } from "./types";

export function alterInputMethodAction(newInputMethod: string): AppActionTypes {
  return {
    type: AppActions.ALTER_INPUT_METHOD,
    payload: newInputMethod
  };
}

export function alterInputAction(newInput: string[]): AppActionTypes {
  return {
    type: AppActions.ALTER_INPUT,
    payload: newInput
  };
}

export function alterEncryptionAlgorithmAction(
  newEncryptionAlgorithm: string
): AppActionTypes {
  return {
    type: AppActions.ALTER_ENCRYPTION_ALGORITHM,
    payload: newEncryptionAlgorithm
  };
}
