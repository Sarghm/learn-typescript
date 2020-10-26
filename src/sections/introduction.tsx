import React, { useCallback, useMemo } from 'react';
import { Box } from '../components/box';
import { Typography } from '../components/typography';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { VideoPlayer } from '../components/video-player';
import { Button } from '../components/button';
import { InfoPoint } from '../components/info-point';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { useScrollContext } from '../context/scroll';
import { useSpring, animated, useTrail } from 'react-spring';
import { DefaultAnimationConfigFastBounce } from '../consts/animated';
import { WobblyLine } from '../components/wobbly-line';
import { Circle } from '../components/circle';
import { responsiveValue } from '../utils/dimensions';
import { theme } from '../theme';
import { LightningBoltOutline } from 'heroicons-react';
import { AcademicCapOutline } from 'heroicons-react';
import { SparklesOutline } from 'heroicons-react';
import { DEFAULT_ICON_SIZE } from '../consts/icons';
import { VIDEO_CONTAINER_ASPECT_RATIO } from '../consts/video';
import { SectionProps } from './shared';
import { useAnalyticsContext, AnalyticEvent } from '../context/analytics';

const WOBBLY_LINE_HEIGHT = 90;
const CODESNAP_LOGO_WIDTH = 150;

const KEY_FEATURES = [
  {
    icon: (
      <LightningBoltOutline
        size={DEFAULT_ICON_SIZE}
        color={theme.colors.pink}
      />
    ),
    title: `Lightning-fast learning`,
    description: `Learn the basics of TypeScript in just under two hours. No frills; just the core knowledge you’ll need to start writing TypeScript.`,
  },
  {
    icon: (
      <SparklesOutline size={DEFAULT_ICON_SIZE} color={theme.colors.pink} />
    ),
    title: `JavaScript developers welcome`,
    description: `This course teaches TypeScript through quick, simple exercises, so as long as you’re familiar with basic JavaScript, this course is for you.`,
  },
  {
    icon: (
      <AcademicCapOutline size={DEFAULT_ICON_SIZE} color={theme.colors.pink} />
    ),
    title: `Become TypeScript ready`,
    description: `After you’ve finished the course, you’ll have everything you need to start writing TypeScript in your next project, or upgrade an existing JavaScript codebase.`,
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IntroductionSection = ({ isVisible }: SectionProps) => {
  const { logEvent } = useAnalyticsContext();
  const { scrollToSection } = useScrollContext();
  const { currentSize } = useScreenDimensionsContext();
  const textContainerInnerPaddingY = useMemo(
    () => responsiveValue(currentSize, 'fifty', 'oneHundred'),
    [currentSize]
  );

  const titleSpring = useSpring({
    from: {
      opacity: 0,
      transform: `translateY(30px)`,
    },
    to: {
      opacity: 1,
      transform: `translateY(0}px)`,
    },
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
    delay: 400,
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
    delay: 1000,
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
    delay: 1200,
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
    delay: 1400,
    config: DefaultAnimationConfigFastBounce,
  });

  const handlePressedWatchFreeSection = useCallback(() => {
    logEvent(AnalyticEvent.PressedWatchFreeSection);
    scrollToSection(Section.Offer);
  }, [logEvent, scrollToSection]);

  const circles = useMemo(() => {
    if (currentSize !== 'xs')
      return (
        <>
          <Circle size={1300} borderWidth={60} color="white-twenty" />
          <Circle size={1000} borderWidth={80} color="white-twenty" />
          <Circle size={600} borderWidth={120} color="white-twenty" />
        </>
      );
    return null;
  }, [currentSize]);

  return (
    <>
      <SectionContainer flexGrow={1} backgroundColor="green" zIndex={1}>
        <SectionMarker id={Section.Introduction} />
        {circles}
        <GridContainer currentSize={currentSize}>
          <GridRow>
            <GridColumn
              offset={responsiveValue(currentSize, 0, 2)}
              span={responsiveValue(currentSize, 12, 8)}
            >
              <Box flexDirection="column" py={textContainerInnerPaddingY}>
                <animated.div style={titleSpring}>
                  <Typography
                    textStyle={responsiveValue(currentSize, 'h2', 'h1')}
                    color="white"
                    textAlign="center"
                  >
                    An Introduction to TypeScript
                  </Typography>
                </animated.div>
                <animated.div style={subtitleSpring}>
                  <Box
                    mt={responsiveValue(currentSize, 'ten', 'twenty')}
                    px={textContainerInnerPaddingY}
                  >
                    <Typography
                      textStyle={responsiveValue(
                        currentSize,
                        'h4Light',
                        'h3Light'
                      )}
                      color="white"
                      textAlign="center"
                    >
                      A short video course to introduce JavaScript developers to
                      the magic of TypeScript
                    </Typography>
                  </Box>
                  <Box
                    height={1}
                    justifySelf="center"
                    backgroundColor="white-forty"
                    m="0 auto"
                    my="twenty"
                    mb="ten"
                    width="50%"
                  />
                  <Box flexDirection="column" alignItems="center">
                    <Typography
                      textStyle="bodySmall"
                      color="white"
                      textAlign="center"
                    >
                      Presented by
                    </Typography>
                    <img
                      src="/images/codesnap-logo.png"
                      width={CODESNAP_LOGO_WIDTH}
                      alt="CodeSnap Logo"
                    />
                  </Box>
                </animated.div>
              </Box>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </SectionContainer>
      <WobblyLine
        backgroundColor="green"
        foregroundColor="white"
        customWidthPercentage={currentSize === 'xs' ? 200 : undefined}
      />
      <SectionContainer
        mt={-theme.space[textContainerInnerPaddingY] - WOBBLY_LINE_HEIGHT}
        zIndex={2}
      >
        <GridContainer currentSize={currentSize}>
          <GridRow>
            <GridColumn
              offset={responsiveValue(currentSize, 0, 1, 2)}
              span={responsiveValue(currentSize, 12, 10, 8)}
            >
              <animated.div
                style={{ justifyContent: 'center', ...videoSpring }}
              >
                <VideoPlayer
                  title="Introduction to TypeScript video"
                  vimeoId="471773793"
                  mt="thirty"
                  width="100%"
                  aspectRatio={VIDEO_CONTAINER_ASPECT_RATIO}
                  backgroundColor="black"
                  onPlay={() => logEvent(AnalyticEvent.PlayedIntroVideo)}
                />
              </animated.div>
            </GridColumn>
          </GridRow>
          <GridRow mt="twenty">
            <GridColumn
              offset={responsiveValue(currentSize, 1, 3)}
              span={responsiveValue(currentSize, 10, 6)}
            >
              <animated.div style={buttonSpring}>
                <Button textStyle="h3" onPress={handlePressedWatchFreeSection}>
                  Watch a free chapter
                </Button>
              </animated.div>
            </GridColumn>
          </GridRow>
          <GridRow
            pt="fifty"
            withGutter={responsiveValue(currentSize, true, false)}
            pb={responsiveValue(currentSize, undefined, 'oneHundred')}
            flexDirection={responsiveValue(currentSize, 'column', 'row')}
            alignItems="flex-start"
          >
            {KEY_FEATURES.map((keyFeature, index) => (
              <GridColumn
                key={keyFeature.title}
                span={responsiveValue(currentSize, 12, 4)}
                mt={responsiveValue(
                  currentSize,
                  index === 0 ? 'zero' : 'twenty',
                  'zero'
                )}
              >
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
