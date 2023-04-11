import { COLORS, WEIGHTS } from '../../constants'
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
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray[900]}
}

`

export default GlobalStyle
