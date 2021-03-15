import { getTypographyStyles, Theme } from 'design-system'
import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import Img, { FluidObject } from 'gatsby-image'
import { ExtendableStyles, Testable } from 'utils/types'
import { Link } from 'gatsby-plugin-intl'
import Color from 'color'
import Icon from '@mdi/react'
import { mdiEyeOutline } from '@mdi/js'

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
        <div className={classes.imagePreviewHover}>
          <Icon className={classes.icon} path={mdiEyeOutline} />
        </div>
        <Img className={classes.image} {...previewImage} />
      </Link>
      <span className={classes.title}>{title}</span>
    </article>
  )
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  container: css`
    display: flex;
    flex-direction: column;
  `,
  imagePreview: css`
    position: relative;
    margin-bottom: ${spacing(2)};
  `,
  imagePreviewHover: css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Color(palette.primary.detail).fade(0.2).toString()};
    opacity: 0;
    transition: opacity 400ms ease-in-out;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  `,
  icon: css`
    width: ${spacing(5)};
    height: ${spacing(5)};
    color: white;
  `,
  image: css`
    width: 100%;
    height: ${spacing(30)};
  `,
  title: css`
    font-size: ${getTypographyStyles().h2.fontSize};
  `,
}))
