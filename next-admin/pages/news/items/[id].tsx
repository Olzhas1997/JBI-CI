import React from 'react';
import { NextPage } from 'next';
import { INews, INewsDetail } from '@/interfaces/News/INews';
import NewsServices from '@/app/services/news/NewsServices';
import NewsDetail from '@/components/Screens/news/NewsDetail';
import NewsCategoryServices from '@/app/services/news/NewsCategoryServices';
import { INewsCategory } from '@/interfaces/News/INewsCategory';

const NewsDetailPage: NextPage<INewsDetail> = ({ news, categories }: INewsDetail) => (
  <NewsDetail news={news} categories={categories} />
);

type Context = {
  query: {
    id: number
  },
  req: any,
};

export const getServerSideProps: (context: Context) => Promise<
{ props: {
  news: INews,
  categories: INewsCategory[]
} }> = async (context:Context) => {
  const { req } = context;
  const news = await NewsServices.getItemById(context.query.id, req.cookies.accessToken);
  const categories = await NewsCategoryServices.getAllItems(req.cookies.accessToken);
  return {
    props: { news, categories },
  };
};

export default NewsDetailPage;
