import React from 'react';
import { UserImage } from '../UserImage';

import style from './Item.module.scss';

interface ItemProps {
  name: string;
  // children: React.ReactNode;
}

export const Item = ({ name }: ItemProps) => {
  return (
    <div className={style.item}>
      <UserImage name={name} />
      <div className={style.item__body}>
        {/* {children} */}
        <div className={style['item__body-name']}>
          <p>Gentleman Owners</p>
          <small>3:08 p. m.</small>
        </div>
        <div className='item__body-message'>
          <small>Josaue: pero ahi dejo el detalle :v</small>
        </div>
      </div>
    </div>
  );
};
