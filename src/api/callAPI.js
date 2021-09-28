import axios from 'axios';
import API from './Api';
export default function (method, url, data) {
  if (method === 'PUT' || method === 'POST') {
    return axios({
      method,
      baseURL: API,
      url,
      data,
    });
  } else {
    return axios({
      method,
      baseURL: API,
      url,
    });
  }
}
