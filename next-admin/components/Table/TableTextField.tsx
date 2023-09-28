import React, { FC } from 'react';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';

type TableTextFieldType = {
  el: IBaseTableList,
  item: any,
};
export const TableTextField: FC<TableTextFieldType> = ({ el, item }: TableTextFieldType) => {
  const result = (item[el.code]) ? String(item[el.code]) : '';
  return (
    <div className="flex w-full justify-center items-center text-center py-4">
      <div className="w-[140px] whitespace-nowrap overflow-hidden text-ellipsis">
        {result}
      </div>
    </div>
  );
};
