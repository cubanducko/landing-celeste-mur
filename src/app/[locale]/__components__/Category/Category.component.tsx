import React from 'react'
import { ExtendableStyles, Testable } from '@/utils/types'
import queryString from 'query-string'
import { StyledLink } from '@/components'
import { CategoryFields } from '@/services/cms'
import clsx from 'clsx'

export type CategoryTagProps = ExtendableStyles &
  Testable & {
    category: CategoryFields
    isActive?: boolean
  }

export function CategoryTag({ className, category: categoryData, ...otherProps }: CategoryTagProps) {
  return (
    <StyledLink
      className={clsx(className, 'whitespace-nowrap')}
      href={`?${queryString.stringify({ category: categoryData.slug })}`}
      role="button"
      {...otherProps}
    >
      {categoryData.name}
    </StyledLink>
  )
}
