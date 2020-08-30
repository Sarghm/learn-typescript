import React from 'react';
import { Box } from './box';
import { Typography } from './typography';

const CHECK_MARK_SIZE = 24;

export interface CheckListItemProps {
  title: string;
  children: string;
}

const CheckListItem = ({ title, children }: CheckListItemProps) => {
  return (
    <Box flexDirection="column">
      <Box flexDirection="row" alignItems="center">
        <Box
          width={CHECK_MARK_SIZE}
          height={CHECK_MARK_SIZE}
          borderRadius="sm"
          backgroundColor="white"
          mr="ten"
        />
        <Typography textStyle="h3" color="white">
          {title}
        </Typography>
      </Box>
      <Box mt="ten">
        <Typography textStyle="body" color="white">
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

export { CheckListItem };
