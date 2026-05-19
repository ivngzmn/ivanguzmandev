import { type Metadata } from 'next'

import { ArticleLayout } from '@/components/ArticleLayout'

import { article } from './article'
import Content from './content.mdx'

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  openGraph: {
    title: article.title,
    description: article.description,
    images: [
      {
        url: article.featured_image_url,
        width: 1200,
        height: 630,
        alt: article.title,
      },
    ],
    type: 'article',
    publishedTime: article.date,
    authors: [article.author],
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.description,
    images: [article.featured_image_url],
  },
}

export default function Page() {
  return (
    <ArticleLayout
      article={{ ...article, slug: 'tailwindcss-v3-to-v4-migration-journey' }}
    >
      <Content />
    </ArticleLayout>
  )
}
