import { pageOmitKeys } from '@/constants/base'
import { envIsServer } from '@/helper/env'
import { useContext, createContext, ReactNode } from 'react'

const Context = createContext<PageContext>(undefined as any)

function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: ReactNode }) {
  if (envIsServer) {
    return <Context.Provider value={pageContext as PageContext}>{children}</Context.Provider>
  }
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  let pageContextVal = {}
  // 删除一些杂项
  Object.keys(pageContext).forEach(key => {
    if (!pageOmitKeys.includes(key)) {
      pageContextVal[key] = pageContext[key]
    }
  })
  return <Context.Provider value={pageContextVal as PageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}

export const PageContextConsumer = Context.Consumer
export { PageContextProvider }
export { usePageContext }
