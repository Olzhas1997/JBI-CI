import React, { FC, useEffect, useState } from 'react';
import InputText from '@/components/UI/InputText';
import { IContent } from '@/interfaces/Content/IContent';

type TypeTextBlock = {
  title: string,
  placeholder: string,
  initText: string,
  item: IContent,
  setContent: any
};

const TextBlock: FC<TypeTextBlock> = ({
  title, placeholder, initText, item, setContent,
}: TypeTextBlock) => {
  const [text, setText] = useState<string>(initText);

  useEffect(() => {
    setContent((prev: IContent[]): IContent[] => {
      const target: IContent | undefined = prev.find((e: IContent) => e.id === item.id);
      const otherItems = prev.filter((e: IContent) => e.id !== item.id);
      if (target) {
        target.value = text;
        return [...otherItems, target];
      }
      return prev;
    });
  }, [text]);
  return (
    <div onClick={(e) => e.stopPropagation()} role="presentation">
      <InputText title={title} placeholder={placeholder} initValue={text} change={setText} />
    </div>
  );
};

export default TextBlock;
