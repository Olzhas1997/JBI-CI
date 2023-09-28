import React, { FC } from 'react';
import Image from 'next/image';
import ArrowLink from '@/components/UI/ArrowLink';
import ArrowLinkSmall from '@/components/UI/ArrowLink/ArrowLinkSmall';

type TypeSlide = {
  src: string,
  link?: string
};

const ProjectGallerySlide: FC<TypeSlide> = ({ src, link }: TypeSlide) => (
  <div className="flex flex-col items-end h-full">
    <div className="relative w-full h-full">
      <Image src={src} alt="Картинка проекта" style={{ objectFit: 'cover' }} fill />
    </div>
    {link && (
    <div className="flex flex-col absolute bottom-0 right-0 w-[85%] lg:w-[80%] p-4 xl:px-12 xl:py-8 text-white">
      <div className="h11 mb-3 xl:mb-5 z-10">Перейти к выбору квартир</div>
      <div className="hidden xl:block ml-[34px] w-fit cursor-pointer z-10">
        <ArrowLink rotate={false} color="white" />
      </div>
      <div className="block xl:hidden ml-[28px] w-fit cursor-pointer z-10">
        <ArrowLinkSmall rotate={false} color="white" />
      </div>
      <div className="absolute inset-0 bg-[#5D7192] mix-blend-multiply" />
    </div>
    )}
  </div>
);

export default ProjectGallerySlide;

ProjectGallerySlide.defaultProps = {
  link: undefined,
};
