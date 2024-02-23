import { usePageContext } from '@/hooks/use-page-context'
import { link, ILinkConfig } from '@/helper/link'
import { getUrlParsedParamsString } from '@/helper/querystringurl'

/**
 * 此自定义 hooks 用于用于跳转本页面 querystring 变化，而路由不发生变化的情况
 */
const useNavigateOwnParams = () => {
  const pageContext = usePageContext()

  const urlParsedSearch = pageContext?.urlParsed?.search || {}

  const getNavigateOwnLinkUrl = navigateParams => {
    const urlParams = getUrlParsedParamsString({ ...urlParsedSearch, ...navigateParams })
    return urlParams
  }

  const navigateOwnLink = (navigateParams, linkParams?: ILinkConfig) => {
    link(`${pageContext?.urlParsed?.pathname}?${getNavigateOwnLinkUrl(navigateParams)}`, linkParams)
  }

  const navigateOwnLinkId = (url, navigateParams?: Record<string, any>, linkParams?: ILinkConfig) => {
    const urlQueryString = getNavigateOwnLinkUrl(navigateParams)
    link(
      `${url}?${urlQueryString}
      }`,
      linkParams
    )
  }

  return { navigateOwnLink, navigateOwnLinkId }
}

export { useNavigateOwnParams }
