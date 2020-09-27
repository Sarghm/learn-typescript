import React, { useCallback, useState } from 'react';
import { SectionContainer } from '../components/section-container';
import { Card } from '../components/card';
import { Typography } from '../components/typography';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { Box } from '../components/box';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { VisibleMarker } from '../components/visible-marker';
import { Section } from '../consts/sections';
import { useTrail, animated } from 'react-spring';
import { DefaultAnimationConfigFastBounce } from '../consts/animated';

interface CourseSection {
  title: string;
  length: string;
  points: string[];
  thumbnailImageURL: string;
}

const COURSE_SECTIONS: CourseSection[] = [
  {
    title: 'Arrays',
    length: 'About 15 minutes',
    points: ['Hello there', 'Hello there', 'Hello there', 'Hello there'],
    thumbnailImageURL: 'https://www.google.com',
  },
  {
    title: 'Arrays',
    length: 'About 15 minutes',
    points: ['Hello there', 'Hello there', 'Hello there', 'Hello there'],
    thumbnailImageURL: 'https://www.google.com',
  },
  {
    title: 'Arrays',
    length: 'About 15 minutes',
    points: ['Hello there', 'Hello there', 'Hello there', 'Hello there'],
    thumbnailImageURL: 'https://www.google.com',
  },
  {
    title: 'Arrays',
    length: 'About 15 minutes',
    points: ['Hello there', 'Hello there', 'Hello there', 'Hello there'],
    thumbnailImageURL: 'https://www.google.co.uk',
  },
];

const CourseBreakdownSection = () => {
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();

  const sectionsSpring = useTrail(COURSE_SECTIONS.length, {
    transform: `translateY(${isAnimatedIn ? 0 : 30}px)`,
    opacity: isAnimatedIn ? 1 : 0,
    config: DefaultAnimationConfigFastBounce,
  });

  const handleVisibilityChanged = useCallback(
    (isVisible: boolean) => {
      setIsAnimatedIn(isAnimatedIn || isVisible);
    },
    [isAnimatedIn]
  );

  return (
    <SectionContainer backgroundColor="white" py="oneHundred">
      <VisibleMarker
        id={Section.CourseBreakdown}
        onVisibilityChanged={handleVisibilityChanged}
      />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={4}>
            <Typography textStyle="h2" color="black" textAlign="center">
              150 Hours
            </Typography>
          </GridColumn>
          <GridColumn span={4}>
            <Typography textStyle="h2" color="black" textAlign="center">
              Another Statistic
            </Typography>
          </GridColumn>
          <GridColumn span={4}>
            <Typography textStyle="h2" color="black" textAlign="center">
              80 videos
            </Typography>
          </GridColumn>
        </GridRow>

        <GridRow mt="fifty">
          <GridColumn span={12}>
            <Box flexDirection="column">
              {COURSE_SECTIONS.map(({ title, length, points }, index) => (
                <animated.div key={title} style={sectionsSpring[index]}>
                  <Box mt={index !== 0 ? 'thirty' : undefined}>
                    <Card>
                      <Box flexDirection="column" p="twenty">
                        <Box flexDirection="row" alignItems="center">
                          <Typography
                            textStyle="h3Light"
                            color="black"
                            mr="ten"
                          >
                            {title}
                          </Typography>
                          <Typography textStyle="h4" color="black">
                            {length}
                          </Typography>
                        </Box>
                        <ul>
                          {points.map((point) => (
                            <li key={point.slice(10)}>
                              <Typography textStyle="body" color="black">
                                {point}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    </Card>
                  </Box>
                </animated.div>
              ))}
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { CourseBreakdownSection };
