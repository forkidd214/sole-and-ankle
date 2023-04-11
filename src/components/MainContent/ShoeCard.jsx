import { COLORS, WEIGHTS } from '../../constants'
import { formatPrice, pluralize, isNewShoe } from '../../utils'
import styled from 'styled-components'

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
      <ImageWrapper>
        <Img src={imageSrc} alt={name} />
        {variant === 'on-sale' && <SaleFlag>Sale</SaleFlag>}
        {variant === 'new-release' && <NewFlag>Just Released!</NewFlag>}
      </ImageWrapper>
      <FigureCaption>
        <VStack>
          <Name>{name}</Name>
          <NumOfColors>{pluralize('Color', numOfColors)}</NumOfColors>
        </VStack>
        <VStack>
          <Price
            style={{
              '--color':
                variant === 'on-sale' ? COLORS.gray[700] : COLORS.gray[900],
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

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px 16px 4px 4px;
  overflow: hidden;
`

const Img = styled.img`
  /* height: 312px; */
  width: 100%;
  display: block;
  line-height: 0;
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
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
`
const NumOfColors = styled(Span)`
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`
const Price = styled(Span)`
  color: var(--color);
  font-weight: ${WEIGHTS.normal};
  text-decoration: var(--text-decoration);
`
const SalePrice = styled(Span)`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.medium};
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
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
`
const SaleFlag = styled(Flag)`
  background: ${COLORS.primary};
`
const NewFlag = styled(Flag)`
  background: ${COLORS.secondary};
`
