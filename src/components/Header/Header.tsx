import React from 'react';
import { UserImage } from '../UserImage';

import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <UserImage name='C' />
      <h1>Whatsapp Clone</h1>
    </header>
  );
};
