import { ExtendableStyles, WithChildren } from 'utils/types'

import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import { Theme } from 'design-system'

export type MainProps = ExtendableStyles & WithChildren

export function Main({ className, children, ...otherProps }: MainProps) {
  const classes = useStyles()
  return (
    <main className={cx(className, classes.content)} {...otherProps}>
      {children}
    </main>
  )
}

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  content: css`
    margin: 0 auto;
    padding: ${spacing(0, 2)};

    @media (min-width: ${breakpoints.sm}) {
      width: ${spacing(94)};
    }

    @media (min-width: ${breakpoints.md}) {
      width: ${spacing(121)};
    }

    @media (min-width: ${breakpoints.lg}) {
      width: ${spacing(147)};
    }
  `,
}))
