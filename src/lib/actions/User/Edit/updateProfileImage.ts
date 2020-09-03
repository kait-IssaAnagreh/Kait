// import { UPDATE_PROFILE_IMAGE_URL } from "./../../urls";
import apiRequest from '../../httpWrapper';

export const updateProfileImage = (profile_picture: any, success: any, fail: any) => {
  return (dispatch: any, getState: any) => {
    profile_picture && dispatch(apiRequest({
      // url: UPDATE_PROFILE_IMAGE_URL,
      method: 'POST',
      data: { profile_picture_url: profile_picture }
    })).then((response: any) => {
      success && success(response);
    }).catch((e: any) => {
      e && fail(e);
    })
  }
};