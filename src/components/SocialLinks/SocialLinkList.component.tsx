import { Theme } from 'design-system'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'
import { SocialLink } from './SocialLink.component'

export type SocialLinkListProps = ExtendableStyles & Testable

export function SocialLinkList({ className, ...otherProps }: SocialLinkListProps) {
  const classes = useStyles()
  const socialLinks = useSocialLinkList()
  return (
    <ul className={cx(className, classes.container)} {...otherProps}>
      {socialLinks.map(({ node: { linkUrl, iconName, slug } }) => (
        <li className={classes.socialLink}>
          <SocialLink key={slug} name={slug} href={linkUrl} icon={iconName} />
        </li>
      ))}
    </ul>
  )
}

function useSocialLinkList() {
  const rawData = useStaticQuery(graphql`
    query SocialLinksQuery {
      allContentfulSocialLink(filter: { node_locale: { eq: "es" } }) {
        edges {
          node {
            linkUrl
            iconName
            slug
          }
        }
      }
    }
  `)
  return rawData.allContentfulSocialLink.edges
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: css`
    display: flex;
  `,
  socialLink: css`
    margin-right: ${spacing()};
    &:last-child {
      margin-right: 0;
    }
  `,
}))
