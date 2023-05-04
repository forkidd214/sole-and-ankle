import Icon from './Icon'
import { themeToCSSVariables } from '../../utils'

import styled from 'styled-components'

const SIZES = {
  small: {
    height: '2.8rem',
    fontSize: '1.4rem',
    padding: '4px 2px 4px 28px',
    borderWidth: '1px',
    iconPaddingLeft: '2px',
  },
  large: {
    height: '3.6rem',
    fontSize: '1.8rem',
    padding: '8px 3px 7px 36px',
    borderWidth: '2px',
    iconPaddingLeft: '3px',
  },
}

const IconInput = ({ label, icon, width = 175, size, ...props }) => {
  const styles = themeToCSSVariables(SIZES[size])
  const iconSize = size === 'small' ? 16 : 21

  if (!styles) {
    throw new Error(`Unknown [size] property of <IconInput />: ${size}`)
  }

  return (
    <Wrapper style={styles}>
      <Input style={{ '--width': width + 'px' }} {...props} />
      <IconWrapper id={icon} size={iconSize} />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: block;
  width: max-content;
  position: relative;
  color: inherit;

  &:hover {
    color: var(--color-white);
  }
`

const Input = styled.input`
  /* typography */
  /* font-family: 'Roboto', sans-serif; */
  font-style: normal;
  font-size: var(--font-size);
  height: var(--height);
  font-weight: var(--font-weight-medium);
  color: inherit;
  background: inherit;

  /* layout */
  width: var(--width);
  padding: var(--padding);
  border: none;
  border-bottom: var(--border-width) solid currentcolor;

  &::placeholder {
    font-weight: var(--font-weight-normal);
    color: var(--color-gray-500);
  }

  /* interactive */
  &:focus {
    outline-offset: 2px;
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
  left: var(--icon-padding-left);
  top: 0;
  bottom: 0;
  margin: auto 0;

  pointer-events: none;
`

export default IconInput
