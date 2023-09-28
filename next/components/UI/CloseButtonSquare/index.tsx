import SvgSprite from '@/components/UI/SvgSprite';
import { FC } from 'react';

type PropTypes = {
  rotate: boolean
  hover: boolean
};

const CloseButtonSquare:FC<PropTypes> = ({ rotate, hover }: PropTypes) => (
  <div style={{ background: rotate ? '#2D2D2D' : '' }} className={`${hover ? 'flex justify-center items-center w-[25px] h-[25px] md:w-[40px] md:h-[40px] rotate-45 border-[1px] border-black bg-black fill-white transition-color duration-500' : 'flex justify-center items-center w-[25px] h-[25px] md:w-[40px] md:h-[40px] rotate-45 border-[1px] border-black bg-white transition-color duration-500'}`}>
    <div className={`${rotate ? 'rotate-45 fill-white transition-transform duration-500 scale-[0.8] md:scale-[1]' : 'rotate-0 transition-transform scale-[0.8] md:scale-[1]'}`}>
      <SvgSprite src="/svg/close.svg" width={15} height={15} />
    </div>
  </div>
);

export default CloseButtonSquare;
