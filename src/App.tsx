import React from "react";
import "App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "utils/TypedUseSelector";
import JSONPretty from "react-json-pretty";
import Jumbotron from "react-bootstrap/Jumbotron";

import DirectInput from "components/DirectInput";
import { alterInputMethodAction } from "store/app/actions";
//@ts-ignore
let merkle = require("merkle-tree-gen");

function App() {
  const inputMethod = useSelector(state => state.app.inputMethod);
  const globalInputs = useSelector(state => state.app.inputs);
  const dispatch = useDispatch();

  const [merkleTree, setMerkleTree] = React.useState("");
  console.log(inputMethod);
  console.log(globalInputs);

  const createMerkleTree = () => {
    console.log("Creating Merkle Tree");
    let args = {
      array: globalInputs,
      hashalgo: "sha256"
    };

    console.log(args);
    merkle.fromArray(args, function(err: any, tree: any) {
      if (!err) {
        setMerkleTree(JSON.stringify(tree));
        console.log(tree);
        console.log("Root hash: " + tree.root);
        console.log("Number of leaves: " + tree.leaves);
        console.log("Number of levels: " + tree.levels);
      }
    });
  };
  return (
    <div className="App">
      <Container fluid={false}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Merkle Tree Generator</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <a className="nav-link" href="/">
                <img
                  src="https://block8.com/images/home/block8-icon.svg"
                  alt="Block"
                />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron fluid className="bg-transparent py-4 my-4">
          <Container>
            <h1>Merkle Tree Generator Online</h1>
            <p>
              <a
                href="https://en.wikipedia.org/wiki/Merkle_tree"
                target="_blank"
                rel="noopener noreferrer"
              >
                What's a merkle Tree ?
              </a>
            </p>
          </Container>
        </Jumbotron>
      </Container>

      <Container className="" style={{ padding: "0 1.3rem" }}>
        <Tabs
          defaultActiveKey="direct-input"
          id="uncontrolled-tab-example"
          onSelect={(k: string) => dispatch(alterInputMethodAction(k))}
        >
          <Tab eventKey="direct-input" title="Direct Input">
            <DirectInput />
          </Tab>
          <Tab eventKey="via-file" title="Via File">
            Upload File
          </Tab>
        </Tabs>

        <div className="py-4"></div>
        <div className="py-4">
          <Button variant="primary" onClick={() => createMerkleTree()}>
            Generate
          </Button>
        </div>

        <div>
          <JSONPretty id="json-pretty" data={merkleTree}></JSONPretty>
        </div>
      </Container>
    </div>
  );
}

export default App;
