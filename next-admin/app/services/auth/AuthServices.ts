import axios from 'axios';
import { checkEnvironmentUrl } from '@/app/helpers/checkEnvironmentUrl';
import { getAccessToken, saveTokensStorage } from '@/app/services/auth/AuthHelpers';

type PropTypes = {
  email: string
  password: string
};

export const AuthServices = {
  async getNewTokens({ email, password }: PropTypes) {
    if (!email || !password) {
      return false;
    }
    let token = '';
    try {
      await axios.post(`${checkEnvironmentUrl()}/api/v1/auth/login`, {
        email,
        password,
        auth_type: 'password',
      })
        .then((response) => {
          token = response.data.token;
        });
    } catch (error) {
      // @ts-ignore
      console.log(error.response.status);
      throw new Error('Неавторизованный пользователь');
    }
    saveTokensStorage(token);
    return getAccessToken();
  },
};
