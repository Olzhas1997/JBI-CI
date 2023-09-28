import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HandySvg } from 'handy-svg';

type TypeSvg = {
  src: string,
  width: number,
  height: number,
  // eslint-disable-next-line react/require-default-props
  className?: string,
};

const SvgSprite: FC<TypeSvg> = ({
  src, width, height, className = '',
}: TypeSvg) => (
  <HandySvg
    src={src}
    width={width}
    height={height}
    className={className}
  />
);

export default SvgSprite;
