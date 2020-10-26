import React, { useCallback } from 'react';
import { PRICING } from '../consts/pricing';
import { Section } from '../consts/sections';
import { AnalyticEvent, useAnalyticsContext } from '../context/analytics';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { useScrollContext } from '../context/scroll';
import { useRegion } from '../hooks/use-region';
import { theme } from '../theme';
import { responsiveValue } from '../utils/dimensions';
import { Box } from './box';
import { Button } from './button';
import { StickyPrompt } from './sticky-prompt';
import { Typography } from './typography';

interface PurchasePromptProps {
  visible?: boolean;
}

const PurchasePrompt = ({ visible = false }: PurchasePromptProps) => {
  const { currentSize } = useScreenDimensionsContext();
  const { logEvent } = useAnalyticsContext();
  const { scrollToSection } = useScrollContext();
  const { region } = useRegion();

  const handlePressedNagComponentButton = useCallback(() => {
    logEvent(AnalyticEvent.PressedNagComponentBuyNow);
    scrollToSection(Section.Purchase);
  }, [logEvent, scrollToSection]);

  return (
    <StickyPrompt
      visible={visible}
      style={{
        width: responsiveValue(currentSize, '100%', '400px'),
        bottom: responsiveValue(currentSize, 0, 10),
        right: responsiveValue(currentSize, 0, 10),
        borderRadius: theme.radii.sm,
        overflow: 'hidden',
        zIndex: theme.zIndices.purchasePrompt,
      }}
    >
      <Box
        p="twenty"
        backgroundColor="green"
        justifyContent="center"
        alignItems="center"
        flexDirection={responsiveValue(currentSize, 'row', 'column')}
      >
        <Box
          mr="ten"
          mb="ten"
          width={responsiveValue(currentSize, '70%', 'auto')}
        >
          <Typography
            textStyle={responsiveValue(currentSize, 'body', 'h4Light')}
            color="white"
            textAlign="center"
          >
            Get full access to the course for{' '}
            <span style={{ textDecoration: 'line-through' }}>
              {PRICING[region].fullPrice}
            </span>{' '}
            <span style={{ fontFamily: theme.textStyles.h4.fontFamily }}>
              {PRICING[region].salePrice}
            </span>
            !
          </Typography>
        </Box>
        <Button
          flexGrow={1}
          onPress={handlePressedNagComponentButton}
          variant="white"
          textStyle="h4"
        >
          Buy Now
        </Button>
      </Box>
    </StickyPrompt>
  );
};

export { PurchasePrompt };
