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
    secondary: string
  }
}

export type PaletteOptions = Partial<Palette>

export const defaultPalette = {
  primary: {
    main: '#000',
    accent: '#91a36e',
    detail: '#91a36e',
  },
  secondary: {
    main: '#facd9d',
    accent: '#f5b17d',
  },
  typography: {
    main: '#333',
    secondary: '#777',
  },
}

export function createPalette(paletteOptions: PaletteOptions = {}): Palette {
  // TODO: Add a deep merge
  return {
    ...defaultPalette,
    ...paletteOptions,
  }
}
