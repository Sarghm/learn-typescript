import { QuestionMarkCircleOutline } from 'heroicons-react';
import React from 'react';
import { DEFAULT_ICON_SIZE_SM } from '../consts/icons';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { theme } from '../theme';
import { responsiveValue } from '../utils/dimensions';
import { Box, BoxProps } from './box';
import { Typography } from './typography';

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
    <a href={href} style={{ textDecoration: 'none' }}>
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
    <Box px="thirty" flexDirection="column" alignSelf="normal">
      <Box height={1} backgroundColor="white-forty" />
      <Box
        flexDirection={responsiveValue(currentSize, 'column', 'row')}
        pt={responsiveValue(currentSize, 'twenty', 'thirty')}
        pb="twenty"
        justifyContent="center"
      >
        <FooterItem
          title="Need help?"
          subtitle="If you need any help, drop us an email."
          href="mailto:hello@codesnap.io"
          icon={
            <QuestionMarkCircleOutline
              size={DEFAULT_ICON_SIZE_SM}
              color={theme.colors.white}
            />
          }
          mr={responsiveValue(currentSize, 'zero', 'twenty')}
        />
        <FooterItem
          title="GitHub Repo"
          subtitle="This website was written using TypeScript! Check out the source code."
          href="mailto:hello@codesnap.io"
          icon={
            <img
              alt="GitHub Logo"
              src="/icons/github.svg"
              width={DEFAULT_ICON_SIZE_SM}
              height={DEFAULT_ICON_SIZE_SM}
            />
          }
          mt={responsiveValue(currentSize, 'twenty', 'zero')}
        />
      </Box>
    </Box>
  );
};

export { Footer };
