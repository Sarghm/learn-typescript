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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScreenDimensionsContextProvider>
        <AppHeader />
        <IntroductionSection />
        <CourseChecklistSection />
        <WhyTypeScriptSection />
        <CourseBreakdownSection />
        <TestimonialsSection />
        <OfferSection />
        <PurchaseSection />
      </ScreenDimensionsContextProvider>
    </ThemeProvider>
  );
};

export default App;
