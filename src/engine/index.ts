//@ts-ignore
import * as merkle from "merkle-tree-gen";

// Set up the arguments
let args = {
  array: [12, { hello: "to" }, "string1", "string2", { key: "value" }], // required
  hashalgo: "sha256" // optional, defaults to sha256
};

// Generate the tree
const getMerkleTree = (args: any) => {
  merkle.fromArray(args, function(err: any, tree: any) {
    if (!err) {
      console.log(tree);
      console.log("Root hash: " + tree.root);
      console.log("Number of leaves: " + tree.leaves);
      console.log("Number of levels: " + tree.levels);
    }
  });
};
