import React, { useCallback } from 'react';
import { animated, useSpring } from 'react-spring';
import { DefaultAnimationConfigFastNoBounce } from '../consts/animated';
import { Section } from '../consts/sections';
import { AnalyticEvent, useAnalyticsContext } from '../context/analytics';
import { useScrollContext } from '../context/scroll';
import { theme } from '../theme';
import { Box } from './box';
import { Button } from './button';
import { Typography } from './typography';

interface PurchasePromptProps {
  visible?: boolean;
}

const PurchasePrompt = ({ visible = false }: PurchasePromptProps) => {
  const { logEvent } = useAnalyticsContext();
  const { scrollToSection } = useScrollContext();

  const spring = useSpring({
    transform: `translateY(${visible ? 0 : 150}px)`,
    config: DefaultAnimationConfigFastNoBounce,
  });

  const handlePressedNagComponentButton = useCallback(() => {
    logEvent(AnalyticEvent.PressedNagComponentBuyNow);
    scrollToSection(Section.Purchase);
  }, [logEvent, scrollToSection]);

  return (
    <animated.div
      style={{
        ...spring,
        position: 'fixed',
        width: '100%',
        bottom: 0,
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
    </animated.div>
  );
};

export { PurchasePrompt };
