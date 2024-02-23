import { baseLayoutStore } from '@/store/layout'
import { t } from '@lingui/macro'
import { extractMetaData } from './layout/metadata'

export const getSeo = (pageContext: PageContext) => {
  const { documentProps } = pageContext
  const { layoutProps } = baseLayoutStore.getState()
  const _title = (documentProps || {}).title
  const _description = (documentProps || {}).description
  const metaData = extractMetaData(layoutProps)
  const brandTitle = metaData.webTitle
  const brandDescription = metaData.description
  const title = `${_title ? `${_title} | ` : ''}${brandTitle}`
  const description = `${_description ? `${_description} | ` : ''}${brandDescription}`

  return { title, description }
}
