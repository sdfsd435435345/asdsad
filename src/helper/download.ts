import { downloadAppStatus } from '@/constants/download'
import { YapiGetV1HomeAppinfoGetListData } from '@/typings/yapi/HomeAppinfoGetListV1GetApi'
import { getCodeDetailList } from '@/apis/common'
import { t } from '@lingui/macro'
import { getBusinessName } from './common'

const appTypeCd = 'app_type_cd'

function buttonShouldDisabled(data: YapiGetV1HomeAppinfoGetListData) {
  if (data.appStatusInd === downloadAppStatus.inActive || data.downloadUrl === '/') return true
  return false
}
async function generateDownloadSeoMeta() {
  const businessName = getBusinessName()
  const getTitle = downloadClientText =>
    downloadClientText
      ? `${downloadClientText} ${t({
          id: 'helper_download_9zopbsz30f',
          values: { 0: businessName },
        })}`
      : t({
          id: 'helper_download_9zopbsz30f',
          values: { 0: businessName },
        })
  const getDescription = downloadClientText =>
    downloadClientText
      ? `${downloadClientText} ${t({
          id: 'helper_download_qvtthdun37',
          values: { 0: businessName },
        })}`
      : t({
          id: 'helper_download_qvtthdun37',
          values: { 0: businessName },
        })

  const res = await getCodeDetailList({ codeVal: appTypeCd })
  if (!res.isOk) return

  const downloadClients = res?.data?.map(client => client.codeKey)
  const downloadClientText = `${businessName} ${downloadClients!.reduce((aggr, curr) => {
    aggr += t({
      id: 'helper_download_xfgdgzhllj',
      values: { 0: curr },
    })
    return aggr
  }, '')}`

  return {
    title: getTitle(downloadClientText),
    description: getDescription(downloadClientText),
  }
}

export { buttonShouldDisabled, generateDownloadSeoMeta }
