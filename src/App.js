import React from "react";
import "App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";

import DirectInput from "components/DirectInput";

function App() {
  const inputMethod = useSelector(state => state.inputMethod);
  const globalInputs = useSelector(state => state.inputs);
  const dispatch = useDispatch();
  console.log(inputMethod);
  console.log(globalInputs);

  return (
    <div className="App">
      <Container fluid="false" className="p-0">
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Merkle Tree Generator</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <a className="nav-link" href="/">
                Block8 Logo Placeholder
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
          <Button variant="outline-primary">Submit</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
