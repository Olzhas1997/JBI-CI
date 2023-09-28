import { IImage } from '@/interfaces/IImage';
import { INewsCategory } from '@/interfaces/News/INewsCategory';

interface IObjectKeys {
  [key: string]: string | number | undefined | object | boolean;
}

export interface INews extends IObjectKeys {
  id: number,
  title: string,
  category_id: number,
  is_active: boolean,
  slug: string,
  date: string,
  preview_img: IImage[],
  detail_img: IImage[],
  content: any[],
  preview_text: string,
  detail_text: string,
  type: string,
}

export interface INewsListGet {
  data: INews[]
}

export interface INewsList {
  news: INews[]
}

export interface INewsDetailGet {
  data: INews
}

export interface INewsDetail {
  news: INews,
  categories: INewsCategory[]
}
