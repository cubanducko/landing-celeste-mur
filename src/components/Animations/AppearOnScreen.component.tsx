import { useInView } from 'react-intersection-observer'
import { ExtendableStyles, Testable, WithChildren } from 'utils/types'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { HTMLElements } from 'framer-motion/types/render/html/supported-elements'

export type AppearOnScreenProps = ExtendableStyles &
  Testable &
  WithChildren & {
    component?: HTMLElements
  }

export function AppearOnScreen({ children, component = 'div' }: AppearOnScreenProps) {
  const controls = useAnimation()
  const { ref, inView } = useInView(observerOptions)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  })
  const MotionWrapper = motion[component] as any

  return (
    <MotionWrapper ref={ref} initial="hidden" variants={variants} animate={controls}>
      {children}
    </MotionWrapper>
  )
}

const observerOptions = { triggerOnce: true }

const variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
}
