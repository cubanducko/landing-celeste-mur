import React from 'react'
import { cx, css, useTheme } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'

export type IconProps = ExtendableStyles &
  Testable & {
    icon: string
  }

export function Icon({ className, icon, ...otherProps }: IconProps) {
  const classes = useStyles(icon)
  return <i className={cx(className, classes.icon)} {...otherProps} />
}

function useStyles(iconName: string) {
  const { spacing } = useTheme()
  return {
    icon: css`
      display: inline-block;
      background-image: url('/assets/icons/icon-${iconName}.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      min-width: ${spacing(2)};
      min-height: ${spacing(2)};
    `,
  }
}
