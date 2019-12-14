import appReducer from "./app/reducer";
import { combineReducers } from "redux";
import merkleTreeReducer from "./merkleTree/reducer";

export const rootReducer = combineReducers({
  app: appReducer,
  merkleTree: merkleTreeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
