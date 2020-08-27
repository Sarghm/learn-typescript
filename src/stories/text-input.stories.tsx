// ButtonGroup.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Box } from '../components/box';
import { TextInput, TextInputProps } from '../components/text-input';

export default {
  title: 'Text Input',
  component: TextInput,
  args: {
    placeholder: 'This is my text placeholder.',
  },
} as Meta<TextInputProps>;

export const SingleTestimonial = (props: TextInputProps) => (
  <ThemeProvider theme={theme}>
    <Box width={300}>
      <TextInput {...props} />
    </Box>
  </ThemeProvider>
);
