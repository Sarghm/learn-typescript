import React, { useState } from 'react';
import { Box } from './box';
import { Typography } from './typography';
import { DefaultTheme } from 'styled-components';
import { theme } from '../theme';

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
};

export interface ButtonProps {
  variant?: keyof typeof ButtonVariants;
  textStyle?: keyof typeof theme.textStyles;
  children: string;
}

const Button = ({
  variant = 'default',
  children,
  textStyle = 'h3',
}: ButtonProps) => {
  const [active, setActive] = useState<boolean>(false);
  const { backgroundColor, textColor, shadowColor } = ButtonVariants[variant];
  return (
    <Box
      style={{ cursor: 'pointer' }}
      borderRadius="sm"
      backgroundColor={backgroundColor}
      px="twenty"
      py="ten"
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      marginTop={active ? BUTTON_DEPTH : 0}
      boxShadow={`0px ${active ? 0 : BUTTON_DEPTH}px 0px ${
        theme.colors[shadowColor]
      }`}
      alignSelf="center"
    >
      <Typography
        textStyle={textStyle}
        color={textColor}
        textAlign="center"
        flexGrow={1}
      >
        {children}
      </Typography>
    </Box>
  );
};

export { Button };
