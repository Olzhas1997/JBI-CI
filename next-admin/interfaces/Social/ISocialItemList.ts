interface IObjectKeys {
  [key: string]: string | number | undefined | object | boolean;
}
export interface ISocialItemListData {
  data: ISocialItem[]
}
export interface ISocialItem extends IObjectKeys {
  id: number,
  title: string,
  link?: string,
  is_active: boolean,
  icon: string,
}
export interface ISocialListData {
  social: ISocialItem[]
}
