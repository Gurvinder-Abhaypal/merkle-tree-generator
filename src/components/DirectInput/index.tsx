import React from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { alterInputAction } from "store/app/actions";
import { Grid, Fab, Typography, TextareaAutosize } from "@material-ui/core";

const DirectInput = () => {
  const [numberOfInputs, setNumberOfInputs] = React.useState(1);
  const [localInputs, setLocalInputs] = React.useState([""]);

  const dispatch = useDispatch();

  const alterInput = React.useCallback(
    (inputIndex: number, newInput: string) => {
      const newList = localInputs.map((item, j) => {
        if (j === inputIndex) {
          return newInput;
        } else {
          return item;
        }
      });
      setLocalInputs(newList);
      dispatch(alterInputAction(localInputs));
    },
    [localInputs, dispatch]
  );

  const addInput = React.useCallback(() => {
    const newInputs = [...localInputs, ""];
    setLocalInputs(newInputs);
    dispatch(alterInputAction(localInputs));
  }, [localInputs, dispatch]);

  return (
    <Grid container>
      <Grid item sm={9} style={{ maxHeight: "420px" }}>
        {_.times(numberOfInputs, i => (
          <div style={{ marginBottom: "0.5rem" }} key={i}>
            <TextareaAutosize
              style={{ width: "100%" }}
              rows={3}
              rowsMax={20}
              placeholder="Enter a Number/JSON/String"
              onChange={e => alterInput(i, e.currentTarget.value)}
            />
          </div>
        ))}
      </Grid>
      <Grid item style={{ padding: "0em 0.2em" }} sm={3}>
        <Grid>
          <Grid>
            <Fab
              color="primary"
              onClick={() => {
                setNumberOfInputs(numberOfInputs + 1);
                addInput();
              }}
            >
              +
            </Fab>
          </Grid>
          <Grid>
            <Typography variant="overline">Another Input</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DirectInput;
