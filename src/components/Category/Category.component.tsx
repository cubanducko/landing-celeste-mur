import { StyledLink, Theme } from 'design-system'
import { Link } from 'gatsby-plugin-intl'
import React from 'react'
import { makeStyles, cx, css } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'
import { Category } from './Category.data'
import queryString from 'query-string'

export type CategoryTagProps = ExtendableStyles &
  Testable & {
    category: Category
    isActive?: boolean
  }

export function CategoryTag({ category: categoryData, ...otherProps }: CategoryTagProps) {
  return (
    <StyledLink to={`?${queryString.stringify({ category: categoryData.slug })}`} role="button" {...otherProps}>
      {categoryData.name}
    </StyledLink>
  )
}
