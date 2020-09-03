// import { REIGSTER_URL } from "./../../urls";
import { StorageKeys } from "../../../constants/storageKeys";
import apiRequest from "../../httpWrapper";

export const signup = (user: any, success: any, fail: any) => { 
  return (dispatch: any, getState: any) => {
    dispatch(apiRequest({
      // url: REIGSTER_URL,
      method: 'POST',
      data: user
    })).then((response: any) => {
      dispatch({type: StorageKeys.ACCESS_TOKEN, token: response.data.success.token});
      success && success(response);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};