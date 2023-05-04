import { media } from '../GlobalStyle'
import { CATEGORIES } from '../../data'
import HoverButton from '../HoverButton'
import styled from 'styled-components'

export default function CategoryList({ category, onChange }) {
  return (
    <Wrapper>
      {CATEGORIES.map(({ slug, name }) => {
        const checked = category === slug
        return (
          <HoverButton key={slug} hoverColor={checked ? 'primary' : 'light'}>
            <Category
              style={{
                '--color': checked ? 'var(--color-primary)' : 'initial',
              }}
            >
              <input
                type="radio"
                name="category"
                value={slug}
                checked={checked}
                onChange={onChange}
              />
              {name}
            </Category>
          </HoverButton>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  ${media.laptop`
    display: flex;
    flex-direction: column;
    gap: 8px;
    `}
`

const Category = styled.label`
  text-transform: capitalize;
  color: var(--color);
  font-weight: var(--font-weight-medium);
  font-size: 1.6rem;
  width: 100%;
  text-align: left;
  cursor: inherit;

  & > input {
    display: none;
  }
`
