import reset from '../reset.css';
import React from 'react';

const AppHeader = () => {
  return (
    <>
      <link href={reset} rel="stylesheet" />
      <link href="/fonts/wotfard/stylesheet.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;800&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export { AppHeader };
