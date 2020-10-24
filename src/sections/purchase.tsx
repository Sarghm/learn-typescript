import React, { useCallback } from 'react';
import {
  GridContainer,
  GridRow,
  GridColumn,
} from '../components/responsive-grid';
import { useScreenDimensionsContext } from '../context/screen-dimensions';
import { SectionContainer } from '../components/section-container';
import { Box } from '../components/box';
import { Typography } from '../components/typography';
import { SectionMarker } from '../components/section-marker';
import { Section } from '../consts/sections';
import { InfoPointProps } from '../components/info-point';
import {
  DownloadOutline,
  EmojiHappyOutline,
  HeartOutline,
} from 'heroicons-react';
import { DEFAULT_ICON_SIZE_SM } from '../consts/icons';
import { theme } from '../theme';
import { responsiveValue } from '../utils/dimensions';
import { SectionProps } from './shared';
import { Footer } from '../components/footer';
import { PurchaseTile, PurchaseTileProps } from '../components/purchase-tile';
import { PURCHASE_URL } from '../consts/urls';
import { AnalyticEvent, useAnalyticsContext } from '../context/analytics';

const PURCHASE_POINTS: InfoPointProps[] = [
  {
    title: 'What will I get after paying?',
    description:
      'After you have bought the course, you will receive an email with a link to to download the course and watch at your own pace.',
    icon: (
      <DownloadOutline size={DEFAULT_ICON_SIZE_SM} color={theme.colors.white} />
    ),
  },
  {
    title: 'Buy once, yours forever',
    description:
      'No subscriptions. Pay once, download, and keep the course forever.',
    icon: (
      <HeartOutline size={DEFAULT_ICON_SIZE_SM} color={theme.colors.white} />
    ),
  },
  {
    title: '100% satisfaction guarantee',
    description:
      "Not happy with the course? Email us and we'll issue you a full refund, no questions asked.",
    icon: (
      <EmojiHappyOutline
        size={DEFAULT_ICON_SIZE_SM}
        color={theme.colors.white}
      />
    ),
  },
];

const PURCHASE_BUNDLE: PurchaseTileProps = {
  title: 'An Introduction to TypeScript Video Course',
  items: [
    {
      title:
        'Access to download all 16 high-quality videos in the course to watch at your own pace',
    },
    {
      title:
        'Access to stream all of the video content on web or mobile with no expiration date',
    },
    {
      title: 'Access to all of the code you see in the videos',
    },
    {
      title: 'Free future updates to the course',
    },
    {
      title:
        "100% money back guarantee - if you're not happy, email us and we'll give you a full refund, no questions asked",
    },
  ],
  offer: (
    <Typography textStyle="body" color="red" textAlign="center">
      50% off - buy now for{' '}
      <span style={{ textDecoration: 'line-through' }}>£19.99</span>{' '}
      <span style={{ fontFamily: theme.textStyles.h4.fontFamily }}>£9.99</span>
    </Typography>
  ),
  cta: 'Buy now',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PurchaseSection = ({ isVisible }: SectionProps) => {
  const { logEvent } = useAnalyticsContext();
  const { currentSize } = useScreenDimensionsContext();

  const handlePressedPurchase = useCallback(() => {
    logEvent(AnalyticEvent.PressedPurchase);
    window.open(PURCHASE_URL);
  }, [logEvent]);

  return (
    <SectionContainer
      flexGrow={1}
      backgroundColor="pink"
      mt={-100}
      flexDirection="column"
    >
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn
            offset={responsiveValue(currentSize, 0, 2)}
            span={responsiveValue(currentSize, 12, 8)}
          >
            <PurchaseTile
              {...PURCHASE_BUNDLE}
              onPress={handlePressedPurchase}
            />
            <Box mt="ten">
              <SectionMarker id={Section.Purchase} />
              <ul>
                {PURCHASE_POINTS.map((purchasePoint) => (
                  <li key={purchasePoint.title.slice(10)}>
                    <Box flexDirection="row" alignItems="center">
                      {purchasePoint.icon ? (
                        <Box mr="ten">{purchasePoint.icon}</Box>
                      ) : null}
                      <Box flexDirection="column" mt="ten">
                        <Typography color="white" textStyle="h4Light">
                          {purchasePoint.title}
                        </Typography>
                        <Typography color="white" textStyle="body">
                          {purchasePoint.description}
                        </Typography>
                      </Box>
                    </Box>
                  </li>
                ))}
              </ul>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Box mt="fifty">
        <Footer />
      </Box>
    </SectionContainer>
  );
};

export { PurchaseSection };
