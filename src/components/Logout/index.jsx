import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/AuthenActions';

const Logout = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    history.replace('/');
  });

  return <></>;
};

export default Logout;
