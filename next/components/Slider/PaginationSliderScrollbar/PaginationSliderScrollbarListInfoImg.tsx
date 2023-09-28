import React, { FC, useEffect, useState } from 'react';
import { ICompletedProjects } from '@/interfaces/ICompletedProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import PaginationSliderScrollbarItemImg from '@/components/Slider/PaginationSliderScrollbar/PaginationSliderScrollbarItemImg';

type PropTypes = {
  projects: ICompletedProjects[],
  sliderRef: React.RefObject<HTMLInputElement> | null
};
// eslint-disable-next-line max-len
const PaginationSliderScrollbarListInfoImg: FC<PropTypes> = ({ projects, sliderRef }: PropTypes) => {
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
          modules={[Navigation, Pagination, EffectCreative]}
          slidesPerView={1}
          speed={1500}
          spaceBetween={10}
          allowTouchMove={false}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -50],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          navigation={{
            // @ts-ignore
            nextEl: sliderRef.current.querySelector('.swiper-button-next'),
            // @ts-ignore
            prevEl: sliderRef.current.querySelector('.swiper-button-prev'),
          }}
          className="completed_projects__slider"
          style={{ overflow: 'hidden', width: '100%', marginLeft: 0 }}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <PaginationSliderScrollbarItemImg
                item={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : ''}
    </div>
  );
};

export default PaginationSliderScrollbarListInfoImg;
