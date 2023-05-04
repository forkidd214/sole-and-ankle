import { findCategory, sortShoes } from '../../utils'
import { SHOES, CATEGORIES } from '../../data'
import ShoeCard from './ShoeCard'
import styled from 'styled-components'

export default function ShoreGrid({ category, sort }) {
  const filteredShoes = findCategory(CATEGORIES, category)
    ? SHOES.filter((shoe) => shoe.category === category)
    : SHOES
  const shoes = sortShoes(filteredShoes, sort)

  return (
    <Wrapper>
      {shoes.map(({ slug, ...shoeProps }) => (
        <ShoeWrapper key={slug}>
          <ShoeCard {...shoeProps} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 32px;
`

const ShoeWrapper = styled.div``
