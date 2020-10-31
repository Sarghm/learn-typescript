import { QuestionMarkCircleOutline } from 'heroicons-react';
import React from 'react';
import { DEFAULT_ICON_SIZE_SM } from '../consts/icons';
import { SUPPORT_EMAIL_ADDRESS } from '../consts/urls';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { theme } from '../theme';
import { responsiveValue } from '../utils/dimensions';
import { Box, BoxProps } from './box';
import { Typography } from './typography';

const FOOTER_ITEM_MAX_WIDTH = 400;

interface FooterItemProps extends Omit<BoxProps, 'color'> {
  title: string;
  subtitle?: string;
  href: string;
  icon?: React.ReactNode;
}

const FooterItem = ({
  title,
  subtitle,
  href,
  icon,
  ...rest
}: FooterItemProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      style={{ textDecoration: 'none', maxWidth: FOOTER_ITEM_MAX_WIDTH }}
    >
      <Box flexDirection="row" alignItems="center" {...rest}>
        {icon ? <Box mr="fifteen">{icon}</Box> : null}
        <Box flexDirection="column">
          <Typography textStyle="body" color="white">
            {title}
          </Typography>
          {subtitle ? (
            <Typography textStyle="bodySmall" color="white">
              {subtitle}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </a>
  );
};

const Footer = () => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <Box
      px={responsiveValue(currentSize, 'ten', 'thirty')}
      flexDirection="column"
      alignSelf="normal"
      alignItems="center"
    >
      <Box height={1} backgroundColor="white-forty" />
      <Box
        flexDirection={responsiveValue(currentSize, 'column', 'row')}
        pt="ten"
        flexWrap="wrap"
        justifyContent="center"
      >
        <FooterItem
          title="Need help?"
          subtitle="If you need any help, drop us an email."
          href={`mailto:${SUPPORT_EMAIL_ADDRESS}`}
          icon={
            <QuestionMarkCircleOutline
              size={DEFAULT_ICON_SIZE_SM}
              color={theme.colors.white}
            />
          }
          p="twenty"
        />
        <FooterItem
          title="Not happy with your purchase?"
          subtitle="Click here to send an email and I'll issue you a refund, no questions asked."
          href={`mailto:${SUPPORT_EMAIL_ADDRESS}?subject=Refund Request`}
          icon={
            <QuestionMarkCircleOutline
              size={DEFAULT_ICON_SIZE_SM}
              color={theme.colors.white}
            />
          }
          p="twenty"
        />
        <FooterItem
          title="What is CodeSnap?"
          subtitle="CodeSnap is an upcoming platform that houses all of Sam's online courses."
          href="https://www.codesnap.io"
          icon={
            <img
              alt="CodeSnap Logo"
              src="/images/codesnap-logo-white.png"
              width={DEFAULT_ICON_SIZE_SM}
              height={DEFAULT_ICON_SIZE_SM}
            />
          }
          p="twenty"
        />
      </Box>

      <Box mb="twenty" flexGrow={1} width="50%" flexDirection="column">
        <Box height={1} backgroundColor="white-forty" flexGrow={1} mb="ten" />
        <Typography
          textStyle="bodySmall"
          color="white-eighty"
          textAlign="center"
        >
          CodeSnap is the trading name of Code Without Limits Limited, a company
          registered in England with the company number 12613907, registered at
          the address 20-22, Wenlock Road, London, England, N1 7GU .
        </Typography>
      </Box>
    </Box>
  );
};

export { Footer };
