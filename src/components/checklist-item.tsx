import { CheckCircleOutline } from 'heroicons-react';
import React from 'react';
import { theme } from '../theme';
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
        <CheckCircleOutline
          color={theme.colors.pink}
          size={CHECK_MARK_SIZE}
          style={{ marginRight: 15 }}
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
