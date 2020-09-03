// import { SOCIAL_LOGIN_URL } from "./../../urls";
import { StorageKeys } from "../../../constants/storageKeys";
import apiRequest from "../../httpWrapper";

export const facebook = (token: any, success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(apiRequest({
      // url: SOCIAL_LOGIN_URL,
      method: 'POST',
      data: { "driver": "facebook", "social_access_token": token }
    })).then((response: any) => {
      dispatch({ type: StorageKeys.ACCESS_TOKEN, token: response.data.token });
      success && success(response, getState);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};