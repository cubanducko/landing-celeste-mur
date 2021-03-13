import { SocialLinkList } from 'components/SocialLinks/SocialLinkList.component'
import { Theme } from 'design-system'
import { FormattedMessage } from 'gatsby-plugin-intl'
import React from 'react'
import { css, cx, makeStyles } from 'services/styles'
import { ExtendableStyles, Testable } from 'utils/types'

export type FooterProps = ExtendableStyles & Testable

export function Footer({ className, ...otherProps }: FooterProps) {
  const classes = useStyles()
  const currentYear = new Date().getFullYear()
  return (
    <footer className={cx(className, classes.footer)} {...otherProps}>
      <div className={classes.footerWrapper}>
        <SocialLinkList className={classes.socialLink} />
        <span className={classes.copyright}>
          <FormattedMessage id="footer.copyright" values={{ year: currentYear }} />
        </span>
      </div>
    </footer>
  )
}

const useStyles = makeStyles(({ spacing, palette, breakpoints }: Theme) => ({
  footer: css`
    display: flex;
    justify-content: center;
    background-color: ${palette.secondary.main};
  `,
  footerWrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${spacing(3)};
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
  socialLink: css`
    margin-bottom: ${spacing()};
  `,
  copyright: css``,
}))
