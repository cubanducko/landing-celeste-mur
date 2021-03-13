import React from 'react'
import { css } from 'services/styles'
import { WithChildren } from 'utils/types'
import { Footer } from './Footer.component'
import { Header } from './Header'
import { LibraryProvider } from './LibraryProvider.component'
import { Main } from './Main.component'

export type RootProps = WithChildren

export default function Root({ children }: RootProps) {
  return (
    <LibraryProvider>
      <div className={classes.wrapper}>
        <Header className={classes.header} />
        <Main className={classes.main}>{children}</Main>
        <Footer className={classes.footer} />
      </div>
    </LibraryProvider>
  )
}

const classes = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  `,
  main: css`
    flex: 1 0 auto;
  `,
  header: css`
    flex: 0 0 auto;
  `,
  footer: css`
    flex: 0 0 auto;
  `,
}
