import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

const typography = new Typography({
  ...moragaTheme,
  baseFontSize: '15px',
  baseLineHeight: 1.2,
})
export const { scale, rhythm, options } = typography
export default typography
