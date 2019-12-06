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
      <Container fluid="true" className="">
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

        <div>
          <Button variant="outline-primary" onClick={() => createMerkelTree()}>
            Submit
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
