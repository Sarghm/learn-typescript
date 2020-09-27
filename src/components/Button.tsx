import React, { useState, useMemo } from 'react';
import { Box } from './box';
import { Typography } from './typography';
import { DefaultTheme } from 'styled-components';
import { theme } from '../theme';
import { useSpring, animated } from 'react-spring';
import { DefaultAnimationConfigFastNoBounce } from '../consts/animated';

const BUTTON_DEPTH = 10;

const ButtonVariants: {
  [key: string]: {
    backgroundColor: keyof DefaultTheme['colors'];
    textColor: keyof DefaultTheme['colors'];
    shadowColor: keyof DefaultTheme['colors'];
  };
} = {
  default: {
    backgroundColor: 'pink',
    textColor: 'white',
    shadowColor: 'pinkDark',
  },
  white: {
    backgroundColor: 'white',
    textColor: 'pink',
    shadowColor: 'grey',
  },
};

export interface ButtonProps {
  variant?: keyof typeof ButtonVariants;
  textStyle?: keyof typeof theme.textStyles;
  children: string;
  onPress?: () => void;
}

const Button = ({
  variant = 'default',
  children,
  textStyle = 'h3',
  onPress,
}: ButtonProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const { backgroundColor, textColor, shadowColor } = ButtonVariants[variant];

  const depth = useMemo(() => {
    if (active) return BUTTON_DEPTH;
    return hovered ? -BUTTON_DEPTH * 0.25 : 0;
  }, [active, hovered]);

  const outerContainerProps = useSpring({
    top: depth,
    config: DefaultAnimationConfigFastNoBounce,
  });
  const shadowContainerProps = useSpring({
    top: BUTTON_DEPTH - depth,
    config: DefaultAnimationConfigFastNoBounce,
  });

  return (
    <animated.div
      style={{
        ...outerContainerProps,
        position: 'relative',
        alignSelf: 'center',
        zIndex: 2,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={onPress}
    >
      <Box
        position="relative"
        style={{ cursor: 'pointer' }}
        borderRadius="sm"
        backgroundColor={backgroundColor}
        px="twenty"
        py="ten"
      >
        <Typography
          textStyle={textStyle}
          color={textColor}
          textAlign="center"
          flexGrow={1}
        >
          {children}
        </Typography>
        <animated.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            ...shadowContainerProps,
          }}
        >
          <Box
            height="100%"
            width="100%"
            position="relative"
            borderRadius="sm"
            flexGrow={1}
            backgroundColor={theme.colors[shadowColor]}
            zIndex={-1}
          />
        </animated.div>
      </Box>
    </animated.div>
  );
};

export { Button };
