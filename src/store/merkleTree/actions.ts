import { MerkleTreeActionTypes, MerkleTreeActions } from "./types";

export function setMerkleTreeAction(merkleTree: string): MerkleTreeActionTypes {
  return {
    type: MerkleTreeActions.SET_MERKLE_TREE_METHOD,
    merkleTree
  };
}