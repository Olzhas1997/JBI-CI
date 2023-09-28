import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { IContent } from '@/interfaces/Content/IContent';

type PageContentModalType = {
  template: string | undefined,
  setContent: (state: IContent[]) => void,
  content: IContent[]
};
const PageContentModal:FC<PageContentModalType> = (
  { template, setContent, content }: PageContentModalType,
) => {
  const [items, setItems] = useState<IContent[]>([]);

  useEffect(() => {
    if (template) {
      switch (template) {
        case 'newsContent':
          setItems([]);
          break;
        default:
          setItems([]);
      }
    }
  }, []);

  const addItem = (element: IContent): void => {
    const id = Math.floor(Math.random() * 1000000);
    setContent([...content, { id, ...element }]);
  };

  return (
    <div className="grid grid-cols-6 gap-8">
      {(items && items.length) && items.map((n) => (
        <div
          className="w-full flex flex-col gap-2 justify-center items-center p-5 border-[1px] border-black/70 hover:border-black/30 rounded-[10px] overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
          key={n.id}
          onClick={() => addItem(n)}
          role="presentation"
        >
          <div className="relative w-[200px] h-[200px] flex justify-center">
            <Image
              src={n.preview}
              alt="picture"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {n.title}
        </div>
      ))}
    </div>
  );
};

export default PageContentModal;
