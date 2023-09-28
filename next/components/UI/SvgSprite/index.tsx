import React, { FC } from 'react';
import { HandySvg } from 'handy-svg';

type PropTypes = {
  src: string,
  width: number,
  height: number
};

const Index: FC<PropTypes> = ({ src, width, height }: PropTypes) => (
  <HandySvg
    src={src}
    width={width}
    height={height}
  />
);

export default Index;
