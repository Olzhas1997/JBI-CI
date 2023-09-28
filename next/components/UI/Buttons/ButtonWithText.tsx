import React, { FC } from 'react';

type TypeTextButton = {
  text: string,
  next?: boolean
};

const ButtonWithText: FC<TypeTextButton> = ({ text, next }: TypeTextButton) => {
  const leftPercentage = next ? '100%' : 0;
  const rotate = !next ? 'rotate(180deg) translateY(4px) translateX(4px)' : undefined;
  return (
    <div className="relative flex flex-col gap-1 w-fit border-b-[1px] border-black cursor-pointer xl:hover:opacity-50 transition duration-500">
      <div className="t7 xl:h12 text-black lowercase mb-2">{text}</div>
      <div className="arrow absolute bg-black" style={{ top: '100%', left: leftPercentage, transform: rotate }} />
    </div>
  );
};

export default ButtonWithText;

ButtonWithText.defaultProps = {
  next: true,
};
