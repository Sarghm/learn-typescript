import { CheckCircleOutline } from 'heroicons-react';
import React from 'react';
import { DefaultTheme } from 'styled-components';
import { theme } from '../theme';
import { Box } from './box';
import { Typography } from './typography';

const CHECK_MARK_SIZE = 36;

export interface CheckListItemProps {
  title: string;
  children?: string;
  textColor?: keyof DefaultTheme['colors'];
  textStyle?: keyof DefaultTheme['textStyles'];
}

const CheckListItem = ({
  title,
  children,
  textColor = 'white',
  textStyle = 'h3',
}: CheckListItemProps) => {
  return (
    <Box flexDirection="column">
      <Box flexDirection="row" alignItems="center">
        <Box width={CHECK_MARK_SIZE}>
          <CheckCircleOutline
            color={theme.colors.pink}
            size={CHECK_MARK_SIZE}
            style={{ marginRight: 15 }}
          />
        </Box>
        <Typography textStyle={textStyle} color={textColor}>
          {title}
        </Typography>
      </Box>
      {children ? (
        <Box mt="ten">
          <Typography textStyle="body" color={textColor}>
            {children}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export { CheckListItem };
