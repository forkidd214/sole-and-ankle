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
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

const ShoeWrapper = styled.div`
  min-width: 275px;
  max-width: 600px;
  flex: 1;
`
