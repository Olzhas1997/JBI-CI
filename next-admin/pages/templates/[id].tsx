import React from 'react';
import { NextPage } from 'next';
import TemplatesDetail from '@/components/Screens/TemplatesDetail';
import { ITemplateDetail } from '@/interfaces/Templates/ITemplates';
import { TemplatesServices } from '@/app/services/TemplatesServices';

const TemplateDetailPage: NextPage<ITemplateDetail> = ({ data }: ITemplateDetail) => (
  <TemplatesDetail data={data} />
);

type Context = {
  query: {
    id: number
  },
};

export const getServerSideProps: (context: Context) =>
Promise<{ props: ITemplateDetail }> = async (context:Context) => {
  const data = await TemplatesServices.getItemById(context.query.id);
  return {
    props: { data },
  };
};

export default TemplateDetailPage;
