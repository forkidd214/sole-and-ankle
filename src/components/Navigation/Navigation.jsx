import * as Dialog from '@radix-ui/react-dialog'

import { Icon } from '../IconInput'
import { media } from '../GlobalStyle'
import HoverButton from '../HoverButton'

import styled from 'styled-components'

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

const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-gray-700);
  opacity: 0.8;
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
  gap: clamp(3.6rem, 4.31vw + -0.49rem, 6.4rem);
`

const MobileNavList = styled(Navlist)`
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
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
`

const links = [
  { slug: 'sale', label: 'sale', url: '/sale' },
  { slug: 'new-releases', label: 'new releases', url: '/new-releases' },
  { slug: 'men', label: 'men', url: '/men' },
  { slug: 'women', label: 'women', url: '/women' },
  { slug: 'kids', label: 'kids', url: '/kids' },
  { slug: 'collections', label: 'collections', url: '/collections' },
]
