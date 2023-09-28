interface IObjectKeys {
  [key: string]: string | number | undefined | object | boolean;
}

export interface INewsCategory extends IObjectKeys {
  id: number,
  title: string,
}

export interface INewsCategoryListGet {
  data: INewsCategory[]
}

export interface INewsCategoryList {
  newsCategories: INewsCategory[]
}
