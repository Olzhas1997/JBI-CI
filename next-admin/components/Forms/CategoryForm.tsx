import React, { FC } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { CurrentService } from '@/app/helpers/CurrentService';
import { useRouter } from 'next/router';
import { getAccessToken } from '@/app/services/auth/AuthHelpers';
import { IOption } from '@/interfaces/IOption';
import CustomSelect from '@/components/UI/CustomSelect';

type Data = {
  title: string,
  parent_id: string,
  color?: string,
};

type FormType = {
  url: string
  service: string,
  options: IOption[],
  closeModal: () => void,
  item?: any,
  showColor?: boolean
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

const CategoryForm: FC<FormType> = ({
  url, service, options, closeModal, item, showColor,
}: FormType) => {
  const router = useRouter();
  const defaultValues: Data = {
    title: item?.title || '',
    parent_id: item?.parent_id || '',
  };
  if (showColor) {
    defaultValues.color = item?.color || '';
  }
  const {
    register, handleSubmit,
    formState: { errors }, setValue,
  } = useForm<Data>({
    resolver,
    defaultValues,
  });
  const currentService = CurrentService({ serviceTitle: service });
  const onSubmit = handleSubmit(async (data) => {
    let result;
    if (item) {
      // @ts-ignore
      result = await currentService.updateItem(data, item.id, getAccessToken());
    } else {
      // @ts-ignore
      result = await currentService.addItem(data, getAccessToken());
    }
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
          <input
            className={errors.title ? 'input-error-class' : 'input-class'}
            {...register('title', { required: true })}
            type="text"
          />
          {errors?.title && <p className="text-red">{errors.title.message}</p>}
        </label>
        {options.length > 0 && (
        <div className="w-full">
          <CustomSelect
            fieldName="parent_id"
            onChange={setValue}
            initValue={options.find((e) => e.value === item?.parent_id) || options[0]}
            options={options}
            title="Родительская категория"
          />
        </div>
        )}
        {showColor && (
        <div className="w-full flex flex-col mt-2">
          <div className="t2 mb-4 text-black">Цвет метки</div>
          <input
            {...register('color', { required: true })}
            className="w-[50px] h-[50px] self-center bg-transparent border-orange border-[1px] focus:border-sky-500 focus:ring-1 focus:ring-sky-500 cursor-pointer"
            type="color"
          />
        </div>
        )}
      </div>
      <div className="flex justify-center">
        <input className="btn-black" type="submit" value={item ? 'Сохранить' : 'Добавить'} />
      </div>
    </form>
  );
};

CategoryForm.defaultProps = {
  item: null,
  showColor: false,
};

export default CategoryForm;
