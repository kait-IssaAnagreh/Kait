/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {request} from '../apis';
import {StorageKeys} from '../constants';
export const useApi = () => {
  useEffect(() => {
    const requestInterceptor = request.interceptors.request.use(
      async (config) => {
        let token = await AsyncStorage.getItem(StorageKeys.API_TOKEN);
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
        return config;
      },
    );
    const responseInterceptor = request.interceptors.response.use(
      (response: any) => {
        __DEV__ && console.log(response);
        return Promise.resolve(response.data);
      },
      (error) => Promise.reject(error),
    );
    return () => {
      request.interceptors.request.eject(requestInterceptor);
      request.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return null;
};
