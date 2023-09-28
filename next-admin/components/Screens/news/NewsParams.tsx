import React, { FC } from 'react';
import Layout from '@/components/Layout/Layout';
import DataContent from '@/components/DataContent/DataContent';
import TabLink from '@/components/UI/TabLink/TabLink';

const pages = [
  {
    id: 0,
    title: 'Статьи',
    link: '/news/items',
  },
  {
    id: 1,
    title: 'Категории',
    link: '/news/categories',
  },
];

const NewsParams: FC = () => (
  <Layout>
    <DataContent>
      <div className="flex flex-col gap-2">
        {pages.map((e) => (
          <TabLink
            key={e.id}
            link={e.link}
            title={e.title}
          />
        ))}
      </div>
    </DataContent>
  </Layout>
);

export default NewsParams;
