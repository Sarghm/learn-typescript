import React, { useState, useCallback } from 'react';
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
import { DefaultAnimationConfigMediumBounce } from '../consts/animated';
import { VisibleMarker } from '../components/visible-marker';
import { Section } from '../consts/sections';
import { QuestionMarkCircleOutline } from 'heroicons-react';
import { theme } from '../theme';
import { DEFAULT_ICON_SIZE } from '../consts/icons';

const CHECK_LIST_ITEMS: CheckListItemProps[] = [
  {
    title: 'I already have some JavaScript experience',
    children: `This course has been written with the assumption that you already have some JavaScript experience. You don't have to have much - as long as you have an understanding of variables and functions, you should be totally fine!`,
  },
  {
    title: 'I already have some JavaScript experience',
    children: `This course has been written with the assumption that you already have some JavaScript experience. You don't have to have much - as long as you have an understanding of variables and functions, you should be totally fine!`,
  },
  {
    title: 'I already have some JavaScript experience',
    children: `This course has been written with the assumption that you already have some JavaScript experience. You don't have to have much - as long as you have an understanding of variables and functions, you should be totally fine!`,
  },
];

const CourseChecklistSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();

  const trail = useTrail(CHECK_LIST_ITEMS.length, {
    opacity: isAnimatedIn ? 1 : 0,
    transform: `translateY(${isAnimatedIn ? 0 : 100}px)`,
    config: DefaultAnimationConfigMediumBounce,
  });

  const springs = useSprings(
    CHECK_LIST_ITEMS.length,
    CHECK_LIST_ITEMS.map((el, idx) => ({
      transform: hoveredIndex === idx ? `scale(1,1)` : `scale(0.85,0.85)`,
      opacity: hoveredIndex === null ? 1 : hoveredIndex === idx ? 1.0 : 0.2,
    }))
  );

  const handleVisibilityChanged = useCallback(
    (isVisible: boolean) => {
      setIsAnimatedIn(isAnimatedIn || isVisible);
    },
    [isAnimatedIn]
  );

  return (
    <SectionContainer backgroundColor="black" py="oneHundred">
      <VisibleMarker
        id={Section.CourseChecklist}
        onVisibilityChanged={handleVisibilityChanged}
      />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Box flexDirection="row" alignItems="center">
              <QuestionMarkCircleOutline
                size={DEFAULT_ICON_SIZE}
                color={theme.colors.white}
                style={{ marginRight: 15 }}
              />
              <Typography textStyle="h2" color="white">
                Is this course for me?
              </Typography>
            </Box>
          </GridColumn>
        </GridRow>

        <GridRow mt="fifty">
          <GridColumn span={6}>
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

          <GridColumn span={6}>
            <Typography textStyle="h1" color="white">
              An image will go here one day
            </Typography>
          </GridColumn>
        </GridRow>

        <GridRow mt="fifty">
          <GridColumn span={12}>
            <Box justifyContent="center" flexGrow={1}>
              <Box width="60%">
                <Typography textStyle="h2" color="white" textAlign="center">
                  If you answered &quot;yes&quot; to all of the above, then this
                  course is for you!
                </Typography>
              </Box>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { CourseChecklistSection };
