import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { alterInputAction } from "store/app/actions";

const DirectInput = () => {
  const [numberOfInputs, setNumberOfInputs] = React.useState(1);
  const [localInputs, setLocalInputs] = React.useState([""]);

  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch({ type: "ALTER_INPUT", payload: localInputs });
  // }, [dispatch, localInputs]);
  const alterInput = (inputIndex: number, newInput: string) => {
    const newList = localInputs.map((item, j) => {
      if (j === inputIndex) {
        return newInput;
      } else {
        return item;
      }
    });
    setLocalInputs(newList);
    dispatch(alterInputAction(localInputs));
  };

  const addInput = () => {
    const newInputs = [...localInputs, ""];
    setLocalInputs(newInputs);
    dispatch(alterInputAction(localInputs));
  };

  return (
    <Container fluid={false} className="py-3">
      <Row>
        <Col className="p-0">
          {_.times(numberOfInputs, i => (
            <div key={i}>
              <FormControl
                as="textarea"
                placeholder="Enter a Number/JSON/String"
                aria-label="With textarea"
                className="inputs"
                onChange={e => alterInput(i, e.currentTarget.value)}
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
