// React / Next:
import { useRef } from 'react';
import { useRouter } from 'next/router';

// Comps:
import Header from '../components/Header';
import PageTransisions from '../components/PageTransition';
import GlobalStyle from '../styles/global-style';

// Hooks:
import { useNavScroll } from '../hooks/use-nav-scroll';

// ==============================================

const MyApp = ({ Component, pageProps }) => {
  // --------------------------------------------

  const router = useRouter();

  // --------------------------------------------

  // -Header scroll animation:
  const header_ref = useRef(null);

  useNavScroll(header_ref);

  // --------------------------------------------

  return (
    <>
      <Header header_ref={header_ref} />
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
