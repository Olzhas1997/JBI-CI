import React, { FC } from 'react';
import Layout from '@/components/Layout/Layout';
import DataContent from '@/components/DataContent/DataContent';
import BackBtn from '@/components/UI/BackBtn';
import BaseTable from '@/components/Table/BaseTable';
import { ITemplates } from '@/interfaces/Templates/ITemplates';

const Templates: FC<ITemplates> = ({ data }: ITemplates) => {
  const pageTitle = 'Шаблоны изображений';
  const URL = '/templates';
  const SERVICE = 'TemplatesServices';
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
          items={data}
          formType=""
          showActive={false}
        />
      </DataContent>
    </Layout>
  );
};

export default Templates;
