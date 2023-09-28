import React, { FC } from 'react';
import { INumberInput } from '@/interfaces/Input';

const InputNumber: FC<INumberInput> = ({
  title, placeholder, fieldName, register, required, initValue,
}: INumberInput) => (
  <div className="flex flex-col gap-2">
    <div className="text-lg text-black">{title}</div>
    <input
      type="number"
      step={0.1}
      defaultValue={initValue}
      className="w-full py-2 px-6 border-orange border-[1px] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      {...register(fieldName, { required })}
      placeholder={placeholder}
    />
  </div>
);

export default InputNumber;
