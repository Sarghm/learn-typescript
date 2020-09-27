import React, { useState, useEffect } from 'react';
import { SectionContainer } from '../components/section-container';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { CheckListItemProps } from '../components/checklist-item';
import { Typography } from '../components/typography';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { useTrail, animated } from 'react-spring';
import { DefaultAnimationConfigMediumBounce } from '../consts/animated';
import { InfoPoint } from '../components/info-point';

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

const WhyTypeScriptSection = () => {
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();

  const trail = useTrail(CHECK_LIST_ITEMS.length, {
    opacity: isAnimatedIn ? 1 : 0,
    transform: `translateY(${isAnimatedIn ? 0 : 30}px)`,
    config: DefaultAnimationConfigMediumBounce,
  });

  useEffect(() => {
    setIsAnimatedIn(true);
  }, []);

  return (
    <SectionContainer backgroundColor="pink" py="oneHundred">
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Typography textStyle="h2" color="white">
              Why TypeScript?
            </Typography>
            <Typography textStyle="h2" color="white">
              Simply put - it&apos;s the future.
            </Typography>
          </GridColumn>
        </GridRow>

        <GridRow mt="fifty" withGutter>
          {CHECK_LIST_ITEMS.map((item, i) => (
            <GridColumn span={4} key={item.title}>
              <animated.div style={trail[i]}>
                <InfoPoint
                  title={item.title}
                  description={item.children}
                  titleColor="white"
                  descriptionColor="white"
                />
              </animated.div>
            </GridColumn>
          ))}
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { WhyTypeScriptSection };
