import { StorageKeys } from "../../../constants/storageKeys";
import { authApi } from "../../../apis/auth";

export const signup = (user: any, success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(authApi.signup(user).then((response: any) => {
      dispatch({ type: StorageKeys.ACCESS_TOKEN, token: response.data.success.token });
      success && success(response);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};