import * as React from 'react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import SvgSprite from '@/components/SvgSprite/SvgSprite';
import { ISidebarItem } from '@/interfaces/ISidebarItem';

const SidebarItem: FC<ISidebarItem> = ({ item }: ISidebarItem) => {
  const params = useRouter();
  const link = params.pathname.split('/');
  let activeClass = `/${link[1]}` === item.link ? 'bg-orange' : 'cursor-pointer transition duration-500 hover:bg-orange/80';
  activeClass += ' flex items-center p-2 text-md font-normal rounded-lg';

  return (
    <div className="group projects-item w-full hover:bg-orange duration-200 rounded-[10px]">
      <div className={activeClass}>
        <div className="flex justify-center items-center gap-4">
          <div className="fill-white stroke-white">
            <SvgSprite src={item.img} width={25} height={25} />
          </div>
          <span className="duration-200 text-white t2">{item.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
