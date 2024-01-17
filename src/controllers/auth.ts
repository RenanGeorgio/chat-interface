import { v4 as uuid } from 'uuid'
import { AuthApi } from '../services';

type SignInRequestData = {
  email: string;
  password: string;
}


export async function signInRequest(data: SignInRequestData) {
  try {
    const response = await AuthApi('/login-pharma', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    });

    if (response.status === 200) {
      const { user, token } = response.data;
      return {
        token: token,
        user: user
      }
    }
  } catch (error) {
    console.error(error);
    return {
      error: 'An error occurred while signing in'
    }
  }
}

export async function getSession() {
  try {
    const response = await AuthApi('/pharma/session', {
      method: 'GET',
    });

    if(response.status === 200){
      const { user } = response.data
      return {
        user: user,
        status: 200
      }
    }

  } catch (error) {
    return {
      status: 401,
      error: 'Invalid session token'
    }

  }
 
}