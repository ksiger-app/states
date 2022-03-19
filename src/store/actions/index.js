import {
  LOADING_SATATES,
  LOADING_SATATES_COMPLETE,
  LOADING_DETAILS,
  LOADING_DETAILS_COMPLETE,
  SELECT_STATE,
  SET_STATES,
  SET_COUNTIES,
} from "../constants";

export const loadingStates = () => ({
  type: LOADING_SATATES,
});

export const loadingStatesComplete = () => ({
  type: LOADING_SATATES_COMPLETE,
});

export const loadingDetails = () => ({
  type: LOADING_DETAILS,
});

export const loadingDetailsComplete = () => ({
  type: LOADING_DETAILS_COMPLETE,
});

export const selectState = (state) => ({
  type: SELECT_STATE,
  payload: state,
});

export const getStates = (states) => ({
  type: SET_STATES,
  payload: states,
});

export const getCounties = (counties) => ({
  type: SET_COUNTIES,
  payload: counties,
});
