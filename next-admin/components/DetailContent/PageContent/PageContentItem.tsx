import React, { FC, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import Button from '@/components/UI/Button';
import HTMLBlock from '@/components/DetailContent/PageContent/Inputs/HTMLBlock';
import InputFileBlock from '@/components/DetailContent/PageContent/Inputs/InputFileBlock';
import TextBlock from '@/components/DetailContent/PageContent/Inputs/TextBlock';
import { IContent } from '@/interfaces/Content/IContent';

type TypeItem = {
  title: string,
  type: string,
  item: IContent,
  setContent: (prev: IContent[] | ((prev: IContent[]) => void)) => void,
  value: any,
};

const PageContentItem: FC<TypeItem> = ({
  title, type, item, setContent, value,
}: TypeItem) => {
  const [height, setHeight] = useState<0 | 'auto'>(0);

  const deleteItem = (element: IContent) => {
    setContent((prev: IContent[]) => prev.filter((n) => n.id !== element.id));
  };
  const toggleHeight = (): void => {
    if (!height) {
      setHeight('auto');
    } else {
      setHeight(0);
    }
  };
  return (
    <div onClick={toggleHeight} role="presentation" className="w-full p-4 border-[1px] rounded-[10px] cursor-pointer">
      <div className="w-full flex justify-between">
        <div className="t3-bold">{title}</div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            deleteItem(item);
          }}
          role="presentation"
        >
          <Button text="Удалить" />
        </div>
      </div>
      <AnimateHeight height={height}>
        <div className="w-full flex flex-col gap-8" onClick={(e) => e.stopPropagation()} role="presentation">
          <div className="w-full mt-4 h-[1px] bg-black/30" />
          {type === 'textBlock' && (
            <HTMLBlock
              initText={item.value}
              item={item}
              setContent={setContent}
            />
          )}
          {type === 'files' && (
          <InputFileBlock
            title="Картинки в слайдере"
            template="newsContent"
            item={item}
            onChange={setContent}
            initValue={item.value}
            value={value}
            isDefaultForm={false}
          />
          )}
          {type === 'video' && (
            <TextBlock title="Вставьте ссылку" placeholder="Ссылка..." initText={item.value} item={item} setContent={setContent} />
          )}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default PageContentItem;
