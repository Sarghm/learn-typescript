import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import {
  ScreenDimensionsContextProvider,
  useScreenDimensionsContext,
} from './context/screen-dimensions';
import { IntroductionSection } from './sections/introduction';
import { AppHeader } from './components/app-header';
import { CourseChecklistSection } from './sections/course-checklist';
import { WhyTypeScriptSection } from './sections/why-typescript';
import { CourseBreakdownSection } from './sections/course-breakdown';
import { TestimonialsSection } from './sections/testimonials';
import { OfferSection } from './sections/offer';
import { PurchaseSection } from './sections/purchase';
import { AuthorIntroductionSection } from './sections/author-introduction';
import { ScrollContextProvider } from './context/scroll';
import { WobblyLine, WobblyLineProps } from './components/wobbly-line';

const App = () => {
  const { currentSize } = useScreenDimensionsContext();
  const wobblyLineWidthProps: Pick<
    WobblyLineProps,
    'customWidthPercentage'
  > = useMemo(
    () =>
      currentSize === 'xs'
        ? { customWidthPercentage: 200 }
        : { customWidthPercentage: undefined },
    [currentSize]
  );

  return (
    <ThemeProvider theme={theme}>
      <ScreenDimensionsContextProvider>
        <ScrollContextProvider>
          <AppHeader />
          <IntroductionSection />
          <WobblyLine
            backgroundColor="white"
            foregroundColor="black"
            {...wobblyLineWidthProps}
          />
          <CourseChecklistSection />
          <WobblyLine
            backgroundColor="black"
            foregroundColor="pink"
            {...wobblyLineWidthProps}
          />
          <WhyTypeScriptSection />
          <WobblyLine
            backgroundColor="pink"
            foregroundColor="white"
            {...wobblyLineWidthProps}
          />
          <CourseBreakdownSection />
          <WobblyLine
            backgroundColor="white"
            foregroundColor="green"
            {...wobblyLineWidthProps}
          />
          <TestimonialsSection />
          <WobblyLine
            backgroundColor="green"
            foregroundColor="black"
            {...wobblyLineWidthProps}
          />
          <AuthorIntroductionSection />
          <WobblyLine
            backgroundColor="black"
            foregroundColor="white"
            {...wobblyLineWidthProps}
          />
          <OfferSection />
          <WobblyLine
            backgroundColor="white"
            foregroundColor="pink"
            {...wobblyLineWidthProps}
          />
          <PurchaseSection />
        </ScrollContextProvider>
      </ScreenDimensionsContextProvider>
    </ThemeProvider>
  );
};

export default App;
