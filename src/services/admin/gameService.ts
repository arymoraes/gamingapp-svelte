import type { AxiosResponse } from 'axios';
import type { CategoryRawI } from '../../interfaces/Category';
import type { GameRawI } from '../../interfaces/Game';
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

export const adminGetCategories = async () => {
   try {
      const response: AxiosResponse = await api().get('/admin/categories');
      return response.data;
   } catch {
      return false;
   }
}

export const adminAddCategory = async (game: CategoryRawI) => {
   try {
      const response: AxiosResponse = await api().post('/admin/categories/add', game);
      return response.data;
   } catch {
      return false;
   }
}

export const adminGetStyles = async () => {
   try {
      const response: AxiosResponse = await api().get('/admin/styles');
      return response.data;
   } catch {
      return false;
   }
}

export const adminAddStyle = async (style) => {
   try {
      const response: AxiosResponse = await api().post('/admin/styles/add', style);
      return response.data;
   } catch {
      return false;
   }
}