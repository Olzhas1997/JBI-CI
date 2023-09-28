import React from 'react';
import { useRouter } from 'next/router';
import SvgSprite from '@/components/SvgSprite/SvgSprite';

const BackBtn = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      role="presentation"
      className="mb-6 flex gap-2 items-center text-lg text-white rounded-[10px] bg-orange py-2 px-5 hover:bg-black transition duration-500 cursor-pointer"
    >
      <div className="fill-white">
        <SvgSprite src="/img/arrow.svg" width={20} height={20} />
      </div>
      <div className="">Назад</div>
    </div>
  );
};

export default BackBtn;
