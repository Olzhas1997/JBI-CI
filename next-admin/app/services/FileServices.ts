import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

const FileServices = {
  async uploadFile(file: File, template?: number, zoom?: number, x?: number, y?:number) {
    const files = new FormData();
    files.append('files[]', file);
    if (template) {
      files.append('zoom', String(zoom));
      files.append('template', String(template));
      const position = {
        x: String(x),
        y: String(y),
      };
      files.append('position', JSON.stringify(position));
      const { data } = await axios.post('/api/v1/admin/file', files, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    }
    const { data } = await axios.post('/api/v1/admin/file', files, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },
  async uploadFileList(files: FileList) {
    const filesBody = new FormData();
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < files.length; i++) {
      filesBody.append(`files[${i}]`, files[i]);
    }
    const { data } = await axios.post('/api/v1/admin/file', filesBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },
};

export default FileServices;
