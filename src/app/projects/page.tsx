import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import { MyProjects } from '@/components/MyProjects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected works and projects.',
}

interface ProjectsPageProps {
  searchParams: {
    token?: string
  }
}

export default function Projects({ searchParams }: ProjectsPageProps) {
  const { token } = searchParams

  return (
    <SimpleLayout
      title="Selected works and projects."
      intro="A collection of projects I've worked on, ranging from open-source contributions to personal experiments."
    >
      <MyProjects token={token} />
    </SimpleLayout>
  )
}
