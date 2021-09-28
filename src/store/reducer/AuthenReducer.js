import UserAction from '../actions/types';
import jwt_decode from 'jwt-decode';
const initialState =
  localStorage.getItem('token') || false
    ? {
        logged: true,
        msg: { ...jwt_decode(localStorage.getItem('token')) },
      }
    : {
        logged: false,
        msg: {},
      };

export default function Authentication(state = initialState, action) {
  switch (action.type) {
    case UserAction.LOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        msg: { ...action.payload },
      };
    case UserAction.LOGIN_FAILED:
      return {
        ...state,
        logged: false,
        msg: { ...action.payload },
      };
    case UserAction.LOGOUT:
      return {
        ...state,
        logged: false,
        msg: {},
      };
    default:
      return state;
  }
}
