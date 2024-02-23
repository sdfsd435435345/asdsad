import { getBasicWebApiData, getV1HomeColumnGetListApiRequest } from '@/apis/layout'
import { baseLayoutStore } from '@/store/layout'
import { TlayoutProps } from '@/typings/api/layout'
import {
  YapiGetV1HomeWebsiteGetData,
  YapiGetV1HomeWebsiteGetDataApiRequest,
} from '@/typings/yapi/HomeWebsiteGetDataV1GetApi'
import { businessId } from '../env'
import { extractFooterData, recursiveColumnMap } from './footer'
import { extractHeaderData } from './header'

async function getLayoutPropsWithFooter(
  lanType: YapiGetV1HomeWebsiteGetDataApiRequest['lanType']
): Promise<TlayoutProps | undefined> {
  if (businessId) {
    const params = { businessId, lanType }
    const req = Promise.all([getBasicWebApiData(params), getV1HomeColumnGetListApiRequest(params)])
    const res = await req
    return res[0].data && res[1].data
      ? {
          ...res[0].data,
          ...res[1].data,
        }
      : undefined
  }
}

async function getLayoutProps(
  lanType: YapiGetV1HomeWebsiteGetDataApiRequest['lanType']
): Promise<YapiGetV1HomeWebsiteGetData | TlayoutProps | undefined> {
  return await getLayoutPropsWithFooter(lanType)
}

function initializeLayoutStore(pageContext) {
  const layoutStore = baseLayoutStore.getState()
  const { setFooterData, setHeaderData, setLayoutProps, setColumnsDataByCd } = layoutStore
  const { layoutProps } = pageContext
  setLayoutProps(pageContext?.layoutProps)
  const headerData = extractHeaderData(layoutProps)
  const footerData = extractFooterData(layoutProps)
  setColumnsDataByCd(recursiveColumnMap(layoutProps?.columnsDatas || []))
  setHeaderData(headerData)
  setFooterData(footerData)
}

export { getLayoutProps, initializeLayoutStore }
