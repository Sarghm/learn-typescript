import React, { useCallback, useContext, createContext } from 'react';

export enum AnalyticEvent {
  PressedWatchFreeSection,
  PressedNagComponentBuyNow,
  PressedPurchase,
  ViewedSection,
  PlayedIntroVideo,
  PlayedSampleChapter,
}

interface AnalyticsContextProps {
  children?: React.ReactNode;
}

// Firebase is imported as a separate lib beforehand, so we lose types here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FirebaseAnalytics = (window as any).analytics;

const AnalyticsContext = createContext<{
  logEvent: (event: AnalyticEvent, details?: Record<string, string>) => void;
}>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logEvent: () => {},
});

const AnalyticsContextProvider = ({ children }: AnalyticsContextProps) => {
  const logEvent = useCallback(
    (event: AnalyticEvent, details?: Record<string, string>) => {
      if (!FirebaseAnalytics) return;
      FirebaseAnalytics.logEvent(event, details || {});
    },
    []
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
