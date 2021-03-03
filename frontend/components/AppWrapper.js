import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './Nav';

const GlobalStyles = createGlobalStyle`
    :root {
        --black: hsl(270,3%,10%)
        --white: rgb(255,255,255);
        --primary-blue: hsl(215, 100%, 60%);
        --black: hsl(250, 70%, 10%);
        --gray-9: hsl(270, 40%, 20%);
        --gray-7: hsl(270, 40%, 30%);
        --gray-6: hsl(270, 40%, 40%);
        --gray-5: hsl(270, 40%, 50%);
        --gray-4: hsl(270, 40%, 60%);
        --white: hsl(270, 20%, 95%);
        --red-error: hsl(360,80%,60%);
        --type-xsmall: 1rem;
        --type-small: 1.3rem;
        --type-normal: 1.6rem;
        --type-large: 2.1rem;
        --type-xlarge: 2.6rem;
        --type-xxlarge: 3.4rem;
        --type-display: 4.8rem;
        --padding-xsmall: 5px;
        --padding-small: 10px;
        --padding-normal: 15px;
        --padding-large: 20px;
        --padding-xlarge: 25px;
        --padding-xxlarge: 100px;
        --border-small: 2px;
        --border-normal: 4px;
        --border-large: 8px;
    }
    html {
        background-color: var(--black);
    }
    body{
        max-width: 1280px;
        margin:auto;
    }
    h1{
        color: var(--white);
    }
`;

const AppWrapper = (props) => {
  return (
    <>
      <Nav />
      <GlobalStyles />
      <div>{props.children}</div>
    </>
  );
};

export default AppWrapper;
