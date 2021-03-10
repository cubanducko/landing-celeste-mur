import { useTheme as useThemeInternal } from '@emotion/react'
import { Theme } from 'design-system'
import { css } from '@emotion/css'

export const useTheme = useThemeInternal as () => Theme

export function makeStyles<Classes extends Record<string, ReturnType<typeof css>>>(
  stylesheet: (theme: Theme) => Classes
) {
  return () => {
    const theme = useTheme()
    return stylesheet(theme)
  }
}
