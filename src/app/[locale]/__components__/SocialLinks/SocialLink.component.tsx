import React from 'react'
import { ExtendableStyles, Testable } from '@/utils/types'
import { FaInstagram, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa6'
import { MdOutlineAccountBox } from 'react-icons/md'
import clsx from 'clsx'

export type SocialLinkProps = ExtendableStyles &
  Testable & {
    icon: string
    href: string
    name?: string
  }

export function SocialLink({ className, href, name, icon, ...otherProps }: SocialLinkProps) {
  const Icon = getIcon(icon)
  return (
    <a
      className={clsx(className, 'flex cursor-pointer items-center justify-center')}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...otherProps}
    >
      <Icon className="text-current h-6 w-6" aria-label={name} />
    </a>
  )
}

function getIcon(icon: string) {
  switch (icon) {
    case 'instagram':
      return FaInstagram
    case 'linkedin':
      return FaLinkedin
    case 'twitter':
      return FaTwitter
    case 'behance':
      return FaBehance
    default:
      return MdOutlineAccountBox
  }
}
