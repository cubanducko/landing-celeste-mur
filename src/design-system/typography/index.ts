import { defaultPalette } from 'design-system/theme/palette'
import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

import './font-face.css'

const typography = new Typography({
  ...moragaTheme,
  baseFontSize: '15px',
  baseLineHeight: 1.4,
  bodyColor: defaultPalette.typography.main,
  headerColor: defaultPalette.primary.accent,
})

export const getTypographyStyles = typography.toJSON as () => any
export const { scale, rhythm, options } = typography
export default typography
