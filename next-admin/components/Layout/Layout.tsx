import * as React from 'react';
import { FC } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

interface IProps {
  children: React.ReactNode;
}
const Layout: FC<IProps> = ({ children }: IProps) => (
  <div className="flex w-full">
    <div className="w-2/12 h-auto flex-1">
      <Sidebar />
    </div>
    <div className="w-10/12">
      { children }
    </div>
  </div>
);

export default Layout;
