import React, { FC } from 'react';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';
import Image from 'next/image';
import { checkEnvironmentUrl } from '@/app/helpers/checkEnvironmentUrl';

type TableImgFieldType = {
  el: IBaseTableList,
  item: any,
};
export const TableImgField: FC<TableImgFieldType> = ({ el, item }: TableImgFieldType) => (
  <div className="flex w-full justify-center items-center py-2">
    <div className="relative w-[40px] h-[40px]">
      <Image layout="fill" src={`${checkEnvironmentUrl()}/storage${item[el.code]}`} alt="Картинка" />
    </div>
  </div>
);
