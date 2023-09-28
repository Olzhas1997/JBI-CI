import React, { FC } from 'react';

type TypeBtn = {
  text: string,
  size: 'lg' | 'sm'
  disabled?: boolean
};

const Button: FC<TypeBtn> = ({ text, size, disabled = false }: TypeBtn) => {
  const classes = {
    lg: 'h-[68px] cursor-pointer w-full px-6 flex justify-center items-center border-[1px] border-black bg-transparent t2 text-black hover:text-white hover:bg-black active:bg-[#2d2d2d80] active:border-[#2d2d2d80] transition duration-200',
    sm: 'h-[40px] sm:h-[50px] cursor-pointer w-full px-6 flex justify-center items-center bg-brown-100 t2 text-white rounded-[1px] hover:bg-black active:bg-[#2d2d2d80] transition duration-200',
  };

  let parentClass: string = classes[size];
  if (disabled) {
    parentClass += 'bg-brown-200 text-white pointer-events-none border-none';
  }

  return (
    <div className={parentClass}>
      {text}
    </div>
  );
};
Button.defaultProps = {
  disabled: false,
};

export default Button;
