// eslint-disable-next-line import/no-extraneous-dependencies
import AnimateHeight from 'react-animate-height';
import CloseButtonSquare from '@/components/UI/CloseButtonSquare';
import Link from 'next/link';
import { FC, useState } from 'react';
import { IDropDownMenuItem } from '@/components/Layout/Header/interfaces';

type PropTypes = {
  item: IDropDownMenuItem
};

const DropDownLink:FC<PropTypes> = ({ item }: PropTypes) => {
  let links;
  const [rotate, setRotate] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [height, setHeight] = useState<0 | 'auto'>(0);
  if (item.links && item.links.length) {
    // eslint-disable-next-line array-callback-return
    links = item.links.map((link) => (
      <li className="t6 font-tt xl:h12 text-black/60 transition-color duration-500 hover:text-black">
        <Link href={link.path}>
          {link.title}
        </Link>
      </li>
    ));
  }
  const toggleHeight = () => {
    if (height === 'auto') {
      setHeight(0);
    } else {
      setHeight('auto');
    }
  };
  const handleClick = () => {
    setRotate(!rotate);
    toggleHeight();
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {item.links.length
        ? (
          <div>
            <div role="none" className="flex justify-between items-center cursor-pointer group" onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <div style={{ color: rotate ? '#2D2D2D' : '' }} className="text-sm font-tt md:h14 xl:h12 3xl:h11 text-black/60 transition-color duration-500 group-hover:text-black uppercase">{item.title}</div>
              <CloseButtonSquare rotate={rotate} hover={hover} />
            </div>
            <AnimateHeight height={height}>
              <nav className="py-2 xl:py-4">
                <ul className="flex flex-col gap-3 xl:gap-5">{links}</ul>
              </nav>
            </AnimateHeight>
          </div>
        )
        : (
          <div role="none" className="flex justify-between items-center cursor-pointer group" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="text-sm font-tt md:h14 xl:h12 3xl:h11 text-black/60 transition-color duration-500 group-hover:text-black uppercase">{item.title}</div>
            <CloseButtonSquare rotate={rotate} hover={hover} />
          </div>
        )}
    </>
  );
};

export default DropDownLink;
