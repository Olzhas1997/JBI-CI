import React, { FC } from 'react';
import { ICompletedProjects } from '@/interfaces/ICompletedProjects';

type PropTypes = {
  item: ICompletedProjects,
};
const PaginationSliderScrollbarItemInfo: FC<PropTypes> = ({ item }: PropTypes) => (
  <div className="relative">
    <div className="flex flex-col justify-start items-start gap-6 xl:gap-8">
      <p className="h7 text-black xl:pt-12">{item.title}</p>
      <p className="t3 text-black">{item.description}</p>
    </div>
  </div>
);

export default PaginationSliderScrollbarItemInfo;
