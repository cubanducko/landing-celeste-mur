import { ExtendableStyles, WithChildren } from '@/utils/types'
import clsx from 'clsx'

import React from 'react'

export type MainProps = ExtendableStyles & WithChildren

export function Main({ className, children, ...otherProps }: MainProps) {
  return (
    <main className={clsx(className, 'content pb-32')} {...otherProps}>
      {children}
    </main>
  )
}
