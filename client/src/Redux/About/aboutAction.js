import { aboutActionType } from "./aboutActionType";
import axios from "axios";
export const getAllAbout = () => async (dispatch) => {
  try {
    dispatch({
      type: aboutActionType.ALL_ABOUT_REQUEST,
    });
    const res = await axios.get(`/api/v1/about`);
    
    dispatch({
      type: aboutActionType.ALL_ABOUT_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: aboutActionType.ALL_ABOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};
