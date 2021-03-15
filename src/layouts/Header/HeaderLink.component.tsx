import { Theme } from 'design-system'
import { Link, useIntl } from 'gatsby-plugin-intl'
import React from 'react'
import { useLocation } from 'react-use'
import { makeStyles, cx, css } from 'services/styles'
import { ExtendableStyles, Testable, WithChildren } from 'utils/types'

export type HeaderLinkProps = ExtendableStyles &
  Testable &
  WithChildren & {
    to: string
  }

export function HeaderLink({ className, children, to, ...otherProps }: HeaderLinkProps) {
  const classes = useStyles()
  const { pathname } = useLocation()
  const { locale } = useIntl()
  const isLinkActive = `/${locale}${to}` === pathname

  return (
    <Link className={cx(className, classes.link, isLinkActive && classes.activeLink)} to={to} {...otherProps}>
      {children}
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
      color: ${palette.typography.main};
      transition: color ease-in-out 200ms;

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
