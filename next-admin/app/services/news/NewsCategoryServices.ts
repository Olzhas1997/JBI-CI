import { INewsCategory, INewsCategoryListGet } from '@/interfaces/News/INewsCategory';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

const NewsCategoryServices = {
  async getAllItems(token: any) {
    const { data } = await axios.get<INewsCategoryListGet>('/api/v1/admin/news-categories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  },
  async addItem(category: INewsCategory, token: any) {
    const { data } = await axios.post<INewsCategory>('/api/v1/admin/news-categories', category, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
  async deleteItem({ id, token }: { id: number, token: any }) {
    const { data } = await axios.delete<INewsCategory>(`/api/v1/admin/news-categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
  async updateItem(formData: INewsCategory, id: number, token: any) {
    const { data } = await axios.put<INewsCategory>(`/api/v1/admin/news-categories/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};

export default NewsCategoryServices;
