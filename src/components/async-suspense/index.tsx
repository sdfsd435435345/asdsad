import React, { useEffect, useState } from 'react'
import { Loading } from 'react-vant'
import { envIsServer } from '@/helper/env'

interface AsyncSuspenseProps {
  /** 是否需要 loading 此属性为不添加 loading */
  noLoading?: boolean
  /** 子组件 */
  children: React.ReactNode
}

function AsyncSuspense({ noLoading, children }: AsyncSuspenseProps) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  if (envIsServer) {
    return <Loading />
  }

  return <React.Suspense fallback={noLoading ? null : <Loading />}>{children}</React.Suspense>
}
export default AsyncSuspense
