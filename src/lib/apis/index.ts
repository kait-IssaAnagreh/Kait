import Axios, { Method } from "axios";
import _ from "lodash";

const API_BASE_URL = "";

const onError = function (error: any) {
  if (error.response) {
    console.log("api request error:", error.response)
  } else {
    console.log('api request (some error happened while processing the request):', error.message);
  }
}

const fetchClient = async (
  url: string,
  data?: any,
  type?: Method,
  headers?: any,
) => {
  return Axios(`${API_BASE_URL}/${url}`, {
    method: _.isEmpty(type) ? (data ? "POST" : "GET") : type,
    data: data ? JSON.stringify(data) : null,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer `,
      ...headers
    },
  })
};

export const request = {
  get: async (url: string, headers?: any) => {
    try {
      return await fetchClient(url, null, "get", headers)
    } catch (e) {
      onError(e);
      throw e
    }
  },
  post: async (url: string, data?: any, headers?: any) => {
    try {
      return await fetchClient(url, data, "post", headers)
    } catch (e) {
      onError(e);
      throw e
    }
  },
  patch: async (url: string, data?: any, headers?: any) => {
    try {
      return await fetchClient(url, data, "patch", headers)
    } catch (e) {
      onError(e);
      throw e
    }
  },
  put: async (url: string, headers?: any) => {
    try {
      return await fetchClient(url, null, "put", headers)
    } catch (e) {
      onError(e);
      throw e
    }
  },
};
