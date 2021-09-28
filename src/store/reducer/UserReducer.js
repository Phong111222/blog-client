import UserActions from '../actions/types';

export default function (state = { Created_Post: false }, action) {
  switch (action.type) {
    case UserActions.FETCH_POST:
      return { ...state, ListPosts: { ...action.payload } };
    case UserActions.FET_POST_DETAIL:
      return { ...state, PostDetail: { ...action.payload } };
    case UserActions.CREATE_POST:
      return state;
    case UserActions.DELETE_POST:
      return {
        ...state,
        _IDPostDeleted: action.payload.id,
      };
    case UserActions.EDIT_POST:
      return state;

    default:
      return state;
  }
}
