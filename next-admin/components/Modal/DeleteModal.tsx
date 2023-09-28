import * as React from 'react';
import { FC, useEffect } from 'react';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Resolver, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { CurrentService } from '@/app/helpers/CurrentService';
import { getAccessToken } from '@/app/services/auth/AuthHelpers';

type ModalType = {
  openModal: boolean,
  closeModal: () => void
  id: number | undefined
  service: string
};

type Data = {
  id: number;
  token: any;
};
const resolver: Resolver<Data> = async (values) => ({
  values: values.id ? values : {},
  errors: !values.id
    ? {
      id: {
        type: 'required',
        message: 'This is required.',
      },
    }
    : {},
});
const DeleteModal: FC<ModalType> = ({
  openModal, closeModal, id, service,
}: ModalType) => {
  const router = useRouter();
  const customStyles = {
    content: {
      left: '50%',
      top: '50%',
      width: '400px',
      height: '180px',
      background: '#FFFFFF',
      border: 'none',
      borderRadius: '10px',
      transition: 'all 1s ease-out',
      transform: 'translate(-50%, -50%)',
      padding: '0',
    },
    overlay: {
      zIndex: '100',
    },
  };
  const { handleSubmit, setValue } = useForm<Data>({ resolver });
  useEffect(() => {
    // @ts-ignore
    setValue('id', id);
  }, [id, setValue]);
  const currentService = CurrentService({ serviceTitle: service });

  const onSubmit = handleSubmit(async (data) => {
    // eslint-disable-next-line no-param-reassign
    data.token = getAccessToken();
    // @ts-ignore
    const result = await currentService.deleteItem(data, getAccessToken());
    if (result) {
      router.reload();
    }
  });

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={500}
    >
      <form className="flex flex-col justify-center gap-6 p-4 h-full" onSubmit={onSubmit}>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-lg font-bold">
            Удалить элемент из списка?
          </div>
          <div className="text-sm text-black/50">
            Все данные этого элемента будут удалены.
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div onClick={closeModal} onKeyDown={closeModal} role="presentation" className="flex justify-center cursor-pointer border-[1px] bg-gray rounded-[10px] p-2 w-full hover:bg-gray/20 transition-all duration-300">Отменить</div>
          <input className="flex justify-center items-center cursor-pointer rounded-[10px] bg-red text-white p-2 w-full hover:bg-red/70 transition-all duration-300" type="submit" value="Удалить" />
        </div>
      </form>
    </Modal>
  );
};

export default DeleteModal;
