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

export const adminAddGame = async (game) => {
   try {
      const response: AxiosResponse = await api().post('/admin/games/add', game);
      return response.data;
   } catch {
      return false;
   }
}