import React, { useEffect, useState } from 'react';
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
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { useTrail, animated } from 'react-spring';
import { DefaultAnimationConfigFastBounce } from '../consts/animated';
import { CourseStatistic } from '../components/course-statistic';
import {
  ClockOutline,
  CloudDownloadOutline,
  VideoCameraOutline,
  ViewListOutline,
} from 'heroicons-react';
import { DEFAULT_ICON_SIZE_SM } from '../consts/icons';
import { theme } from '../theme';
import { CourseBreakdownItem } from '../components/course-breakdown-item';
import { responsiveValue } from '../utils/dimensions';
import { SectionProps } from './shared';

export interface CourseSectionPoint {
  title: string;
  length: string;
}

interface CourseSection {
  title: string;
  length: string;
  points: CourseSectionPoint[];
}

const COURSE_SECTIONS: CourseSection[] = [
  {
    title: 'Getting Started',
    length: '~ 15 minutes',
    points: [
      { title: 'What is TypeScript?', length: '02:30' },
      { title: 'Introduction to the course', length: '01:50' },
      { title: 'Setting up your first TypeScript project', length: '09:35' },
    ],
  },
  {
    title: 'Learning TypeScript',
    length: '~ 90 minutes',
    points: [
      { title: 'Basic Types', length: '07:23' },
      { title: 'Union Types', length: '09:22' },
      { title: 'Type Inference', length: '05:34' },
      { title: 'Arrays & Tuples', length: '09:38' },
      { title: 'Enums', length: '07:24' },
      { title: 'Types & Type Aliases', length: '07:39' },
      { title: 'Functions', length: '08:45' },
      { title: 'Interfaces', length: '12:45' },
      { title: 'Any & Unknown', length: '10:00' },
      { title: 'Undefined & Null', length: '04:29' },
    ],
  },
  {
    title: 'Putting it all together',
    length: '~ 20 minutes',
    points: [
      { title: 'Putting Everything Into Practice Part 1', length: '07:25' },
      { title: 'Putting Everything Into Practice Part 2', length: '08:53' },
      { title: 'Putting Everything Into Practice Part 3', length: '07:53' },
    ],
  },
];

const CourseBreakdownSection = ({ isVisible }: SectionProps) => {
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();

  const sectionsSpring = useTrail(COURSE_SECTIONS.length, {
    transform: `translateY(${isAnimatedIn ? 0 : 30}px)`,
    opacity: isAnimatedIn ? 1 : 0,
    config: DefaultAnimationConfigFastBounce,
  });

  useEffect(() => {
    setIsAnimatedIn(isAnimatedIn || isVisible);
  }, [isAnimatedIn, isVisible]);

  return (
    <SectionContainer
      backgroundColor="white"
      py={responsiveValue(currentSize, 'thirty', 'oneHundred')}
    >
      <SectionMarker id={Section.CourseBreakdown} />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Box flexDirection="row" justifyContent="center">
              <CourseStatistic
                title="16 Videos"
                mr="twenty"
                icon={
                  <ViewListOutline
                    size={DEFAULT_ICON_SIZE_SM}
                    color={theme.colors.pink}
                  />
                }
              />
              <CourseStatistic
                title="~ 2 hours"
                mr="twenty"
                icon={
                  <ClockOutline
                    size={DEFAULT_ICON_SIZE_SM}
                    color={theme.colors.pink}
                  />
                }
              />
            </Box>
            <Box flexDirection="row" justifyContent="center" mt="ten">
              <CourseStatistic
                title="HQ 2K 60fps video"
                mr="twenty"
                icon={
                  <VideoCameraOutline
                    size={DEFAULT_ICON_SIZE_SM}
                    color={theme.colors.pink}
                  />
                }
              />
              <CourseStatistic
                title="Pay once, yours forever"
                icon={
                  <CloudDownloadOutline
                    size={DEFAULT_ICON_SIZE_SM}
                    color={theme.colors.pink}
                  />
                }
              />
            </Box>
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
                        <Box mt="fifteen">
                          <ul>
                            {points.map((point, idx) => (
                              <CourseBreakdownItem
                                key={point.title}
                                point={point}
                                mt={idx === 0 ? 'zero' : 'ten'}
                              />
                            ))}
                          </ul>
                        </Box>
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
