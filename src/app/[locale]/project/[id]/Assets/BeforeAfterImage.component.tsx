'use client'

import React from 'react'
import { ExtendableStyles, Testable } from '@/utils/types'
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider'

import Image from 'next/image'
import clsx from 'clsx'
import { Asset } from 'contentful'
import { getImageProps } from '@/services/cms/helpers'

export type BeforeAfterImageProps = ExtendableStyles &
  Testable & {
    before: Asset
    after: Asset
    description?: string
  }

export function BeforeAfterImage({ className, before, after, description, ...otherProps }: BeforeAfterImageProps) {
  return (
    <figure className={clsx(className, 'not-prose')} {...otherProps}>
      <ReactCompareSlider
        itemOne={<Image {...getImageProps(before, 1024)} />}
        itemTwo={<Image {...getImageProps(after, 1024)} />}
        handle={<ReactCompareSliderHandle buttonStyle={handleStyles} />}
      />
      {description && <caption>{description}</caption>}
    </figure>
  )
}

const handleStyles = { backgroundColor: '#333' }
