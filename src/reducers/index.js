import { combineReducers } from "redux";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_FORM_DATA":
      return { ...state, loading: true };
    case "DATA_RECEIVED":
      return { ...state, data: action.json[0], loading: false };
    case "POST_DATA":
      return { ...state, postData: action.payload, loading: false };
    default:
      return state;
  }
};

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    gender: "female",
    languages: [],
    address: "",
    state: "",
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT":
      console.log("submit", action.payload);
      return {
        ...state,
        formData: action.payload,
      };
    case "RESET":
      return {
        ...state,
        formData: initialState.formData,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: formReducer,
  post: reducer,
});

export default rootReducer;
