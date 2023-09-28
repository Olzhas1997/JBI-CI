import React, { FC, useState } from 'react';
import SvgSprite from '@/components/SvgSprite/SvgSprite';
import { LibraryElement } from '@/interfaces/Library';
// eslint-disable-next-line import/no-cycle
import PageBuilderFields from '@/components/UI/PageBuilder/PageBuilderFields';

type PageBuilderItemType = {
  element: LibraryElement,
  deleteItem: any,
  handleContentChange: any,
  setUploading: any,
  provided: any,
  innerRef: any
};

const PageBuilderItem:FC<PageBuilderItemType> = ({
  element, deleteItem, handleContentChange, setUploading, provided, innerRef,
}: PageBuilderItemType) => {
  const [view, setView] = useState(false);

  return (
    <div ref={innerRef} {...provided.draggableProps} className="my-2 w-full border-[1px] rounded-[10px] cursor-pointer">
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={() => setView(!view)} className="grid grid-cols-5 ">
        <div className="col-span-3 t3-bold p-4">
          {element.name}
        </div>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div {...provided.dragHandleProps} className="flex items-center gap-2 justify-center cursor-pointer py-4 border-[1px] border-white w-full mr-[-1px] bg-orange text-white hover:bg-orange/50 transition-all duration-200">
          <div>Переместить</div>
          <div className="fill-white">
            <SvgSprite width={20} height={18} src="/svg/move.svg" />
          </div>
        </div>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className="flex items-center gap-2 justify-center cursor-pointer py-4 border-[1px] border-white w-full mr-[-1px] bg-black text-white hover:bg-black/50 transition-all duration-200" onClick={() => deleteItem(element.id)}>
          <div>Удалить</div>
          <div className="fill-white">
            <SvgSprite width={20} height={18} src="/img/trash.svg" />
          </div>
        </div>
      </div>
      {(view) ? (
        <div className="p-4 ">
          {element.content.map((contentItem, contentIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`${element.id}-${contentIndex}`}>
              <div className="py-4">
                {/* eslint-disable-next-line max-len */}
                <PageBuilderFields contentItem={contentItem} change={(e: any) => handleContentChange(e, element.id, contentItem.name)} setUploading={setUploading} />
              </div>
            </div>
          ))}
        </div>
      ) : ''}

    </div>
  );
};

export default PageBuilderItem;
