// import { FCM_TOKEN_URL } from "./../../urls";
import { StorageKeys } from "../../../constants/storageKeys";
import apiRequest from "../../httpWrapper";

export const fcm_token = (token: any, success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(apiRequest({
      // url: FCM_TOKEN_URL,
      method: 'POST',
      data: { "token": token }
    })).then((response: any) => {
      dispatch({ type: StorageKeys.FCM_TOKEN, token: token });
      success && success(response);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};