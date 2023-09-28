import React, { FC } from 'react';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';

type TableTextFieldType = {
  el: IBaseTableList,
  item: any,
};
const TableBoolField:FC<TableTextFieldType> = ({ el, item }: TableTextFieldType) => {
  let result = (item[el.code]) ? 'bg-blue' : 'bg-red';
  result += ' w-4 h-4';
  return (
    <div className="flex w-full justify-center items-center py-4">
      <div className={result} />
    </div>
  );
};

export default TableBoolField;
