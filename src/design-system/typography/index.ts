import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

const typography = new Typography({
  ...moragaTheme,
  baseFontSize: '15px',
  baseLineHeight: 1.4,
  bodyColor: '#333',
})

export const getTypographyStyles = typography.toJSON as () => any
export const { scale, rhythm, options } = typography
export default typography
