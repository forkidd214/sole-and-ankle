import { SORTS } from '../../data'

import { media } from '../GlobalStyle'
import Select from '../Select'

import React from 'react'
import styled from 'styled-components'

export default function SortSelect({ sort, onChange }) {
  return (
    <Wrapper>
      <Lable>
        Sort
        <Select label="Sort" value={sort} onChange={onChange}>
          {SORTS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </Lable>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  ${media.tablet`
    display: block;
  `}
`

const Lable = styled.label`
  ${media.tablet`
    display: flex;
    height: 42px;
    align-items: baseline;
    gap: 16px;
    color: var(--color-gray-700);
  `}
`
