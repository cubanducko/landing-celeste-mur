import { Theme } from 'design-system'
import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'

export type HeaderProps = ExtendableStyles & Testable

export function Header({ className, ...otherProps }: HeaderProps) {
  const classes = useStyles()
  return (
    <header className={cx(className, classes.header)} {...otherProps}>
      <div className={classes.headerWrapper}>
        <img alt="logo" />
      </div>
    </header>
  )
}

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  header: css`
    display: flex;
    justify-content: center;
  `,
  headerWrapper: css`
    display: flex;
    justify-content: space-between;
    padding: ${spacing(0, 2)};
    margin: 0 auto;
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
