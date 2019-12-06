import React from "react";
import "App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";

import DirectInput from "components/DirectInput";

function App() {
  const [currentMethod, setCurrentMethod] = React.useState("direct-input");

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

        <Tabs defaultActiveKey="direct-input" id="uncontrolled-tab-example">
          <Tab eventKey="direct-input" title="Direct Input">
            <DirectInput />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Profile Works!
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Contact Does not work!
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
