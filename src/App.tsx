import React from "react";
import "App.css";
import { useSelector } from "utils/TypedUseSelector";
import JSONPretty from "react-json-pretty";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Grid,
  Tabs,
  Tab,
  Box
} from "@material-ui/core";
import FileSaver, { saveAs } from 'file-saver';
import DirectInput from "components/DirectInput";
import { alterInputMethodAction } from "store/app/actions";
import SwipeableViews from "react-swipeable-views";
import { setMerkleTreeAction } from "store/merkleTree/actions";
//@ts-ignore
let merkle = require("merkle-tree-gen");

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function App() {
  const inputMethod = useSelector(state => state.app.inputMethod);
  const globalInputs = useSelector(state => state.app.inputs);
  const merkleTree = useSelector(state => state.merkleTree.merkleTree);

  const dispatch = useDispatch();

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
        dispatch(setMerkleTreeAction(JSON.stringify(tree)));
        console.log(tree);
        console.log("Root hash: " + tree.root);
        console.log("Number of leaves: " + tree.leaves);
        console.log("Number of levels: " + tree.levels);
      }
    });
  };

  const downloadMerkleTree = () => {
    const blob = new Blob([merkleTree], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "Merkle-tree.txt");
  };

  const [value, setValue] = React.useState(0);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    },
    [value]
  );

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Toolbar>
          <Typography variant="h5">Merkle Tree Generator</Typography>
          <a className="nav-link" href="/">
            <img
              src="https://block8.com/images/home/block8-icon.svg"
              alt="Block"
            />
          </a>
        </Toolbar>
      </AppBar>

      <Grid>
        <Grid style={{ padding: "2em" }}>
          <Typography align="left" variant="h4" gutterBottom>
            Generate a merkle tree online
          </Typography>
          <Typography align="left">
            <a
              href="https://en.wikipedia.org/wiki/Merkle_tree"
              target="_blank"
              rel="noopener noreferrer"
            >
              What's a merkle Tree ?
            </a>
          </Typography>
        </Grid>

        <Grid container justify="center" style={{ padding: "2em 0em" }}>
          <Grid
            item
            sm={5}
            style={{
              border: "2px solid grey",
              borderRadius: "5px"
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Direct Input" />
              <Tab label="Upload File" />
            </Tabs>

            <SwipeableViews
              axis={"x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0}>
                <DirectInput />
              </TabPanel>
              <TabPanel value={value} index={1}>
                Upload File
              </TabPanel>
            </SwipeableViews>
          </Grid>
          <Grid item container justify="center" alignItems="center" sm={1}>
            <Button
              style={{ height: 30, margin: "0em 0.5em" }}
              color="primary"
              variant="outlined"
              onClick={() => createMerkleTree()}
            >
              Generate
            </Button>
            <Button
              disabled={merkleTree === ""}
              style={{ height: 30, margin: "0em 0.5em" }}
              color="primary"
              variant="outlined"
              onClick={() => downloadMerkleTree()}
            >
              Download
            </Button>
          </Grid>
          <Grid
            item
            sm={5}
            style={{
              border: "2px solid grey",
              borderRadius: "5px",
              maxHeight: "500px",
              overflowY: "auto"
            }}
          >
            <Typography
              variant="h5"
              align="left"
              style={{
                fontWeight: "bold",
                paddingLeft: "0.2em",
                borderBottom: "1px solid",
                borderBottomStyle: "dashed"
              }}
            >
              Generated merkle tree
              {/* <img
                src={require("./images/content_copy.png")}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 250
                }}
              ></img> */}
            </Typography>
            <JSONPretty id="json-pretty" data={merkleTree}></JSONPretty>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
