import React, { FC } from 'react';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';

type TableImgFieldType = {
  el: IBaseTableList,
  item: any,
};

const TableColorField: FC<TableImgFieldType> = ({ item, el }: TableImgFieldType) => {
  const color = item[el.code];
  return (
    <div className="flex justify-center items-center w-full" key={el.id}>
      <div style={{ backgroundColor: color }} className="w-[14px] h-[14px] rounded-full" />
    </div>
  );
};

export default TableColorField;
