import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ScreenDimensionsContextProvider } from './context/screen-dimensions';
import { ScrollContextProvider } from './context/scroll';
import { AppContent } from './app-content';
import { AnalyticsContextProvider } from './context/analytics';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AnalyticsContextProvider>
        <ScreenDimensionsContextProvider>
          <ScrollContextProvider>
            <AppContent />
          </ScrollContextProvider>
        </ScreenDimensionsContextProvider>
      </AnalyticsContextProvider>
    </ThemeProvider>
  );
};

export default App;
