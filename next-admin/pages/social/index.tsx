import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { ISocialListData } from '@/interfaces/Social/ISocialItemList';
import { SocialServices } from '@/app/services/SocialServices';
import Social from '@/components/Screens/Social';

const SocialPage: NextPage<ISocialListData> = ({ social }: ISocialListData) => (
  <div>
    <Social social={social} />
  </div>
);

export const getServerSideProps: GetServerSideProps<ISocialListData> = async () => {
  const social = await SocialServices.getAllItems();
  return {
    props: {
      social,
    },
  };
};

export default SocialPage;
