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
import { VisibleMarker } from '../components/visible-marker';
import { Section } from '../consts/sections';

const AUTHOR_AVATAR_SIZE = 180;

const AUTHOR_DETAILS = {
  introduction: ``,
  avatarImageURL: '/images/sam.jpg',
};

const AuthorIntroductionSection = () => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer flexGrow={1} backgroundColor="black">
      <VisibleMarker id={Section.AuthorIntroduction} />
      <GridContainer currentSize={currentSize}>
        <GridRow py="oneHundred">
          <GridColumn offset={2} span={8}>
            <Box flexDirection="row" alignItems="center">
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
              <Box flexDirection="column">
                <Typography textStyle="h3" color="white">
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
