import Axios from 'axios';
import { Platform, Alert, I18nManager, BackHandler, Linking } from 'react-native';
let getState: any = null;

const BASE_URL = __DEV__ ? "" : "";
let alert = false;

const apiRequest = function (options: any) {
  const onSuccess = (response: any) => {
    return response;
  };
  const onError = function (error: any) {
    if (error.response) {
      console.log("wrapper onError:", error.response)
    }
    else {
      console.log('wrapper (some error happened while processing the request):', error.message);
    }
    return Promise.reject(error.response || error.message);
  }

  return (dispatch: any, getState: any) => {
    return Axios({
      baseURL: BASE_URL,
      ...options,
      headers: {
        Authorization: `Bearer ${getState().Token.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        ...options.headers
      }
    }).then(onSuccess).catch(onError);
  };
};
export default apiRequest;