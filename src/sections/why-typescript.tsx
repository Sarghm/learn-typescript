import React, { useState, useCallback, useMemo } from 'react';
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
import { VisibleMarker } from '../components/visible-marker';
import { Section } from '../consts/sections';
import { Box } from '../components/box';
import { QuestionMarkCircleOutline } from 'heroicons-react';
import { DEFAULT_ICON_SIZE } from '../consts/icons';
import { theme } from '../theme';
import {
  StarOutline,
  CodeOutline,
  BriefcaseOutline,
  CloudUploadOutline,
} from 'heroicons-react';

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

const WhyTypeScriptSection = () => {
  const maxItemsPerRow = 2;

  const CHECK_LIST_ITEM_ROWS = useMemo(() => {
    const numberOfRows = Math.ceil(CHECK_LIST_ITEMS.length / maxItemsPerRow);
    console.log(CHECK_LIST_ITEMS);
    return new Array(numberOfRows)
      .fill(0)
      .map((row, idx) =>
        [...CHECK_LIST_ITEMS].slice(
          idx * maxItemsPerRow,
          idx * maxItemsPerRow + maxItemsPerRow
        )
      );
  }, []);

  console.log(CHECK_LIST_ITEM_ROWS);

  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();

  const trail = useTrail(CHECK_LIST_ITEMS.length, {
    opacity: isAnimatedIn ? 1 : 0,
    transform: `translateY(${isAnimatedIn ? 0 : 30}px)`,
    config: DefaultAnimationConfigMediumBounce,
  });

  const handleVisibilityChanged = useCallback(
    (isVisible: boolean) => {
      setIsAnimatedIn(isAnimatedIn || isVisible);
    },
    [isAnimatedIn]
  );

  return (
    <SectionContainer backgroundColor="pink" py="oneHundred">
      <VisibleMarker
        id={Section.WhyTypeScript}
        onVisibilityChanged={handleVisibilityChanged}
      />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Box flexDirection="row" alignItems="center">
              <Box>
                <QuestionMarkCircleOutline
                  size={DEFAULT_ICON_SIZE}
                  color={theme.colors.white}
                  style={{ marginRight: 15 }}
                />
              </Box>
              <Box flexDirection="column">
                <Typography textStyle="h2" color="white">
                  Why TypeScript?
                </Typography>
                <Typography textStyle="h2" color="white">
                  Simply put - it&apos;s the future.
                </Typography>
              </Box>
            </Box>
          </GridColumn>
        </GridRow>

        {CHECK_LIST_ITEM_ROWS.map((rowItems, idx) => (
          <GridRow key={idx} mt="fifty" withGutter flexDirection="row">
            {rowItems.map(({ title, description, icon }, i) => (
              <GridColumn span={9 / maxItemsPerRow} key={title}>
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
