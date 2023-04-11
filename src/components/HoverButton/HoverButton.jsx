import { COLORS } from '../../constants'
import styled from 'styled-components'

const HOVER_COLORS = {
  dark: {
    '--hover-color': COLORS.gray[100],
    '--hover-background': COLORS.gray[700],
  },
  light: {
    '--hover-color': COLORS.gray[900],
    '--hover-background': COLORS.gray[300],
  },
  primary: {
    '--hover-color': 'hsl(340deg, 65%, 30%)',
    '--hover-background': 'hsl(340deg, 65%, 90%)',
  },
  secondary: {
    '--hover-color': 'hsl(240deg, 60%, 30%)',
    '--hover-background': 'hsl(240deg, 60%, 90%)',
  },
}

export default function HoverButton({
  hoverColor = 'dark',
  px = 4,
  py = 4,
  style,
  ...props
}) {
  const colorStyles = HOVER_COLORS[hoverColor]
  if (!colorStyles) {
    throw new Error(`Unknown hoverColor of ${hoverColor}`)
  }

  const paddingStyles = {
    '--padding-y': py + 'px',
    '--padding-x': px + 'px',
    '--padding-y-negative': -py + 'px',
    '--padding-x-negative': -px + 'px',
  }

  return (
    <Wrapper
      style={{ ...colorStyles, ...paddingStyles, ...style }}
      {...props}
    />
  )
}

const Wrapper = styled.button`
  /* Layout */
  height: inherit;
  padding: var(--padding-y) var(--padding-x);
  margin: var(--padding-y-negative) var(--padding-x-negative);
  display: flex;
  justify-content: center;
  align-items: center;

  /* Text */
  text-decoration: none;
  line-height: inherit;

  /* Appearance */
  color: inherit;
  background: initial;
  border: none;
  border-radius: 4px;
  outline-offset: -2px;

  &:hover {
    cursor: pointer;
    color: var(--hover-color);
    background: var(--hover-background);
  }
`
