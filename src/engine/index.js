let merkle = require("merkle-tree-gen");

// Set up the arguments
let args = {
  array: [12, { hello: "to" }, "string1", "string2", { key: "value" }], // required
  hashalgo: "sha256" // optional, defaults to sha256
};

// Generate the tree
const getMerkelTree = args => {
  merkle.fromArray(args, function(err, tree) {
    if (!err) {
      console.log(tree);
      console.log("Root hash: " + tree.root);
      console.log("Number of leaves: " + tree.leaves);
      console.log("Number of levels: " + tree.levels);
    }
  });
};
