import React from 'react';
import { Box } from './box';
import { Typography } from './typography';

export interface InfoPointProps {
  title: string;
  description: string;
}

const InfoPoint = ({ title, description }: InfoPointProps) => {
  return (
    <Box flexDirection="column">
      <Typography textStyle="h3">{title}</Typography>
      <Typography textStyle="body">{description}</Typography>
    </Box>
  );
};

export { InfoPoint };
