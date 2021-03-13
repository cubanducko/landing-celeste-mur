import React from 'react'
import { cssReact as css, Global, useTheme } from 'services/styles'

export function CSSBaseline() {
  const { palette } = useTheme()
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          color: ${palette.typography.main};
        }

        ul,
        ol,
        li {
          padding: 0;
          margin: 0;
        }

        li {
          list-style: none;
        }

        button,
        input[type='submit'],
        input[type='reset'] {
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          outline: inherit;
          cursor: pointer;
        }
      `}
    />
  )
}
