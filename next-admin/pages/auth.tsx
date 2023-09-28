import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthServices } from '@/app/services/auth/AuthServices';
import { getAccessToken } from '@/app/services/auth/AuthHelpers';

const Auth: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>();
  const [error, setError] = useState<null | string>(null);

  const router = useRouter();

  const handleAuth = async (event:any) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Логин или пароль не введены');
      return;
    }

    try {
      setDisabled(true);
      const result = await AuthServices.getNewTokens({ email, password });
      if (result && getAccessToken()) {
        await router.push('/');
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Войти в аккаунт
            </h1>
            <form onSubmit={(e) => handleAuth(e)} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                  <input
                    type="email"
                    id="email"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange focus:border-orange block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                    placeholder="name@company.com"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </label>

              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange focus:border-orange block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:orange dark:focus:border-orange"
                    onChange={(event) => {
                      if (!event.target.value) {
                        setError('Пароль не введен');
                      } else {
                        setError(null);
                      }
                      setPassword(event.target.value);
                    }}
                  />
                </label>

              </div>
              {error && <p className="text-red">{error}</p>}
              <button
                type="submit"
                className="w-full text-white bg-slate-700 rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={disabled}
              >
                {disabled ? 'loading...' : 'Sign in' }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
