import { HomepageFields, ProjectFields, getEntryBy, getEntryBySlug } from '@/services/cms'
import { LandingParams } from '../../types'

export type ProjectParams = LandingParams & {
  id: string
}

export async function getProjectData({ id, locale }: ProjectParams) {
  const project = await getEntryBySlug<ProjectFields>(id, {
    content_type: 'project',
    locale,
  })

  const { nextProject, previousProject } = await findNextAndPreviousProject(id, locale)

  // Extract the data you need from the Contentful response
  const { title, metadata, description } = project.fields

  // Process references as needed
  return {
    id,
    title,
    metadata: metadata?.fields,
    description,
    navigation: {
      nextProjectPath: nextProject && getProjectPath(nextProject.fields.slug),
      previousProjectPath: previousProject && getProjectPath(previousProject.fields.slug),
    },
  }
}

export async function findNextAndPreviousProject(id: string, locale: string) {
  const {
    fields: { portfolio },
  } = await getEntryBy<HomepageFields>({
    content_type: 'homepage',
    locale,
  })

  const currentIndex = portfolio.findIndex((data) => data.fields.slug === id)

  return {
    nextProject: portfolio[currentIndex + 1],
    previousProject: portfolio[currentIndex - 1],
  }
}

export function getProjectPath(slug: string) {
  return `/project/${slug}`
}
