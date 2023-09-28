import { useEffect, useRef } from 'react';
import { useResize } from '@/app/helpers/useResize';

type PropTypes = {
  rotate: boolean
  color?: string
};
const ArrowLink = ({ rotate, color = '#2D2D2D' }: PropTypes) => {
  const pathRef = useRef(null);
  const { isScreenMd } = useResize();
  const startPathAnimation = () => {
    // @ts-ignore
    if (pathRef.current.style) {
      // @ts-ignore
      pathRef.current.style.animation = 'dash .8s linear forwards';
    }
  };
  const removePathAnimation = () => {
    // @ts-ignore
    if (pathRef.current.style) {
      // @ts-ignore
      pathRef.current.style.animation = 'dashReverse .8s linear forwards';
    }
  };
  useEffect(() => {
    if (rotate) {
      startPathAnimation();
    } else {
      removePathAnimation();
    }
  }, [rotate]);
  return (
    <div className="relative">
      <div className={`${rotate ? 'relative transition-all duration-[.8s] rotate-0 w-[40px] h-[40px]' : 'relative transition-all duration-[.8s] -rotate-45 hover:rotate-0 w-[40px] h-[40px]'}`} onMouseEnter={startPathAnimation} onMouseLeave={removePathAnimation}>
        <svg
          width={isScreenMd ? '40px' : '25px'}
          height={isScreenMd ? '40px' : '25px'}
          strokeWidth="1.3"
          fill="transparent"
          stroke={color}
          style={{
            position: 'absolute', zIndex: 10,
          }}
        >
          <path d={isScreenMd ? 'M0.5,0.5 H39.5 V39.5 H0.5 Z' : 'M0.5,0.5 H25.5 V25.5 H0.5 Z'} className="arrow-path" ref={pathRef} />
        </svg>
        <svg
          width={isScreenMd ? '40px' : '25px'}
          height={isScreenMd ? '40px' : '25px'}
          fill="transparent"
          strokeWidth="0.5"
          stroke={color}
          style={{ position: 'absolute' }}
        >
          <path d={isScreenMd ? 'M0.5,0.5 H39.5 V39.5 H0.5 Z' : 'M0.5,0.5 H25.5 V25.5 H0.5 Z'} />
        </svg>
      </div>
      <div className="arrow" style={{ backgroundColor: color }} />
      <div className="arrow-line" style={{ backgroundColor: color }} />
    </div>
  );
};

ArrowLink.defaultProps = {
  color: '#000000',
};

export default ArrowLink;
