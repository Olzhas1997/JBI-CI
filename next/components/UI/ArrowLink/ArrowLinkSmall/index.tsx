import { useEffect, useRef } from 'react';

type PropTypes = {
  rotate: boolean
  color?: string
};
const ArrowLinkSmall = ({ rotate, color = '#2D2D2D' }: PropTypes) => {
  const pathRef = useRef(null);
  const startPathAnimation = () => {
    // @ts-ignore
    if (pathRef.current.style) {
      // @ts-ignore
      pathRef.current.style.animation = 'dash-small .8s linear forwards';
    }
  };
  const removePathAnimation = () => {
    // @ts-ignore
    if (pathRef.current.style) {
      // @ts-ignore
      pathRef.current.style.animation = 'dashReverseSmall .8s linear forwards';
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
      <div style={{ transform: rotate ? 'rotate(0)' : 'rotate(-45deg)' }} className="relative transition-all duration-[.8s] w-[25px] h-[25px]" onMouseEnter={startPathAnimation} onMouseLeave={removePathAnimation}>
        <svg
          width="25px"
          height="25px"
          strokeWidth="1.3"
          fill="transparent"
          stroke={color}
          style={{
            position: 'absolute', zIndex: 10,
          }}
        >
          <path d="M0.5,0.5 H24.5 V24.5 H0.5 Z" className="arrow-path-small" ref={pathRef} />
        </svg>
        <svg
          width="25px"
          height="25px"
          fill="transparent"
          strokeWidth="0.5"
          stroke={color}
          style={{ position: 'absolute' }}
        >
          <path d="M0.5,0.5 H24.5 V24.5 H0.5 Z" />
        </svg>
      </div>
      <div className="arrow-small" style={{ backgroundColor: color }} />
      <div className="arrow-line-small" style={{ backgroundColor: color }} />
    </div>
  );
};

ArrowLinkSmall.defaultProps = {
  color: '#000000',
};

export default ArrowLinkSmall;
