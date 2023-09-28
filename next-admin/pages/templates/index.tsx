import React from 'react';
import { NextPage } from 'next';
import Templates from '@/components/Screens/Templates';
import { ITemplates } from '@/interfaces/Templates/ITemplates';
import { TemplatesServices } from '@/app/services/TemplatesServices';

const TemplatesPage: NextPage<ITemplates> = ({ data }: ITemplates) => (
  <div>
    <Templates data={data} />
  </div>
);

export const getServerSideProps: () => Promise<{ props: ITemplates }> = async () => {
  const data = await TemplatesServices.getItems();
  return {
    props: { data },
  };
};

export default TemplatesPage;
