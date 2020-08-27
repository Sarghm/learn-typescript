import React from 'react';
import { Box } from './box';
import { theme } from '../theme';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <Box
      flexGrow={1}
      boxShadow={`0px 0px 10px ${theme.colors['black-ten']}`}
      borderWidth={1}
      borderRadius={8}
      borderColor="black-twenty"
      borderStyle="solid"
    >
      {children}
    </Box>
  );
};

export { Card };
