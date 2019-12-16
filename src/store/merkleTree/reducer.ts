import { Reducer } from "redux";
import { MerkleTreeActionTypes, MerkleTreeActions, MerkleTreeState } from "./types";

const initialState: MerkleTreeState = {
  merkleTree: ""
};

const merkleTreeReducer: Reducer<MerkleTreeState, MerkleTreeActionTypes> = (
  state: MerkleTreeState = initialState,
  action: MerkleTreeActionTypes
) => {
  
  switch (action.type) {
    case MerkleTreeActions.SET_MERKLE_TREE_METHOD:
      state.merkleTree = action.merkleTree;
      return state;

    default:
      return state;
  }
};

export default merkleTreeReducer;