import React, { FC, useEffect, useState } from 'react';
import { LibraryContent } from '@/interfaces/Library';
import Button from '@/components/UI/Button';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { extendArray } from '@/app/helpers/extendsArray';
// eslint-disable-next-line import/no-cycle
import PageBuilderItem from '@/components/UI/PageBuilder/PageBuilderItem';

type InputCollectionType = {
  initValue: any,
  title: string,
  titleElem: string,
  fields: LibraryContent[],
  setUploading: any,
  onChange: any
};
const InputCollection:FC<InputCollectionType> = ({
  initValue, title, titleElem, fields, setUploading, onChange,
}: InputCollectionType) => {
  const [elements, setElements] = useState<any[]>([]);
  useEffect(() => {
    setElements(initValue);
  }, []);

  const addItem = () => {
    const item = {
      name: titleElem,
      id: Date.now().toString(),
      content: JSON.parse(JSON.stringify(fields)),
    };
    setElements([...elements, item]);
  };

  useEffect(() => {
    onChange(elements);
  }, [elements]);

  const handleOnDragEnd = ({ source, destination }: any) => {
    if (destination) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const newElements = extendArray(elements, source.index, destination.index);
      setElements(newElements);
    }
  };
  const handleContentChange = (content: string, id: string, name?: string) => {
    // eslint-disable-next-line max-len
    const updatedElements = elements.map((element) => {
      if (element.id === id) {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        element.content = element.content.map((n) => {
          if (n.name === name) {
            // eslint-disable-next-line no-param-reassign
            n.val = content;
          }
          return n;
        });
      }
      return element;
    });
    setElements(updatedElements);
  };

  const deleteItem = (id: string) => {
    const filteredItems = elements.filter((n) => n.id !== id);
    setElements(filteredItems);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="t2-bold ">{title}</div>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div onClick={addItem}>
          <Button text="Добавить" />
        </div>
      </div>
      <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="childElement">
            {(provided) => (
              <div className="childElement" {...provided.droppableProps} ref={provided.innerRef}>
                {elements.map((element, index) => (
                  // @ts-ignore
                  // eslint-disable-next-line react/no-array-index-key
                  <Draggable key={element.id} draggableId={element.id} index={index}>
                    {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                    {(provided) => (
                      <PageBuilderItem
                        provided={provided}
                        innerRef={provided.innerRef}
                        element={element}
                        deleteItem={(id: string) => deleteItem(id)}
                        handleContentChange={
                          // eslint-disable-next-line max-len
                          (content: any, id: string, name: string) => handleContentChange(content, id, name)
                        }
                        setUploading={setUploading}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default InputCollection;
