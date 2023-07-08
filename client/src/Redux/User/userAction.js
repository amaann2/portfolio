import { userActionType } from "./userActionType";

export const setCurrentUser = (user) => ({
  type: userActionType.set_CURRENT_USER,
  payload: user,
});
