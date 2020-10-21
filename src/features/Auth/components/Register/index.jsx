import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    try {
      values.username = values.email;

      // dispatch register action
      const action = register(values);
      const resultAction = dispatch(action);
      const user = unwrapResult(resultAction);

      console.log('New user: ', user);
    } catch (error) {
      console.log('Failed to register: ', error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
