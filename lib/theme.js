/* eslint-disable import/prefer-default-export */
const breakpoints = ["0", "780px", "1024px", "1280px", "1440px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const theme = {
  breakpoints,
  fontSizes: {
    tiny: ".5rem",
    small: ".625rem",
    body: ".75rem",
    smbody: ".78rem",
    smtitle: "0.8625rem",
    subtitle: ".875rem",
    smsubtitle: ".95rem",
    title: "1rem",
    big: "1.25rem",
    bigger: "1.45rem",
    large: "2rem",
    larger: "2.5rem",
    mediumLarger: "3.5rem",
    extraLarger: "4.0rem",
  },
  fontWeights: [
      0,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800

  ],
  space: [
    "0",
    "0.5rem",
    "1rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "7rem",
    "8rem",
    "9rem",
  ],
  sizes: [
    "0",
    "0.5rem",
    "1rem",
    "2rem",
    "3rem",
    "4rem",
    "5rem",
    "50%",
    "100%"
  ],
  colors: {
    white:'#ffffff',
    cyan: '#2acfcf',
    lightCyan: '#AFEEEE',
    darkViolet: '#3b3054',
    red: '#f46262',
    gray: '#bfbfbf',
    lightGray: '#eeeeee ',
    grayishViolet: '#9e9aa7',
    veryDarkBlue: '#35323e'
},
};
