import React from 'react'
import { ExtendableStyles, Testable } from '@/utils/types'

import { MdRemoveRedEye } from 'react-icons/md'
import { CategoryTag } from '@/app/[locale]/__components__'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { ProjectFields, getAutoFillImageProps } from '@/services/cms'

export type ProjectPreviewProps = ExtendableStyles & Testable & ProjectFields

export function ProjectPreview({
  className,
  previewImage,
  title,
  slug,
  categories,
  ...otherProps
}: ProjectPreviewProps) {
  return (
    <article className={clsx(className, 'flex flex-col')} {...otherProps}>
      <Link className="relative mb-2 h-48 w-full overflow-hidden rounded" href={`/project/${slug}`}>
        <div
          className={clsx(
            'duration-400 bg-primary-accent bg-opacity-70 opacity-0 transition-opacity hover:opacity-100',
            'absolute z-10 flex h-full w-full items-center justify-center',
          )}
        >
          <MdRemoveRedEye className="text-white h-16 w-16" />
        </div>
        <Image className="relative object-cover" {...getAutoFillImageProps(previewImage, 320)} priority />
      </Link>
      <Link
        className="mb-1 cursor-pointer text-xl font-extralight transition-colors duration-200 hover:text-primary-accent"
        href={`/project/${slug}`}
      >
        {title}
      </Link>
      <span className="flex flex-wrap gap-4 gap-y-1">
        {categories.map((category) => (
          <CategoryTag className="font-extralight" key={category.fields.slug} category={category.fields} />
        ))}
      </span>
    </article>
  )
}
