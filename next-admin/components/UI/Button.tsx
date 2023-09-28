import React, { FC } from 'react';

type TypeButton = {
  text: string,
};

const Button: FC<TypeButton> = ({ text }: TypeButton) => (
  <button
    type="button"
    className="border-[1px] border-black rounded-[10px] w-fit py-2 px-4 cursor-pointer hover:bg-black hover:text-white transition-all duration-200"
  >
    {text}
  </button>
);

export default Button;
