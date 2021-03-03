import Head from 'next/head';
import Signup from '../components/Signup';
import styled from 'styled-components';

const SignupPageStyles = styled.main`
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

export default function SignupPage() {
  return (
    <SignupPageStyles>
      <h1>Sign up today:</h1>
      <Signup />
    </SignupPageStyles>
  );
}
