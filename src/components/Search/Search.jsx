import IconInput, { Icon } from '../IconInput'
import HoverButton from '../HoverButton'

import styled from 'styled-components'

export default function Search({ isBar = false, ...props }) {
  return (
    <Wrapper>
      {isBar ? (
        <IconInput size="small" icon="search" placeholder="Search..." />
      ) : (
        <HoverButton hoverColor="light" py={16} px={8}>
          <Icon id="search" size={24} strokeWidth={2} />
        </HoverButton>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div``
