import { CategoryTag } from './__components__/Category'
import { ProjectPreview } from './__components__/Project'

import React from 'react'
import { getHomeData } from './Home.data'
import { FormattedMessage } from '@/components'
import { CategoryFields, ProjectFields } from '@/services/cms'
import { LandingParams } from './types'
import { PageProps } from '@/utils/types'

export type HomeQueryParams = { category: string }

export default async function HomeContent({ searchParams, params }: PageProps<LandingParams, HomeQueryParams>) {
  const data = await getHomeData(params.locale)

  const currentCategory = searchParams.category
  const projects = useProjectsData(currentCategory, data.portfolio)
  const categories = useCategories(data.categories.map(({ fields }) => fields))

  return (
    <section className="mb-32 min-h-[55vh]">
      <h1 className="mb-10">
        <FormattedMessage id="works" />
      </h1>
      <nav className="mb-8 flex flex-wrap gap-x-4 gap-y-2">
        {categories.map((category, index) => (
          <CategoryTag
            key={`${category.slug}-${index}`}
            category={category}
            isActive={currentCategory === category.slug}
          />
        ))}
      </nav>
      <article>
        <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((node, index) => (
            <li key={`${node.slug}-${index}`}>
              <ProjectPreview {...node} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

function useCategories(baseCategories: CategoryFields[]): CategoryFields[] {
  return [
    {
      name: (<FormattedMessage id="category.all" />) as any,
      slug: undefined as any,
    },
    ...baseCategories,
  ]
}

function useProjectsData(currentCategory: string, projects: ProjectFields[]) {
  if (!currentCategory || Array.isArray(currentCategory)) {
    return projects
  }

  return projects.filter(
    ({ categories }: ProjectFields) => categories.findIndex(({ fields: { slug } }) => currentCategory === slug) !== -1,
  )
}
