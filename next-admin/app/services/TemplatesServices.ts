import axios from 'axios';
import { ITemplate, ITemplates } from '@/interfaces/Templates/ITemplates';

axios.defaults.baseURL = process.env.API_URL;
export const TemplatesServices = {
  async getItems() {
    const { data } = await axios.get<ITemplates>('/api/v1/admin/image-templates');
    return data.data;
  },
  async getItemById(id: number | string) {
    const { data } = await axios.get<{ data: ITemplate }>(`/api/v1/admin/image-templates/${id}`);
    return data.data;
  },
  async addItem(template: ITemplate) {
    const { data } = await axios.post<ITemplate>('/api/v1/admin/image-templates', template);
    return data;
  },
  async deleteItem({ id }: { id: number }) {
    const { data } = await axios.delete<ITemplate>(`/api/v1/admin/image-templates/${id}`);
    return data;
  },
  async updateItem(formData: ITemplate) {
    const { data } = await axios.put<ITemplates>(`/api/v1/admin/image-templates/${formData.id}`, formData);
    return data;
  },
};
