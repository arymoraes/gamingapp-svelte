import type { AxiosResponse } from 'axios';
import api from "../apiConfig";

export const adminGetGames = async () => {
   try {
      const response: AxiosResponse = await api().get('/admin/games');
      return response.data;
   } catch {
      return false;
   }
}