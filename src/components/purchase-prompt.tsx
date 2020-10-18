import React from 'react';
import { animated, useSpring } from 'react-spring';
import { DefaultAnimationConfigFastNoBounce } from '../consts/animated';
import { theme } from '../theme';
import { Box } from './box';
import { Button } from './button';
import { Typography } from './typography';

interface PurchasePromptProps {
  visible?: boolean;
}

const PurchasePrompt = ({ visible = false }: PurchasePromptProps) => {
  const spring = useSpring({
    transform: `translateY(${visible ? 0 : 150}px)`,
    config: DefaultAnimationConfigFastNoBounce,
  });

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
      >
        <Box mr="ten">
          <Typography textStyle="h4" color="white">
            Buy now for £10
          </Typography>
        </Box>
        <Button variant="white" textStyle="h4">
          Buy Now
        </Button>
      </Box>
    </animated.div>
  );
};

export { PurchasePrompt };
