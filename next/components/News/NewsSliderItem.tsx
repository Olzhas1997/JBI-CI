import React, { FC } from 'react';
import { INews } from '@/interfaces/INews';
import Image from 'next/image';

type PropTypes = {
  item: INews
};
const NewsSliderItem: FC<PropTypes> = ({ item }: PropTypes) => (
  <div>
    {item.type === 'filled' ? (
      <div className="w-full sm:w-[335px] h-[454px] xl:w-[400px] xl:h-[578px] bg-white-200 news-item cursor-pointer">
        <div className="h-[45%] w-full relative" />
        <div className="z-10 p-8 w-full h-[55%] flex flex-col items-start justify-between relative">
          <p className="h13 text-white">{item.title}</p>
          <p className="t7 text-white">{item.date}</p>
        </div>
        <div className="h-full w-full">
          <Image src={item.img} alt="news" fill style={{ objectFit: 'fill' }} />
        </div>
      </div>
    ) : (
      <div className="w-full sm:w-[335px] h-[454px] xl:w-[400px] xl:h-[578px] flex flex-col bg-white-200 news-item cursor-pointer">
        <div className="h-[45%] w-full relative">
          <Image src={item.img} alt="news" fill style={{ objectFit: 'fill' }} />
        </div>
        <div className="z-10 h-[55%] p-8 flex flex-col items-start justify-between relative">
          <p className="h13 news-item__text">{item.title}</p>
          <p className="t7 news-item__text">{item.date}</p>
        </div>
      </div>
    )}
  </div>
);

export default NewsSliderItem;
