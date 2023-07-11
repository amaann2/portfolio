import axios from "axios";
import { projectActionType } from "./projectActionType";

export const getAllProject = () => async (dispatch) => {
  try {
    dispatch({
      type: projectActionType.ALL_PROJECT_REQUEST,
    });
    const { data } = await axios.get(
      "https://amaan.onrender.com/api/v1/project"
    );
    dispatch({
      type: projectActionType.ALL_PROJECT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: projectActionType.ALL_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};
