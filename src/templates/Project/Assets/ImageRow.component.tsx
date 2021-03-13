import React from 'react'
import { ExtendableStyles, Testable } from 'utils/types'
import Img, { GatsbyImageProps } from 'gatsby-image'
import { css, cx, makeStyles } from 'services/styles'
import { Theme } from 'design-system'

export type ImageRowProps = ExtendableStyles &
  Testable & {
    images: GatsbyImageProps[]
  }

export function ImageRow({ images, className, ...otherProps }: ImageRowProps) {
  const classes = useStyles()
  return (
    <figure className={cx(className, classes.container)} {...otherProps}>
      {images.map((image, index) => (
        <Img className={classes.image} key={`${image.title}-${index}`} {...image} />
      ))}
    </figure>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: css`
    display: flex;
  `,
  image: css`
    flex: '1 1 auto';
    width: 100%;
    margin-right: ${spacing(2)};

    &:last-child {
      margin-right: 0;
    }
  `,
}))
