import { userActionType } from "./userActionType";
import axios from "axios";
axios.defaults.withCredentials = true;
export const setCurrentUser = (user) => ({
  type: userActionType.set_CURRENT_USER,
  payload: user,
});

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: userActionType.LOAD_USER_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/users/me`, {
      withCredentials: true,
    });
    dispatch({
      type: userActionType.LOAD_USER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: userActionType.LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
