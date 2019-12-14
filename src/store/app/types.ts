export enum AppActions {
  ALTER_INPUT_METHOD = "@@app/ALTER_INPUT_METHOD",
  ALTER_INPUT = "@@app/ALTER_INPUT",
  ALTER_ENCRYPTION_ALGORITHM = "@@app/ALTER_ENCRYPTION_ALGORITHM"
}

export interface AppState {
  inputMethod: string;
  inputs: string[];
  encryptionAlgorithm: string;
}

interface AlterInputMethodAction {
  type: typeof AppActions.ALTER_INPUT_METHOD;
  payload: string;
}

interface AlterInputAction {
  type: typeof AppActions.ALTER_INPUT;
  payload: string[];
}

interface AlterEncryptionAlgorithmAction {
  type: typeof AppActions.ALTER_ENCRYPTION_ALGORITHM;
  payload: string;
}

export type AppActionTypes =
  | AlterInputMethodAction
  | AlterInputAction
  | AlterEncryptionAlgorithmAction;