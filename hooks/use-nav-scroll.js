import { useEffect, useRef, useContext } from 'react';
import { useRouter } from 'next/router';

// GSAP:
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ==============================================

const useNavScroll = (header_ref) => {
  // ----------------------------------------------

  const router = useRouter();

  // ----------------------------------------------

  // Scroll-Animation:
  useEffect(() => {
    const header = header_ref.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        // scroller: scroll,
        trigger: header,
        start: 'bottom 100px',
        end: 'bottom top',
        scrub: 1,
        // markers: true,
      },
    });

    tl.fromTo(
      header,
      {
        backgroundColor: 'hsla(118, 40%, 49%, 0)', // primary
        height: '100px',
      },
      {
        backgroundColor: 'hsla(118, 40%, 49%, 1)', // primary
        height: '85px',
      }
    );

    return () => tl.kill();
  }, [router.pathname]);

  // --------------------------------------------
};

// ==============================================

export { useNavScroll };
