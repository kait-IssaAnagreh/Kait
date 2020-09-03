import { ActionTypes } from "../../constants/actionTypes";

export const changeLanguage = (language: string) => {
  return async (dispatch: any, getState: any) => {
    return dispatch({ type: ActionTypes.LANGUAGE, language })
  };
};
