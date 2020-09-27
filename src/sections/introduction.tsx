import React, { useCallback, useState } from 'react';
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
import { VisibleMarker } from '../components/visible-marker';
import { Section } from '../consts/sections';
import { useScrollContext } from '../context/scroll';
import { useSpring, animated, useTrail } from 'react-spring';
import { DefaultAnimationConfigFastBounce } from '../consts/animated';

const VIDEO_CONTAINER_ASPECT_RATIO = 0.56;
const TEXT_CONTAINER_INNER_PADDING_BOTTOM = theme.space.oneHundred;

const KEY_FEATURES = [
  {
    title: `⚡️ Lightning-fast learning`,
    description: `Learn the basics of TypeScript in just under two hours. No frills; just the core knowledge you’ll need to start writing TypeScript.`,
  },
  {
    title: `⚡️ All JavaScript developers welcome`,
    description: `This course teaches TypeScript through quick, simple exercises, so as long as you’re familiar with basic JavaScript, this course is for you.`,
  },
  {
    title: `⚡️ Become TypeScript ready`,
    description: `After you’ve finished the course, you’ll have everything you need to start writing TypeScript in your next project, or upgrade an existing JavaScript codebase.`,
  },
];

const IntroductionSection = () => {
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { scrollToSection } = useScrollContext();
  const { currentSize } = useScreenDimensionsContext();

  const handleVisibilityChanged = useCallback(
    (isVisible: boolean) => {
      setIsAnimatedIn(isAnimatedIn || isVisible);
    },
    [isAnimatedIn]
  );

  const titleSpring = useSpring({
    transform: `translateY(${isAnimatedIn ? 0 : 30}px)`,
    opacity: isAnimatedIn ? 1 : 0,
    config: DefaultAnimationConfigFastBounce,
  });

  const subtitleSpring = useSpring({
    from: {
      opacity: 0,
      transform: `translateY(30px)`,
    },
    to: {
      opacity: 1,
      transform: `translateY(0px)`,
    },
    delay: 200,
    config: DefaultAnimationConfigFastBounce,
  });

  const videoSpring = useSpring({
    from: {
      opacity: 0,
      transform: `scale(0.8, 0.8)`,
    },
    to: {
      opacity: 1,
      transform: `scale(1, 1)`,
    },
    delay: 600,
    config: DefaultAnimationConfigFastBounce,
  });

  const buttonSpring = useSpring({
    from: {
      opacity: 0,
      transform: `scale(0.8, 0.8)`,
    },
    to: {
      opacity: 1,
      transform: `scale(1, 1)`,
    },
    delay: 800,
    config: DefaultAnimationConfigFastBounce,
  });

  const keyFeaturesSpring = useTrail(KEY_FEATURES.length, {
    from: {
      opacity: 0,
      transform: `translateY(30px)`,
    },
    to: {
      opacity: 1,
      transform: `translateY(0px)`,
    },
    delay: 800,
    config: DefaultAnimationConfigFastBounce,
  });

  return (
    <>
      <SectionContainer flexGrow={1} backgroundColor="green">
        <VisibleMarker
          id={Section.Introduction}
          onVisibilityChanged={handleVisibilityChanged}
        />
        <GridContainer currentSize={currentSize}>
          <GridRow>
            <GridColumn offset={2} span={8}>
              <Box
                flexDirection="column"
                py={TEXT_CONTAINER_INNER_PADDING_BOTTOM}
              >
                <animated.div style={titleSpring}>
                  <Typography textStyle="h1" color="white" textAlign="center">
                    JavaScript to TypeScript
                  </Typography>
                </animated.div>
                <animated.div style={subtitleSpring}>
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
                </animated.div>
              </Box>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </SectionContainer>
      <SectionContainer mt={-TEXT_CONTAINER_INNER_PADDING_BOTTOM}>
        <GridContainer currentSize={currentSize}>
          <GridRow>
            <GridColumn offset={2} span={8}>
              <animated.div
                style={{ justifyContent: 'center', ...videoSpring }}
              >
                <VideoPlayer
                  mt="thirty"
                  width="100%"
                  aspectRatio={VIDEO_CONTAINER_ASPECT_RATIO}
                  backgroundColor="black"
                />
              </animated.div>
            </GridColumn>
          </GridRow>
          <GridRow mt="twenty">
            <GridColumn offset={3} span={6}>
              <animated.div style={buttonSpring}>
                <Button
                  textStyle="h3"
                  onPress={() => scrollToSection(Section.Offer)}
                >
                  Get the first section for free!
                </Button>
              </animated.div>
            </GridColumn>
          </GridRow>
          <GridRow pt="fifty" pb="oneHundred" withGutter>
            {KEY_FEATURES.map((keyFeature, index) => (
              <GridColumn span={4} key={keyFeature.title}>
                <animated.div style={keyFeaturesSpring[index]}>
                  <InfoPoint {...keyFeature} />
                </animated.div>
              </GridColumn>
            ))}
          </GridRow>
        </GridContainer>
      </SectionContainer>
    </>
  );
};

export { IntroductionSection };
