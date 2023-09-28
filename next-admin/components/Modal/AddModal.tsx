import * as React from 'react';
import { FC, useMemo } from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import Form from '@/components/Forms/Form';

type ModalType = {
  openModal: boolean,
  closeModal: () => void
  url: string
  service: string
  formType?: string,
  showActive?: boolean,
};

const AddModal: FC<ModalType> = ({
  openModal, closeModal, url, service, formType, showActive,
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
  const currentForm = useMemo(() => {
    let form;
    switch (formType) {
      case 'categories':
        form = <Form url={url} service={service} showActive={showActive} closeModal={closeModal} />;
        break;
      default: form = <Form url={url} service={service} showActive={showActive} />;
    }
    return form;
  }, []);
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={500}
    >
      {currentForm}
    </Modal>
  );
};

AddModal.defaultProps = {
  formType: '',
  showActive: true,
};

export default AddModal;
