import React from 'react';
import { Box } from '../components/box';
import { Typography } from '../components/typography';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { theme } from '../theme';
import { VideoPlayer } from '../components/video-player';
import { Button } from '../components/button';
import { InfoPoint } from '../components/info-point';

const VIDEO_CONTAINER_ASPECT_RATIO = 0.56;
const TEXT_CONTAINER_INNER_PADDING_BOTTOM = theme.space.oneHundred;

const IntroductionSection = () => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <>
      <SectionContainer flexGrow={1} backgroundColor="green">
        <GridContainer currentSize={currentSize}>
          <GridRow>
            <GridColumn offset={2} span={8}>
              <Box
                flexDirection="column"
                py={TEXT_CONTAINER_INNER_PADDING_BOTTOM}
              >
                <Typography textStyle="h1" color="white" textAlign="center">
                  JavaScript to TypeScript
                </Typography>
                <Box mt="twenty" px="oneHundred">
                  <Typography
                    textStyle="h3Light"
                    color="white"
                    textAlign="center"
                  >
                    A short course to introduce JavaScript developers to the
                    magic of TypeScript
                  </Typography>
                </Box>
              </Box>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </SectionContainer>
      <SectionContainer mt={-TEXT_CONTAINER_INNER_PADDING_BOTTOM}>
        <GridContainer currentSize={currentSize}>
          <GridRow>
            <GridColumn offset={2} span={8}>
              <Box justifyContent="center">
                <VideoPlayer
                  mt="thirty"
                  width="100%"
                  aspectRatio={VIDEO_CONTAINER_ASPECT_RATIO}
                  backgroundColor="black"
                />
              </Box>
            </GridColumn>
          </GridRow>
          <GridRow mt="twenty">
            <GridColumn offset={3} span={6}>
              <Button textStyle="h3">Get the first section for free!</Button>
            </GridColumn>
          </GridRow>
          <GridRow pt="fifty" pb="oneHundred">
            <GridColumn span={4}>
              <InfoPoint
                title="⚡️ Lightning-fast learning"
                description="Learn the basics of TypeScript in just under two hours. No frills; just the core knowledge you’ll need to start writing TypeScript."
              />
            </GridColumn>
            <GridColumn span={4}>
              <InfoPoint
                title="⚡️ All JavaScript developers welcome"
                description="This course teaches TypeScript through quick, simple exercises, so as long as you’re familiar with basic JavaScript, this course is for you."
              />
            </GridColumn>
            <GridColumn span={4}>
              <InfoPoint
                title="⚡️ Become TypeScript ready"
                description="After you’ve finished the course, you’ll have everything you need to start writing TypeScript in your next project, or upgrade an existing JavaScript codebase."
              />
            </GridColumn>
          </GridRow>
        </GridContainer>
      </SectionContainer>
    </>
  );
};

export { IntroductionSection };
