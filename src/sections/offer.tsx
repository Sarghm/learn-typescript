import React from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { responsiveValue } from '../utils/dimensions';
import { VideoPlayer } from '../components/video-player';
import { VIDEO_CONTAINER_ASPECT_RATIO } from '../consts/video';
import { SectionProps } from './shared';
import { AnalyticEvent, useAnalyticsContext } from '../context/analytics';
import { Box } from '../components/box';
import { Typography } from '../components/typography';
import { theme } from '../theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OfferSection = ({ isVisible }: SectionProps) => {
  const { logEvent } = useAnalyticsContext();
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
          <GridColumn span={12}>
            <Box flexDirection="column" alignItems="flex-start">
              <Box flexDirection="column">
                <Typography
                  textStyle="h2"
                  color="black"
                  textAlign={responsiveValue(currentSize, 'center', 'left')}
                >
                  Check out a sample chapter
                </Typography>
              </Box>
              <Box
                flexDirection="column"
                mb={responsiveValue(currentSize, 'twenty', 'thirty')}
                mt="twenty"
              >
                <Typography
                  textStyle="body"
                  color="black"
                  textAlign={responsiveValue(currentSize, 'center', 'left')}
                >
                  Interested in finding out if the course is for you? Stream the{' '}
                  <span style={{ fontFamily: theme.textStyles.h4.fontFamily }}>
                    Enums
                  </span>{' '}
                  chapter for free below!
                </Typography>
              </Box>
            </Box>
            <VideoPlayer
              title="TypeScript Course Sample Chapter - Enums"
              vimeoId="471773808"
              aspectRatio={VIDEO_CONTAINER_ASPECT_RATIO}
              onPlay={() => logEvent(AnalyticEvent.PlayedSampleChapter)}
            />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { OfferSection };
