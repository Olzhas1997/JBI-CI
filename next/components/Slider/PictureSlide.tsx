import React, { FC } from 'react';
import Image from 'next/image';

type TypePictureSlide = {
  title: string,
  pictures: string[]
};

const PictureSlide: FC<TypePictureSlide> = ({ title, pictures }: TypePictureSlide) => (
  <div className="w-full flex flex-col h-full">
    <div className="t1 text-black mb-24">{title}</div>
    <div className="w-full h-full flex items-end gap-3 pr-40">
      <div className="relative w-full h-full">
        <Image src={pictures[0]} alt="Картинка слайдера" fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="relative w-full h-[70%]">
        <Image src={pictures[1]} alt="Картинка слайдера" fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  </div>
);

export default PictureSlide;
