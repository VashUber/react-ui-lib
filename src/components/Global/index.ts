import { createGlobalStyle } from "styled-components";

export const breakPoints = {
  xl: "1440px",
  lg: "1200px",
  md: "1024px",
  sm: "768px",
  xs: "476px",
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :root {
    --bg-primary: #6e7ce7;
    --bg-secondary: #f3c40b;

    --dark: #212121;
    --light: #ffffff;

    --transition: 0.25s;

    --text: 14px;
  }
`;
