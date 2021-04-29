import { Theme } from 'design-system'
import React from 'react'
import { css, makeStyles } from 'services/styles'

export function Divider() {
  const classes = useStyles()
  return <hr className={classes.divider} />
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  divider: css`
    margin: 0 auto;
    margin-top: ${spacing(5)};
    margin-bottom: ${spacing(10)};
    width: 50%;
    background-color: ${palette.primary.accent};
  `,
}))
