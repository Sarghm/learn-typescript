import React from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { Box } from '../components/box';

const OfferSection = () => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer flexGrow={1} backgroundColor="green">
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={12}>
            <Box />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </SectionContainer>
  );
};

export { OfferSection };
