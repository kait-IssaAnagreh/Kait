import {authApi} from '../apis/auth';
import {StorageKeys, ActionTypes} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

export const login = (user: any) => (dispatch: any) => {
  return authApi.login(user).then(async (token: any) => {
    dispatch({type: ActionTypes.API_TOKEN, payload: token});
    AsyncStorage.setItem(StorageKeys.API_TOKEN, token);
  });
};

export const signUp = (data: any) => (dispatch: any) => {
  return authApi.signUp(data).then(async ({token}: any) => {
    dispatch({type: ActionTypes.API_TOKEN, payload: token});
    AsyncStorage.setItem(StorageKeys.API_TOKEN, token);
  });
};

export const logout = () => async (dispatch: any) => {
  await AsyncStorage.removeItem(StorageKeys.API_TOKEN);
  dispatch({type: ActionTypes.APP_LOGOUT});
};
