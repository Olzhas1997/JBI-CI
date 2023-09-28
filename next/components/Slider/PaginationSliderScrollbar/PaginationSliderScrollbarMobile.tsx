import React, { FC, useRef } from 'react';
import ButtonSlider from '@/components/UI/Buttons/ButtonSlider';
import { IProjectsList } from '@/interfaces/IProject';

import PaginationSliderScrollbarMobileList from './PaginationSliderScrollbarMobileList';

const PaginationSliderScrollbarMobile : FC<IProjectsList> = ({ projects }: IProjectsList) => {
  const scrollbar = 'h-[1.3px] w-full bg-black bg-opacity-20';
  const scrollDrag = 'h-[1.3px] bg-[#196FA8]';
  const sliderRef = useRef(null);
  return (
    <div className="container completed_projects-slider" ref={sliderRef}>
      <div className="relative flex flex-col gap-6">
        <PaginationSliderScrollbarMobileList sliderRef={sliderRef} projects={projects} />
        <div className="flex flex-row items-center justify-between">
          <div className="h-[42px] xl:h-[166px] swiper-pagination flex justify-start items-start" />
          <div className="relative flex flex-row items-center gap-5">
            <div className="swiper-button-prev">
              <ButtonSlider size="sm" reverse />
            </div>
            <div className="swiper-button-next">
              <ButtonSlider size="sm" />
            </div>
          </div>
        </div>
        <div className={`block swiper-scrollbar ${scrollbar}`}>
          <div className={`swiper-scrollbar-drag ${scrollDrag}`} />
        </div>
      </div>
    </div>
  );
};

export default PaginationSliderScrollbarMobile;
