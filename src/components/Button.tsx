import React from 'react';
import { Box } from './box';
import { Typography } from './typography';
import { DefaultTheme } from 'styled-components';
import { theme } from '../theme';

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
}

const Button = ({ variant = 'default' }: ButtonProps) => {
  const { backgroundColor, textColor, shadowColor } = ButtonVariants[variant];
  return (
    <Box
      borderRadius={8}
      backgroundColor={backgroundColor}
      px="twenty"
      py="ten"
      boxShadow={`0px 10px 0px ${theme.colors[shadowColor]}`}
    >
      <Typography textStyle="h3" color={textColor} textAlign="center">
        Hello there
      </Typography>
    </Box>
  );
};

export { Button };
