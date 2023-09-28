import React, { FC, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form';

type TypeCheckbox = {
  title: string,
  fieldName: string,
  onChange: UseFormSetValue<FieldValues>
};

const Checkbox: FC<TypeCheckbox> = ({
  title, fieldName, onChange,
}: TypeCheckbox) => {
  const [active, setActive] = useState<boolean>(false);
  const toggleActive = (): void => {
    if (active) {
      setActive(false);
      onChange(fieldName, false);
    } else {
      setActive(true);
      onChange(fieldName, true);
    }
  };
  return (
    <div className="flex items-center gap-4 cursor-pointer" onClick={toggleActive} role="presentation">
      <div className={`${active ? 'bg-blue border-blue' : 'border-black/30'} w-[20px] h-[20px] border-[1px] transition duration-500`} />
      <div className="text-lg text-black">{title}</div>
    </div>
  );
};

export default Checkbox;
