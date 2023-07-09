import { userActionType } from "./userActionType";

const INITIAL_STATE = {
  currentUser: null,
  isAuthentication: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionType.set_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthentication: true,
      };
    case userActionType.LOAD_USER_REQUEST:
      return {
        isAuthentication: false
      };
    case userActionType.LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthentication: true,
        currentUser: action.payload,
      };

    case userActionType.LOAD_USER_FAIL:
      return {
        isAuthentication: false,
        currentUser: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
