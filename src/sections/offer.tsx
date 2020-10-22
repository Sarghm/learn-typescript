import React from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { Box } from '../components/box';
import { TextInput } from '../components/text-input';
import { Button } from '../components/button';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { responsiveValue } from '../utils/dimensions';
import { VideoPlayer } from '../components/video-player';
import { VIDEO_CONTAINER_ASPECT_RATIO } from '../consts/video';
import { SectionProps } from './shared';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OfferSection = ({ isVisible }: SectionProps) => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer
      flexGrow={1}
      backgroundColor="white"
      py={responsiveValue(currentSize, 'thirty', 'oneHundred')}
    >
      <SectionMarker id={Section.Offer} />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={8} offset={2}>
            <VideoPlayer aspectRatio={VIDEO_CONTAINER_ASPECT_RATIO} />
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
