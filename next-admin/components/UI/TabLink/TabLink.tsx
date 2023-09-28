import React, { FC } from 'react';
import Link from 'next/link';
import Button from '@/components/UI/Button';

type TypeLink = {
  link: string
  title: string
  deletable?: boolean,
  click?: any
};

const TabLink: FC<TypeLink> = ({
  link, title, deletable, click,
}: TypeLink) => {
  const onClick = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.preventDefault();
    click();
  };
  return (
    <Link href={`/${link}`}>
      <div className="w-full flex justify-between items-center t1 px-4 py-4 text-white bg-orange rounded-[10px] cursor-pointer hover:bg-opacity-30 transition duration-500">
        <div className="t2 cursor-pointer">{title}</div>
        <div className="cursor-pointer">
          {deletable && click && (
          <div role="none" onClick={onClick}>
            <Button text="Удалить" />
          </div>
          )}
        </div>
      </div>
    </Link>
  );
};

TabLink.defaultProps = {
  deletable: false,
  click: null,
};

export default TabLink;
