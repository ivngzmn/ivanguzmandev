'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('fd14a815-0017-4792-893e-5dc4caf32991')
  })

  return null
}

export default CrispChat
