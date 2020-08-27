// ButtonGroup.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Box } from '../components/box';
import { Card } from '../components/card';
import { Typography } from '../components/typography';

export default {
  title: 'Card',
  component: Card,
} as Meta;

export const SingleCard = () => (
  <ThemeProvider theme={theme}>
    <Card>
      <Box p="ten">
        <Typography>Hello there!</Typography>
      </Box>
    </Card>
  </ThemeProvider>
);
