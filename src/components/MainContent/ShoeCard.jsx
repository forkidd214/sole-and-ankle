import { formatPrice, pluralize, isNewShoe } from '../../utils'
import styled, { keyframes } from 'styled-components'

export default function ShoeCard({
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) {
  const variant =
    typeof salePrice === 'number'
      ? 'on-sale'
      : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Figure>
      <FigureHero>
        <ImageWrapper>
          <Img src={imageSrc} alt={name} />
        </ImageWrapper>
        {variant === 'on-sale' && <SaleFlag>Sale</SaleFlag>}
        {variant === 'new-release' && <NewFlag>Just Released!</NewFlag>}
      </FigureHero>
      <FigureCaption>
        <VStack>
          <Name>{name}</Name>
          <NumOfColors>{pluralize('Color', numOfColors)}</NumOfColors>
        </VStack>
        <VStack>
          <Price
            style={{
              '--color':
                variant === 'on-sale'
                  ? 'var(--color-gray-700)'
                  : 'var(--color-gray-900)',
              '--text-decoration':
                variant === 'on-sale' ? 'line-through' : 'undifined',
            }}
          >
            {formatPrice(price)}
          </Price>
          <SalePrice>{salePrice && formatPrice(salePrice)}</SalePrice>
        </VStack>
      </FigureCaption>
    </Figure>
  )
}

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
`

const FigureHero = styled.div`
  position: relative;
  transition: filter 800ms;

  &:hover {
    filter: drop-shadow(0 0 2rem var(--color-gray-500));
    transition: filter 200ms;
  }
`

const ImageWrapper = styled.div`
  border-radius: 16px 16px 4px 4px;
  overflow: hidden;
`

const Img = styled.img`
  /* height: 312px; */
  width: 100%;
  display: block;
  line-height: 0;
  object-fit: cover;

  @media (prefers-reduced-motion: no-preference) {
    transform-origin: 50% 80%;
    transform: scale(1);
    transition: transform 600ms;

    ${FigureHero}:hover & {
      transform: scale(1.1);
      transition: transform 200ms;
    }
  }
`

const FigureCaption = styled.figcaption`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Span = styled.span`
  font-size: 1.6rem;
  height: 19px;
`

const Name = styled(Span)`
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
`
const NumOfColors = styled(Span)`
  color: var(--color-gray-700);
  font-weight: var(--font-weight-normal);
`
const Price = styled(Span)`
  color: var(--color);
  font-weight: var(--font-weight-normal);
  text-decoration: var(--text-decoration);
`
const SalePrice = styled(Span)`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
`

const shiver = keyframes`
  from {
    transform: rotate(2deg);
  }
  to {
    transform: rotate(-2deg);
  }
`

const Flag = styled.span`
  display: block;
  position: absolute;
  top: 12px;
  right: -4px;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  border-radius: 2px;
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);

  @media (prefers-reduced-motion: no-preference) {
    ${FigureHero}:hover & {
      animation: ${shiver} 50ms 6 alternate ease-in-out;
    }
  }
`

const SaleFlag = styled(Flag)`
  background: var(--color-primary);
`

const NewFlag = styled(Flag)`
  background: var(--color-secondary);
`
