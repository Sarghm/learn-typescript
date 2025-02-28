import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Box } from './box';
import { Typography } from './typography';

const AVATAR_IMAGE_SIZE = 60;

export interface TestimonialProps {
  testimonial: string;
  author: string;
  authorDetails?: string;
  authorAvatarImageUrl?: string;
  textColor?: keyof DefaultTheme['colors'];
}

const Testimonial = ({
  testimonial,
  author,
  authorDetails,
  authorAvatarImageUrl,
  textColor = 'black',
}: TestimonialProps) => {
  return (
    <Box flexDirection="column">
      <Box
        flexGrow={1}
        backgroundColor="white"
        py="ten"
        px="twenty"
        borderRadius="sm"
      >
        <Typography textStyle="body" color="black">
          {testimonial}
        </Typography>
      </Box>
      <Box flexDirection="row" alignItems="center" mt="ten">
        <Box
          backgroundImage={
            authorAvatarImageUrl ? `url(${authorAvatarImageUrl});` : undefined
          }
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundColor="white"
          width={AVATAR_IMAGE_SIZE}
          height={AVATAR_IMAGE_SIZE}
          style={{ borderRadius: AVATAR_IMAGE_SIZE }}
          mr="ten"
        />
        <Box flexDirection="column" mt="ten" width="80%">
          <Typography textStyle="h4Light" color={textColor}>
            {author}
          </Typography>
          {authorDetails ? (
            <Typography textStyle="body" color={textColor} opacity={0.7}>
              {authorDetails}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export { Testimonial };
