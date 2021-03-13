import { Link } from 'gatsby-plugin-intl'
import React from 'react'
import { ExtendableStyles, Testable, WithChildren } from 'utils/types'

export type HeaderLinkProps = ExtendableStyles &
  Testable &
  WithChildren & {
    to: string
  }

export function HeaderLink({ className, children, ...otherProps }: HeaderLinkProps) {
  return <Link {...otherProps}>{children}</Link>
}
