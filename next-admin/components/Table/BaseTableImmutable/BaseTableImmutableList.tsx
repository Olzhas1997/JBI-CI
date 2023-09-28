import React, { FC } from 'react';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';
import { IBaseTableData } from '@/interfaces/Table/IBaseTableData';
import { TableTextField } from '@/components/Table/TableTextField';
import { TableImgField } from '@/components/Table/TableImgField';
import { useRouter } from 'next/router';
import SvgSprite from '@/components/SvgSprite/SvgSprite';
import TableBoolField from '@/components/Table/TableBoolField';
import TableDateField from '@/components/Table/TableDateField';

type PropTypes = {
  list: IBaseTableList[]
  items: IBaseTableData[]
  url: string
};

const BaseTableImmutableList: FC<PropTypes> = ({
  list, items, url,
}: PropTypes) => {
  const router = useRouter();
  const staticDeleteCell = () => (
    <div className="flex justify-center items-center py-2 border-[1px] border-white w-full mr-[-1px] bg-black text-white" />
  );
  const changeRoom = (id: number | undefined) => {
    router.push(`${url}/${id}`);
  };
  const dynamicChangeButton = (id: number | undefined) => (
    <div onClick={() => changeRoom(id)} onKeyDown={() => changeRoom(id)} role="presentation" className="flex items-center gap-2 justify-center cursor-pointer py-4 border-[1px] border-white w-full mr-[-1px] bg-blue text-white hover:bg-blue/50 transition-all duration-200">
      <div className="">Изменить</div>
      <div className="fill-white">
        <SvgSprite width={20} height={18} src="/img/change.svg" />
      </div>
    </div>
  );

  const headerItems = list.map((item) => (
    <div key={item.id} className="flex justify-center items-center py-2 border-[1px] border-white w-full mr-[-1px] bg-black text-white">
      {item.title}
    </div>
  ));
  headerItems.push(staticDeleteCell());

  let itemsElements;
  if (items && items.length > 0) {
    itemsElements = items.map((n) => {
      const elements = list.map((e) => {
        if (e.type && e.type === 'img' && n[e.code]) {
          return <TableImgField key={e.id} el={e} item={n} />;
        }
        if (e.type && e.type === 'bool') {
          return <TableBoolField key={e.id} el={e} item={n} />;
        }
        if (e.type && e.type === 'date') {
          return <TableDateField key={e.id} el={e} item={n} />;
        }
        return <TableTextField key={e.id} el={e} item={n} />;
      });
      elements.push(dynamicChangeButton(n.id));
      return (
        <div className="flex justify-between items-center border-b-[1px]" key={n.id}>
          {elements}
        </div>
      );
    });
  } else {
    return (
      <div>
        Элементов нет
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between">
        {headerItems}
      </div>
      <div className="flex flex-col">
        {itemsElements}
      </div>
    </>
  );
};

export default BaseTableImmutableList;
