import { envIsServer } from '@/helper/env'
import { ReactNode } from 'react'

function ClientOnly({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  if (envIsServer) {
    return (fallback || null) as JSX.Element
  }

  return children as JSX.Element
}

export default ClientOnly
