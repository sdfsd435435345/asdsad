import { useLayoutStore } from '@/store/layout'

export function useHelpCenterUrl(key: any) {
  const footerStore = useLayoutStore()
  const url: string = footerStore.columnsDataByCd?.[key]?.appUrl || ''
  return `${url?.startsWith('/') ? '' : '/'}${url}`
}
