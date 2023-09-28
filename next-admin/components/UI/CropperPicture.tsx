import React, {
  FC, useCallback, useState,
} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Cropper from 'react-easy-crop';

type CropType = {
  image: any,
  width: string,
  height: string,
  setCropData: any,
  closeModal: any
};
const CropperPicture: FC<CropType> = ({
  image, width, height, setCropData, closeModal,
}: CropType) => {
  const [crop, setCrop] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [cropParams, setCropParams] = useState({ x: 0, y: 0 });

  // eslint-disable-next-line max-len
  const onCropComplete = useCallback((_croppedArea: any, croppedAreaPixels: any) => {
    setCropParams(croppedAreaPixels);
  }, []);

  const saveChange = () => {
    setCropData(
      {
        x: cropParams.x,
        y: cropParams.y,
        zoom: Math.round(zoom),
      },
    );
    closeModal();
  };

  return (
    <div>
      <div className="h-[85vh] relative">
        { /* eslint-disable-next-line max-len */}
        <Cropper onCropComplete={onCropComplete} showGrid={false} zoom={zoom} onCropChange={setCrop} crop={crop} cropSize={{ width: Number(width), height: Number(height) }} onZoomChange={setZoom} image={image} />
      </div>
      <div className="flex items-center justify-center mt-4">
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div onClick={saveChange} className="w-fit text-lg text-white rounded-[40px] bg-black py-2 px-5 hover:text-black hover:bg-gray transition duration-500 cursor-pointer">Сохранить</div>
      </div>
    </div>
  );
};

export default CropperPicture;
