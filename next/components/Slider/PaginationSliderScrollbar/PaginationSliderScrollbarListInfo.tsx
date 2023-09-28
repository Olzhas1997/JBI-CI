import React, { FC, useEffect, useState } from 'react';
import { ICompletedProjects } from '@/interfaces/ICompletedProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, EffectFade,
} from 'swiper/modules';
import PaginationSliderScrollbarItemInfo from '@/components/Slider/PaginationSliderScrollbar/PaginationSliderScrollbarItemInfo';

type PropTypes = {
  projects: ICompletedProjects[],
  sliderRef: React.RefObject<HTMLInputElement> | null
};

const PaginationSliderScrollbarListInfo: FC<PropTypes> = ({ projects, sliderRef }: PropTypes) => {
  const [ref, setRef] = useState(false);
  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      setRef(true);
    }
  }, [sliderRef]);
  return (
    <div>
      {(ref) ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            // @ts-ignore
            el: sliderRef.current.querySelector('.swiper-pagination'),
            type: 'fraction',
            clickable: true,
            formatFractionCurrent(number) {
              return (`0${number}`).slice(-1);
            },
            formatFractionTotal(number) {
              return (`0${number}`).slice(-2);
            },
            renderFraction() {
              return '<div class="swiper-pagination-current"></div>'
                + '<div class="swiper-pagination-total"></div>';
            },
          }}
          slidesPerView={1}
          speed={1500}
          spaceBetween={10}
          allowTouchMove={false}
          navigation={{
            // @ts-ignore
            nextEl: sliderRef.current.querySelector('.swiper-button-next'),
            // @ts-ignore
            prevEl: sliderRef.current.querySelector('.swiper-button-prev'),
          }}
          scrollbar={{
            // @ts-ignore
            el: sliderRef.current.querySelector('.swiper-scrollbar'),
            draggable: true,
          }}
          className="completed_projects__slider"
          style={{ overflow: 'hidden', width: '100%', marginLeft: 0 }}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <PaginationSliderScrollbarItemInfo
                item={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ''
      )}
    </div>
  );
};

export default PaginationSliderScrollbarListInfo;
