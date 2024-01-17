import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

import { getSession, signInRequest } from "../controllers";
import { AuthApi } from '../services';

import { Obj, User, SignInData, SignInResponse, ResponseError } from '@typograph/types';
import { AuthContextType } from '@typograph/interfaces';

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | any>(null)
  const [dataGet, setDataGet] = useState<Obj | any>([])
  const email = ''

  const isAuthenticated = !!user;
  
  useEffect(() => {
    const { 'token': token } = parseCookies()
    console.log(user)
    if (token) {
      console.log('token')
      getSession().then(response => {
        if(response?.status === 200) {
          setUser(response?.user);
        }
        else {
          if(response?.status === 401) {
            destroyCookie(undefined, 'token')
            console.error(response)
            Router.push('/')
          }
        }
      }).catch(err => {
        console.error(err)
      })
    }
    else{
      Router.push('/')
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const { token, user }: SignInResponse | any = await signInRequest(
      {
        email,
        password,
      });
    
    if(!token) {
      return({
        error:{
          message: 'Usuário ou senha inválidos',
          statusCode: 401
        }
      })
    }
    setCookie(undefined, 'token', token, {
      maxAge: 60 * 60 * 1, // 1 hora
    })

    AuthApi.defaults.headers['Authorization'] = `Bearer ${token}`;
    
    setUser(user)

    Router.push('/maps');
  }

  async function dataSet (data: Obj) {
    setDataGet(data)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, dataSet, dataGet }}>
      {children}
    </AuthContext.Provider>
  )
}