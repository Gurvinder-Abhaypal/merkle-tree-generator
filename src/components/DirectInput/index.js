import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import _ from "lodash";

const DirectInput = () => {
  const [numberOfInputs, setNumberOfInputs] = React.useState(1);
  return (
    <Container>
      <Row>
        <Col>
          {_.times(numberOfInputs, i => (
            <div key={i}>
              <FormControl
                as="textarea"
                placeholder="Enter a Number/JSON/String"
                aria-label="With textarea"
                className="inputs"
              />
            </div>
          ))}
        </Col>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => setNumberOfInputs(numberOfInputs + 1)}
          >
            Add Another Input
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DirectInput;
