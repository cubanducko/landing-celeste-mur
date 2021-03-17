import React, { useState, useEffect } from 'react'
import { WithChildren } from 'utils/types'

export type DelayProps = WithChildren & {
  delay: number
}

export function Delayed({ children, delay }) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setDone(true), delay)
    return () => clearTimeout(showTimer)
  })

  return done ? <>{children}</> : null
}
