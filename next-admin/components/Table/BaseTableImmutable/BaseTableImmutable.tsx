import React, { FC } from 'react';
import BaseTableImmutableList from '@/components/Table/BaseTableImmutable/BaseTableImmutableList';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';
import { IBaseTableData } from '@/interfaces/Table/IBaseTableData';

type TypeBaseTableData = {
  title: string
  list: IBaseTableList[]
  items: IBaseTableData[]
  url: string
};

const BaseTableImmutable: FC<TypeBaseTableData> = ({
  title, list, items, url,
}: TypeBaseTableData) => (
  <div>
    <div className="mb-6">
      <h2 className="text-4xl">{title}</h2>
    </div>
    <div className="">
      <BaseTableImmutableList list={list} items={items} url={url} />
    </div>
  </div>
);

export default BaseTableImmutable;
