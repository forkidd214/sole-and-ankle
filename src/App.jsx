import Header from './components/Header'
import MainContent from './components/MainContent'

import styled from 'styled-components'

export default function App() {
  return (
    <Wrapper>
      <Header />
      <MainContent />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`
