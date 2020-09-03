import { StorageKeys } from "../../../constants/storageKeys";
import { ActionTypes } from "../../../constants/actionTypes";

export const logout = (success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: StorageKeys.ACCESS_TOKEN, token: "" });
    dispatch({ type: ActionTypes.AUTHED_USER, authedUser: "" });
  };
};