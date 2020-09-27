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

const AUTHOR_AVATAR_SIZE = 180;

const AUTHOR_DETAILS = {
  introduction: `My name is Sam Piggott, and I love teaching courses about TypeScript! And literally nothing else.`,
  avatarImageURL: 'https://api.adorable.io/avatars/102/abott@adorable.png',
};

const AuthorIntroductionSection = () => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer flexGrow={1} backgroundColor="black">
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
                <Box mt="ten">
                  <Typography textStyle="body" color="white">
                    {AUTHOR_DETAILS.introduction}
                  </Typography>
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
