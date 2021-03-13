import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'
import { Icon } from '@mdi/react'
import { mdiInstagram, mdiLinkedin, mdiTwitter, mdiAccountQuestion } from '@mdi/js'
import { Theme } from 'design-system'

export type SocialLinkProps = ExtendableStyles &
  Testable & {
    icon: string
    href: string
    name?: string
  }

export function SocialLink({ className, href, name, icon, ...otherProps }: SocialLinkProps) {
  const classes = useStyles()
  return (
    <a className={cx(className, classes.link)} href={href} target="_blank" {...otherProps}>
      <i className={classes.icon} aria-label={name}>
        <Icon path={getIconPathData(icon)} />
      </i>
    </a>
  )
}

function getIconPathData(icon: string) {
  switch (icon) {
    case 'instagram':
      return mdiInstagram
    case 'linkedin':
      return mdiLinkedin
    case 'twitter':
      return mdiTwitter
    default:
      return mdiAccountQuestion
  }
}

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  link: css`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
  icon: css`
    color: currentColor;
    width: ${spacing(4)};
    height: ${spacing(4)};
  `,
}))
