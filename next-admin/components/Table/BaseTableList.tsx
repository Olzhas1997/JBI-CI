import React, { FC, useMemo, useState } from 'react';
import { IBaseTableList } from '@/interfaces/Table/IBaseTableList';
import { IBaseTableData } from '@/interfaces/Table/IBaseTableData';
import { TableTextField } from '@/components/Table/TableTextField';
import { TableImgField } from '@/components/Table/TableImgField';
import { useRouter } from 'next/router';
import SvgSprite from '@/components/SvgSprite/SvgSprite';
import TableBoolField from '@/components/Table/TableBoolField';
import TableDateField from '@/components/Table/TableDateField';
import DeleteModal from '@/components/Modal/DeleteModal';
import EditModal from '@/components/Modal/EditModal';
import { IOption } from '@/interfaces/IOption';
import TableLinkField from '@/components/Table/TableLinkField';
import TableColorField from '@/components/Table/TableColorField';

type PropTypes = {
  list: IBaseTableList[]
  items: IBaseTableData[]
  url: string
  service: string
  options?: IOption[]
  formType?: string,
};

const BaseTableList: FC<PropTypes> = ({
  list, items, url, service, options, formType,
}: PropTypes) => {
  const router = useRouter();
  const [isAddOpen, setAddIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);

  const currentItem = useMemo(() => {
    const item = items.find((e) => e.id === currentId);
    if (!item) return null;
    return item;
  }, [currentId]);
  const closeModal = () => {
    setAddIsOpen(false);
  };
  const closeEditModal = (): void => {
    setIsEditOpen(false);
  };
  const openModal = (id: number | undefined) => {
    // @ts-ignore
    setCurrentId(id);
    setAddIsOpen(true);
  };
  const openEditModal = (id: number): void => {
    setCurrentId(id);
    setIsEditOpen(true);
  };
  const staticChangeCell = () => (
    <div className="flex justify-center items-center py-2 border-[1px] border-white w-full mr-[-1px] bg-black text-white" />
  );
  const staticDeleteCell = () => (
    <div className="flex justify-center items-center py-2 border-[1px] border-white w-full mr-[-1px] bg-black text-white" />
  );
  const changeRoom = (id: number | undefined) => {
    if (formType !== 'categories') {
      router.push(`${url}/${id}`);
      return;
    }
    if (id) {
      openEditModal(id);
    }
  };
  const dynamicDeleteButton = (id: number | undefined) => (
    <div onClick={() => openModal(id)} onKeyDown={() => openModal(id)} role="presentation" className="flex items-center gap-2 justify-center cursor-pointer py-4 border-[1px] border-white w-full mr-[-1px] bg-black text-white hover:bg-black/50 transition-all duration-200">
      <div className="">Удалить</div>
      <div className="fill-white">
        <SvgSprite width={20} height={18} src="/img/trash.svg" />
      </div>
    </div>
  );
  const dynamicChangeButton = (id: number | undefined) => (
    <div onClick={() => changeRoom(id)} onKeyDown={() => changeRoom(id)} role="presentation" className="flex items-center gap-2 justify-center cursor-pointer py-4 border-[1px] border-white w-full mr-[-1px] bg-orange text-white hover:bg-orange/50 transition-all duration-200">
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
  headerItems.push(staticChangeCell());
  headerItems.push(staticDeleteCell());

  let itemsElements;
  if (items && items.length > 0) {
    itemsElements = items.map((n) => {
      const elements = list.map((e) => {
        if (e.type && e.type === 'img' && n[e.code as keyof IBaseTableData]) {
          return <TableImgField key={e.id} el={e} item={n} />;
        }
        if (e.type && e.type === 'bool') {
          return <TableBoolField key={e.id} el={e} item={n} />;
        }
        if (e.type && e.type === 'date') {
          return <TableDateField key={e.id} el={e} item={n} />;
        }
        if (e.type && e.type === 'link') {
          return <TableLinkField key={e.id} el={e} item={n} />;
        }
        if (e.type && e.type === 'color') {
          return <TableColorField key={e.id} el={e} item={n} />;
        }
        return <TableTextField key={e.id} el={e} item={n} />;
      });
      elements.push(dynamicChangeButton(n.id));
      elements.push(dynamicDeleteButton(n.id));
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
      <DeleteModal
        openModal={isAddOpen}
        closeModal={closeModal}
        id={currentId}
        service={service}
      />
      <EditModal
        openModal={isEditOpen}
        closeModal={closeEditModal}
        item={currentItem}
        service={service}
        formType={formType}
        url={url}
        options={options ?? []}
      />
    </>
  );
};

BaseTableList.defaultProps = {
  options: [],
  formType: undefined,
};

export default BaseTableList;
