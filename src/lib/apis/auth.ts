import {request} from './index';

export const authApi = {
  login: async (data: any) => request.post('login', data),
  signUp: async (data: any) => request.post('register', data),
  userInfo: async () => request.get('me'),
};
