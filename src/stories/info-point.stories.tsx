// ButtonGroup.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { InfoPoint, InfoPointProps } from '../components/info-point';

export default {
  title: 'Info Point',
  component: InfoPoint,
  args: {
    title: 'Default Title',
    description: 'Default Subtitle',
  },
} as Meta<InfoPointProps>;

export const SingleInfoPoint = (props: InfoPointProps) => (
  <ThemeProvider theme={theme}>
    <InfoPoint {...props} />
  </ThemeProvider>
);
