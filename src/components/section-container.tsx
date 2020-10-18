import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Box, BoxProps } from './box';

interface SectionContainerProps
  extends Omit<BoxProps, 'children' | 'color' | 'backgroundColor'> {
  children: React.ReactNode;
  backgroundColor?: keyof DefaultTheme['colors'];
}

const SectionContainer = ({
  children,
  backgroundColor,
  ...rest
}: SectionContainerProps) => {
  return (
    <Box width="100%" backgroundColor={backgroundColor}>
      <Box justifyContent="center" alignItems="center" width="100%" {...rest}>
        {children}
      </Box>
    </Box>
  );
};

export { SectionContainer };
