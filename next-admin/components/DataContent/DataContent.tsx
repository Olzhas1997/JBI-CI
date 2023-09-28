import * as React from 'react';
import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
}
const DataContent: FC<IProps> = ({ children }: IProps) => (
  <div className="px-4 py-4 min-h-screen">{children}</div>
);

export default DataContent;
