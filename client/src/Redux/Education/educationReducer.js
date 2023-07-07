import { educationActionType } from "./educationActionType";

export const educationReducer = (state = { educations: [] }, action) => {
  switch (action.type) {
    case educationActionType.ALL_EDUCATION_REQUEST:
      return {
        loading: true,
        educations: [],
      };
    case educationActionType.ALL_EDUCATION_SUCCESS:
      return {
        loading: false,
        educations: action.payload,
      };
    case educationActionType.ALL_EDUCATION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
