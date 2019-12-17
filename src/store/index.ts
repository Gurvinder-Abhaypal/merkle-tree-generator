import appReducer from "./app/reducer";
//@ts-ignore
import { combineReducers } from "redux-immer";
import merkleTreeReducer from "./merkleTree/reducer";
import produce from 'immer';

export const rootReducer = combineReducers(produce, {
  app: appReducer,
  merkleTree: merkleTreeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
