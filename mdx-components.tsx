import { type MDXComponents } from 'mdx/types'
import { Children } from 'react'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
  }
}
