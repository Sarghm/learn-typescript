// ButtonGroup.stories.tsx

import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import {
  PurchaseTile as PurchaseTileComponent,
  PurchaseTileProps,
} from '../components/purchase-tile';
import { Box } from '../components/box';

export default {
  title: 'Purchase Tile',
  component: PurchaseTileComponent,
  args: {
    title: 'Purchase Tile Title',
    items: [
      { title: 'My Checklist Item' },
      { title: 'My Checklist Item' },
      { title: 'My Checklist Item' },
      { title: 'My Checklist Item' },
      { title: 'My Checklist Item' },
      { title: 'My Checklist Item' },
    ],
    offer: 'Some text describing an offer could go here',
    cta: 'Buy now!',
  },
} as Meta<PurchaseTileProps>;

export const PurchaseTile = (props: PurchaseTileProps) => (
  <ThemeProvider theme={theme}>
    <Box width={600} backgroundColor="black" justifyContent="center">
      <PurchaseTileComponent {...props} />
    </Box>
  </ThemeProvider>
);
