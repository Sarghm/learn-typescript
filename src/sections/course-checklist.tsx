import React, { useState, useEffect } from 'react';
import { SectionContainer } from '../components/section-container';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { Box } from '../components/box';
import {
  CheckListItem,
  CheckListItemProps,
} from '../components/checklist-item';
import { Typography } from '../components/typography';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { useTrail, animated, useSprings } from 'react-spring';
import { DefaultAnimationConfigFastNoBounce } from '../consts/animated';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { responsiveValue } from '../utils/dimensions';
import { SectionProps } from './shared';

const CHECK_LIST_ITEMS: CheckListItemProps[] = [
  {
    title: 'You already have some JavaScript experience',
    children: `This course is written with the expectation that you'll have at least a basic understanding of JavaScript. You don't have to have much - as long as you have an understanding of variables and functions, you should be ready to learn! If you're finding the course too difficult, however, drop us an email and we'll issue a refund, no questions asked.`,
  },
  {
    title: "You haven't used TypeScript yet",
    children: `This course has been written to teach you the fundamentals of TypeScript, so you can start using it straightaway. If you've never used TypeScript before, then this course is for you!`,
  },
  {
    title: 'You are a frontend, backend, or full-stack engineer',
    children: `The course is totally agnostic to practices - whether you're a frontend, backend or full-stack engineer, you'll be able to use your learnings from this course and apply it to your own practice!`,
  },
];

const CourseChecklistSection = ({ isVisible }: SectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();

  const trail = useTrail(CHECK_LIST_ITEMS.length, {
    opacity: isAnimatedIn ? 1 : 0,
    transform: `translateY(${isAnimatedIn ? 0 : 100}px)`,
    config: DefaultAnimationConfigFastNoBounce,
  });

  const springs = useSprings(
    CHECK_LIST_ITEMS.length,
    CHECK_LIST_ITEMS.map((el, idx) => ({
      opacity: hoveredIndex === null ? 1 : hoveredIndex === idx ? 1.0 : 0.2,
    }))
  );

  useEffect(() => {
    setIsAnimatedIn(isAnimatedIn || isVisible);
  }, [isAnimatedIn, isVisible]);

  return (
    <SectionContainer
      backgroundColor="black"
      py={responsiveValue(currentSize, 'thirty', 'oneHundred')}
    >
      <SectionMarker id={Section.CourseChecklist} />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent={responsiveValue(
                currentSize,
                'center',
                'flex-start'
              )}
            >
              <Typography
                textStyle="h2"
                color="white"
                textAlign={responsiveValue(currentSize, 'center', 'left')}
              >
                Is this course for you?
              </Typography>
            </Box>
          </GridColumn>
        </GridRow>

        <GridRow mt="fifty">
          <GridColumn span={responsiveValue(currentSize, 12, 6)}>
            {CHECK_LIST_ITEMS.map((item, i) => (
              <animated.div
                key={item.title}
                style={{
                  ...trail[i],
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <animated.div style={springs[i]}>
                  <Box mt={i !== 0 ? 'thirty' : undefined}>
                    <CheckListItem {...item} />
                  </Box>
                </animated.div>
              </animated.div>
            ))}
          </GridColumn>
          {currentSize !== 'xs' ? (
            <GridColumn span={6}>
              <Typography textStyle="h1" color="white">
                An image will go here one day
              </Typography>
            </GridColumn>
          ) : null}
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { CourseChecklistSection };
