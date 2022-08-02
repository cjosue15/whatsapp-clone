import React from 'react';
import { UserImage } from '../UserImage';

import style from './Item.module.scss';

interface ItemProps {
  name: string;
  shortName: string;
  onClickItem?: () => void;
  isHighlighted?: boolean;
}

export const Item = ({ name, shortName, isHighlighted, onClickItem }: ItemProps) => {
  const handlerClick = () => {
    onClickItem?.();
  };

  return (
    <div className={`${style.item} ${isHighlighted ? 'selected' : ''}`} onClick={handlerClick}>
      <UserImage name={shortName} />
      <div className={style.item__body}>
        <div className={style['item__body-name']}>
          <p>{name}</p>
          <small>3:08 p. m.</small>
        </div>
        <div className='item__body-message'>
          <small>Josaue: pero ahi dejo el detalle :v</small>
        </div>
      </div>
    </div>
  );
};
