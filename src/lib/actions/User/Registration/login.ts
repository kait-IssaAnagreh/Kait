// import { LOGIN_URL } from "./../../urls";
import { StorageKeys } from "../../../constants/storageKeys";
import apiRequest from "../../httpWrapper";

export const login = (user: any, success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(apiRequest({
      // url: LOGIN_URL,
      method: 'POST',
      data: user
    })).then((response: any) => {
      dispatch({ type: StorageKeys.ACCESS_TOKEN, token: response.data.token });
      success && success(response, getState);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};