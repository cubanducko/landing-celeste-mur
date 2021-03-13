import { Theme } from 'design-system'
import React from 'react'
import { css, makeStyles } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'
import { HeaderLink } from './HeaderLink.component'

export type HeaderLinkListProps = ExtendableStyles &
  Testable & {
    links: HeaderLinkData[]
  }

export type HeaderLinkData = {
  name: React.ReactNode
  href: string
}

export function HeaderLinkList({ className, links, ...otherProps }: HeaderLinkListProps) {
  const classes = useStyles()
  return (
    <nav className={className} {...otherProps}>
      <ul className={classes.headerLinkList}>
        {links.map(({ name, href }) => (
          <li key={`${href}-${name}`} className={classes.headerLink}>
            <HeaderLink to={href}>{name}</HeaderLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  headerLinkList: css`
    display: flex;
  `,
  headerLink: css`
    margin-right: ${spacing(2)};
    &:last-child {
      margin-right: 0;
    }
  `,
}))
