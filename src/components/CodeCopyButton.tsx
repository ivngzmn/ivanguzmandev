'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CodeCopyButton({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className="absolute right-2 top-2 z-10 rounded-md bg-zinc-700 p-2 hover:bg-zinc-600"
      aria-label="Copy code"
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-gray-300" />
      )}
    </button>
  )
}
