import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Box } from './box';

interface CircleProps {
  size: number;
  borderWidth: number;
  color: keyof DefaultTheme['colors'];
}

const Circle = ({ size, borderWidth, color }: CircleProps) => {
  return (
    <Box
      position="absolute"
      width={size}
      height={size}
      borderRadius={size}
      borderColor={color}
      borderWidth={borderWidth}
      borderStyle="solid"
    />
  );
};

export { Circle };
