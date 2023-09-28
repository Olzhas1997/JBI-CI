import React, { FC, useState } from 'react';
import { ISlider } from '@/interfaces/ISlider';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PictureSlide from '@/components/Slider/PictureSlide';
import ButtonSlider from '@/components/UI/Buttons/ButtonSlider';
import { useResize } from '@/app/helpers/useResize';

const Slider: FC<ISlider> = ({ title, options }: ISlider) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [textSwiper, setTextSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { isScreenXl } = useResize();

  const changeSlide = (index: number): void => {
    if (!swiper || !textSwiper) return;
    swiper.slideTo(index);
    textSwiper.slideTo(index);
  };
  return (
    <div className="common_block container w-full h-[80vh]">
      <div className="flex justify-between h-full">
        <div className="w-1/2 border-r-[1.3px] border-black h-full">
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation]}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            slidesPerView={1}
            speed={800}
            allowTouchMove={false}
            navigation={{
              nextEl: '.common_block .swiper-button-next',
              prevEl: '.common_block .swiper-button-prev',
            }}
            className="common-slider relative h-full mb-3 xl:mb-8"
          >
            {options.map((option: any) => (
              <SwiperSlide key={option.id}>
                <PictureSlide pictures={option.pictures} title={option.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-1/2 flex flex-col h-full">
          <h5 className="text-black text-end" style={{ lineHeight: 0.7 }}>{title}</h5>
          <div className="w-full mt-auto mb-12 flex justify-between items-center gap-3 pl-14">
            <div className="flex gap-16">
              {options.map((_, i) => (
                <div
                  role="none"
                  onClick={() => changeSlide(i)}
                  className={`h10 hover:opacity-100 cursor-pointer transition duration-500 ${activeIndex === i ? 'opacity-100' : 'opacity-40'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex justify-end items-center gap-2">
              <div className="swiper-button-prev">
                <ButtonSlider size={isScreenXl ? ('') : ('sm')} reverse />
              </div>
              <div className="swiper-button-next">
                <ButtonSlider size={isScreenXl ? ('') : ('sm')} />
              </div>
            </div>
          </div>
          <div className="w-full pt-10 border-t-[1.3px] border-black">
            <Swiper
              onSwiper={setTextSwiper}
              modules={[Navigation]}
              slidesPerView={1}
              speed={800}
              allowTouchMove={false}
              navigation={{
                nextEl: '.common_block .swiper-button-next',
                prevEl: '.common_block .swiper-button-prev',
              }}
              className="common-slider relative"
            >
              {options.map((option: any) => (
                <SwiperSlide key={option.id}>
                  <div className="t3 pl-14 text-black">{option.description}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
