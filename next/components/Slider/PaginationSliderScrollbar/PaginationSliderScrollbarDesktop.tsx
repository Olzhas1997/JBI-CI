import React, { FC, useRef } from 'react';
import PaginationSliderScrollbarListInfoImg from '@/components/Slider/PaginationSliderScrollbar/PaginationSliderScrollbarListInfoImg';
import PaginationSliderScrollbarListInfo from '@/components/Slider/PaginationSliderScrollbar/PaginationSliderScrollbarListInfo';
import ButtonSlider from '@/components/UI/Buttons/ButtonSlider';
import { IProjectsList } from '@/interfaces/IProject';

const PaginationSliderScrollbarDesktop : FC<IProjectsList> = ({ projects }: IProjectsList) => {
  const scrollbar = 'h-[1.3px] w-full bg-black bg-opacity-20';
  const scrollDrag = 'h-[1.3px] bg-[#196FA8]';
  const sliderRef = useRef(null);
  return (
    <div className="container completed_projects-slider" ref={sliderRef}>
      <div className="relative grid grid-cols-12 ">
        <div className="col-span-6">
          <PaginationSliderScrollbarListInfoImg sliderRef={sliderRef} projects={projects} />
        </div>
        <div className="col-span-1" />
        <div className="col-span-5 relative">
          <div className="mb-12 h-[166px] swiper-pagination flex justify-start items-start" />
          <div className={`block swiper-scrollbar ${scrollbar}`}>
            <div className={`swiper-scrollbar-drag ${scrollDrag}`} />
          </div>
          <PaginationSliderScrollbarListInfo sliderRef={sliderRef} projects={projects} />
          <div role="presentation" className="absolute bottom-0 z-10 flex flex-row gap-5">
            <div className="swiper-button-prev">
              <ButtonSlider reverse />
            </div>
            <div className="swiper-button-next">
              <ButtonSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationSliderScrollbarDesktop;
