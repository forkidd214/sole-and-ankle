import styled from 'styled-components'

export default function Breadcrumbs({ data, children, ...props }) {
  return (
    <Wrapper aria-label="Breadcrumb">
      <BreadcrumbsList {...props}>
        {data?.map(({ label, path }) => (
          <Crumb key={path} href={path}>
            {label}
          </Crumb>
        ))}
        {children}
      </BreadcrumbsList>
    </Wrapper>
  )
}

export const Crumb = ({ href, children }) => (
  <CrumbWrapper>
    <CrumbLink href={href} aria-current="page">
      {children}
    </CrumbLink>
  </CrumbWrapper>
)

const Wrapper = styled.nav``

const BreadcrumbsList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  font-weight: var(--font-weight-normal);
  font-size: 1.4rem;
  height: 16px;
`

const CrumbWrapper = styled.li`
  display: inline;
  color: var(--color-gray-700);

  &:not(:last-child) {
    --spacing: 8px;
    margin-right: var(--spacing);

    &::after {
      content: '';
      display: inline-block;
      height: 0.8em;
      border-right: 1px solid currentColor;
      margin-left: var(--spacing);
      transform: rotate(15deg);
      color: var(--color-gray-300);
    }
  }
`

const CrumbLink = styled.a`
  &,
  &:visited {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:active,
  &:focus {
    text-decoration: revert;
  }
`
