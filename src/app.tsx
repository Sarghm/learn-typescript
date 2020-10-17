import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ScreenDimensionsContextProvider } from './context/screen-dimensions';
import { ScrollContextProvider } from './context/scroll';
import { AppContent } from './app-content';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ScreenDimensionsContextProvider>
        <ScrollContextProvider>
          <AppContent />
        </ScrollContextProvider>
      </ScreenDimensionsContextProvider>
    </ThemeProvider>
  );
};

export default App;
