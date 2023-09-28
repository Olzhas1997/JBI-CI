import React, {
  FC, useMemo, useState,
} from 'react';
import InputText from '@/components/UI/InputText';
import InputNumber from '@/components/UI/InputNumber';
import Textarea from '@/components/UI/Textarea';
import TipTap from '@/components/UI/TipTap/TipTap';
import Checkbox from '@/components/UI/Checkbox';
import CustomSelect from '@/components/UI/CustomSelect';
import BackBtn from '@/components/UI/BackBtn';
import { useForm } from 'react-hook-form';
import InputDate from '@/components/UI/InputDate';
import InputRadio from '@/components/UI/InputRadio';
import { CurrentService } from '@/app/helpers/CurrentService';
import { useRouter } from 'next/router';
import Loader from '@/components/UI/Loader/Loader';
import { getAccessToken } from '@/app/services/auth/AuthHelpers';
import VisuallyEditor from '@/components/UI/VisuallyEditor/VisuallyEditor';
import InputFile from '@/components/UI/InputFile';

interface IOption {
  label: string,
  value: string,
}

interface IField {
  field_slug: string,
  field_title: string,
  default: any,
  type: string,
  template?:string,
  parentPlan?: string,
  parentHeight?: string,
  parentWidth?: string,
  outherElement?: string[],
  blob_type?: string,
}

interface IOptionedField extends IField {
  options: IOption[]
  placeholder: string
}

type TypeInputs = {
  service: string
  fields: IField[] | IOptionedField[],
  apart?: boolean
};

const DetailContent: FC<TypeInputs> = ({ service = '', fields, apart }: TypeInputs) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const router = useRouter();
  const defaultValues = useMemo(() => {
    const values: { [key: string]: any } = {};
    fields.forEach((e) => {
      values[e.field_slug] = e.default;
    });
    return values;
  }, []);

  const currentService = CurrentService({ serviceTitle: service });
  const {
    register, handleSubmit, setValue,
  } = useForm(defaultValues);

  const onSubmit = handleSubmit(async (data) => {
    // @ts-ignore
    const result = await currentService.updateItem(data, Number(data.id), getAccessToken());
    if (result) {
      if (apart) {
        await router.push('/apartments');
      } else {
        await router.back();
      }
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 mt-4">
      {(!apart) ? (
        <div className="w-fit">
          <BackBtn />
        </div>
      ) : ''}
      <div className="grid grid-cols-2 gap-4">
        {fields.map((e) => (
          (e.type !== 'non')
            ? (
              <div key={e.field_slug}>
                {e.type === 'text' && (
                <div className="py-5">
                  <InputText
                    title={e.field_title}
                    fieldName={e.field_slug}
                    register={register}
                    initValue={e.default}
                    placeholder="Введите текст..."
                    required={false}
                  />
                </div>
                )}
                {e.type === 'textarea' && (
                <div className="py-5">
                  <Textarea
                    title={e.field_title}
                    fieldName={e.field_slug}
                    register={register}
                    initValue={e.default}
                    placeholder="Текстовое значение"
                    required={false}
                  />
                </div>
                )}
                {e.type === 'html' && (
                <div className="py-5 flex flex-col gap-2">
                  <div className="text-lg text-black">{e.field_title}</div>
                  <TipTap
                    text={e.default}
                    width={400}
                    fieldName={e.field_slug}
                    onChange={setValue}
                  />
                </div>
                )}
                {e.type === 'date' && (
                <div className="py-5">
                  <InputDate
                    title={e.field_title}
                    placeholder="Выберите дату"
                    initValue={e.default}
                    fieldName={e.field_slug}
                    register={register}
                    required={false}
                  />
                </div>
                )}
                {e.type === 'number' && (
                <div className="py-5">
                  <InputNumber
                    title={e.field_title}
                    placeholder="Введите число..."
                    fieldName={e.field_slug}
                    initValue={e.default}
                    register={register}
                    required={false}
                  />
                </div>
                )}
                {e.type === 'checkbox' && (
                <div className="py-5">
                  <Checkbox
                    title={e.field_title}
                    fieldName={e.field_slug}
                    onChange={setValue}
                  />
                </div>
                )}
                {e.type === 'radio' && (
                <div className="py-5">
                  <InputRadio
                    title={e.field_title}
                    fieldName={e.field_slug}
                    initValue={e.default}
                    register={register}
                    required={false}
                  />
                </div>
                )}
                {e.type === 'select' && 'options' in e && (
                <div className="py-5">
                  <CustomSelect
                    title={e.field_title}
                    options={e.options}
                    fieldName={e.field_slug}
                    initValue={e.default}
                    placeholder={e.placeholder}
                    onChange={setValue}
                  />
                </div>
                )}
                {e.type === 'files' && (
                <div className="py-5">
                  {(e.template) ? (
                    <InputFile
                      type={e.blob_type ? e.blob_type : ''}
                      title={e.field_title}
                      initValue={e.default}
                      template={Number(e.template)}
                      setUploading={setUploading}
                      onChange={(value: any) => {
                        setValue(e.field_slug, value);
                      }}
                    />
                  ) : (
                    <InputFile
                      type={e.blob_type ? e.blob_type : ''}
                      title={e.field_title}
                      initValue={e.default}
                      setUploading={setUploading}
                      onChange={(value: any) => {
                        setValue(e.field_slug, value);
                      }}
                    />
                  )}

                </div>
                )}
              </div>
            )
            : (
              <div className="hidden" key={e.field_slug}>
                <InputText
                  title={e.field_title}
                  fieldName={e.field_slug}
                  register={register}
                  initValue={e.default}
                  placeholder="Введите текст..."
                  required={false}
                />
              </div>
            )
        ))}
      </div>
      <div className="w-full">
        {fields.map((e) => (
          e.type === 'visual' && (
            <div key={e.field_slug}>
              <VisuallyEditor
                resultPoints={e.default}
                width={e.parentWidth}
                height={e.parentHeight}
                link={e.parentPlan}
                viewParametr={false}
                onChange={setValue}
                name={e.field_slug}
                savedItems={e.outherElement}
                title={e.field_title}
              />
            </div>
          )
        ))}
      </div>
      <div className="w-fit self-center">
        {uploading ? (
          <div className="flex gap-5 items-center">
            <div className="t2 text-black">Загружаем файлы...</div>
            <Loader />
          </div>
        ) : (
          <button
            type="submit"
            className="text-lg text-white rounded-[40px] bg-black py-2 px-5 hover:text-black hover:bg-gray transition duration-500 cursor-pointer"
          >
            Сохранить
          </button>
        )}
      </div>
    </form>
  );
};

DetailContent.defaultProps = {
  apart: false,
};

export default DetailContent;
