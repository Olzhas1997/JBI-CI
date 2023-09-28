import { FC, useState } from 'react';
import Link from 'next/link';
import SvgSprite from '@/components/UI/SvgSprite';
import AnimateHeight from 'react-animate-height';
// @ts-ignore
// eslint-disable-next-line import/extensions
import { IDropDownMenuItem } from '@/components/Layout/Footer/interfaces';

type PropTypes = {
  item: IDropDownMenuItem
};

const MobileLink:FC<PropTypes> = ({ item }: PropTypes) => {
  const [height, setHeight] = useState<0 | 'auto'>(0);
  // @ts-ignore
  const itemLinks = item.links.map((link) => (
    <li>
      <Link href={link.path} className="t3 text-black/80 py-2 transition-color duration-500 hover:text-black">{link.title}</Link>
    </li>
  ));
  const toggleHeight = () => {
    if (height === 'auto') {
      setHeight(0);
    } else {
      setHeight('auto');
    }
  };
  return (
    <div className="flex flex-col">
      <div role="none" onClick={toggleHeight} className="flex items-center gap-3">
        <div className="font-tt font-medium text-sm 3xl:text-base tracking-h13 uppercase whitespace-nowrap">{item.title}</div>
        <div className={height ? '-rotate-180 fill-none stroke-black duration-500 transition-all' : 'rotate-0 fill-none stroke-black duration-500 transition-all'}>
          <SvgSprite src="/svg/link-arrow.svg" height={8} width={18} />
        </div>
      </div>
      <AnimateHeight height={height}>
        <nav className="pt-4">
          <ul className="flex flex-col gap-3">
            {itemLinks}
          </ul>
        </nav>
      </AnimateHeight>
    </div>
  );
};

export default MobileLink;
