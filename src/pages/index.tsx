import Head from 'next/head'
import { useRef, useContext, useState } from 'react';
// import { LockClosedIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';
import Router from 'next/router';
import Image from 'next/image';

import styles from  '@styles/globals.css';
const Imagem = '/logo-sem-fundo.svg';

import { AuthContext } from '@contexts/AuthContext';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    const response = await signIn({
      email,
      password
    });
    if(response){
      alert(response.error.message)
    }
  }

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 fundo">
      
      <Head>
        <title>Home</title>
      </Head>
      
      <div className="max-w-sm w-full space-y-8 border-2 loginfor ">
        <div className=" h-50 w-auto mb-3 text-center">
          <Image
            
            src={Imagem}
            // src={'../../public/all.json'}
            alt="Workflow"
            width={400}
            height={150}
          />
       
          {/* <h5 className="mb-9 text-center text-5xl font-extrabold text-gray-900">Supply Pharma</h5> */}
        
          <h2 className="mt-0 text-center text-3xl font-bold text-gray-900">Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleSignIn)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="rounded-md shadow-sm my-5">
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none  rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                onChange={(e) => { setEmail(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
                onChange={(e) => { setPassword(e.target.value)}}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Lembrar de mim
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-400 hover:text-indigo-500">
                Esqueceu a senha?
              </a>
            </div>
          </div>

          <div className="group relative w-full flex justify-center py-2">
            <button
              type="submit"
              onClick={() => { handleSignIn() }}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5" aria-hidden="true" /> */}
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
