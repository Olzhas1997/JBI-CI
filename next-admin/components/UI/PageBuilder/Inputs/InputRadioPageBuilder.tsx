import React, { FC, useEffect, useState } from 'react';

type InputRadioPageBuilder = {
  title: string,
  initValue: boolean | number | string,
  onChange: any
};
// eslint-disable-next-line @typescript-eslint/no-redeclare
const InputRadioPageBuilder: FC<InputRadioPageBuilder> = ({
  title, onChange, initValue,
}: InputRadioPageBuilder) => {
  // @ts-ignore
  const [checked, setChecked] = useState<boolean>(initValue);
  useEffect(() => {
    onChange(checked);
  }, [checked]);
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
      />
    </div>
  );
};

export default InputRadioPageBuilder;
