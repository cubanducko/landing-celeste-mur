import { Theme } from 'design-system'
import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'

export type FooterProps = ExtendableStyles & Testable

export function Footer({ className, ...otherProps }: FooterProps) {
  const classes = useStyles()

  return (
    <footer className={cx(className, classes.footer)} {...otherProps}>
      <div className={classes.footerWrapper}>Celeste Mur</div>
    </footer>
  )
}

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  footer: css`
    display: flex;
    justify-content: center;
  `,
  footerWrapper: css`
    display: flex;
    justify-content: center;
    padding: ${spacing(3)};
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
