export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BreakpointOptions = { [key in BreakpointKeys]: Breakpoint }
export type Breakpoint = string

export const defaultBreakpoints = {
  xs: '600px',
  sm: '768px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
}

export function createBreakpoints(breakpoints?: BreakpointOptions): BreakpointOptions {
  return {
    ...defaultBreakpoints,
    ...breakpoints,
  } as BreakpointOptions
}
