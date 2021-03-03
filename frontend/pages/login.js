import Head from 'next/head';
import Login from '../components/Login';
import styled from 'styled-components';

const LoginPageStyles = styled.main`
  display: flex;
  flex-flow: column wrap;
  margin: auto;
  margin-top: var(--padding-xlarge);
  max-width: 600px;
  padding: var(--padding-large);
  h1 {
    margin: auto;
    margin-bottom: var(--padding-large);
  }
`;

export const getServerSideProps = (context) => {
  console.log('incoming request!', context.req.cookies);
  return {
    props: {},
  };
};

export default function LoginPage() {
  return (
    <LoginPageStyles>
      <h1>Please Login:</h1>
      <Login />
    </LoginPageStyles>
  );
}
