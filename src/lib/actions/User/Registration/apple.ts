// import { SOCIAL_LOGIN_URL } from "../../urls";
import { StorageKeys } from "../../../constants/storageKeys";
import apiRequest from "../../httpWrapper";

export const apple = (name: String, token: any, success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(apiRequest({
      // url: SOCIAL_LOGIN_URL,
      method: 'POST',
      data: { "driver": "apple", "social_access_token": token, name }
    })).then((response: any) => {
      dispatch({ type: StorageKeys.ACCESS_TOKEN, token: response.data.token });
      success && success(response, getState);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};