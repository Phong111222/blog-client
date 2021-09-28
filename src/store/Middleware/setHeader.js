import setAuth from '../../api/SetAuth';
export default (store) => (next) => (action) => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token?.accessToken) setAuth(token?.accessToken);

  next(action);
};
