import React, { Children } from 'react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { CodeCopyButton } from '@/components/CodeCopyButton'

export const Pre = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
) => {
  const code = Children.toArray(props.children).filter(
    (child) =>
      typeof child === 'object' && 'type' in child && child.type === 'code',
  )[0] as React.ReactElement

  const extractText = (node: React.ReactNode): string => {
    if (node == null) {
      return ''
    }

    if (typeof node === 'string') {
      return node
    }

    if (Array.isArray(node)) {
      return node.map(extractText).join('')
    }

    if (typeof node === 'object' && node !== null && 'props' in node) {
      // `node` may be a React element; cast to any to access props safely
      return extractText((node as any).props?.children)
    }

    return ''
  }

  const textToCopy =
    code && (code as any).props && (code as any).props.children
      ? extractText((code as any).props.children)
      : ''

  return (
    <div className="relative">
      <pre {...props}>{props.children}</pre>
      {textToCopy && <CodeCopyButton code={textToCopy} />}
    </div>
  )
}
