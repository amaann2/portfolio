import { educationActionType } from "./educationActionType";
import axios from "axios";
export const getAllEducation = () => async (dispatch) => {
  try {
    dispatch({
      type: educationActionType.ALL_EDUCATION_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/education`);

    dispatch({
      type: educationActionType.ALL_EDUCATION_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: educationActionType.ALL_EDUCATION_FAIL,
      payload: error.response.data.message,
    });
  }
};
