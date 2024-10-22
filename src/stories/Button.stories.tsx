// ButtonGroup.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../components/button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Box } from '../components/box';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const SingleButton = (props: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Box width={300}>
      <Button {...props} />
    </Box>
  </ThemeProvider>
);
