import React, { useCallback } from 'react';
import { Section } from '../consts/sections';
import { AnalyticEvent, useAnalyticsContext } from '../context/analytics';
import { useScrollContext } from '../context/scroll';
import { theme } from '../theme';
import { Box } from './box';
import { Button } from './button';
import { StickyPrompt } from './sticky-prompt';
import { Typography } from './typography';

interface PurchasePromptProps {
  visible?: boolean;
}

const PurchasePrompt = ({ visible = false }: PurchasePromptProps) => {
  const { logEvent } = useAnalyticsContext();
  const { scrollToSection } = useScrollContext();

  const handlePressedNagComponentButton = useCallback(() => {
    logEvent(AnalyticEvent.PressedNagComponentBuyNow);
    scrollToSection(Section.Purchase);
  }, [logEvent, scrollToSection]);

  return (
    <StickyPrompt
      visible={visible}
      style={{
        width: 400,
        bottom: 10,
        right: 10,
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
        flexDirection="column"
      >
        <Box mr="ten" mb="ten">
          <Typography textStyle="h4Light" color="white">
            50% off - purchase the course for £9.99
          </Typography>
        </Box>
        <Button
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
