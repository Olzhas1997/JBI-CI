import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import FileServices from '@/app/services/FileServices';
import { checkEnvironmentUrl } from '@/app/helpers/checkEnvironmentUrl';
import Image from 'next/image';
import SvgSprite from '@/components/SvgSprite/SvgSprite';
import Modal from 'react-modal';
import CropperPicture from '@/components/UI/CropperPicture';
import Loader from '@/components/UI/Loader/Loader';
import { TemplatesServices } from '@/app/services/TemplatesServices';
import Link from 'next/link';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { extendArray } from '@/app/helpers/extendsArray';

type InputFileType = {
  title?: string,
  multiple?: boolean,
  initValue?: string,
  rowPositioned?: boolean,
  template?: number,
  type: string, // image or file
  setUploading: (value: boolean) => void,
  onChange?: (value: any) => void
};

type TypeCropParams = {
  width: string,
  height: string,
};

const InputFile: FC<InputFileType> = ({
  title = 'Картинка', multiple, initValue, setUploading,
  rowPositioned, template, onChange, type,
}: InputFileType) => {
  const [fileLinks, setFileLinks] = useState<any>((initValue) || []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPicture, setCurrentPicture] = useState<string | null>(null);
  const [cropData, setCropData] = useState<any>(null);
  const [file, setFile] = useState<FileList | null>(null);
  const [localUpload, setLocalUpload] = useState<boolean>(false);
  const [dragEnter, setDragEnter] = useState<boolean>(false);
  const [cropParams, setCropParams] = useState<TypeCropParams>({ width: '200', height: '200' });
  const inputRef = useRef<HTMLInputElement>(null);

  const customStyles = {
    content: {
      right: '0',
      left: '0',
      width: '100%',
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
  useEffect(() => {
    if (template) {
      TemplatesServices.getItemById(template).then((res) => {
        setCropParams({
          width: res.settings.desktop.width,
          height: res.settings.desktop.height,
        });
      });
    }
  }, [template]);

  const saveResultUpload = (res: object): void => {
    setFileLinks([res]);
    setLocalUpload(false);
    if (setUploading) {
      setUploading(false);
    }
  };

  const chooseFiles = (list: FileList | null): void => {
    if (list) {
      if (template) {
        const url = URL.createObjectURL(new Blob([list[0]]));
        setCurrentPicture(url);
        setIsOpen(true);
        setFile(list);
      } else {
        if (setUploading) {
          setUploading(true);
        }
        setLocalUpload(true);
        if (list.length > 1) {
          FileServices.uploadFileList(list).then((res) => {
            setFileLinks([...fileLinks, ...res.data]);
            setLocalUpload(false);
            setUploading(false);
          });
        } else {
          FileServices.uploadFile(list[0]).then((res) => {
            saveResultUpload(res.data[0]);
            setLocalUpload(false);
            setUploading(false);
          });
        }
      }
    }
  };
  useEffect(() => {
    if (cropData && file) {
      if (setUploading) {
        setUploading(true);
      }
      setLocalUpload(true);
      FileServices.uploadFile(
        file[0],
        template,
        cropData.zoom,
        cropData.x,
        cropData.y,
      ).then((res) => {
        saveResultUpload(res.data[0]);
      });
    }
  }, [cropData, file]);
  useEffect(() => {
    if (onChange) {
      onChange(fileLinks);
    }
  }, [fileLinks]);

  const handleOnDragEnd = ({ source, destination }: any) => {
    if (destination) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      const newElements = extendArray(fileLinks, source.index, destination.index);
      setFileLinks(newElements);
    }
  };

  const chooseFilesByDragDrop = (event: React.DragEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setDragEnter(false);
    if (event.dataTransfer.files) {
      chooseFiles(event.dataTransfer.files);
    }
  };

  const removeFile = (slug: string): void => {
    if (fileLinks) {
      if (type === 'file') {
        setFileLinks(null);
      } else {
        setFileLinks(fileLinks.filter((e: { original: string; }) => e.original !== slug));
      }
    }
  };

  return (
    <div className={`${rowPositioned ? 'flex gap-2' : 'flex flex-col gap-8'} w-full"`}>
      <div className="flex flex-col justify-between h-full mt-auto gap-2">
        <div className="text-lg text-black">{title}</div>
        <div className="text-xs text-black/50">{`Выберите или перетащите ${multiple ? 'файлы' : 'файл'}`}</div>
        <input
          ref={inputRef}
          multiple={multiple}
          type="file"
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={() => setDragEnter(false)}
          onDragEnter={(e) => {
            e.preventDefault();
            setDragEnter(true);
          }}
          onDrop={(e) => chooseFilesByDragDrop(e)}
          onChange={(e) => chooseFiles(e.target.files)}
          className={`input-class w-full py-2 px-6 ${dragEnter ? 'border-red' : 'border-black'} border-[1px] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
        />
      </div>
      {localUpload && <Loader />}
      {(fileLinks && fileLinks.length > 0 && type !== 'file') ? (
        <div>
          {(multiple) ? (
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="images" direction="horizontal">
                {(provided) => (
                  <div className="grid grid-cols-9 gap-4 gap-x-2 images" {...provided.droppableProps} ref={provided.innerRef}>
                    {fileLinks.map((e: { original: string }, index: number) => (
                      <Draggable key={e.original} draggableId={e.original} index={index}>
                        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} className="relative">
                            <div
                              onClick={() => removeFile(e.original)}
                              className="absolute -top-[10px] -right-[10px] fill-black cursor-pointer hover:fill-black/30 transition duration-500"
                              role="presentation"
                            >
                              <SvgSprite src="/svg/close.svg" width={7} height={7} />
                            </div>
                            <div {...provided.dragHandleProps} className="relative w-[100px] h-[50px]">
                              <Image
                                key={e.original}
                                src={`${checkEnvironmentUrl()}/${e.original}`}
                                alt="Загруженная картинка"
                                style={{ objectFit: 'contain' }}
                                fill
                              />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ) : (
            <div className={`${rowPositioned ? 'grid grid-cols-3 gap-3' : 'flex flex-col gap-3 w-fit'}`}>
              {fileLinks.map((e: { original: string }) => (
                <div className="relative" key={e.original}>
                  <div
                    onClick={() => removeFile(e.original)}
                    className="absolute -top-[20px] -right-[15px] fill-black cursor-pointer hover:fill-black/30 transition duration-500"
                    role="presentation"
                  >
                    <SvgSprite src="/svg/close.svg" width={14} height={14} />
                  </div>
                  <div className="relative w-[200px] h-[100px]">
                    <Image
                      key={e.original}
                      src={`${checkEnvironmentUrl()}/${e.original}`}
                      alt="Загруженная картинка"
                      style={{ objectFit: 'contain' }}
                      fill
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : ''}
      {(type === 'file' && fileLinks && fileLinks[0] && fileLinks[0].file) ? (
        <div className=" relative flex flex-col items-center">
          <div
            onClick={() => removeFile('file')}
            className="absolute -top-[20px] -right-[15px] fill-black cursor-pointer hover:fill-black/30 transition duration-500"
            role="presentation"
          >
            <SvgSprite src="/svg/close.svg" width={14} height={14} />
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <SvgSprite src="/svg/document.svg" width={25} height={25} />
          </div>
          <Link target="_blank" href={`${checkEnvironmentUrl()}/${fileLinks[0].file}`}>
            ссылка на файл
          </Link>
        </div>
      ) : ''}
      <Modal
        isOpen={isOpen}
        style={customStyles}
        closeTimeoutMS={500}
        onRequestClose={() => setIsOpen(false)}
      >
        <CropperPicture
          setCropData={setCropData}
          image={currentPicture}
          width={cropParams.width}
          height={cropParams.height}
          closeModal={() => setIsOpen(false)}
        />
      </Modal>
    </div>
  );
};

InputFile.defaultProps = {
  title: '',
  multiple: false,
  rowPositioned: true,
  initValue: undefined,
  template: undefined,
  onChange: undefined,
};

export default InputFile;
