import React, { FC } from 'react';
import { INewsCategoryList } from '@/interfaces/News/INewsCategory';
import Layout from '@/components/Layout/Layout';
import DataContent from '@/components/DataContent/DataContent';
import BackBtn from '@/components/UI/BackBtn';
import BaseTable from '@/components/Table/BaseTable';

const NewsCategories: FC<INewsCategoryList> = ({ newsCategories }) => {
  const pageTitle = 'Категории новостей';
  const URL = '/news/categories';
  const SERVICE = 'NewsCategoryServices';
  const columnsList = [
    {
      id: 1,
      title: 'id',
      code: 'id',
    },
    {
      id: 2,
      title: 'Заголовок',
      code: 'title',
    },
  ];
  return (
    <Layout>
      <DataContent>
        <div className="w-fit">
          <BackBtn />
        </div>
        <BaseTable
          url={URL}
          service={SERVICE}
          list={columnsList}
          title={pageTitle}
          items={newsCategories}
          formType="categories"
          showActive={false}
        />
      </DataContent>
    </Layout>
  );
};

export default NewsCategories;
