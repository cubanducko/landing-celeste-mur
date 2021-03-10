import { BreakpointOptions, createBreakpoints } from './breakpoints'
import { createPalette, Palette } from './palette'
import { createSpacing, SpacingUnit, SpacingUtils } from './spacing'

// Design system API inspired in @material-ui
export type Theme = SpacingUtils & {
  palette: Palette
  breakpoints: BreakpointOptions
}

export type ThemeOptions = {
  spacingUnit?: SpacingUnit
  palette?: Palette
  breakpoints?: BreakpointOptions
}

export function createTheme({ spacingUnit, ...themeOverrides }: ThemeOptions = {}): Theme {
  const spacingUtils = createSpacing(spacingUnit)
  const palette = createPalette(themeOverrides.palette)
  const breakpoints = createBreakpoints(themeOverrides.breakpoints)
  return {
    palette,
    breakpoints,
    ...spacingUtils,
  }
}
