import { SAVE_DETAILS, REMOVE_DETAILS } from "../constants/constants";

const initialState = {
  results: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DETAILS:
      return {
        ...state,
        results: state.results.concat(action?.payload),
      };
    case REMOVE_DETAILS:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
