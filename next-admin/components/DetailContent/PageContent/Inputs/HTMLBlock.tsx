import React, { FC, useEffect, useState } from 'react';
import TipTap from '@/components/UI/TipTap/TipTap';
import { IContent } from '@/interfaces/Content/IContent';

type TextBlockType = {
  initText: string,
  item: IContent,
  setContent: any
};

const HTMLBlock: FC<TextBlockType> = ({ initText, item, setContent }: TextBlockType) => {
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
    <div>
      <TipTap text={text} width={400} onChange={setText} />
    </div>
  );
};

export default HTMLBlock;
