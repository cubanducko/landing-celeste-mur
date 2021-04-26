import { Theme } from 'design-system'
import { Link } from 'gatsby-plugin-intl'
import React, { HTMLProps } from 'react'
import { makeStyles, cx, css } from 'services/styles'
import { ExtendableStyles, Testable, WithChildren } from 'utils/types'

export type StyledLinkProps = ExtendableStyles &
  Testable &
  WithChildren &
  Pick<HTMLProps<HTMLAnchorElement>, 'role'> & {
    to: string
    isActive?: boolean
  }

export function StyledLink({ className, isActive, ...otherProps }: StyledLinkProps) {
  const classes = useStyles()
  return <Link className={cx(className, classes.link, isActive && classes.activeLink)} {...otherProps} />
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
        top: 100%;
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
