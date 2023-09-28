import { FC, useState } from 'react';
import ArrowLink from '@/components/UI/ArrowLink';
import ArrowLinkSmall from '@/components/UI/ArrowLink/ArrowLinkSmall';

type PropTypes = {
  text: string
  // eslint-disable-next-line react/require-default-props
  color?: string
};

const MainBlockLink:FC<PropTypes> = ({ text, color = '#2D2D2D' }: PropTypes) => {
  const [rotateArrow, setRotateArrow] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center cursor-pointer" onMouseEnter={() => setRotateArrow(true)} onMouseLeave={() => setRotateArrow(false)}>
      <div className="text-xxs w-[70%] md:w-full sm:text-base font-tt md:h14 xl:h12 3xl:h11 uppercase" dangerouslySetInnerHTML={{ __html: text }} />
      <div className="hidden md:block">
        <ArrowLink color={color} rotate={rotateArrow} />
      </div>
      <div className="block md:hidden">
        <ArrowLinkSmall color={color} rotate={rotateArrow} />
      </div>
    </div>
  );
};

export default MainBlockLink;
