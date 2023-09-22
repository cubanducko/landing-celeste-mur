import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BeforeAfterImage, ImageRow } from './Assets'
import { FormattedMessage, StyledLink } from '@/components'
import { ProjectParams, getProjectData } from './Project.data'
import { PageProps } from '@/utils/types'
import { Metadata, ResolvingMetadata } from 'next'
import deepMerge from 'deepmerge'
import { transformToMetadata } from '@/utils/metadata'

const pageContext = { nextProjectPath: '', previousProjectPath: '' }

export async function generateMetadata(
  { params }: PageProps<ProjectParams>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { metadata } = await getProjectData(params)
  const parentMetadata = await parent

  return deepMerge(parentMetadata, transformToMetadata(metadata))
}

export default async function Project({ params }: PageProps<ProjectParams>) {
  const { description, title, navigation } = await getProjectData(params)
  const { nextProjectPath, previousProjectPath } = navigation
  return (
    <section>
      <h1 className="mb-4">{title}</h1>
      <main className="flex flex-col">{description && documentToReactComponents(description, options)}</main>
      <div className="flex justify-between">
        {previousProjectPath && (
          <StyledLink href={previousProjectPath}>
            <FormattedMessage id="project.previous" />
          </StyledLink>
        )}
        {nextProjectPath && (
          <StyledLink href={nextProjectPath}>
            <FormattedMessage id="project.next" />
          </StyledLink>
        )}
      </div>
    </section>
  )
}

const options = {
  renderNode: {
    [BLOCKS.HR]: () => <hr className="mx-auto mb-20 mt-10 w-1/2 bg-primary-accent" />,
    [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: React.ReactNode) => {
      const entryData = node.data.target
      const data = entryData.fields
      const blockType = entryData.sys.contentType.sys.id

      switch (blockType) {
        case 'contentImage':
          return <ImageRow className="mb-4" images={data.imageGroup} />
        case 'beforeAfterImage':
          return (
            <BeforeAfterImage
              className="mb-4"
              before={data.beforeImage}
              after={data.afterImage}
              description={data.description}
            />
          )
        default:
          return children
      }
    },
  },
}
