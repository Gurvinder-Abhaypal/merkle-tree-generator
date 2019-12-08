const initialState = {
  inputMethod: "direct-input",
  inputs: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALTER_INPUT_METHOD":
      return { ...state, inputMethod: action.payload };
    case "ALTER_INPUT":
      return { ...state, inputs: action.payload };
    case "ALTER_ENCRYPTION_ALGORITHM":
      return { ...state, encryptionAlgorithm: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
