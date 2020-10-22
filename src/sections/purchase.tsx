import React from 'react';
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
import { Button } from '../components/button';
import { responsiveValue } from '../utils/dimensions';
import { SectionProps } from './shared';
import { Footer } from '../components/footer';

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PurchaseSection = ({ isVisible }: SectionProps) => {
  const { currentSize } = useScreenDimensionsContext();

  return (
    <SectionContainer
      flexGrow={1}
      backgroundColor="pink"
      py={responsiveValue(currentSize, 'thirty', 'oneHundred')}
      flexDirection="column"
    >
      <SectionMarker id={Section.Purchase} />
      <GridContainer currentSize={currentSize}>
        <GridRow>
          <GridColumn span={responsiveValue(currentSize, 12, 8)}>
            <Typography
              textStyle="h2"
              color="white"
              textAlign={responsiveValue(currentSize, 'center', 'left')}
            >
              Ready to buy?
            </Typography>
            <Box mt="ten">
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
        <GridRow pb={responsiveValue(currentSize, 'oneHundred', 'fifty')}>
          <GridColumn span={12}>
            <Box mt="thirty" justifyContent="center">
              <Button variant="white" textStyle="h3">
                Buy the course now for £9.99
              </Button>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Footer />
    </SectionContainer>
  );
};

export { PurchaseSection };
