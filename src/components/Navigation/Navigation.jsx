import * as Dialog from '@radix-ui/react-dialog'

import { Icon } from '../IconInput'
import { media } from '../GlobalStyle'
import HoverButton from '../HoverButton'

import styled, { keyframes } from 'styled-components'

export default function Navigation({ isDesktop = false }) {
  return isDesktop ? <DesktopNavigation /> : <MobileNavigation />
}

const MobileNavigation = () => {
  return (
    <MobileNavWrapper>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <HoverButton hoverColor="light" py={16} px={8}>
            <Icon id="menu" size={24} strokeWidth={2} />
          </HoverButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent>
            <Space />
            <MobileNavList>
              {links.map(({ slug, label, url }) => {
                const isSale = slug === 'sale'
                return (
                  <NavItem
                    key={slug}
                    style={{
                      '--color': isSale ? 'var(--color-secondary)' : 'unset',
                    }}
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
            </MobileNavList>
            <Space>
              <Footer>
                <HoverButton hoverColor="light" py={6} px={8}>
                  <li>Terms and Conditions</li>
                </HoverButton>
                <HoverButton hoverColor="light" py={6} px={8}>
                  <li>Privacy Policy</li>
                </HoverButton>
                <HoverButton hoverColor="light" py={6} px={8}>
                  <li>Contact Us</li>
                </HoverButton>
              </Footer>
            </Space>
            <DialogClose asChild>
              <HoverButton hoverColor="light">
                <Icon id="x" size={24} strokeWidth={2} />
              </HoverButton>
            </DialogClose>
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </MobileNavWrapper>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`

const easeOutBounce = keyframes`
	0% {
		transform: translateX(calc(100% + 0%));
	}
  
	12% {
		transform: translateX(calc(100% - 10.89%));
	}

	24% {
		transform: translateX(calc(100% - 43.56%));
	}

	36% {
		transform: translateX(calc(100% - 98.01%));
	}

	54% {
		transform: translateX(calc(100% - 75.02%));
	}

	74% {
		transform: translateX(calc(100% - 98.37%));
	}

	82% {
		transform: translateX(calc(100% - 93.75%));
	}

	92% {
		transform: translateX(calc(100% - 99.34%));
	}

	96% {
		transform: translateX(calc(100% - 98.46%));
	}

	100% {
    transform: translateX(calc(100% - 100%));
	}
`

const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-gray-700);
  opacity: 0.8;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation: ${fadeIn} 200ms both;
  }
`

const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 20%;
  background: var(--color-white);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation: ${easeOutBounce} 500ms both;
    animation-delay: 100ms;
  }
`

const Space = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Footer = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: auto;
  list-style: none;
  font-size: 1.4rem;
  color: var(--color-gray-700);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;

  & > li {
    height: 16px;
    line-height: 16px;
  }

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation: ${fadeIn} 500ms both;
    animation-delay: 400ms;
  }
`

const DialogClose = styled(Dialog.Close)`
  color: var(--color-gray-900);
  position: absolute;
  right: 22px;
  top: 32px;
`

const DesktopNavigation = () => (
  <DesktopNavWrapper>
    <Navlist>
      {links.map(({ slug, label, url }) => {
        const isSale = slug === 'sale'
        return (
          <NavItem
            key={slug}
            style={{ '--color': isSale ? 'var(--color-secondary)' : 'unset' }}
          >
            {isSale ? (
              <SaleLink href={url}>{label}</SaleLink>
            ) : (
              <NavLink href={url}>{label}</NavLink>
            )}
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
  gap: clamp(3.6rem, 4.31vw + -0.49rem, 6.4rem);
`

const MobileNavList = styled(Navlist)`
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation: ${fadeIn} 500ms both;
    animation-delay: 400ms;
  }
`

const NavItem = styled.li`
  text-decoration: none;
  font-size: 1.8rem;
  height: 21px;
  font-weight: var(--font-weight-medium);
  color: var(--color);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    ${MobileNavList} > & {
      animation: ${fadeIn} 500ms both;
    }
    ${MobileNavList} > &:nth-of-type(1) {
      animation-delay: 400ms;
    }
    ${MobileNavList} > &:nth-of-type(2) {
      animation-delay: 600ms;
    }
    ${MobileNavList} > &:nth-of-type(3) {
      animation-delay: 800ms;
    }
    ${MobileNavList} > &:nth-of-type(4) {
      animation-delay: 1000ms;
    }
    ${MobileNavList} > &:nth-of-type(5) {
      animation-delay: 1200ms;
    }
    ${MobileNavList} > &:nth-of-type(6) {
      animation-delay: 1400ms;
    }
  }
`

const NavLink = ({ children, href }) => {
  return (
    <NavLinkWrapper href={href}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </NavLinkWrapper>
  )
}

const NavLinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
`

const MainText = styled.span`
  display: block;
  @media (prefers-reduced-motion: reduce) {
    ${NavLinkWrapper}:hover & {
      font-weight: var(--font-weight-bold);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition: transform 200ms;
    ${NavLinkWrapper}:hover & {
      transform: translateY(-100%);
    }
  }
`

const HoverText = styled.span`
  display: block;
  position: absolute;
  font-weight: var(--font-weight-bold);

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition: transform 200ms;
    ${NavLinkWrapper}:hover & {
      transform: translateY(-100%);
    }
  }
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const SaleLink = styled(Link)`
  position: relative;
  outline: none;

  &:focus {
    border-radius: 2px;
    box-shadow: 0px 0px 0px 2px black;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -10%;
    height: 0;
    width: 120%;
    border: 1px solid var(--color-primary);
    opacity: 0;
    transition: all 500ms;
  }

  &::before {
    top: 0;
    transform: translateY(-16px);
  }
  &::after {
    bottom: 0;
    transform: translateY(16px);
  }

  @media (prefers-reduced-motion: reduce) {
    ${NavItem}:hover & {
      font-weight: var(--font-weight-bold);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    ${NavItem}:hover & {
      color: var(--color-primary);
    }

    ${NavItem}:hover &:before,
    ${NavItem}:hover &:after {
      transform: translateY(0px);
      opacity: 1;
      transition: transform 200ms, opacity 200ms;
    }
  }
`

const links = [
  { slug: 'sale', label: 'sale', url: '/sale' },
  { slug: 'new-releases', label: 'new releases', url: '/new-releases' },
  { slug: 'men', label: 'men', url: '/men' },
  { slug: 'women', label: 'women', url: '/women' },
  { slug: 'kids', label: 'kids', url: '/kids' },
  { slug: 'collections', label: 'collections', url: '/collections' },
]
