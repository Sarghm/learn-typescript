import React from 'react';
import { Box } from './box';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <Box
      flexGrow={1}
      boxShadow="black-ten"
      borderWidth={1}
      borderRadius="sm"
      borderColor="black-twenty"
      borderStyle="solid"
    >
      {children}
    </Box>
  );
};

export { Card };
