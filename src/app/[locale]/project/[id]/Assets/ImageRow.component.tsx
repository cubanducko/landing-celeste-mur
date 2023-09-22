import React from 'react'

import { ExtendableStyles, Testable } from '@/utils/types'
import Image from 'next/image'
import clsx from 'clsx'
import { Asset } from 'contentful'
import { getAutoFillImageProps } from '@/services/cms'

export type ImageRowProps = ExtendableStyles &
  Testable & {
    images: Asset[]
  }

export function ImageRow({ images, className, ...otherProps }: ImageRowProps) {
  return (
    <figure className={clsx(className, 'not-prose relative flex w-full gap-4')} {...otherProps}>
      {images.map((image, index) => {
        return (
          image.fields.file && (
            <div className="w-full flex-auto" key={`${image.fields.title}-${index}`}>
              <Image className="object-cover" {...getAutoFillImageProps(image, 1024)} />
            </div>
          )
        )
      })}
    </figure>
  )
}
