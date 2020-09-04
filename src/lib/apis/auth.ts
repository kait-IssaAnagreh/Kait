import { request } from "./index";

export const authApi = {
  login: async (data: any) => {
    try {
      return await request.post("login", data)
    } catch (e) {
      throw e
    }
  },
  signup: async (data: any) => {
    try {
      return await request.post("register", data)
    } catch (e) {
      throw e
    }
  },
  userInfo: async () => {
    try {
      return await request.get("me")
    } catch (e) {
      throw e
    }
  },
};