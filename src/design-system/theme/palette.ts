export type Palette = {
  primary: {
    main: string
    accent: string
    detail: string
  }
  secondary: {
    main: string
    accent: string
  }
  typography: {
    main: string
  }
}

export type PaletteOptions = Partial<Palette>

const defaultPalette = {
  primary: {
    main: '#0f4770',
    accent: '#2095f2',
    detail: '#E1F0FD',
  },
  secondary: {
    main: 'rgb(255, 95, 0)',
    accent: 'rgb(153, 57, 0)',
  },
  typography: {
    main: '#706F70',
  },
}

export function createPalette(paletteOptions: PaletteOptions = {}): Palette {
  // TODO: Add a deep merge
  return {
    ...defaultPalette,
    ...paletteOptions,
  }
}
