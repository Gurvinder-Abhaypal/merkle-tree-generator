import React from "react";
import "App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import JSONPretty from "react-json-pretty";
import Jumbotron from "react-bootstrap/Jumbotron";

import DirectInput from "components/DirectInput";
let merkle = require("merkle-tree-gen");

function App() {
  const inputMethod = useSelector(state => state.inputMethod);
  const globalInputs = useSelector(state => state.inputs);
  const dispatch = useDispatch();

  const [merkelTree, setMerkelTree] = React.useState("");
  console.log(inputMethod);
  console.log(globalInputs);

  const createMerkelTree = () => {
    console.log("Creating Merkel Tree");
    let args = {
      array: globalInputs,
      hashalgo: "sha256"
    };
    merkle.fromArray(args, function(err, tree) {
      if (!err) {
        setMerkelTree(JSON.stringify(tree));
        console.log(tree);
        console.log("Root hash: " + tree.root);
        console.log("Number of leaves: " + tree.leaves);
        console.log("Number of levels: " + tree.levels);
      }
    });
  };
  return (
    <div className="App">
      <Container fluid="false">
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
            <h1>Merkel Tree Generator Online</h1>
            <p>
              <a
                href="https://en.wikipedia.org/wiki/Merkle_tree"
                target="_blank"
              >
                What's a merkel Tree ?
              </a>
            </p>
          </Container>
        </Jumbotron>
      </Container>

      <Container className="" style={{ padding: "0 1.3rem" }}>
        <Tabs
          defaultActiveKey="direct-input"
          id="uncontrolled-tab-example"
          onSelect={k => dispatch({ type: "ALTER_INPUT_METHOD", payload: k })}
        >
          <Tab eventKey="direct-input" title="Direct Input">
            <DirectInput />
          </Tab>
          <Tab eventKey="via-file" title="Via File">
            Upload File
          </Tab>
        </Tabs>

        <div className="py-4">
          <Button variant="primary" onClick={() => createMerkelTree()}>
            Generate
          </Button>
        </div>

        <div>
          <JSONPretty id="json-pretty" data={merkelTree}></JSONPretty>
        </div>
      </Container>
    </div>
  );
}

export default App;
