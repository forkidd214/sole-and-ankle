import { media } from '../GlobalStyle'
import HoverButton from '../HoverButton'
import { Icon } from '../IconInput'
import Search from '../Search'
import Navigation from '../Navigation'
import SuperHeader from './SuperHeader'
import styled from 'styled-components'

export default function Header() {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Space>
          <Logo href="/">Sole & Ankle</Logo>
        </Space>
        <MainNav>
          <Navigation isDesktop />
        </MainNav>
        <Space />
        <RightNav>
          <HoverButton hoverColor="light" py={16} px={8}>
            <Icon id="shopping-bag" size={24} strokeWidth={2} />
          </HoverButton>
          <Search />
          <Navigation />
        </RightNav>
      </MainHeader>
    </header>
  )
}

const MainHeader = styled.div`
  /* Layout */
  height: 72px;
  padding: 0 16px;
  border-top: 4px solid var(--color-gray-900);
  border-bottom: 1px solid var(--color-gray-300);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;

  /* Text */

  /* Other */
  ${media.tablet`
    padding: 0 32px;
  `}

  ${media.laptop`
    border-top: none;
    justify-content: flex-start;
    margin-bottom: 64px;
  `}

  ${media.desktop`
    justify-content: center;
  `}
`

const Logo = styled.a`
  font-size: 2.4rem;
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  color: var(--color-gray-900);
  outline-offset: 4px;
  white-space: nowrap;

  ${media.laptop`
    margin-right: 48px;
  `}
`

const Space = styled.div`
  ${media.desktop`
    flex: 1;
  `}
`

const MainNav = styled.div`
  display: none;

  ${media.laptop`
    display: block;
  `}
`

const RightNav = styled.div`
  display: flex;
  gap: 16px;

  ${media.laptop`
    display: none;
  `}
`
