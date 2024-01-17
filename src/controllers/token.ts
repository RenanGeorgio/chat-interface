import { parseCookies } from "nookies";
import { AuthApi } from '../services';

export function getClientToken(ctx?: any) {
  const { 'nextauth.token': token } = parseCookies(ctx)

  // @ts-ignore
  AuthApi.interceptors.request.use(config => {
    console.log(config);

    return config;
  })

  if (token) {
    AuthApi.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return AuthApi;
}