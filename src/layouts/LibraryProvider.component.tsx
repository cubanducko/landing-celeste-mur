import { ThemeProvider } from 'services/styles'
import { createTheme, CSSBaseline } from 'design-system'
import React, { useMemo } from 'react'

export type LibraryProviderProps = {
  children: React.ReactNode
}

export function LibraryProvider({ children }: LibraryProviderProps) {
  const theme = useMemo(() => createTheme(), [])
  return (
    <ThemeProvider theme={theme}>
      <CSSBaseline />
      {children}
    </ThemeProvider>
  )
}
