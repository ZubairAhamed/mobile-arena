import { SAVE_DETAILS, REMOVE_DETAILS } from "../constants/constants";

export const addSpecs = (data) => {
  return {
    type: SAVE_DETAILS,
    payload: data,
  };
};
export const removeSpecs = (data) => {
  return {
    type: REMOVE_DETAILS,
    payload: data,
  };
};
