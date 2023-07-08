import { aboutActionType } from "./aboutActionType";

export const aboutReducer = (state = { about: [] }, action) => {
  switch (action.type) {
    case aboutActionType.ALL_ABOUT_REQUEST:
      return {
        loading: true,
        about: [],
      };
    case aboutActionType.ALL_ABOUT_SUCCESS:
      return {
        loading: false,
        about: action.payload,
      };
    case aboutActionType.ALL_ABOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
