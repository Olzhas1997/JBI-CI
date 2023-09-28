// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken');
  return accessToken || null;
};
export const saveTokensStorage = (data: any) => {
  Cookies.set('accessToken', data, { expires: 1 / 24 });
  // Cookies.set('refreshToken', data.refreshToken)
};

export const delTokken = () => {
  Cookies.remove('accessToken');
};

export const saveToStorage = (data: any) => {
  saveTokensStorage(data);
  // localStorage.setItem('user', JSON.stringify(data.user))
};
