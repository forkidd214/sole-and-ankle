import { media } from '../GlobalStyle'
import Search from '../Search'
import { Icon } from '../IconInput'
import HoverButton from '../HoverButton'

import React from 'react'
import styled from 'styled-components'

export default function SuperHeader() {
  return (
    <Wrapper>
      <MarketingPoster>
        Free shipping on domestic orders over $75!
      </MarketingPoster>
      <RightNav>
        <Search isBar />
        <HoverButton as="a" href="/">
          Help
        </HoverButton>
        <HoverButton>
          <Icon id="shopping-bag" size={24} />
        </HoverButton>
      </RightNav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  ${media.laptop` 
    background: var(--color-gray-900);
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 32px;
  `}
`

const MarketingPoster = styled.span`
  font-size: 1.4rem;
  font-weight: var(--font-weight-normal);
  color: var(--color-white);
  margin-right: auto;
`
const RightNav = styled.div`
  display: flex;
  align-items: stretch;
  gap: 24px;
  color: var(--color-gray-300);
  font-size: 1.4rem;
`
