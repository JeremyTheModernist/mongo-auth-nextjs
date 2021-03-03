import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
  outline: none;
  border: none;
  border-radius: var(--border-normal);
  background-color: var(--primary-blue);
  padding: var(--padding-large);
  cursor: pointer;
`;

const Button = ({ children, type = 'submit' }) => {
  return <ButtonStyles type={type}>{children}</ButtonStyles>;
};

export default Button;
