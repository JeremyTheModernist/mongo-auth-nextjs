import React from 'react';

const withAuth = (Page = '') => {
  const HOC = (pageProps) => {
    return (
      <>
        <Page {...pageProps} />
      </>
    );
  };
  return HOC;
};

// call this function within the pages getServerSideProps
withAuth.isAuthorized = (context) => {
  // to note, every time a server call is made from the client
  // getServerSideProps will send the context
  // this context has cookies attached to the request
  // we are looking for the JWT cookie called token
  // if it exists, then set isAuthorized to true
  const isAuthorized = context.req.cookies.token ? true : false;
  // if user is not authorized than redirect
  if (!isAuthorized) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      isAuthorized,
    },
  };
};

export default withAuth;
