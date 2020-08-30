import React from 'react';
import { Box } from './box';
import { Typography } from './typography';

export interface InfoPointProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

const InfoPoint = ({ title, description, icon }: InfoPointProps) => {
  return (
    <Box flexDirection="column">
      <Box flexDirection="row">
        {icon ? <Box mr="one">{icon}</Box> : null}
        <Typography textStyle="h3Light">{title}</Typography>
      </Box>
      <Typography textStyle="body">{description}</Typography>
    </Box>
  );
};

export { InfoPoint };
