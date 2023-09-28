import React, { FC } from 'react';
import { ITextInput } from '@/interfaces/Input';

const InputText: FC<ITextInput> = ({
  title, fieldName, placeholder, register, initValue, required, change,
}: ITextInput) => (
  <div className="flex flex-col gap-2">
    <div className="text-lg text-black">{title}</div>
    <input
      type="text"
      className="w-full py-2 px-6 border-orange border-[1px] rounded-[5px] focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
      placeholder={placeholder}
      defaultValue={initValue}
      onChange={change ? (e) => change(e.target.value) : undefined}
      {...register && fieldName && { ...register(fieldName, { required }) }}
    />
  </div>
);
export default InputText;
