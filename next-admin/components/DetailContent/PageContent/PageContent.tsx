import React, { FC, useEffect, useState } from 'react';
import PageContentList from '@/components/DetailContent/PageContent/PageContentList';
import PageContentModal from '@/components/DetailContent/PageContent/PageContentModal';
import Button from '@/components/UI/Button';
import Modal from 'react-modal';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form';
import { IContent } from '@/interfaces/Content/IContent';

type PageContentType = {
  initValue: string,
  template: string | undefined,
  title: string,
  onChange: UseFormSetValue<FieldValues> | any,
};

const customStyles = {
  content: {
    right: '0',
    left: '0',
    width: 'auto',
    height: '100vh',
    top: '0',
    background: '#FFFFFF',
    border: 'none',
    borderRadius: '0',
    transition: 'all 1s ease-out',
  },
  overlay: {
    zIndex: '100',
  },
};
const PageContent:FC<PageContentType> = (
  {
    initValue, template, title, onChange,
  }: PageContentType,
) => {
  // @ts-ignore
  const [content, setContent] = useState<IContent[]>(initValue);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    onChange('content', JSON.stringify(content));
  }, [content]);
  const openModal = (): void => {
    setIsOpen(true);
  };
  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="border-black border-[1px] rounded-[10px] p-5">
      <div className="flex justify-between items-center border-b-[1px] pb-4 mb-4 ">
        <div className="text-xl font-bold text-black">{title}</div>
        <div onClick={openModal} role="presentation">
          <Button text="Добавить блок" />
        </div>
      </div>
      <PageContentList items={content} setContent={setContent} />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={500}
      >
        <div>
          <div
            className="mb-8"
            onClick={closeModal}
            role="presentation"
          >
            <Button text="Закрыть" />
          </div>
          <PageContentModal
            content={content}
            template={template}
            setContent={setContent}
          />
        </div>
      </Modal>
    </div>
  );
};

export default PageContent;
