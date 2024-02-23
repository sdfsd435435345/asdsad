import { YapiGetV1TradePairTopVolumeListData } from '@/typings/yapi/TradePairTopVolumeV1GetApi'

export type ITabConfig<T = any> = {
  title: string
  id?: any
}

export type IHomeModuleTabsCommonResp = Partial<
  Omit<YapiGetV1TradePairTopVolumeListData, 'id'> & {
    id: string
  }
>

export type IMarketListCommonResp = YapiGetV1TradePairTopVolumeListData
