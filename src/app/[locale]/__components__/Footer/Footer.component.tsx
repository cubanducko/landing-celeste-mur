import clsx from 'clsx'
import React from 'react'

import { FormattedMessage } from '@/components'
import { ExtendableStyles, Testable } from '@/utils/types'

import { SocialLinkList } from '../SocialLinks'

export type FooterProps = ExtendableStyles & Testable

export function Footer({ className, ...otherProps }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={clsx(className, 'flex justify-center bg-secondary-main text-center')} {...otherProps}>
      <div className="content flex flex-col items-center justify-center !p-6">
        <SocialLinkList className="mb-2" />
        <span>
          <FormattedMessage id="footer.copyright" values={{ year: currentYear }} />
        </span>
      </div>
    </footer>
  )
}
