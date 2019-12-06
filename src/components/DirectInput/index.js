import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const DirectInput = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <FormControl
              as="textarea"
              placeholder="Enter a Number/JSON/String"
              aria-label="With textarea"
            />
          </div>
        </Col>
        <Col>
          <Button variant="outline-primary">Add Another Input</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DirectInput;
