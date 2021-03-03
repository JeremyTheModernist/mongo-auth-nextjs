import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { useUserContext } from '../state/UserProvider';

const formInputs = [
  {
    id: 'username',
    type: 'text',
    name: 'username',
  },
  {
    id: 'email',
    type: 'email',
    name: 'email',
  },
  {
    id: 'password',
    type: 'password',
    name: 'password',
  },
];

const Signup = () => {
  const { useSignup } = useUserContext();
  const { execute } = useSignup({ redirectURL: '/profile' });
  return (
    <>
      <Form formInputs={formInputs} handleOnSubmit={(formData) => execute(formData)} />
    </>
  );
};

export default Signup;
