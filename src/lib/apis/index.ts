import Axios, { Method } from "axios";
import _ from "lodash";
import store from "../store";

const API_BASE_URL = "";

const fetchClient = (
  url: string,
  data?: any,
  success?: any,
  failure?: any,
  type?: Method,
  headers?: any,
) => {
  const onSuccess = (response: any) => {
    return response;
  };
  const onError = function (error: any) {
    if (error.response) {
      console.log("wrapper onError:", error.response)
    } else {
      console.log('wrapper (some error happened while processing the request):', error.message);
    }
    return Promise.reject(error.response || error.message);
  }

  return Axios(`${API_BASE_URL}/${url}`, {
    method: _.isEmpty(type) ? (data ? "POST" : "GET") : type,
    data: data ? JSON.stringify(data) : null,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer `,
      "Accept-Language":
        store().getState().Language.language === "rtl" ? "ar" : "en",
      ...headers
    },
  })
    .then((res: any) => {
      onSuccess(res);
      success && success(res.data);
    })
    .catch((e: any) => {
      onError(e);
      failure && failure(e.response || e.message);
      return Promise.reject(e.response || e.message);
    });
};

export const request = {
  get: (url: string, success?: any, failure?: any, headers?: any) =>
    fetchClient(url, null, success, failure, "get", headers),
  post: (url: string, data?: any, success?: any, failure?: any, headers?: any) =>
    fetchClient(url, data, success, failure, "post", headers),
  patch: (url: string, data?: any, success?: any, failure?: any, headers?: any) =>
    fetchClient(url, data, success, failure, "patch", headers),
  put: (url: string, success?: any, failure?: any, headers?: any) =>
    fetchClient(url, null, success, failure, "put", headers),
};
