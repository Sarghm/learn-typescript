import React from 'react';
import { Box, BoxProps } from './box';

interface SectionContainerProps extends Omit<BoxProps, 'children' | 'color'> {
  children: React.ReactNode;
}

const SectionContainer = ({ children, ...rest }: SectionContainerProps) => {
  return (
    <Box justifyContent="center" alignItems="center" width="100%" {...rest}>
      {children}
    </Box>
  );
};

export { SectionContainer };
