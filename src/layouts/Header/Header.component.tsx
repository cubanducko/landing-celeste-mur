import Img from 'gatsby-image'

import { Theme } from 'design-system'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'
import { HeaderLinkList } from './HeaderLinkList.component'
import { FormattedMessage, IntlContextConsumer, Link } from 'gatsby-plugin-intl'

export type HeaderProps = ExtendableStyles & Testable

export function Header({ className, ...otherProps }: HeaderProps) {
  const classes = useStyles()
  const { logo } = useHeaderData()
  return (
    <header className={cx(className, classes.header)} {...otherProps}>
      <div className={classes.headerWrapper}>
        <Link to="/">
          <Img className={classes.logo} fluid={logo.fluid} />
        </Link>
        <HeaderLinkList className={classes.headerLinks} links={headerLinks} />
      </div>
    </header>
  )
}

const headerLinks = [
  {
    name: <FormattedMessage id="header.work" />,
    href: '/',
  },
  {
    name: <FormattedMessage id="header.about" />,
    href: '/about',
  },
  {
    name: <FormattedMessage id="header.faq" />,
    href: '/faq',
  },
]

function useHeaderData() {
  const rawData = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulHeader(node_locale: { eq: "es" }) {
        logo {
          fluid(maxWidth: 125, maxHeight: 125) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)
  return rawData.contentfulHeader
}

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  header: css`
    display: flex;
    justify-content: center;
  `,
  headerWrapper: css`
    display: flex;
    justify-content: space-between;
    padding: ${spacing(2)};
    margin: 0 auto;
    @media (min-width: ${breakpoints.sm}) {
      width: ${spacing(94)};
    }

    @media (min-width: ${breakpoints.md}) {
      width: ${spacing(121)};
    }

    @media (min-width: ${breakpoints.lg}) {
      width: ${spacing(147)};
    }
  `,
  logo: css`
    width: ${spacing(6)};
    height: ${spacing(6)};
  `,
  headerLinks: css`
    flex: 0 0 auto;
  `,
}))
