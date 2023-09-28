import * as React from 'react';
import { FC } from 'react';
import { ISocialListData } from '@/interfaces/Social/ISocialItemList';
import Layout from '@/components/Layout/Layout';
import DataContent from '@/components/DataContent/DataContent';
import BaseTable from '@/components/Table/BaseTable';

const Social: FC<ISocialListData> = ({ social }) => {
  const pageTitle = 'Социальные сети';
  const URL = '/social';
  const SERVICE = 'SocialServices';
  const list = [
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
  ];
  return (
    <Layout>
      <DataContent>
        <BaseTable
          title={pageTitle}
          list={list}
          items={social}
          url={URL}
          service={SERVICE}
          formType=""
        />
      </DataContent>
    </Layout>
  );
};

export default Social;
