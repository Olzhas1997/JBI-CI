import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { INewsCategoryList } from '@/interfaces/News/INewsCategory';
import NewsCategoryServices from '@/app/services/news/NewsCategoryServices';
import NewsCategories from '@/components/Screens/news/NewsCategories';

const NewsCategoriesPage: NextPage<INewsCategoryList> = ({ newsCategories }:INewsCategoryList) => (
  <NewsCategories newsCategories={newsCategories} />
);
export const getServerSideProps: GetServerSideProps<INewsCategoryList> = async (context) => {
  const { req } = context;
  const newsCategories = await NewsCategoryServices.getAllItems(req.cookies.accessToken);
  return {
    props: {
      newsCategories,
    },
  };
};

export default NewsCategoriesPage;
