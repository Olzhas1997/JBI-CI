import { FC } from 'react';
import { INewsList } from '@/interfaces/News/INews';
import Layout from '@/components/Layout/Layout';
import DataContent from '@/components/DataContent/DataContent';
import BaseTable from '@/components/Table/BaseTable';
import * as React from 'react';
import BackBtn from '@/components/UI/BackBtn';

const News: FC<INewsList> = ({ news }: INewsList) => {
  const pageTitle = 'Новости';
  const URL = '/news/items';
  const SERVICE = 'NewsServices';
  const list = [
    {
      id: 1,
      title: 'id',
      code: 'id',
    },
    {
      id: 2,
      title: 'Активность',
      code: 'is_active',
      type: 'bool',
    },
    {
      id: 3,
      title: 'Заголовок',
      code: 'title',
    },
    {
      id: 4,
      title: 'Дата',
      code: 'date',
      type: 'date',
    },
    {
      id: 5,
      title: 'Категория',
      code: 'category',
    },
  ];
  return (
    <Layout>
      <DataContent>
        <div className="w-fit">
          <BackBtn />
        </div>
        <BaseTable
          title={pageTitle}
          list={list}
          items={news}
          url={URL}
          service={SERVICE}
          formType=""
        />
      </DataContent>
    </Layout>
  );
};

export default News;
