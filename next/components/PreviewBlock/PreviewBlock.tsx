import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useResize } from '@/app/helpers/useResize';

const PreviewBlock = () => {
  const data = {
    title: 'Завершенные проекты',
    img_left: [{ desktop: '/img/completedProjects_preview_left.jpg' }],
    img_right: [{ desktop: '/img/completedProjects_preview_right.png' }],
    title_left: 'у каждого проекта',
    title_right: 'своя история',
  };

  const [imgLeft, setImgLeft] = useState('');
  const [imgRight, setImgRight] = useState('');

  useEffect(() => {
    if (data.img_left && data.img_left.length) {
      setImgLeft((data.img_left)[0].desktop);
    }
    if (data.img_right && data.img_right.length) {
      setImgRight((data.img_right)[0].desktop);
    }
  }, []);

  const { isScreenXl } = useResize();
  const { isScreenMd } = useResize();

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [isScreenXl, isScreenMd]);

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-[10px] xl:gap-[32px] relative overflow-hidden">
        <div className="col-span-12 md:col-span-4 md:h-fit">
          <p className="h10 uppercase md:text-end mb-[10px] xl:mb-[32px] text-black">{data.title}</p>
          <div className="hidden md:block aspect-[1/1.65] relative">
            <Image
              src={imgLeft}
              alt="preview"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 md:h-fit">
          <div className="w-full aspect-[4/3] relative">
            <Image
              src={imgRight}
              alt="preview"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top right' }}
            />
          </div>
          <div className="flex-flex-col justify-between pt-[10px] xl:pt-[32px] gap-2 w-full">
            <h6 className="text-black">{data.title_left}</h6>
            {isScreenMd ? (
              <h6 className="text-brown-200 text-end">{data.title_right}</h6>
            ) : (
              <h5 className="text-brown-200 text-end">{data.title_right}</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewBlock;
