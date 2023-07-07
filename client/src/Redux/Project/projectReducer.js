import { projectActionType } from "./projectActionType";

export const projectReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case projectActionType.ALL_PROJECT_REQUEST:
      return {
        loading: true,
        projects: [],
      };
    case projectActionType.ALL_PROJECT_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
      };
    case projectActionType.ALL_PROJECT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
