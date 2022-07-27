import React from 'react';

import style from './Sidebar.module.scss';

import { Header } from '../Header/Header';
import { Item } from '../Item';

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Header />
      <div className={style.sidebar__users}>
        {new Array(100).fill(0).map((item, index) => {
          return <Item key={index} name={(index + 1).toString()} />;
        })}
      </div>
    </div>
  );
};
