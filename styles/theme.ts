const breakpoints = {
  tablet: "768px",
  desktop: "1200px",
};

const fontFamilies = {
  main: "Noto Sans KR, sans-serif",
  price: "Tahoma, sans-serif",
};

const fontSizes = {
  xxxs: "1.0rem",
  xxs: "1.2rem",
  xs: "1.3rem",
  sm: "1.4rem",
  base: "1.6rem",
  md: "1.8rem",
  lg: "2.4rem",
};

const fontWeights = {
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

// 추후 수정
const lineHeights = {
  xxs: "1.6rem",
  xs: "2rem",
  sm: "2.4rem",
  base: "2.4rem",
  md: "2.8rem",
  lg: "3.4rem",
};

const letterSpacings = {
  xxs: "-0.005em",
  xs: "-0.01em",
  sm: "-0.01em",
  base: "-0.01em",
  md: "-0.02em",
  lg: "-0.01em",
};

const colors = {
  black: "#000",
  dark: "#191a20",
  primary: "#3f4150",
  secondary: "#8c8d96",
  tertiary: "#b2b3b9",
  border: "#e0e2e7",
  background: "#f7f8fa",
  white: "#fff",
  blue: "#3da5f5",
  blueDark: "#3186c4",
  blueLight: "#ecf6fe",
  red: "#f86d7d",
  green: "#31b46e",
  gray: "#C4C4C4",
  liteGray: "#f4f4f4",
  lightGray: "#ebebeb",
};

const levels = {
  productTab: 40,
  lnb: 50,
  gnb: 60,
  overlay: 100,
  sidebarModal: 200,
  searchModal: 300,
};

const boxShadows = {
  dropdown: `0 4px 6px rgba(0, 0, 0, 0.18)`,
  popup: `0 4px 20px rgba(63, 65, 80, 0.3)`,
  popupReversed: `0 -4px 20px rgba(63, 65, 80, 0.3)`,
};

const theme = {
  breakpoints,
  boxShadows,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  levels,
};

export default theme;
