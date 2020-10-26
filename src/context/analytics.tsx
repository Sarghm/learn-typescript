import React, { useCallback, useContext, createContext } from 'react';
import { PRICING } from '../consts/pricing';
import { useRegion } from '../hooks/use-region';
import { Region } from '../utils/get-region';

export enum AnalyticEvent {
  PressedWatchFreeSection = 'pressed_watch_free_section',
  PressedNagComponentBuyNow = 'pressed_nag_component_buy_now',
  PressedPurchase = 'pressed_purchase',
  PlayedIntroVideo = 'played_intro_video',
  PlayedSampleChapter = 'played_sample_chapter',
}

interface AnalyticsContextProps {
  children?: React.ReactNode;
}

// Firebase is imported as a separate lib beforehand, so we lose types here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Firebase = (window as any).firebase;
// Facebook Pixel is imported as a separate lib beforehand, so we lose types here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FacebookPixel = (window as any).fbq;

const AnalyticsContext = createContext<{
  logEvent: (event: AnalyticEvent, details?: Record<string, string>) => void;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logEvent: () => {},
});

const AnalyticsContextProvider = ({ children }: AnalyticsContextProps) => {
  const { region } = useRegion();

  const logEvent = useCallback(
    (event: AnalyticEvent, details?: Record<string, string>) => {
      if (!Firebase) return;
      Firebase.analytics().logEvent(event, details || {});
      FacebookPixel(
        'track',
        event,
        event === AnalyticEvent.PressedPurchase
          ? {
              currency: region === Region.UK ? 'GBP' : 'USD',
              value: PRICING[region].salePriceNoSymbol,
            }
          : undefined
      );
    },
    [region]
  );

  return (
    <AnalyticsContext.Provider
      value={{
        logEvent,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

const useAnalyticsContext = () => useContext(AnalyticsContext);

export { AnalyticsContextProvider, useAnalyticsContext };
