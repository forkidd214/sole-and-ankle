import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* Set min-height of the page */
html,body {
  height: 100%;
}
#root {
  height: 100%;
  isolation: isolate; /* In case there's any modal component */
}

/* Set typography */
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: 'Raleway', sans-serif;
  font-weight: var(--font-weight-normal);
  color: var(--color-gray-900);
}


html {
  /* Set colors */
  --color-white: hsl(0deg 0% 100%);
  --color-black: hsl(0deg 0% 0%);
  --color-gray-100: hsl(185deg 5% 95%);
  --color-gray-300: hsl(190deg 5% 80%);
  --color-gray-500: hsl(196deg 4% 60%);
  --color-gray-700: hsl(220deg 5% 40%);
  --color-gray-900: hsl(220deg 3% 20%);
  --color-primary: hsl(340deg 65% 47%);
  --color-secondary: hsl(240deg 60% 63%);

  /* Set font weight */
  --font-weight-normal: 500;
  --font-weight-medium: 600;
  --font-weight-bold: 800;
}

`

export default GlobalStyle
