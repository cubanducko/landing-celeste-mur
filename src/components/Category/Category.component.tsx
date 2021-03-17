import { Theme } from 'design-system'
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

export function CategoryTag({ className, category: categoryData, isActive, ...otherProps }: CategoryTagProps) {
  const classes = useStyles()
  return (
    <Link
      className={cx(className, classes.link, isActive && classes.activeLink)}
      to={`?${queryString.stringify({ category: categoryData.slug })}`}
      role="button"
      {...otherProps}
    >
      {categoryData.name}
    </Link>
  )
}

const useStyles = makeStyles(({ palette }: Theme) => {
  const activeStyles = css`
    color: ${palette.primary.accent};
    &:after {
      width: 100%;
    }
  `
  return {
    link: css`
      position: relative;
      color: ${palette.typography.secondary};
      transition: color ease-in-out 200ms;
      cursor: pointer;

      &:hover {
        ${activeStyles}
        text-decoration: none;
      }
      &:after {
        position: absolute;
        content: '';
        top: calc(100% + 2px);
        left: 0;
        height: 1px;
        width: 0;
        background-color: currentColor;
        transition: width ease-in-out 200ms;
      }
    `,
    activeLink: activeStyles,
  }
})
