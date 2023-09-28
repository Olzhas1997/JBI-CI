import React, {
  FC, ReactNode, useEffect, useRef, useState,
} from 'react';
import { IFileLink } from '@/interfaces/Input';
import SvgSprite from '@/components/SvgSprite/SvgSprite';
import Image from 'next/image';
import { checkEnvironmentUrl } from '@/app/helpers/checkEnvironmentUrl';
import { IContent } from '@/interfaces/Content/IContent';
import {
  Draggable, Droppable, DropResult,
} from 'react-beautiful-dnd';

type TypeFileInputBlock = {
  title: string,
  item: any,
  onChange: any,
  initValue: any,
  template: string,
  value: any,
  // eslint-disable-next-line react/require-default-props
  isDefaultForm: boolean
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  width: '100%',
  background: isDragging ? '#0082CA' : '#FFFFFF',
  color: isDragging ? '#FFFFFF' : '#000000',
  fontsize: '20px',
  ...draggableStyle,
});

const InputFileBlock: FC<TypeFileInputBlock> = ({
  title, initValue, item, onChange, value, isDefaultForm,
}) => {
  const [lastDragResult, setLastDragResult] = useState<any>({});
  const [fileLinks, setFileLinks] = useState<IFileLink[]>(initValue);
  const [dragEnter, setDragEnter] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      item.id && (result.type === item.id.toString())
      && (!lastDragResult || lastDragResult !== result)
    ) {
      const newItems = Array.from(fileLinks);
      const [movedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, movedItem);
      setFileLinks(newItems);
      setLastDragResult(result);
    }
  };

  const chooseFiles = (list: FileList | null): void => {
    if (list) {
      console.log(list);
    }
  };

  const removeFile = (slug: string): void => {
    if (fileLinks) {
      setFileLinks(fileLinks.filter((e) => e.original !== slug));
    }
  };

  const chooseFilesByDragDrop = (event: React.DragEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setDragEnter(false);
    if (event.dataTransfer.files) {
      chooseFiles(event.dataTransfer.files);
    }
  };
  useEffect(() => {
    if (!isDefaultForm) {
      if (fileLinks) {
        onChange((prev: IContent[]) => {
          const newItems = prev.map((e) => e);
          newItems.forEach((e) => {
            if (e.id === item.id) {
              e.value = fileLinks;
            }
          });
          if (newItems) {
            return newItems;
          }
          return prev;
        });
      }
    } else {
      onChange(fileLinks);
    }
  }, [fileLinks]);
  const dragCall = (): ReactNode => {
    onDragEnd(value);
    return <div />;
  };

  return (
    <div className="flex items-end gap-2 w-full">
      <div className="flex flex-col justify-between h-full mt-auto gap-2">
        <div className="text-lg text-black">{title}</div>
        <div className="text-xs text-black/50">Выберите или перетащите файлы</div>
        <input
          ref={inputRef}
          type="file"
          multiple
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={() => setDragEnter(false)}
          onDragEnter={(e) => {
            e.preventDefault();
            setDragEnter(true);
          }}
          onDrop={(e) => chooseFilesByDragDrop(e)}
          onChange={(e) => chooseFiles(e.target.files)}
          className={`w-full py-2 px-6 ${dragEnter ? 'border-red' : 'border-black'} border-[1px] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        />
      </div>
      <Droppable droppableId={item.id ? item.id.toString() : 'item'} direction="horizontal" type={item.id ? item.id.toString() : undefined}>
        {(provided) => (
          <div className="content grid grid-cols-4 gap-6" {...provided.droppableProps} ref={provided.innerRef}>
            {fileLinks && fileLinks.length > 0 && fileLinks.map((element: IFileLink, index) => {
              if (element.original) {
                return (
                  <Draggable
                    key={element.original}
                    draggableId={element.original.toString()}
                    index={index}
                  >
                    {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        {dragCall()}
                        <div className="relative w-fit h-full" key={element.original}>
                          <div
                            onClick={() => removeFile(element.original)}
                            className="absolute -top-[20px] -right-[15px] fill-black cursor-pointer hover:fill-black/30 transition duration-500"
                            role="presentation"
                          >
                            <SvgSprite src="/svg/close.svg" width={14} height={14} />
                          </div>
                          <div className="relative w-[200px] h-[100px]">
                            <Image
                              key={element.original}
                              src={`${checkEnvironmentUrl()}/${element.original}`}
                              alt="Загруженная картинка"
                              style={{ objectFit: 'cover' }}
                              fill
                            />
                          </div>
                        </div>
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
    </div>
  );
};
export default InputFileBlock;
