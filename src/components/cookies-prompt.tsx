import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { Box } from './box';
import { StickyPrompt } from './sticky-prompt';
import { Typography } from './typography';

interface PurchasePromptProps {
  visible?: boolean;
  onDismiss?: () => void;
}

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  background-color: ${(props) => props.theme.colors.pink};
  font-family: ${(props) => props.theme.textStyles.bodySmall.fontFamily};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space.five}px;
  border-radius: ${(props) => props.theme.radii.sm}px;
`;

const CookiesPrompt = ({ visible = false, onDismiss }: PurchasePromptProps) => {
  return (
    <StickyPrompt
      visible={visible}
      style={{
        width: 400,
        bottom: 10,
        left: 10,
        borderRadius: theme.radii.sm,
        overflow: 'hidden',
        zIndex: theme.zIndices.purchasePrompt,
      }}
    >
      <Box
        p="ten"
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box mr="ten" mb="ten" flexDirection="column">
          <Typography textStyle="bodySmall" color="black">
            By continuing to use the site, you agree to the site using cookies
            to store data on your computer. See our{' '}
            <a target="_blank" href="/cookies.html">
              cookies policy
            </a>{' '}
            for further details.
          </Typography>
          <Box mt="ten">
            <Typography textStyle="bodySmall" color="black">
              <StyledButton onClick={onDismiss}>Dismiss</StyledButton>
            </Typography>
          </Box>
        </Box>
      </Box>
    </StickyPrompt>
  );
};

export { CookiesPrompt };
