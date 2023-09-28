import React from 'react';
import { NextPage } from 'next';
import { ISocialDetail, ISocialDetailData } from '@/interfaces/Social/ISocialDetail';
import { SocialServices } from '@/app/services/SocialServices';
import SocialDetail from '@/components/Screens/SocialDetail';

const SocialDetailPage: NextPage<ISocialDetailData> = ({ socialDetail }: ISocialDetailData) => (
  <SocialDetail socialDetail={socialDetail} />
);

export default SocialDetailPage;

type Context = {
  query: {
    id: number
  },
};

export const getServerSideProps: (context: Context) => Promise<
{ props: {
  socialDetail: ISocialDetail
} }> = async (context:Context) => {
  const result = await SocialServices.getItemById(context.query.id);
  const socialDetail = result.data;
  return {
    props: { socialDetail },
  };
};
