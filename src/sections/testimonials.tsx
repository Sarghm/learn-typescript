import React, { useCallback, useState } from 'react';
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

const TESTIMONIALS: TestimonialProps[] = [
  {
    author: 'Sam Piggott',
    authorDetails: 'Software Engineer at Planes',
    testimonial: 'What an excellent course!',
    authorAvatarImageUrl:
      'https://api.adorable.io/avatars/102/abott@adorable.png',
  },
  {
    author: 'Sam Piggott',
    authorDetails: 'Software Engineer at Planes',
    testimonial:
      'What an excellent course! What an excellent course! What an excellent course!',
    authorAvatarImageUrl:
      'https://api.adorable.io/avatars/102/abott@adorable.png',
  },
  {
    author: 'Sam Piggott',
    authorDetails: 'Software Engineer at Planes',
    testimonial:
      'What an excellent course! What an excellent course! What an excellent course! What an excellent course! What an excellent course!',
    authorAvatarImageUrl:
      'https://api.adorable.io/avatars/102/abott@adorable.png',
  },
];

const TestimonialsSection = () => {
  const [isAnimatedIn, setIsAnimatedIn] = useState<boolean>(false);
  const { currentSize } = useScreenDimensionsContext();

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
        <GridRow withGutter alignItems="flex-end" py="fifty">
          {TESTIMONIALS.map((testimonial, index) => (
            <GridColumn
              key={testimonial.author}
              span={12 / TESTIMONIALS.length}
            >
              <animated.div style={testimonialsSpring[index]}>
                <Testimonial {...testimonial} textColor="white" />
              </animated.div>
            </GridColumn>
          ))}
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { TestimonialsSection };
