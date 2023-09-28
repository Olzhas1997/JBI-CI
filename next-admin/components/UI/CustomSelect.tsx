import React, { FC, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

type TypeOption = {
  label: string,
  value: string | number,
};

type TypeOptions = {
  title: string,
  fieldName: string,
  onChange: any,
  options: TypeOption[],
  placeholder?: string | null,
  initValue?: TypeOption | null,
};

const CustomSelect: FC<TypeOptions> = ({
  options, title, fieldName, onChange, placeholder, initValue,
}: TypeOptions) => {
  const [value, setValue] = useState<TypeOption | null>(initValue || null);
  useEffect(() => {
    if (initValue) {
      onChange(fieldName, initValue.value);
      // @ts-ignore
      const targetOption = options.find((e) => (e.value) === (initValue));
      if (targetOption) {
        setValue(targetOption);
      }
    }
  }, []);

  const changeValue = (option: TypeOption) => {
    setValue(option);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg text-black">{title}</div>
      <Select
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (e) {
            onChange(fieldName, e.value);
            changeValue(e);
          }
        }}
      />
    </div>
  );
};

CustomSelect.defaultProps = {
  placeholder: 'Выберите из списка',
  initValue: null,
};

export default CustomSelect;
