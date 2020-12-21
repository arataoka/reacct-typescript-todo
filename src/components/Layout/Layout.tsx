import React from 'react';
import Style from './Layout.module.scss';

const Layout = ({ children }: any) => {
  return <div className={Style.wrapper}>{children}</div>;
};

export default Layout;
