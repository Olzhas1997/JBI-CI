import * as React from 'react';
import { FC, useState } from 'react';
import AddModal from '@/components/Modal/AddModal';

type PropTypes = {
  title: string,
  url: string
  service: string,
  formType?: string,
  showActive?: boolean,
};

const TableHeader: FC<PropTypes> = ({
  title, url, service, formType, showActive,
}: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-4xl">{title}</h2>
      <div onClick={openModal} onKeyDown={openModal} role="none" className="border-[1px] border-black rounded-[10px] py-2 px-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-200">Добавить</div>
      <AddModal
        openModal={isOpen}
        closeModal={closeModal}
        url={url}
        service={service}
        formType={formType}
        showActive={showActive}
      />
    </div>
  );
};

TableHeader.defaultProps = {
  formType: '',
  showActive: true,
};
export default TableHeader;
