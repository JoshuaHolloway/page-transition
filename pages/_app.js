import React from 'react';
import Header from '../components/Header';
import PageTransisions from '../components/PageTransition';
import GlobalStyle from '../styles/global-style';

import { useRouter } from 'next/router';

// ==============================================

const MyApp = ({ Component, pageProps }) => {
  // --------------------------------------------

  const router = useRouter();

  // --------------------------------------------

  return (
    <>
      <Header />
      <PageTransisions route={router.asPath}>
        <Component {...pageProps} />
      </PageTransisions>
      <GlobalStyle />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

// ==============================================

export default MyApp;
