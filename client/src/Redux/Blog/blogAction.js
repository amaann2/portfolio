import axios from "axios";
import { blogActionType } from "./blogActionType";

export const getAllBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: blogActionType.ALL_BLOGS_REQUEST,
    });
    const { data } = await axios.get("/api/v1/blogs");
    dispatch({
      type: blogActionType.ALL_BLOGS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: blogActionType.ALL_BLOGS_FAIL,
      payload: error.response.data.message,
    });
  }
};
