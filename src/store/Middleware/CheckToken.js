import callAPI from '../../api/callAPI';
import { fetchPosts } from '../actions/UserActions';
import FetchRefreshToken from '../utils/FetchRefreshToken';
import SetAuth from '../../api/SetAuth';
const CheckToken = ({ dispatch }) => (next) => async (action) => {
  if (
    action.type === 'DELETE_POST' ||
    action.type === 'EDIT_POST' ||
    action.type === 'CHANGE_PASSWORD'
  ) {
    try {
      if (action.type === 'DELETE_POST') {
        await callAPI('DELETE', `v1/post/delete/${action.payload.id}`, null);

        dispatch(fetchPosts(action.payload?.currentPage));
      } else if (action.type === 'EDIT_POST') {
        await callAPI(
          'PUT',
          `v1/post/update/${action.payload.id}`,
          action.payload.data
        );
        action.payload.history.replace('/HomePage/post?page=1');
      } else if (action.type === 'CHANGE_PASSWORD') {
        await callAPI('PUT', 'v1/auth/change-password', action.payload.data);
        action.payload.history.replace('/ChangePasswordSuccess');
      }
    } catch (error) {
      const { code } = error.response.data;
      if (code === 400) {
        window.location.replace('/LogOut');
      } else if (code === 401) {
        try {
          const {
            data: {
              data: { accessToken, refreshToken },
            },
          } = await FetchRefreshToken();
          localStorage.setItem(
            'token',
            JSON.stringify({ accessToken, refreshToken })
          );

          SetAuth(accessToken);
          dispatch({ type: action.type, payload: action.payload });
        } catch (error) {
          window.location.replace('/LogOut');
        }
      }
    }
  }
  return next(action);
};

export default CheckToken;
