import React from 'react';
import axios from 'axios';
import API from '../../api/Api';

import UserActions from '../actions/types';
import { notification } from 'antd';

export const login = (email, password, history) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: 'POST',
      baseURL: API,
      url: '/v1/auth/login',
      data: { email, password },
    });
    const {
      data: { accessToken, refreshToken },
    } = data;
    window.localStorage.setItem(
      'token',
      JSON.stringify({ accessToken, refreshToken })
    );
    //setAuth(accessToken);
    notification.open({
      message: <strong style={{ color: '#1FA463' }}>{data.code}</strong>,
      description: data.msg,
      duration: 2,
      onClose: () => history.replace('/HomePage'),
    });
    dispatch({ type: UserActions.LOGIN_SUCCESS, payload: { ...data.data } });
  } catch (error) {
    const { data } = error.response;
    const { msg, code } = data;
    notification.open({
      message: <strong style={{ color: 'red' }}>{code} error</strong>,
      description: msg,
    });
    dispatch({ type: UserActions.LOGIN_FAILED, payload: { ...data } });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: UserActions.LOGOUT });
};
