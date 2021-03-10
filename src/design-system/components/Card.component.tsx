import React from 'react'
import { Theme } from 'design-system/theme'
import { css, cx, makeStyles } from 'services/styles'
import { ExtendableStyles, Testable, WithChildren } from 'utils/types'

export type CardProps = ExtendableStyles & Testable & WithChildren

export function Card({ className, ...otherProps }: CardProps) {
  const classes = useStyles()
  return <div className={cx(className, classes.card)} {...otherProps} />
}

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  card: css`
    border-radius: ${spacing()};
    border: 1px solid ${palette.primary.detail};
  `,
}))
