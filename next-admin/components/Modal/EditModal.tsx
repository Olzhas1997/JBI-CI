import * as React from 'react';
import { FC, ReactNode } from 'react';
// @ts-ignore
import Modal from 'react-modal';
import Form from '@/components/Forms/Form';
import CategoryForm from '@/components/Forms/CategoryForm';
import { IOption } from '@/interfaces/IOption';

type ModalType = {
  openModal: boolean,
  closeModal: () => void
  url: string
  service: string,
  item: any,
  options: IOption[],
  formType?: string,
};

const EditModal: FC<ModalType> = ({
  openModal, closeModal, url, service, item, options, formType,
}: ModalType) => {
  const customStyles = {
    content: {
      right: '0',
      left: '70%',
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
  let form: ReactNode;
  switch (formType) {
    case 'categories':
      form = (
        <CategoryForm
          url={url}
          service={service}
          closeModal={closeModal}
          options={options}
          item={item}
          // showColor={formType === 'projectsFieldsCategories'}
        />
      );
      break;
    default: form = <Form url={url} service={service} />;
  }
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={500}
    >
      {form}
    </Modal>
  );
};

EditModal.defaultProps = {
  formType: undefined,
};

export default EditModal;
