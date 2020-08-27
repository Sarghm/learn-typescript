import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Box } from './components/box';
import { Typography } from './components/typography';

const Header = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sen:wght@400;800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;800&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box>
        <Typography textStyle="h1" color="pink">
          Hello
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
