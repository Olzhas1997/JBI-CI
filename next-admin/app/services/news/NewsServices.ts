import axios from 'axios';
import { IAddItem, IDelItem } from '@/interfaces/IDefaultCrud';
import { INewsDetailGet, INewsListGet } from '@/interfaces/News/INews';

axios.defaults.baseURL = process.env.API_URL;

const NewsServices = {
  async getAllItems(token: any) {
    const { data } = await axios.get<INewsListGet>('/api/v1/admin/news/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  },
  async getItemById(id: number | string, token: any) {
    const { data } = await axios.get<INewsDetailGet>(`/api/v1/admin/news/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  },
  async addItem(formData: IAddItem, token: any) {
    const { data } = await axios.post('/api/v1/admin/news/', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
  async deleteItem(formData: IDelItem, token: any) {
    const { data } = await axios.delete(`/api/v1/admin/news/${formData.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
  async updateItem(formData: any, id: number, token: any) {
    const { data } = await axios.put(`/api/v1/admin/news/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};

export default NewsServices;
