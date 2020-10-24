import React, { useEffect, useMemo, useState } from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { Testimonial, TestimonialProps } from '../components/testimonial';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { useTrail, animated } from 'react-spring';
import { DefaultAnimationConfigMediumNoBounce } from '../consts/animated';
import { Box } from '../components/box';
import { responsiveValue } from '../utils/dimensions';
import { SectionProps } from './shared';

const TESTIMONIALS: TestimonialProps[] = [
  {
    testimonial:
      "I hadn't used TypeScript before starting my current job and initially struggled to make the step over from JavaScript. This course massively helped to accelerate my knowledge and understanding to the point where I now prefer TypeScript to JavaScript (something I never thought I'd say!)",
    author: 'Ella',
    authorDetails: 'Full-stack engineer',
    authorAvatarImageUrl: '/images/testimonials/ella.jpg',
  },
  {
    testimonial:
      "I haven't used TypeScript before, and I've tried another online course on TypeScript before, but this one was very good. I honestly enjoyed it. Sam's really good at delivering the content in a clear, easy way.",
    author: 'Alison',
    authorDetails: 'Junior full-stack engineer',
    authorAvatarImageUrl: '/images/testimonials/alison.jpg',
  },
  {
    testimonial:
      "It's an easy-to-follow, well-taught and explained course with very cool animations! I love that you sometimes throw in some VS code tips and tricks. I found this course helpful in that it fills in the knowledge gaps of TypeScript for me, and I had a couple 'aha!' moments 😄",
    author: 'Jinjin',
    authorDetails: 'Junior full-stack engineer',
    authorAvatarImageUrl: '/images/testimonials/jinjin.jpg',
  },
];

const TestimonialsSection = ({ isVisible }: SectionProps) => {
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

  useEffect(() => {
    setIsAnimatedIn(isAnimatedIn || isVisible);
  }, [isAnimatedIn, isVisible]);

  const testimonialsSpring = useTrail(TESTIMONIALS.length, {
    opacity: isAnimatedIn ? 1 : 0,
    config: DefaultAnimationConfigMediumNoBounce,
  });

  return (
    <SectionContainer flexGrow={1} backgroundColor="green">
      <SectionMarker id={Section.Testimonials} />
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
