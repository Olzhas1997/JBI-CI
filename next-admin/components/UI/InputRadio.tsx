import React, { FC, useState } from 'react';
import { IRadioInput } from '@/interfaces/Input';

const InputRadio: FC<IRadioInput> = ({
  title, fieldName, register, initValue,
}: IRadioInput) => {
  // @ts-ignore
  const [checked, setChecked] = useState<boolean>(initValue);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg text-black">{title}</div>
      <input
        onClick={() => setChecked((prev) => !prev)}
        className="switcher-class"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={checked}
        {...register(fieldName, { required: false })}
      />
    </div>
  );
};

export default InputRadio;
