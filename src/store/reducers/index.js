import {
  SET_STATES,
  SET_COUNTIES,
  SELECT_STATE,
  LOADING_SATATES,
  LOADING_SATATES_COMPLETE,
  LOADING_DETAILS,
  LOADING_DETAILS_COMPLETE,
} from "../constants";

const initialState = {
  states: [],
  counties: [],
  selectedState: null,
  loading: false,
  loadingDetails: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATES:
      return {
        ...state,
        states: action.payload,
      };
    case SET_COUNTIES:
      return {
        ...state,
        counties: action.payload,
      };
    case SELECT_STATE:
      return {
        ...state,
        selectedState: action.payload,
      };
    case LOADING_SATATES:
      return {
        ...state,
        loading: true,
      };
    case LOADING_SATATES_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    case LOADING_DETAILS:
      return {
        ...state,
        loadingDetails: true,
      };
    case LOADING_DETAILS_COMPLETE:
      return {
        ...state,
        loadingDetails: false,
      };
    default:
      return state;
  }
};
export default Reducer;
