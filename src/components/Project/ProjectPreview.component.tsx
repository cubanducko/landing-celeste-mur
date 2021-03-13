import { Theme } from 'design-system'
import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import Img, { FluidObject } from 'gatsby-image'
import { ExtendableStyles, Testable } from 'utils/types'
import { Link } from 'gatsby-plugin-intl'

export type ProjectPreviewProps = ExtendableStyles &
  Testable & {
    previewImage: { fluid: FluidObject }
    title: string
    slug: string
  }

export type ProjectPreviewData = {
  previewImage: { fluid: FluidObject }
  title: string
  slug: string
}

export function ProjectPreview({ className, previewImage, title, slug, ...otherProps }: ProjectPreviewProps) {
  const classes = useStyles()
  return (
    <article className={cx(classes.container, className)} {...otherProps}>
      <Link className={classes.imagePreview} to={`/project/${slug}`}>
        <Img className={classes.image} {...previewImage} />
      </Link>
      <span>{title}</span>
    </article>
  )
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: css`
    display: flex;
    flex-direction: column;
  `,
  imagePreview: css`
    margin-bottom: ${spacing(2)};
  `,
  image: css`
    width: ${spacing(45)};
    height: ${spacing(30)};
  `,
  title: css``,
}))
