import React, { FC, useEffect, useState } from 'react';
import PageContentItem from '@/components/DetailContent/PageContent/PageContentItem';
import {
  DragDropContext, Draggable, Droppable, DropResult,
} from 'react-beautiful-dnd';
import { IContent } from '@/interfaces/Content/IContent';

type PageContentListType = {
  items: IContent[],
  setContent: any
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  width: '100%',
  background: isDragging ? '#0082CA' : '#FFFFFF',
  color: isDragging ? '#FFFFFF' : '#000000',
  fontsize: '20px',
  borderRadius: '10px',
  ...draggableStyle,
});

const PageContentList:FC<PageContentListType> = ({ items, setContent }:PageContentListType) => {
  const [pageData, setPageData] = useState(items);
  const [dragEndResult, setDragEndResult] = useState<any>({});
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (result.type !== 'app') {
      setDragEndResult(result);
      return;
    }

    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, movedItem);
    setDragEndResult(result);
    setPageData(newItems);
  };

  useEffect(() => {
    setContent(pageData);
  }, [pageData]);

  return (
    <div className="w-full flex flex-col gap-4">
      {(items && items.length > 0) ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="content-item" type="app">
            {(provided) => (
              <div className="content flex flex-col gap-6" {...provided.droppableProps} ref={provided.innerRef}>
                {items && items.length && items.map((item: IContent, index) => {
                  if (item.id) {
                    return (
                      <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                          >
                            <PageContentItem
                              item={item}
                              title={item.title}
                              type={item.type}
                              value={dragEndResult}
                              setContent={setContent}
                            />
                          </div>
                        )}
                      </Draggable>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : <div>Элементов нет</div>}
    </div>
  );
};

export default PageContentList;
