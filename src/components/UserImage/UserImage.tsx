import React from 'react';

import style from './UserImage.module.scss';

interface IUserImage {
  name: string;
}

export const UserImage = ({ name }: IUserImage) => {
  return (
    <div className={style.userImage}>
      <span className={style.userImage__letter}>{name}</span>
    </div>
  );
};
