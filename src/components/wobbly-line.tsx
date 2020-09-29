import React, { useMemo } from 'react';
import { DefaultTheme } from 'styled-components';
import { theme } from '../theme';
import { Box } from './box';

export interface WobblyLineProps {
  backgroundColor?: keyof DefaultTheme['colors'];
  foregroundColor?: keyof DefaultTheme['colors'];
  height?: number;
  customWidthPercentage?: number;
}

const PATHS = [
  'M 0 150 Q 80 0 175 50 Q 300 150 450 100 Q 650 0 800 150 Z',
  'M 0 150 Q 100 150 200 100 Q 400 0 600 100 Q 750 150 800 150 Z',
  'M 0 150 Q 150 50 300 100 Q 500 150 600 100 Q 700 50 800 150 Z',
  'M 0 150 Q 100 50 250 100 Q 500 200 600 100 Q 700 50 800 150 Z',
];

const WobblyLine = ({
  backgroundColor = 'green',
  foregroundColor = 'white',
  height = 90,
  customWidthPercentage,
}: WobblyLineProps) => {
  const path = useMemo(
    () => PATHS[Math.floor(Math.random() * PATHS.length)],
    []
  );

  return (
    <Box
      backgroundColor={backgroundColor}
      flexGrow={1}
      style={
        customWidthPercentage
          ? {
              width: `${customWidthPercentage}%`,
              transform: `translateX(${-100 / customWidthPercentage}%)`,
            }
          : {}
      }
    >
      <svg
        preserveAspectRatio="none"
        width="100%"
        height={height}
        viewBox="0 0 800 150"
      >
        <path d={path} fill={theme.colors[foregroundColor]}></path>
      </svg>
    </Box>
  );
};

export { WobblyLine };
