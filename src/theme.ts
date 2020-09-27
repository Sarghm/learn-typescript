const theme = {
  space: {
    five: 5,
    ten: 10,
    fifteen: 15,
    twenty: 20,
    thirty: 30,
    fifty: 50,
    oneHundred: 100,
    oneHundredFifty: 150,
    twoHundred: 200,
  },
  grid: {
    maxWidth: 1080,
    breakpoints: [768, 998, 1200],
  },
  radii: {
    sm: 8,
  },
  colors: {
    green: `rgba(30,189,198,1)`,
    white: `rgba(255,255,255,1)`,
    pink: 'rgba(255,99,146,1)',
    pinkDark: 'rgba(223,77,121,1)',
    black: 'rgba(47,46,46,1)',
    'black-eighty': 'rgba(47,46,46,0.8)',
    'black-twenty': 'rgba(47,46,46,0.2)',
    'black-ten': 'rgba(47,46,46,0.1)',
  },
  shadows: {
    'black-ten': `0px 0px 10px rgba(47,46,46,0.1)`,
  },
  textStyles: {
    h1: {
      fontFamily: 'Sen, sans-serif',
      fontWeight: 800,
      fontSize: '56px',
      lineHeight: '66px',
      letterSpacing: '-2px',
    },
    h2: {
      fontFamily: 'Sen, sans-serif',
      fontWeight: 800,
      fontSize: '40px',
      lineHeight: '50px',
      letterSpacing: '-1px',
    },
    h3: {
      fontFamily: 'Sen, sans-serif',
      fontWeight: 800,
      fontSize: '26px',
      lineHeight: '32px',
      letterSpacing: '-0.8px',
    },
    h3Light: {
      fontFamily: 'Sen, sans-serif',
      fontWeight: 400,
      fontSize: '26px',
      lineHeight: '39px',
      letterSpacing: '-1.25px',
    },
    h4: {
      fontFamily: 'Sen, sans-serif',
      fontWeight: 800,
      fontSize: '18px',
      lineHeight: '27px',
      letterSpacing: '-1px',
    },
    body: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '27px',
    },
  },
};

export { theme };
