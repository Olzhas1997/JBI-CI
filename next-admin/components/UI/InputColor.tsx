import React, { FC } from 'react';
import { IFileInput } from '@/interfaces/Input';

const InputColor: FC<IFileInput> = ({ title }: IFileInput) => (
  <div className="flex flex-col gap-2 w-full">
    <div className="text-xl mb-4 text-white">{title}</div>
    <input
      className="w-[50px] h-[50px] bg-transparent border-black border-[1px] focus:border-sky-500 focus:ring-1 focus:ring-sky-500 cursor-pointer"
      type="color"
    />
  </div>
);

export default InputColor;
