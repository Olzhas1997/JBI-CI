// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { ISocialItemListData } from '@/interfaces/Social/ISocialItemList';
import { ISocialDetail } from '@/interfaces/Social/ISocialDetail';
import { IAddItem, IDelItem } from '@/interfaces/IDefaultCrud';

axios.defaults.baseURL = process.env.API_URL;
export const SocialServices = {
  async getAllItems() {
    const { data } = await axios.get<ISocialItemListData>('/api/v1/admin/social-media/');
    return data.data;
  },
  async getItemById(id: number | string) {
    const { data } = await axios.get<{ data: ISocialDetail }>(`/api/v1/admin/social-media/${id}`);
    return data;
  },
  async addItem(formData: IAddItem) {
    const { data } = await axios.post('/api/v1/admin/social-media/', formData);
    return data;
  },
  async deleteItem(formData: IDelItem) {
    const { data } = await axios.delete(`/api/v1/admin/social-media/${formData.id}`);
    return data;
  },
  async updateItem(formData: any, id: number) {
    const { data } = await axios.put(`/api/v1/admin/social-media/${id}`, formData);
    return data;
  },
};
