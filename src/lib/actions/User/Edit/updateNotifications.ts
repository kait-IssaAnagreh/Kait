// import { UPDATE_NOTIFICATION_URL } from "./../../urls";
import apiRequest from "../../httpWrapper";

export const updateNotification = (id: number, data: any, success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(apiRequest({
      // url: UPDATE_NOTIFICATION_URL(id),
      method: 'POST',
      data: {...data, token: getState().FcmToken.token}
    })).then((response: any) => {
      success && success(response, getState);
    }).catch((e: any) => {
      fail && fail(e);
    })
  };
};