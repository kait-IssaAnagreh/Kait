import { ActionTypes } from "../../constants/actionTypes";

export interface Language {
  language: any;
}
const initialState: Language = {
  language: ""
};

export default (state = initialState, action: any): Language => {
  switch (action.type) {
    case ActionTypes.LANGUAGE:
      return {
        ...state,
        language: action.language
      };
    default:
      return state;
  }
};
