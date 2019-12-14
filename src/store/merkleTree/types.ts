export enum MerkleTreeActions {
  SET_MERKLE_TREE_METHOD = "SET_MERKLE_TREE_METHOD"
}

export interface MerkleTreeState {
  merkleTree: string;
}

interface SetMerkleTreeActionAction {
  type: typeof MerkleTreeActions.SET_MERKLE_TREE_METHOD;
  merkleTree: string;
}


export type MerkleTreeActionTypes =
  | SetMerkleTreeActionAction;