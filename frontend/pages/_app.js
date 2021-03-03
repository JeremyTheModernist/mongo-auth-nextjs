import AppWrapper from '../components/AppWrapper';
import UserProvider from '../state/UserProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </AppWrapper>
  );
}

export default MyApp;
