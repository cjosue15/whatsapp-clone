import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useSocketStore } from '../../context/socketContext';
import { useUserSocket } from '../../hooks';
import { IUser, IUserForm } from '../../models';

export const Login = () => {
  const navigate = useNavigate();
  const { socket } = useSocketStore();
  const { addUser } = useUserSocket();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForm>();

  const onSubmit = ({ name, phone }: IUserForm) => {
    const user: IUser = {
      name,
      phone,
      id: socket?.id || '',
    };

    addUser(user);
    navigate(`/`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='name' {...register('name', { required: true })} />
        {errors.name && <p>Last name is required.</p>}
        <input type='text' placeholder='phone' {...register('phone', { required: true })} />
        {errors.phone && <p>Last name is required.</p>}
        <button type='submit'>send data</button>
      </form>
    </div>
  );
};
