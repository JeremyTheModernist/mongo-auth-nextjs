import React, { useEffect } from 'react';
import styled from 'styled-components';
import Form from './Form';
import useSWR from 'swr';
import { useUserContext } from '../state/UserProvider';
import { useRouter } from 'next/router';
import Status from './Status';

const formInputs = [
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

const Login = () => {
  const { useLogin } = useUserContext();
  const { execute, isError } = useLogin({ redirectURL: '/profile' });
  return (
    <>
      {isError && <Status>{isError.message}</Status>}
      <Form formInputs={formInputs} handleOnSubmit={(formData) => execute(formData)} />
    </>
  );
};

export default Login;
