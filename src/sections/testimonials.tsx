import React, { useCallback, useMemo, useState } from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { Testimonial, TestimonialProps } from '../components/testimonial';
import { VisibleMarker } from '../components/visible-marker';
import { Section } from '../consts/sections';
import { useTrail, animated } from 'react-spring';
import { DefaultAnimationConfigMediumNoBounce } from '../consts/animated';
import { Box } from '../components/box';
import { responsiveValue } from '../utils/dimensions';

const TESTIMONIALS: TestimonialProps[] = [];

const TestimonialsSection = () => {
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();
  const maxItemsPerRow = responsiveValue(currentSize, 2, 3);

  const TESTIMONIALS_ITEM_ROWS = useMemo(() => {
    const numberOfRows = Math.ceil(TESTIMONIALS.length / maxItemsPerRow);
    return new Array(numberOfRows)
      .fill(0)
      .map((row, idx) =>
        [...TESTIMONIALS].slice(
          idx * maxItemsPerRow,
          idx * maxItemsPerRow + maxItemsPerRow
        )
      );
  }, [maxItemsPerRow]);

  const handleVisibilityChanged = useCallback(
    (isVisible: boolean) => {
      setIsAnimatedIn(isAnimatedIn || isVisible);
    },
    [isAnimatedIn]
  );

  const testimonialsSpring = useTrail(TESTIMONIALS.length, {
    opacity: isAnimatedIn ? 1 : 0,
    config: DefaultAnimationConfigMediumNoBounce,
  });

  return (
    <SectionContainer flexGrow={1} backgroundColor="green">
      <VisibleMarker
        id={Section.Testimonials}
        onVisibilityChanged={handleVisibilityChanged}
      />
      <GridContainer currentSize={currentSize}>
        <Box pt="twenty" />
        {TESTIMONIALS_ITEM_ROWS.map((testimonials, idx) => (
          <GridRow withGutter alignItems="flex-end" pt="twenty" key={idx}>
            {testimonials.map((testimonial, index) => (
              <GridColumn key={testimonial.author} span={12 / maxItemsPerRow}>
                <animated.div style={testimonialsSpring[index]}>
                  <Testimonial {...testimonial} textColor="white" />
                </animated.div>
              </GridColumn>
            ))}
          </GridRow>
        ))}
        <Box pt="twenty" />
      </GridContainer>
    </SectionContainer>
  );
};

export { TestimonialsSection };
