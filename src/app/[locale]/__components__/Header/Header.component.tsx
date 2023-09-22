import clsx from 'clsx'
import Link from 'next-intl/link'
import Image from 'next/image'
import React from 'react'

import { FormattedMessage } from '@/components'
import { ExtendableStyles, Testable } from '@/utils/types'

import { getHeaderData } from './Header.data'
import { HeaderLinkList } from './HeaderLinkList.component'
import { getAutoFillImageProps, getImageUrl } from '@/services/cms'

export type HeaderProps = ExtendableStyles & Testable

export async function Header({ className, ...otherProps }: HeaderProps) {
  const { logo } = await getHeaderData()

  return (
    <header className={clsx(className, 'content', 'flex justify-between')} {...otherProps}>
      <Link className="relative h-auto w-28" href="/">
        <Image {...getAutoFillImageProps(logo, 112)} />
      </Link>
      <HeaderLinkList className="flex flex-shrink-0 items-center" links={headerLinks} />
    </header>
  )
}

const headerLinks = [
  {
    name: <FormattedMessage id="header.work" />,
    href: '/',
  },
  {
    name: <FormattedMessage id="header.about" />,
    href: '/about',
  },
  {
    name: <FormattedMessage id="header.faq" />,
    href: '/faq',
  },
]
