import React, { useState, useMemo, useEffect } from 'react';
import { SectionContainer } from '../components/section-container';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { Typography } from '../components/typography';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { useTrail, animated } from 'react-spring';
import { DefaultAnimationConfigMediumBounce } from '../consts/animated';
import { InfoPoint, InfoPointProps } from '../components/info-point';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { Box } from '../components/box';
import { DEFAULT_ICON_SIZE } from '../consts/icons';
import { theme } from '../theme';
import {
  StarOutline,
  CodeOutline,
  BriefcaseOutline,
  CloudUploadOutline,
} from 'heroicons-react';
import { responsiveValue } from '../utils/dimensions';
import { SectionProps } from './shared';

const CHECK_LIST_ITEMS: InfoPointProps[] = [
  {
    title: 'Safer, cleaner, easier to read',
    description: `TypeScript catches common JavaScript errors whilst you write, rather than after you've shipped - allowing you to confidently ship more reliable, bug-free code.`,
    icon: <StarOutline size={DEFAULT_ICON_SIZE} color={theme.colors.white} />,
  },
  {
    title: 'Be ready for your next job role',
    description: `With companies like Google, Airbnb and Slack adopting TypeScript, there's no better time to skill up and prepare for your next job interview.`,
    icon: (
      <BriefcaseOutline size={DEFAULT_ICON_SIZE} color={theme.colors.white} />
    ),
  },
  {
    title: 'Use the latest and greatest features of JavaScript',
    description: `The TypeScript team include newer features of JavaScript before they hit the mainstream, allowing you to get ahead of the curve whilst still writing code that's deliverable everywhere.`,
    icon: <CodeOutline size={DEFAULT_ICON_SIZE} color={theme.colors.white} />,
  },
  {
    title: 'Deploy TypeScript wherever you can deploy JavaScript',
    description: `TypeScript files are compiled down to JavaScript files, which means you can write TypeScript and deploy it anywhere you would deploy JavaScript.`,
    icon: (
      <CloudUploadOutline size={DEFAULT_ICON_SIZE} color={theme.colors.white} />
    ),
  },
];

const WhyTypeScriptSection = ({ isVisible }: SectionProps) => {
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();
  const maxItemsPerRow = responsiveValue(currentSize, 1, 2);

  const trail = useTrail(CHECK_LIST_ITEMS.length, {
    opacity: isAnimatedIn ? 1 : 0,
    transform: `translateY(${isAnimatedIn ? 0 : 30}px)`,
    config: DefaultAnimationConfigMediumBounce,
  });

  useEffect(() => {
    setIsAnimatedIn(isAnimatedIn || isVisible);
  }, [isAnimatedIn, isVisible]);

  const CHECK_LIST_ITEM_ROWS = useMemo(() => {
    const numberOfRows = Math.ceil(CHECK_LIST_ITEMS.length / maxItemsPerRow);
    return new Array(numberOfRows)
      .fill(0)
      .map((row, idx) =>
        [...CHECK_LIST_ITEMS].slice(
          idx * maxItemsPerRow,
          idx * maxItemsPerRow + maxItemsPerRow
        )
      );
  }, [maxItemsPerRow]);

  return (
    <SectionContainer
      backgroundColor="pink"
      py={responsiveValue(currentSize, 'thirty', 'oneHundred')}
    >
      <SectionMarker id={Section.WhyTypeScript} />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Box flexDirection="row" alignItems="center">
              <Box flexDirection="column">
                <Typography
                  textStyle="h2"
                  color="white"
                  textAlign={responsiveValue(currentSize, 'center', 'left')}
                >
                  Why learn TypeScript?
                </Typography>
              </Box>
            </Box>
          </GridColumn>
        </GridRow>

        {CHECK_LIST_ITEM_ROWS.map((rowItems, idx) => (
          <GridRow key={idx} mt="fifty" withGutter flexDirection="row">
            {rowItems.map(({ title, description, icon }, i) => (
              <GridColumn span={12 / maxItemsPerRow} key={title}>
                <animated.div style={trail[i]}>
                  <InfoPoint
                    title={title}
                    description={description}
                    icon={icon}
                    titleColor="white"
                    descriptionColor="white"
                  />
                </animated.div>
              </GridColumn>
            ))}
          </GridRow>
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export { WhyTypeScriptSection };
