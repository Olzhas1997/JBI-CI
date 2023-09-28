import React, { FC } from 'react';
import { ICompletedProjects } from '@/interfaces/ICompletedProjects';
import Image from 'next/image';

type PropTypes = {
  item: ICompletedProjects,

};
const PaginationSliderScrollbarMobileItem: FC<PropTypes> = ({ item }: PropTypes) => (
  <div className="flex flex-col gap-6">
    <div className="relative w-full h-[390px] xl:h-[950px]">
      <Image src={item.img} alt="completed project" fill style={{ objectFit: 'cover' }} />
    </div>
    <div className="relative">
      <div className="flex flex-col justify-start items-start gap-6 xl:gap-8">
        <p className="h7 text-black xl:pt-12">{item.title}</p>
        <p className="t3 text-black">{item.description}</p>
      </div>
    </div>
  </div>
);

export default PaginationSliderScrollbarMobileItem;
