import React, { FC } from 'react';
import TableHeader from '@/components/Table/TableHeader';
import BaseTableList from '@/components/Table/BaseTableList';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';

type TypeBaseTableData = {
  title: string
  list: IBaseTableList[]
  items: any[]
  url: string
  service: string,
  formType: string,
  showActive?: boolean,
};

const BaseTable: FC<TypeBaseTableData> = ({
  title, list, items, url, service, formType, showActive,
}: TypeBaseTableData) => (
  <div>
    <div className="mb-6">
      <TableHeader
        title={title}
        url={url}
        service={service}
        formType={formType}
        showActive={showActive}
      />
    </div>
    <div className="">
      <BaseTableList
        list={list}
        items={items}
        url={url}
        service={service}
        formType={formType}
      />
    </div>
  </div>
);

BaseTable.defaultProps = {
  showActive: true,
};

export default BaseTable;
