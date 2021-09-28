import callAPI from '../../api/callAPI';

export default async function () {
  const { refreshToken: refresh_token } = JSON.parse(
    localStorage.getItem('token')
  );

  return await callAPI('POST', '/v1/auth/refresh-token', { refresh_token });
}
