import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ScreenDimensionsContextProvider } from './context/screen-dimensions';
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
import { WobblyLine } from './components/wobbly-line';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScreenDimensionsContextProvider>
        <ScrollContextProvider>
          <AppHeader />
          <IntroductionSection />
          <WobblyLine backgroundColor="white" foregroundColor="black" />
          <CourseChecklistSection />
          <WobblyLine backgroundColor="black" foregroundColor="pink" />
          <WhyTypeScriptSection />
          <WobblyLine backgroundColor="pink" foregroundColor="white" />
          <CourseBreakdownSection />
          <WobblyLine backgroundColor="white" foregroundColor="green" />
          <TestimonialsSection />
          <WobblyLine backgroundColor="green" foregroundColor="black" />
          <AuthorIntroductionSection />
          <WobblyLine backgroundColor="black" foregroundColor="white" />
          <OfferSection />
          <WobblyLine backgroundColor="white" foregroundColor="pink" />
          <PurchaseSection />
        </ScrollContextProvider>
      </ScreenDimensionsContextProvider>
    </ThemeProvider>
  );
};

export default App;
