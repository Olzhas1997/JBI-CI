interface IObjectKeys {
  [key: string]: string | number | undefined | object | boolean | null;
}

export interface IBaseTableData extends IObjectKeys {
  id?: number
  title?: string
  code?: string
  description?: string,
  name?: string,
  preview_img?: object,
  date?: string,
  is_active?: boolean,
  phone?: string,
  icon?: JSON,
  job_title?: string,
  sort?: number | string,
  link?: string,
  parent_id: number | null,
  parent_title: string,
  position: number,
}
