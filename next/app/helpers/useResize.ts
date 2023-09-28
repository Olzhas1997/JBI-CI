import { useState, useEffect } from 'react';

export const useResize = () => {
  const SCREEN_SM = 480;
  const SCREEN_MD = 576;
  const SCREEN_LG = 768;
  const SCREEN_XL = 992;
  const SCREEN_2XL = 1370;
  const SCREEN_3XL = 1630;
  const SCREEN_4XL = 1795;

  const [width, setWidth] = useState<number>(1920);
  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreen2xl: width >= SCREEN_2XL,
    isScreen3xl: width >= SCREEN_3XL,
    isScreen4xl: width >= SCREEN_4XL,
  };
};
