import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ScreenDimensionsContextProvider } from './context/screen-dimensions';
import { IntroductionSection } from './sections/introduction';
import { AppHeader } from './components/app-header';
import { CourseChecklist } from './sections/course-checklist';
import { WhyTypeScript } from './sections/why-typescript';
import { CourseBreakdown } from './sections/course-breakdown';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScreenDimensionsContextProvider>
        <AppHeader />
        <IntroductionSection />
        <CourseChecklist />
        <WhyTypeScript />
        <CourseBreakdown />
      </ScreenDimensionsContextProvider>
    </ThemeProvider>
  );
};

export default App;
