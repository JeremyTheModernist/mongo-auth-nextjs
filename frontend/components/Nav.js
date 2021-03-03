import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useUserContext } from '../state/UserProvider';

const NavStyles = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  justify-content: space-around;
  color: var(--white);
  padding: 0;
`;

const Nav = () => {
  const { useLogout } = useUserContext();
  const { execute } = useLogout({ redirectURL: '/' });
  return (
    <nav>
      <NavStyles>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <a href="/" onClick={execute}>
            Logout
          </a>
        </li>
      </NavStyles>
    </nav>
  );
};

export default Nav;
