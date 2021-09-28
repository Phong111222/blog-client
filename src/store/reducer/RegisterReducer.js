import UserActions from '../actions/types';

export default function RegisterReducer(state = {}, action) {
  switch (action.type) {
    case UserActions.REGISTER_SUCCESS:
      return {
        success: true,
      };
    case UserActions.REGISTER_FAILED:
      return {
        success: false,
      };
    default:
      return state;
  }
}
