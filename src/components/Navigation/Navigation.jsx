import { COLORS, WEIGHTS } from '../../constants'
import { Icon } from '../IconInput'
import HoverButton from '../HoverButton'

import styled from 'styled-components'

export default function Navigation({ isDesktop = false, ...props }) {
  return isDesktop ? <DesktopNavigation /> : <MobileNavigation />
}

const MobileNavigation = () => {
  return (
    <MobileNavWrapper>
      <HoverButton hoverColor="light" py={16} px={8}>
        <Icon id="menu" size={24} strokeWidth={2} />
      </HoverButton>
    </MobileNavWrapper>
  )
}

const DesktopNavigation = () => (
  <DesktopNavWrapper>
    <Navlist>
      {links.map(({ slug, label, url }) => {
        const isSale = slug === 'sale'
        return (
          <NavItem
            key={slug}
            style={{ '--color': isSale ? COLORS.secondary : 'unset' }}
          >
            <HoverButton
              as="a"
              href={url}
              hoverColor={isSale ? 'secondary' : 'light'}
              py={16}
              px={8}
            >
              {label}
            </HoverButton>
          </NavItem>
        )
      })}
    </Navlist>
  </DesktopNavWrapper>
)

const MobileNavWrapper = styled.nav``

const DesktopNavWrapper = styled.nav``

const Navlist = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
`

const NavItem = styled.li`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: ${WEIGHTS.medium};
  color: var(--color);
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

const links = [
  { slug: 'sale', label: 'sale', url: '/sale' },
  { slug: 'new-releases', label: 'new releases', url: '/new-releases' },
  { slug: 'men', label: 'men', url: '/men' },
  { slug: 'women', label: 'women', url: '/women' },
  { slug: 'kids', label: 'kids', url: '/kids' },
  { slug: 'collections', label: 'collections', url: '/collections' },
]
