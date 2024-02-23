import { YapiGetV1HomeWebsiteGetData } from '@/typings/yapi/HomeWebsiteGetDataV1GetApi'
import { omit } from 'lodash'

/** get related metadata */
function extractMetaData(layoutProps?: YapiGetV1HomeWebsiteGetData, webTitle?: string, description?: string) {
  return {
    webTitle: webTitle || layoutProps?.webTitle || '',
    description: description || layoutProps?.description || '',
    author: layoutProps?.author || '',
    keywords: layoutProps?.keywords || '',
    copyright: layoutProps?.copyright || '',
    webUrl: layoutProps?.webUrl || '',
    businessName: layoutProps?.businessName || '',
    imgWebIcon: layoutProps?.imgWebIcon || '',
    webShareCoverUrl: layoutProps?.shareCoverUrl || '',
  }
}

/** generate basic metadata for search engine */
function generateBasicMetaData(metadata: ReturnType<typeof extractMetaData>) {
  const data = omit(metadata, ['webTitle', 'webUrl', 'businessName', 'imgWebIcon', 'webShareCoverUrl', 'description'])
  let result = ''
  for (const key in data) {
    if (key) result += `<meta name="${key}" content="${metadata[key]}"/>\n`
  }
  return result
}

/** generate Open Graph metadata */
function generateOGMetaData(metadata: ReturnType<typeof extractMetaData>, title?: string) {
  return `<meta property="og:type" content="website" />
      <meta property="og:title" content="${title}" />
      <meta property="og:url" content="${metadata.webUrl}" />
      <meta property="og:site_name" content="${metadata.businessName}" />
      <meta property="og:image" content="${metadata.webShareCoverUrl}" />
      <meta property="og:description" content="${metadata.description}" />`
}

/** generate Twitter card metadata */
function generateTwitterMetaData(metadata: ReturnType<typeof extractMetaData>, title?: string) {
  return `<meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="${metadata.businessName}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${metadata.description}" />
    <meta property="twitter:image" content="${metadata.webShareCoverUrl}" />`
}

export { extractMetaData, generateBasicMetaData, generateOGMetaData, generateTwitterMetaData }
