import React from 'react'

export type ExtendableStyles = {
  className?: string
  style?: React.CSSProperties
}

export type WithChildren = {
  children?: React.ReactNode
}

export type Testable = {
  'data-testid'?: string
}
