import React, { FC } from 'react';
import { ITextarea } from '@/interfaces/ITextarea';

const Textarea: FC<ITextarea> = ({
  title, fieldName, register, placeholder, initValue, required,
}: ITextarea) => (
  <div className="flex flex-col gap-2">
    <div className="text-lg text-black">{title}</div>
    <textarea
      rows={3}
      defaultValue={initValue}
      className="w-full py-2 px-6 border-black border-[1px] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      {...register(fieldName, { required })}
      placeholder={placeholder}
    />
  </div>
);

export default Textarea;
