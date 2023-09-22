import React, { HTMLProps } from 'react'
import { ExtendableStyles, Testable, WithChildren } from '@/utils/types'
import clsx from 'clsx'
import Link from 'next-intl/link'

export type StyledLinkProps = ExtendableStyles &
  Testable &
  WithChildren &
  Pick<HTMLProps<HTMLAnchorElement>, 'role'> & {
    href: string
    isActive?: boolean
  }

export function StyledLink({ className, isActive, ...otherProps }: StyledLinkProps) {
  return (
    <Link
      className={clsx(
        className,
        'transition-color relative duration-200 ease-in-out after:scale-x-0 hover:text-primary-accent hover:after:scale-x-100',
        isActive ? 'text-primary-accent after:scale-x-100' : 'text-typography-main',
        'underline-animation',
      )}
      {...otherProps}
    />
  )
}
