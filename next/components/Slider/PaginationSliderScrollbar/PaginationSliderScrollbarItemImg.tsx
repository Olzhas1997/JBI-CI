import React, { FC } from 'react';
import { ICompletedProjects } from '@/interfaces/ICompletedProjects';
import Image from 'next/image';

type PropTypes = {
  item: ICompletedProjects,

};
const PaginationSliderScrollbarItemImg: FC<PropTypes> = ({ item }: PropTypes) => (
  <div className="relative w-full h-[390px] xl:h-[80vh]">
    <Image src={item.img} alt="completed project" fill style={{ objectFit: 'cover' }} />
  </div>

);

export default PaginationSliderScrollbarItemImg;
