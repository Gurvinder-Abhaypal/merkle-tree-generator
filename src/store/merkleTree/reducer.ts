import { Reducer } from "redux";
import { MerkleTreeActionTypes, MerkleTreeActions, MerkleTreeState } from "./types";
import produce from "immer";

const initialState: MerkleTreeState = {
  merkleTree: ""
};

const merkleTreeReducer: Reducer<MerkleTreeState, MerkleTreeActionTypes> = (
  state: MerkleTreeState = initialState,
  action: MerkleTreeActionTypes
) => {
  
  switch (action.type) {
    case MerkleTreeActions.SET_MERKLE_TREE_METHOD:
      return  produce(state, draftState => {
        draftState.merkleTree = action.merkleTree;
      });      

    default:
      return state;
  }
};

export default merkleTreeReducer;