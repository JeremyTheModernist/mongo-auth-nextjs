import { create } from 'domain';
import React from 'react';
import { createContext, useContext } from 'react';
import { useLogin, useLogout, useSignup, useGetUser } from './hooks/index.js';

const userContext = {
  useGetUser,
  useSignup,
  useLogin,
  useLogout,
};

const UserContext = createContext(userContext);

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ useSignup, useLogin, useLogout, useGetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
