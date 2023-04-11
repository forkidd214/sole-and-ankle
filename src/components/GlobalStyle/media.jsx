import { css } from 'styled-components'

const sizes = {
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media screen and (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

// Example
// const Wrapper = styled.div`
//   color: green;

//   ${media.laptop`
//     color: red;

//   `}
// `
