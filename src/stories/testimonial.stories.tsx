// ButtonGroup.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Testimonial, TestimonialProps } from '../components/testimonial';
import { Box } from '../components/box';

export default {
  title: 'Testimonials',
  component: Testimonial,
  args: {
    testimonial: 'This is my default testimonial.',
    author: 'Default Author',
  },
} as Meta<TestimonialProps>;

export const SingleTestimonial = (props: TestimonialProps) => (
  <ThemeProvider theme={theme}>
    <Box width={300}>
      <Testimonial {...props} />
    </Box>
  </ThemeProvider>
);
