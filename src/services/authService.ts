import type { AxiosResponse } from 'axios';
import api from './apiConfig';

interface LoginFormI {
   email: string,
   password: string,
}

export const apiLogin = async (formData: LoginFormI) => {
   try {
      const response: AxiosResponse = await api().post('/user/login', formData);
      return response.data;
   } catch {
      return false;
   }
}

interface SignupFormI {
   username: string,
   email: string,
   password: string,
   passwordConf: string,
}

export const apiSignup = async (formData: SignupFormI) => {
   try {
      const response: AxiosResponse = await api().post('/user/register', formData);
      return response.data;
   } catch {
      return false;
   }
}

export const storeToken = (token: string) => {
   localStorage.setItem('token', `Bearer ${token}`)
}