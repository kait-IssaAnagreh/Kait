// import { GET_NOTIFICATIONS_URL } from "../../urls";
import apiRequest from "../../httpWrapper";

export const getNotifications = (success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(apiRequest({
      // url: GET_NOTIFICATIONS_URL,
      method: 'GET',
      params: {
        token: getState().FcmToken.token
      }
    })).then((response: any) => {
      success && success(response, getState);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};