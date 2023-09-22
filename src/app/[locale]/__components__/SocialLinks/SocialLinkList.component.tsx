import clsx from 'clsx'
import React from 'react'

import { ExtendableStyles, Testable } from '@/utils/types'

import { SocialLink } from './SocialLink.component'
import { getSocialLinkList } from './SocialLinkList.data'

export type SocialLinkListProps = ExtendableStyles & Testable

export async function SocialLinkList({ className, ...otherProps }: SocialLinkListProps) {
  const socialLinks = await getSocialLinkList()

  return (
    <ul className={clsx(className, 'group flex gap-2')} {...otherProps}>
      {socialLinks.map(({ fields: { linkUrl, iconName, slug } }) => (
        <li
          key={slug}
          className="transition-opacity duration-200 ease-in-out hover:!opacity-100 group-hover:opacity-50"
        >
          <SocialLink name={slug} href={linkUrl} icon={iconName} />
        </li>
      ))}
    </ul>
  )
}
