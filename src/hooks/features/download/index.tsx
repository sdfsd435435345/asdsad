import { getCodeDetailList } from '@/apis/common'
import { getDownloadApiData } from '@/apis/download'
import { downloadAppStatus, downloadTypeRanking } from '@/constants/download'
import { useCommonStore } from '@/store/common'
import { YapiGetV1HomeAppinfoGetListData } from '@/typings/yapi/HomeAppinfoGetListV1GetApi'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'

const appTypeCd = 'app_type_cd'

function useDownloadInfo() {
  const { locale, businessId } = useCommonStore()
  const lanType = locale

  const [appInfo, setappInfo] = useState({})
  const [desktopInfo, setdesktopInfo] = useState()
  useEffect(() => {
    if (businessId && lanType) {
      const requests = Promise.all([
        getDownloadApiData({ businessId: String(businessId), lanType }),
        getCodeDetailList({ codeVal: appTypeCd }),
      ])
      requests.then(res => {
        const downloadInfo = sortByDownloadRanking(res[0].data || [])
        const codeKey = res[1].data || []

        setappInfo(formatDownloadInfo(downloadInfo, codeKey, true))
        setdesktopInfo(formatDownloadInfo(downloadInfo, codeKey, false))
      })
    }
  }, [businessId, lanType])
  return { appInfo, desktopInfo }
}

function formatDownloadInfo(data, codeKey, isApp) {
  const result = data.reduce((prev, cur) => {
    if (checkIsAppOrActive(codeKey, cur, isApp)) {
      prev[cur.appTypeCd.toLowerCase()] = {
        ...cur,
        appTypeCd: codeKey.find(code => code.codeVal.toLowerCase() === cur.appTypeCd.toLowerCase())?.codeKey,
      }
    }

    return prev
  }, {})
  if (!isEmpty(result)) return result
}

function checkIsAppOrActive(codeKey, toCompare, isApp) {
  // temporary type until backend provide a type
  const app = 'app'
  const pc = 'pc'
  const currentAppType = toCompare.appTypeCd.toLowerCase()
  if (isApp) return codeKey.find(code => code.codeVal.toLowerCase() === currentAppType)?.remark === app
  return codeKey.find(code => code.codeVal.toLowerCase() === currentAppType)?.remark === pc
}

function sortByDownloadRanking(data: YapiGetV1HomeAppinfoGetListData[]) {
  return data.sort((a, b) => downloadTypeRanking[a.appTypeCd] - downloadTypeRanking[b.appTypeCd])
}

export default useDownloadInfo
