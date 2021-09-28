import UserActions from './types';
import callAPI from '../../api/callAPI';
export const fetchPosts = (page) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await callAPI('GET', `v1/post?page=${page}&page_size=8`, undefined);
    dispatch({ type: UserActions.FETCH_POST, payload: { ...data } });
  } catch (error) {}
};

export const fetchPostDetail = (id) => async (dispatch) => {
  try {
    const {
      data: { msg, data },
    } = await callAPI('GET', `v1/post/${id}`, undefined);
    dispatch({
      type: UserActions.FET_POST_DETAIL,
      payload: { ...data, msg },
    });
  } catch (error) {}
};

export const CreatePost = (data, currentPage) => async (dispatch) => {
  try {
    await callAPI('POST', 'v1/post', data);
    dispatch(fetchPosts(currentPage));
  } catch (error) {
    console.log(error.response);
  }
};

export const DeletePost = (id, currentPage) => async (dispatch) => {
  try {
    dispatch({
      type: UserActions.DELETE_POST,
      payload: {
        id,
        currentPage,
      },
    });
  } catch (error) {}
};

export const UpdatePost = (id, history, data) => async (dispatch) => {
  try {
    dispatch({
      type: UserActions.EDIT_POST,
      payload: {
        id,
        history,
        data,
      },
    });
  } catch (error) {}
};

export const ChangePassword = (data, history) => (dispatch) => {
  dispatch({ type: UserActions.CHANGE_PASSWORD, payload: { data, history } });
};
