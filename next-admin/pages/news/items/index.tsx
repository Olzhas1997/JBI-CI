import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import NewsServices from '@/app/services/news/NewsServices';
import { INewsList } from '@/interfaces/News/INews';
import News from '@/components/Screens/news/News';

const NewsPage: NextPage<INewsList> = ({ news }: INewsList) => (
  <News news={news} />
);

export const getServerSideProps: GetServerSideProps<INewsList> = async (context) => {
  const { req } = context;
  const news = await NewsServices.getAllItems(req.cookies.accessToken);
  return {
    props: {
      news,
    },
  };
};

export default NewsPage;
