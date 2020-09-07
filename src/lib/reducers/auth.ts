import {ActionTypes} from '../constants';

const INIT_STATE = {
  apiToken: null,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.API_TOKEN:
      return {...state, apiToken: action.payload};
    case ActionTypes.APP_LOGOUT:
      return {...state, apiToken: null, customer: null};
    default:
      return state;
  }
};
