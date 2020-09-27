import React from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { Testimonial, TestimonialProps } from '../components/testimonial';

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
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer flexGrow={1} backgroundColor="green">
      <GridContainer currentSize={currentSize}>
        <GridRow withGutter alignItems="flex-end" py="fifty">
          {TESTIMONIALS.map((testimonial) => (
            <GridColumn
              key={testimonial.author}
              span={12 / TESTIMONIALS.length}
            >
              <Testimonial {...testimonial} textColor="white" />
            </GridColumn>
          ))}
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { TestimonialsSection };
