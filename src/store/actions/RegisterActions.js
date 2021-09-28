import React from 'react';
import axios from 'axios';
import { notification } from 'antd';
import API from '../../api/Api';
import UserActions from './types';

const register = (req_values, history) => async (dispatch) => {
  try {
    const {
      data: { code, msg },
    } = await axios({
      method: 'POST',
      baseURL: API,
      url: '/v1/auth/register',
      data: { ...req_values },
    });
    notification.open({
      duration: 2,
      message: code,
      description: <strong style={{ color: '#1FA463' }}>{msg}</strong>,
      onClose: () => history.replace('/'),
    });
    dispatch({ type: UserActions.REGISTER_SUCCESS });
  } catch (error) {
    const {
      data: { msg, code },
    } = error.response;
    notification.open({
      duration: 4,
      message: <strong style={{ color: 'red' }}>{code} error</strong>,
      description: `Registered ${msg}`,
    });
    dispatch({ type: UserActions.REGISTER_FAILED });
  }
};

export default register;
