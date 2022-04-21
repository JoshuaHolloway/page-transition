import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const duration = 1000;

// ==============================================

const MainComponent = styled.div`
  &.page-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
  }

  &.page-exit {
    ~ .wipe {
      transform: translateY(100%);
    }
  }
  &.page-exit-active {
    ~ .wipe {
      transform: translateY(0);
      transition: transform ${duration}ms ease;
    }
  }
  &.page-enter-done {
    ~ .wipe {
      transform: translateY(-100%);
      transition: transform ${duration}ms ease;
    }
  }
`;

// ==============================================

const Wipe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 1); /*#aaa; */
  z-index: 5;

  transform: translateY(100%);
`;

// ==============================================

const PageTransisions = ({ children, route }) => {
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={route} classNames='page' timeout={duration}>
          <MainComponent>{children}</MainComponent>
        </CSSTransition>
      </TransitionGroup>

      <Wipe className='wipe' />
    </>
  );
};

// ==============================================

export default PageTransisions;
