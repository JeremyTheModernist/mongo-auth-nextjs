import styled from 'styled-components';

const HomePageStyles = styled.main`
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

export default function Home() {
  return (
    <HomePageStyles>
      <h1>Welcome to FunBooks!</h1>
    </HomePageStyles>
  );
}
