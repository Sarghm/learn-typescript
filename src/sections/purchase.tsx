import React from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { Box } from '../components/box';
import { Typography } from '../components/typography';
import { Button } from '../components/button';
import { VisibleMarker } from '../components/visible-marker';
import { Section } from '../consts/sections';

const PurchaseSection = () => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer flexGrow={1} backgroundColor="pink" py="oneHundred">
      <VisibleMarker id={Section.Purchase} />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Typography textStyle="h2" color="white">
              Ready to buy?
            </Typography>
            <Box mt="twenty">
              <Typography textStyle="body" color="white">
                Some more information to know before buying
              </Typography>
            </Box>
            <Box mt="ten">
              <Typography textStyle="body" color="white">
                Some more information to know before buying
              </Typography>
            </Box>
            <Box mt="ten">
              <Typography textStyle="body" color="white">
                Some more information to know before buying
              </Typography>
            </Box>
            <Box mt="ten">
              <Typography textStyle="body" color="white">
                Some more information to know before buying
              </Typography>
            </Box>
            <Box mt="twenty" justifyContent="center">
              <Button variant="white" textStyle="h4">
                Buy the course for £19.99
              </Button>
            </Box>
            <Box mt="twenty" justifyContent="center">
              <Typography textStyle="body" color="white">
                Final disclaimer that you can return it if you don&apos;t want
                it
              </Typography>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { PurchaseSection };
