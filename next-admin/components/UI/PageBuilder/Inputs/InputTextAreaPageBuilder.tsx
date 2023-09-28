import React, { FC } from 'react';

type InputTextAreaPageBuilderType = {
  title: string,
  placeholder: string,
  initValue: string,
  change: any
};

const InputTextAreaPageBuilder: FC<InputTextAreaPageBuilderType> = ({
  title, placeholder, initValue, change,
}: InputTextAreaPageBuilderType) => (
  <div className="flex flex-col gap-2">
    <div className="text-lg text-black">{title}</div>
    <textarea
      className="w-full py-2 px-6 border-orange border-[1px] rounded-[5px] focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
      placeholder={placeholder}
      defaultValue={initValue}
      onChange={change ? (e) => change(e.target.value) : undefined}
    />
  </div>
);

export default InputTextAreaPageBuilder;
