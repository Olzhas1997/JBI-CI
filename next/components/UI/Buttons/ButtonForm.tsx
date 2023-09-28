import React, { FC } from 'react';

type TypeBtn = {
  text: string,
  size: 'lg' | 'sm'
  disabled?: boolean
};

const ButtonForm: FC<TypeBtn> = ({ text, size = 'sm', disabled = false }: TypeBtn) => {
  const classes = {
    lg: 'h-[50px] cursor-pointer px-6 py-4 flex justify-center items-center border-[1px] border-white bg-transparent text-lg text-white rounded-[1px] hover:bg-white/30 active:bg-white/30 transition duration-200',
    sm: 'h-[39px] cursor-pointer px-3 sm:px-6 py-2.5 flex justify-center items-center border-[1px] border-white bg-transparent text-xxs text-white rounded-[1px] hover:bg-white/30 active:bg-white/30 transition duration-200',
  };

  let parentClass: string = classes[size];
  if (disabled) {
    parentClass += 'bg-brown-200 text-white pointer-events-none border-none';
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={parentClass}>
      {text}
    </button>
  );
};
ButtonForm.defaultProps = {
  disabled: false,
};

export default ButtonForm;
