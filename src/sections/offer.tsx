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
import { TextInput } from '../components/text-input';
import { Button } from '../components/button';
import { VisibleMarker } from '../components/visible-marker';
import { Section } from '../consts/sections';
import { responsiveValue } from '../utils/dimensions';

const OfferSection = () => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer
      flexGrow={1}
      backgroundColor="white"
      py={responsiveValue(currentSize, 'thirty', 'oneHundred')}
    >
      <VisibleMarker id={Section.Offer} />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={8} offset={2}>
            <Typography textStyle="h2" color="pink" textAlign="center">
              Get the first 2 videos for free.
            </Typography>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={8} offset={2}>
            <Box flexDirection="column">
              <Box mt="twenty">
                <TextInput placeholder="enter@youremail.here" />
              </Box>
              <Box mt="twenty" justifyContent="center">
                <Button textStyle="h4">Get the first bit free</Button>
              </Box>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { OfferSection };
