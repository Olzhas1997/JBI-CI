import * as React from 'react';
import Link from 'next/link';
import { FC } from 'react';
import SvgSprite from '@/components/SvgSprite/SvgSprite';
import SidebarItem from './SidebarItem';

const Sidebar: FC = () => {
  const pages = [
    {
      id: 1,
      name: 'Новости',
      link: '/news',
      img: '/sidebar/magazine.svg',
    },
    {
      id: 7,
      name: 'Соцсети',
      link: '/social',
      img: '/sidebar/contacts.svg',
    },
    {
      id: 2,
      name: 'Шаблоны изображений',
      link: '/templates',
      img: '/sidebar/template.svg',
    },
  ];
  const elements = pages.map((item) => (
    <Link href={item.link} key={item.id} legacyBehavior>
      <a href={item.link}>
        <SidebarItem item={item} />
      </a>
    </Link>
  ));

  return (
    <div className="px-3 py-4 bg-black h-full flex flex-col gap-4">
      <div className="fill-white mt-4 mb-4">
        <SvgSprite width={121} height={56} src="/svg/logo.svg" />
      </div>
      {elements}
    </div>
  );
};

export default Sidebar;
