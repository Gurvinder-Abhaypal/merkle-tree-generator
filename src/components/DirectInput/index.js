import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

const DirectInput = () => {
  const [numberOfInputs, setNumberOfInputs] = React.useState(1);
  const [localInputs, setLocalInputs] = React.useState([""]);

  //   const inputs = useSelector(state => state.inputs);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: "ALTER_INPUT", payload: localInputs });
  }, [dispatch, localInputs]);
  const alterInput = (inputIndex, newInput) => {
    const newList = localInputs.map((item, j) => {
      if (j === inputIndex) {
        return newInput;
      } else {
        return item;
      }
    });
    setLocalInputs(newList);
    dispatch({ type: "ALTER_INPUT", payload: localInputs });
  };

  const addInput = () => {
    const newInputs = [...localInputs, ""];
    setLocalInputs(newInputs);
    dispatch({ type: "ALTER_INPUT", payload: localInputs });
  };

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
                onChange={e => alterInput(i, e.target.value)}
              />
            </div>
          ))}
        </Col>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => {
              setNumberOfInputs(numberOfInputs + 1);
              addInput();
            }}
          >
            Add Another Input
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DirectInput;
