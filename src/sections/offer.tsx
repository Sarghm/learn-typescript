import React from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { responsiveValue } from '../utils/dimensions';
import { VideoPlayer } from '../components/video-player';
import { VIDEO_CONTAINER_ASPECT_RATIO } from '../consts/video';
import { SectionProps } from './shared';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OfferSection = ({ isVisible }: SectionProps) => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer
      flexGrow={1}
      backgroundColor="white"
      py={responsiveValue(currentSize, 'thirty', 'oneHundred')}
    >
      <SectionMarker id={Section.Offer} />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <VideoPlayer
              title="TypeScript Course Sample Chapter - Enums"
              vimeoId="470795934"
              aspectRatio={VIDEO_CONTAINER_ASPECT_RATIO}
            />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { OfferSection };
