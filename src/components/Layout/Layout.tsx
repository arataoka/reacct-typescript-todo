import React from 'react';
import Style from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className={Style.wrapper}>{children}</div>;
};

export default Layout;
