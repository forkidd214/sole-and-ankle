import { Icon } from '../IconInput'

import styled from 'styled-components'

export default function Select({ label, value, onChange, children }) {
  return (
    <Wrapper>
      <SelectBar value={value} onChange={onChange}>
        {children}
      </SelectBar>
      <SelectIcon id="chevron-down" size={24} strokeWidth={1.5} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: max-content;
  position: relative;
  color: var(--color-gray-900);

  &:hover {
    color: var(--color-black);
  }
`

const SelectBar = styled.select`
  /* typography */
  font-weight: var(--font-weight-medium);
  font-size: inherit;
  color: inherit;
  /* line-height: 19px; */

  /* layout */
  background: var(--color-gray-100);
  border: none;
  border-radius: 8px;
  padding: 10px 44px 9px 16px;

  /* hide default arrow icon */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none; /* make sure the icon doesn't interfere with clicking options */
`
