import React, { FC } from 'react';

type SectionText = {
  text: string,
};

const SectionTitle: FC<SectionText> = ({ text }: SectionText) => (
  <h5 className="uppercase">
    {text}
  </h5>
);

export default SectionTitle;
