import React from 'react'
import { useTheme, css, cx } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'
import { Icon } from '@mdi/react'
import { mdiInstagram, mdiLinkedin, mdiTwitter, mdiAccountQuestion } from '@mdi/js'

export type SocialLinkProps = ExtendableStyles &
  Testable & {
    icon: string
    href: string
    name?: string
  }

export function SocialLink({ className, href, name, icon, ...otherProps }: SocialLinkProps) {
  const classes = useStyles(icon)
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

function useStyles(iconLink: string) {
  const { spacing, palette } = useTheme()
  return {
    link: css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${spacing(5)};
      height: ${spacing(5)};
      border-radius: 50%;
      background-color: ${palette.primary.main};
      cursor: pointer;

      &:hover {
        background-color: ${palette.primary.accent};
      }
    `,
    icon: css`
      color: white;
      width: ${spacing(2.5)};
      height: ${spacing(2.5)};
    `,
  }
}
