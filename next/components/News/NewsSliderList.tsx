import React, { FC, useEffect, useState } from 'react';
import { INews } from '@/interfaces/INews';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsSliderItem from '@/components/News/NewsSliderItem';
import { Navigation } from 'swiper/modules';

type NewsSliderListType = {
  news: INews[],
  sliderRef: React.RefObject<HTMLInputElement> | null
};

const NewsSliderList: FC<NewsSliderListType> = ({ news, sliderRef }: NewsSliderListType) => {
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
          modules={[Navigation]}
          slidesPerView="auto"
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            736: {
              slidesPerView: 2,
            },
            1338: {
              slidesPerView: 3,
            },
            1630: {
              slidesPerView: 4,
            },
          }}
          speed={800}
          spaceBetween={10}
          navigation={{
            // @ts-ignore
            nextEl: sliderRef.current.querySelector('.swiper-button-next'),
            // @ts-ignore
            prevEl: sliderRef.current.querySelector('.swiper-button-prev'),
          }}
          className="news__slider"
          style={{ overflow: 'visible', width: '96%', marginLeft: '0' }}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsSliderItem
                item={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : ''}
    </div>

  );
};

export default NewsSliderList;
