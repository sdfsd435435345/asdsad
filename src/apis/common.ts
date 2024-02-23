import request, { CustomRequestConfig, MarkcoinRequest, MarkcoinResponse } from '@/plugins/request'
import { baseCommonStore } from '@/store/common'
import {
  YapiGetV1MemberCurrencyListApiRequest,
  YapiGetV1MemberCurrencyListApiResponse,
} from '@/typings/yapi/MemberCurrencyListV1GetApi'
import {
  YapiGetV1OpenapiComCodeGetCodeDetailListApiRequest,
  YapiGetV1OpenapiComCodeGetCodeDetailListData,
} from '@/typings/yapi/OpenapiComCodeGetCodeDetailListV1GetApi'
import {
  YapiPostV1StorageFileUploadApiRequest,
  YapiPostV1StorageFileUploadApiResponse,
} from '@/typings/yapi/StorageFileUploadV1PostApi'
import {
  YapiPostV1StorageFileUploadVideoApiRequest,
  YapiPostV1StorageFileUploadVideoApiResponse,
} from '@/typings/yapi/StorageFileUploadVideoV1PostApi'

/**
 * 获取数据字典列表
 * https://yapi.nbttfc365.com/project/44/interface/api/3595
 */
export const getCodeDetailList: MarkcoinRequest<
  Partial<YapiGetV1OpenapiComCodeGetCodeDetailListApiRequest>,
  YapiGetV1OpenapiComCodeGetCodeDetailListData[]
> = ({ customConfig = {}, ...params }) => {
  const { locale } = baseCommonStore.getState()
  return request({
    path: '/v1/openapi/com/code/getCodeDetailList',
    method: 'GET',
    params: {
      lanType: locale,
      ...params,
    },
    ...customConfig,
  })
}

/**
 * 获取国家列表
 * https://yapi.nbttfc365.com/project/44/interface/api/12204
 */
export const getComCodeCountry: MarkcoinRequest<
  Partial<YapiGetV1OpenapiComCodeGetCodeDetailListApiRequest>,
  YapiGetV1OpenapiComCodeGetCodeDetailListData[]
> = params => {
  const { locale, businessId } = baseCommonStore.getState()
  return request({
    path: '/v1/openapi/com/code/getCountryList',
    method: 'GET',
    params: {
      lanType: locale,
      businessId,
      ...params,
    },
  })
}

/**
 * 批量获取数据字典列表
 * https://yapi.nbttfc365.com/project/44/interface/api/3715
 */
export const getCodeDetailListBatch = async (codeVals: string[], config?: CustomRequestConfig) => {
  const res: MarkcoinResponse<{
    [x: string]: {
      [y: string]: YapiGetV1OpenapiComCodeGetCodeDetailListData[]
    }
  }> = await request({
    path: '/v1/openapi/com/code/batchGetCodeDetailList',
    method: 'GET',
    params: {
      lanTypes: baseCommonStore.getState().locale,
      codeVals: codeVals.join(','),
    },
    ...(config || {}),
  })
  if (!res.isOk || !res.data) {
    return codeVals.map(() => [])
  }

  return codeVals.map(codeVal => {
    const result = res.data?.[codeVal]
    // 只取一种语言
    return Object.values(result || {})[0] || []
  })
}

/**
 * [上传文件↗](https://yapi.nbttfc365.com/project/44/interface/api/3357)
 * */
export const postV1StorageFileUploadApiRequest: MarkcoinRequest<
  YapiPostV1StorageFileUploadApiRequest,
  YapiPostV1StorageFileUploadApiResponse
> = data => {
  return request({
    path: '/v1/storage/file/upload',
    method: 'POST',
    timeout: 20 * 1000,
    data,
  })
}

/**
 * [上传视频的接口↗](https://yapi.nbttfc365.com/project/44/interface/api/5183)
 * */
export const postV1StorageFileUploadVideoApiRequest: MarkcoinRequest<
  YapiPostV1StorageFileUploadVideoApiRequest,
  YapiPostV1StorageFileUploadVideoApiResponse
> = data => {
  return request({
    path: '/v1/storage/file/upload/video',
    method: 'POST',
    data,
    headers: {},
  })
}
