import React, { useState } from 'react';
import { Box } from './box';
import { useSpring, animated } from 'react-spring';
import { DefaultAnimationConfigFastNoBounce } from '../consts/animated';
import { theme } from '../theme';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const spring = useSpring({
    transform: `scale(${hovered ? 1 : 0.95},${hovered ? 1 : 0.95})`,
    boxShadow: `0px 0px ${hovered ? 30 : 10}px rgba(47,46,46,0.${
      hovered ? 15 : 1
    })`,
    config: DefaultAnimationConfigFastNoBounce,
  });

  return (
    <animated.div
      style={{ ...spring, width: '100%', borderRadius: theme.radii.sm }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box
        flexGrow={1}
        borderWidth={1}
        borderRadius="sm"
        borderColor="black-twenty"
        borderStyle="solid"
      >
        {children}
      </Box>
    </animated.div>
  );
};

export { Card };
