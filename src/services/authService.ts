import type { AxiosResponse } from 'axios';
import api from './apiConfig';

export const apiLogin = async (formData: FormData) => {
   try {
      const response: AxiosResponse = await api().post('/user/login', formData);
      return response;
   } catch {
      return false;
   }
}