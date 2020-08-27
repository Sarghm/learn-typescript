import React from 'react';
import { Box } from './box';
import { Typography } from './typography';

const AVATAR_IMAGE_SIZE = 45;

export interface TestimonialProps {
  testimonial: string;
  author: string;
  authorAvatarImageUrl?: string;
}

const Testimonial = ({
  testimonial,
  author,
  authorAvatarImageUrl,
}: TestimonialProps) => {
  return (
    <Box flexDirection="column">
      <Box flexGrow={1}>
        <Typography textStyle="body" color="black">
          {testimonial}
        </Typography>
      </Box>
      <Box flexDirection="row" alignItems="center" mt="ten">
        <Box
          backgroundImage={
            authorAvatarImageUrl ? { uri: authorAvatarImageUrl } : {}
          }
          backgroundColor="green"
          width={AVATAR_IMAGE_SIZE}
          height={AVATAR_IMAGE_SIZE}
          borderRadius={AVATAR_IMAGE_SIZE / 2}
          mr="ten"
        />
        <Box flexDirection="column">
          <Typography textStyle="h4" color="black-eighty">
            {author}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { Testimonial };
