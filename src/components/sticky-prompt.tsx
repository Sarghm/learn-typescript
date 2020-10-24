import React from 'react';
import { useSpring, animated } from 'react-spring';
import { DefaultAnimationConfigFastBounce } from '../consts/animated';
interface StickyPromptProps {
  visible: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const StickyPrompt = ({ visible, children, style = {} }: StickyPromptProps) => {
  const spring = useSpring({
    transform: `translateY(${visible ? 0 : 200}px)`,
    config: DefaultAnimationConfigFastBounce,
  });

  return (
    <animated.div
      style={{
        ...spring,
        position: 'fixed',
        ...style,
      }}
    >
      {children}
    </animated.div>
  );
};

export { StickyPrompt };
