import { StorageKeys } from "../../../constants/storageKeys";
import { authApi } from "../../../apis/auth";

export const login = (user: any, success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(authApi.login(user).then((response: any) => {
      dispatch({ type: StorageKeys.ACCESS_TOKEN, token: response.data.token });
      success && success(response, getState);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};