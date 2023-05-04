import { CATEGORIES, SORTS } from '../../data'
import { findCategory } from '../../utils'

import { media } from '../GlobalStyle'
import CategoryList from '../CategoryList'
import Breadcrumbs from '../Breadcrumbs'
import SortSelect from './SortSelect'
import ShoeGrid from './ShoeGrid'

import React from 'react'
import styled from 'styled-components'

const CRUMBS = [
  { label: 'Home', path: '/' },
  { label: 'Sale', path: '/sale' },
  { label: 'Shoes', path: '/sale/shoes' },
]

export default function MainContent() {
  const [category, setCategory] = React.useState('')
  const [sort, setSort] = React.useState(SORTS[0].value)

  return (
    <Wrapper>
      <Content>
        <ContentHeader>
          <MainTitle>
            {findCategory(CATEGORIES, category)?.name || 'All'}
          </MainTitle>
          <SortSelect sort={sort} onChange={(ev) => setSort(ev.target.value)} />
        </ContentHeader>
        <ShoeGrid category={category} sort={sort} />
      </Content>
      <Sidebar>
        <Breadcrumbs data={CRUMBS} />
        <CategoryList
          category={category}
          onChange={(ev) => setCategory(ev.target.value)}
        />
      </Sidebar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  ${media.tablet`
  padding: 0 32px;
  `}

  ${media.laptop`
  display: flex;
  flex-direction: row-reverse; /* tab to  main content first */
  align-items: baseline;
  gap: 32px;
  
  max-width: 1600px;
  width: 100%;
  align-self: center;
  `}
`

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${media.laptop`
    flex: 1;
  `}
`

const Sidebar = styled.aside`
  ${media.laptop`
    flex: 0 0 280px;

    display: flex;
    flex-direction: column;
    gap: 32px;

  `}
`

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet`
    display: flex;
    align-items: baseline;
  `}
`

const MainTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
`
