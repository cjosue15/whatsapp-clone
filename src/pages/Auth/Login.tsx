import React from 'react';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

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
