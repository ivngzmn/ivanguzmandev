import { useRef, useState, useCallback } from 'react'

interface ProjectsCacheState {
  hasLoaded: boolean
}

export function useProjectsCache() {
  const cacheRef = useRef<ProjectsCacheState>({ hasLoaded: false })
  const [isLoading, setIsLoading] = useState(true)

  const markLoaded = useCallback(() => {
    cacheRef.current.hasLoaded = true
    setIsLoading(false)
  }, [])

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const hasLoadedBefore = cacheRef.current.hasLoaded

  return {
    isLoading,
    hasLoadedBefore,
    markLoaded,
    startLoading,
  }
}
