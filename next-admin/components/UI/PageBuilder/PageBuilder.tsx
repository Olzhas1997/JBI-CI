import React, { useEffect, useState } from 'react';
import Library from '@/app/api/library/library';
import PageBuilderItem from '@/components/UI/PageBuilder/PageBuilderItem';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { DynamicElementListProps, LibraryElement } from '@/interfaces/Library';
import { extendArray } from '@/app/helpers/extendsArray';
import Modal from 'react-modal';
import Button from '@/components/UI/Button';
import Image from 'next/image';

const DynamicElementList: React.FC<DynamicElementListProps> = ({
  library, title = 'Контент', setUploading, change, libraryTemplate, viewAdd = true,
}) => {
  const [elements, setElements] = useState<LibraryElement[]>([]);
  const [blocks, setBlocks] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [lib, setLib] = useState<any>(Library);

  useEffect(() => {
    if (library) {
      // @ts-ignore
      setElements(library);
    }

    if (libraryTemplate) {
      setLib(libraryTemplate);
    }
  }, []);

  useEffect(() => {
    setBlocks(Object.entries(lib.library));
  }, [lib]);

  const handleAddElement = (type: string) => {
    // Create a new element based on the library template
    // @ts-ignore
    const newElement = JSON.parse(JSON.stringify({ ...Library.library[type] }));
    newElement.id = Date.now().toString();
    setElements([...elements, newElement]);
  };

  const handleContentChange = (content: string, id: string, name?: string) => {
    // eslint-disable-next-line max-len
    const updatedElements = elements.map((element) => {
      if (element.id === id) {
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

  const handleOnDragEnd = ({ source, destination }: any) => {
    if (destination) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const newElements = extendArray(elements, source.index, destination.index);
      setElements(newElements);
    }
  };

  useEffect(() => {
    change(elements);
  }, [elements]);

  const customStyles = {
    content: {
      right: '0',
      left: '50%',
      width: 'auto',
      height: '100vh',
      top: '0',
      background: '#FFFFFF',
      border: 'none',
      borderRadius: '0',
      transition: 'all 1s ease-out',
    },
    overlay: {
      zIndex: '100',
    },
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="text-3xl">
          {title}
        </div>
        {(viewAdd) ? (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div onClick={() => setIsOpen(true)}>
            <Button text="Добавить блок" />
          </div>
        ) : ''}
      </div>
      <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="items">
            {(provided) => (
              <div className="items" {...provided.droppableProps} ref={provided.innerRef}>
                {elements.map((element, index) => (
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
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        closeTimeoutMS={1000}
      >
        <div className="absolute top-4 left-4 z-10">
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div onClick={() => setIsOpen(false)} className="">
            <Button text="Закрыть" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-16">
          {(blocks && blocks.length) ? blocks.map((n: any, i: number) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/no-array-index-key
            <div className="cursor-pointer border-[1px] border-black rounded-[10px] py-2 px-4 hover:border-orange transition-all duration-300" key={i} onClick={() => handleAddElement(n[0])}>
              <div className="relative w-full aspect-square">
                <Image
                  src={n[1].preview}
                  alt="блок"
                  style={{ objectFit: 'contain' }}
                  fill
                />
              </div>
              <div className="flex justify-center">{n[1].name}</div>
            </div>
          )) : ''}
        </div>
      </Modal>
    </div>
  );
};

export default DynamicElementList;
