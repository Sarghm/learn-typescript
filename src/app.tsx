import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ScreenDimensionsContextProvider } from './context/screen-dimensions';
import { IntroductionSection } from './sections/introduction';
import { AppHeader } from './components/app-header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScreenDimensionsContextProvider>
        <AppHeader />
        <IntroductionSection />
      </ScreenDimensionsContextProvider>
    </ThemeProvider>
  );
};

export default App;
