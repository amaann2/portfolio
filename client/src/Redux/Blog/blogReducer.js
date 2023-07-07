import { blogActionType } from "./blogActionType";

export const blogReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case blogActionType.ALL_BLOGS_REQUEST:
      return {
        loading: true,
        blogs: [],
      };
    case blogActionType.ALL_BLOGS_SUCCESS:
      return {
        loading: false,
        blogs: action.payload,
      };
    case blogActionType.ALL_BLOGS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
