// src/utils/authUtils.ts
import Cookies from 'js-cookie';

const TOKEN_COOKIE_NAME = 'token';
const REFRESH_TOKEN_COOKIE_NAME = 'refresh_token';

export const setTokenCookie = (token: string,refresh_token:string) => {
  Cookies.set(TOKEN_COOKIE_NAME, token, { expires: 7, secure: true, sameSite: 'strict' });
  Cookies.set(REFRESH_TOKEN_COOKIE_NAME, refresh_token, { expires: 7, secure: true, sameSite: 'strict' });
};
export const getToken = () => {
  return Cookies.get(TOKEN_COOKIE_NAME);
};
export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN_COOKIE_NAME);
};

export const removeTokenCookie = () => {
  Cookies.remove(TOKEN_COOKIE_NAME);
  Cookies.remove(REFRESH_TOKEN_COOKIE_NAME);
};
