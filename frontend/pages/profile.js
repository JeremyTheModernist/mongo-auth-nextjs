import styled from 'styled-components';
import Profile from '../components/Profile';
import withAuth from '../lib/withAuth';

const ProfilePageStyles = styled.main`
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
  return withAuth.isAuthorized(context);
};

function ProfilePage(props) {
  return (
    <ProfilePageStyles>
      <Profile />
    </ProfilePageStyles>
  );
}

export default withAuth(ProfilePage);
