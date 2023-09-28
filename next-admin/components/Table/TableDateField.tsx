import React, { FC } from 'react';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';
import { DateFormat } from '@/app/helpers/DateFormat';

type TableTextFieldType = {
  el: IBaseTableList,
  item: any,
};
const TableDateField: FC<TableTextFieldType> = ({ el, item }: TableTextFieldType) => {
  // @ts-ignore
  const result = (item[el.code]) ? DateFormat(new Date(item[el.code])) : '';
  return (
    <div className="flex w-full justify-center items-center py-4">
      <div>
        {result}
      </div>
    </div>
  );
};

export default TableDateField;
