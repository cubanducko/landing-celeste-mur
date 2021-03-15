import React from 'react'
import { ExtendableStyles, Testable } from 'utils/types'
import Img, { GatsbyImageProps } from 'gatsby-image'
import { ReactCompareSlider } from 'react-compare-slider'
import { css, cx, makeStyles } from 'services/styles'
import { Theme } from 'design-system'

export type BeforeAfterImageProps = ExtendableStyles &
  Testable & {
    before: GatsbyImageProps
    after: GatsbyImageProps
    description?: string
  }

export function BeforeAfterImage({ className, before, after, description, ...otherProps }: BeforeAfterImageProps) {
  const classes = useStyles()
  return (
    <figure className={cx(className, classes.container)} {...otherProps}>
      <ReactCompareSlider itemOne={<Img {...before} />} itemTwo={<Img {...after} />} />
      {description && <caption className={classes.description}>{description}</caption>}
    </figure>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: css`
    position: relative;
  `,
  description: css`
    margin-top: ${spacing()};
    width: 100%;
    display: inline-block;
  `,
}))
