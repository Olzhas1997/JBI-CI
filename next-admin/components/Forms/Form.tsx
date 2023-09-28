import React, { FC, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { CurrentService } from '@/app/helpers/CurrentService';
import { useRouter } from 'next/router';
import { getAccessToken } from '@/app/services/auth/AuthHelpers';

type Data = {
  title: string,
  is_active: boolean
};

type FormType = {
  url: string
  service: string
  showActive?: boolean,
  closeModal?: () => void,
};

const resolver: Resolver<Data> = async (values) => ({
  values: values.title ? values : {},
  errors: !values.title
    ? {
      title: {
        type: 'required',
        message: 'Это поле обязательно для заполнения',
      },
    }
    : {},
});

const Form: FC<FormType> = ({
  url, service, showActive, closeModal,
}: FormType) => {
  const router = useRouter();
  const [checked, setChecked] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm<Data>({ resolver });
  const currentService = CurrentService({ serviceTitle: service });
  const onSubmit = handleSubmit(async (data) => {
    // @ts-ignore
    const result = await currentService.addItem(data, getAccessToken());
    if (!result) return;
    if (!closeModal) {
      await router.push(`${url}/${result.data.id}`);
    } else {
      await router.reload();
    }
  });
  return (
    <form className="form py-8" onSubmit={onSubmit}>
      <div className="w-full flex flex-col gap-4 items-center justify-center mb-6">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="w-full">
          <div className="text-xl mb-4 text-black">Заголовок элемента*</div>
          <input className={errors.title ? 'input-error-class' : 'input-class'} {...register('title', { required: true })} type="text" />
          {errors?.title && <p className="text-red">{errors.title.message}</p>}
        </label>
        {showActive && (
        <div className="flex justify-between w-full items-center">
          <div className="">Активность</div>
          <input
            onClick={() => setChecked(!checked)}
            className="switcher-class"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={checked}
            {...register('is_active', { required: true })}
          />
        </div>
        )}
      </div>
      <div className="flex justify-center">
        <input className="btn-black" type="submit" value="Добавить" />
      </div>
    </form>
  );
};

Form.defaultProps = {
  showActive: true,
  closeModal: undefined,
};

export default Form;
