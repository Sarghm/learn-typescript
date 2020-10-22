import React from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { Box } from '../components/box';
import { Typography } from '../components/typography';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { responsiveValue } from '../utils/dimensions';
import { SectionProps } from './shared';

const AUTHOR_AVATAR_SIZE = 180;

const AUTHOR_DETAILS = {
  introduction: ``,
  avatarImageURL: '/images/sam.jpg',
};

const AuthorIntroductionSection = ({ isVisible }: SectionProps) => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer flexGrow={1} backgroundColor="black">
      <SectionMarker id={Section.AuthorIntroduction} />
      <GridContainer currentSize={currentSize}>
        <GridRow py={responsiveValue(currentSize, 'thirty', 'oneHundred')}>
          <GridColumn
            offset={responsiveValue(currentSize, 0, 2)}
            span={responsiveValue(currentSize, 12, 8)}
          >
            <Box
              flexDirection={responsiveValue(currentSize, 'column', 'row')}
              alignItems="center"
            >
              <Box mr="thirty">
                <Box
                  height={AUTHOR_AVATAR_SIZE}
                  width={AUTHOR_AVATAR_SIZE}
                  backgroundImage={`url(${AUTHOR_DETAILS.avatarImageURL});`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  flexGrow={1}
                  style={{ borderRadius: AUTHOR_AVATAR_SIZE / 2 }}
                />
              </Box>
              <Box
                flexDirection="column"
                mt={responsiveValue(currentSize, 'thirty', 'zero')}
              >
                <Typography
                  textStyle="h3"
                  color="white"
                  textAlign={responsiveValue(currentSize, 'center', 'left')}
                >
                  An introduction to the teacher
                </Typography>
                <Box mt="ten" flexDirection="column">
                  <Box>
                    <Typography textStyle="body" color="white">
                      My name&apos;s Sam, and I&apos;ll be your guide through
                      your TypeScript journey! I&apos;m an award-winning
                      software engineeer with almost a decade&apos;s worth of
                      experience in the field, and over a half a million App
                      Store app downloads to my name.
                    </Typography>
                  </Box>
                  <Box mt="ten">
                    <Typography textStyle="body" color="white">
                      It&apos;s safe to say I&apos;ve tried my hand at plenty of
                      different programming languages along the way. Out of all
                      of them, TypeScript has been the one that&apos;s excited
                      me more than any other - and that&apos;s the reason I
                      wrote this course.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { AuthorIntroductionSection };
