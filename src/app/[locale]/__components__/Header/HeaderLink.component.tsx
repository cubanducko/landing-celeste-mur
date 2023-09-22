'use client'

import React from 'react'
import { useParams, usePathname } from 'next/navigation'

import { ExtendableStyles, Testable, WithChildren } from '@/utils/types'
import { StyledLink } from '@/components'
import { removeLocaleFromPathname } from '@/utils/url'

export type HeaderLinkProps = ExtendableStyles &
  Testable &
  WithChildren & {
    href: string
  }

export function HeaderLink({ href, ...otherProps }: HeaderLinkProps) {
  const pathname = usePathname()
  const params = useParams<{ locale: string }>()
  const isLinkActive = href === removeLocaleFromPathname(pathname, params.locale)

  return <StyledLink href={href} isActive={isLinkActive} {...otherProps} />
}
