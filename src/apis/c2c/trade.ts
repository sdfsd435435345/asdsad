import { PaymentTypeEnum } from '@/constants/c2c/advertise'
import { C2cFastTradeSellPaymentStatus } from '@/constants/c2c/trade'
import { showCheckFailedModal } from '@/helper/c2c/trade'
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  IBestAdItem,
  IC2cCoinListResp,
  IC2cPayAccount,
  ICreateC2cOrderReq,
  IQueryC2cTradeAdMatchedReq,
  IQueryC2cUserReceivePaymentsResp,
  IQueryTradeAdListReq,
  IQueryTradeAdListResp,
  IQueryTradeAreaListResp,
  ITradeAdItem,
  IQueryTradingActivitiesReq,
  IQueryTradingActivitiesResp,
  ITradingActivitiesItem,
} from '@/typings/api/c2c/trade'
import {
  YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiRequest,
  YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiResponse,
} from '@/typings/yapi/C2cAdvertGetReleaseAdvertSwitchV1GetApi'
import {
  YapiGetV1C2cAreaCheckCoinHasAreaApiRequest,
  YapiGetV1C2cAreaCheckCoinHasAreaApiResponse,
} from '@/typings/yapi/C2cAreaCheckCoinHasAreaV1GetApi'
import { YapiPostV1C2cCoinListApiRequest } from '@/typings/yapi/C2cCoinListV1PostApi'
import {
  YapiPostV1C2cCoinMainChainListApiRequest,
  YapiPostV1C2CCoinMainChainListData,
} from '@/typings/yapi/C2cCoinMainChainListV1PostApi'
import {
  YapiGetV1C2cOrderCheckBeforeCreateApiRequest,
  YapiGetV1C2COrderCheckBeforeCreateData,
} from '@/typings/yapi/C2cOrderCheckBeforeCreateV1GetApi'
import {
  YapiGetV1C2cOrderCoinForbiddenCheckApiRequest,
  YapiGetV1C2COrderCoinForbiddenCheckData,
} from '@/typings/yapi/C2cOrderCoinForbiddenCheckV1GetApi'
import {
  YapiGetV1C2cOrderKycLimitCheckApiRequest,
  YapiGetV1C2COrderKycLimitCheckData,
} from '@/typings/yapi/C2cOrderKycLimitCheckV1GetApi'
import {
  YapiPostV1C2cQuickTransactionBuyCurrencyApiRequest,
  YapiPostV1C2CQuickTransactionBuyCurrencyListData,
} from '@/typings/yapi/C2cQuickTransactionBuyCurrencyV1PostApi'
import { YapiPostV1C2cQuickTransactionConfirmBuyApiRequest } from '@/typings/yapi/C2cQuickTransactionConfirmBuyV1PostApi'
import {
  YapiGetV1C2cQuickTransactionGetBestPriceApiRequest,
  YapiGetV1C2CQuickTransactionGetBestPriceData,
} from '@/typings/yapi/C2cQuickTransactionGetBestPriceV1GetApi'
import { YapiGetV1C2cQuickTransactionGetRateApiRequest } from '@/typings/yapi/C2cQuickTransactionGetRateV1GetApi'
import {
  YapiPostV1C2cQuickTransactionSellCurrencyApiRequest,
  YapiPostV1C2CQuickTransactionSellCurrencyListData,
} from '@/typings/yapi/C2cQuickTransactionSellCurrencyV1PostApi'
import { YapiGetV1OtcCoinListApiRequest, YapiGetV1OtcCoinListApiResponse } from '@/typings/yapi/OtcCoinListV1GetApi'
import {
  YapiPostV1OtcGetChannelsApiRequest,
  YapiPostV1OtcGetChannelsApiResponse,
} from '@/typings/yapi/OtcGetChannelsV1PostApi'
import { YapiGetV1OtcGetLimitApiRequest, YapiGetV1OtcGetLimitApiResponse } from '@/typings/yapi/OtcGetLimitV1GetApi'
import {
  YapiPostV1OtcGetOneChannelPriceApiRequest,
  YapiPostV1OtcGetOneChannelPriceApiResponse,
} from '@/typings/yapi/OtcGetOneChannelPriceV1PostApi'
import { YapiGetV1OtcGetUrlsApiRequest, YapiGetV1OtcGetUrlsApiResponse } from '@/typings/yapi/OtcGetUrlsV1GetApi'

/**
 * 获取 c2c 交易广告列表
 * https://yapi.nbttfc365.com/project/73/interface/api/5048
 */
export const queryC2cTradeAdList: MarkcoinRequest<IQueryTradeAdListReq, IQueryTradeAdListResp> = params => {
  return request({
    path: '/v1/c2c/advert/indexList',
    data: params,
    method: 'POST',
  })
}
/**
 * [盘口详情↗](https://yapi.nbttfc365.com/project/73/interface/api/12029)
 * */
export const queryC2cOrderBookDetail: MarkcoinRequest<
  IQueryTradeAdListReq,
  {
    adverts: IQueryTradeAdListResp
  }
> = data => {
  return request({
    path: '/v1/c2c/advert/tradingActivitiesDetail',
    method: 'POST',
    data,
  })
}
/**
 * 获取广告详情
 * https://yapi.nbttfc365.com/project/73/interface/api/5084
 */
export const queryC2cTradeAdDetail: MarkcoinRequest<
  {
    id: any
  },
  ITradeAdItem
> = params => {
  return request({
    path: '/v1/c2c/advert/detail',
    params: {
      advertId: params.id,
    },
  })
}
/**
 * 查询币种列表
 * https://yapi.nbttfc365.com/project/73/interface/api/4575
 */
export const queryC2cTradeCoinList: MarkcoinRequest<YapiPostV1C2cCoinListApiRequest, IC2cCoinListResp> = params => {
  return request({
    path: '/v1/c2c/coin/list',
    data: params,
    method: 'POST',
  })
}
/**
 * 创建订单
 * https://yapi.nbttfc365.com/project/73/interface/api/4543
 */
export const createC2cOrder: MarkcoinRequest<
  ICreateC2cOrderReq,
  {
    id: string | number
  }
> = data => {
  return request({
    path: '/v1/c2c/order/create',
    data,
    method: 'POST',
  })
}
/**
 * [获取最优价格](https://yapi.nbttfc365.com/project/73/interface/api/5282)
 * */
export const queryC2cFastTradeBestPrice: MarkcoinRequest<
  YapiGetV1C2cQuickTransactionGetRateApiRequest,
  {
    rate: string
  }
> = params => {
  return request({
    path: '/v1/c2c/quickTransaction/getRate',
    method: 'GET',
    params,
  })
}
/**
 * [获取快捷买币匹配广告](https://yapi.nbttfc365.com/project/73/interface/api/5210)
 * */
export const queryC2cFastTradeBuyAdMatched: MarkcoinRequest<
  YapiPostV1C2cQuickTransactionBuyCurrencyApiRequest,
  YapiPostV1C2CQuickTransactionBuyCurrencyListData[]
> = data => {
  return request({
    path: '/v1/c2c/quickTransaction/buyCurrency',
    method: 'POST',
    data,
  })
}
/**
 * [获取快捷卖币匹配广告](https://yapi.nbttfc365.com/project/73/interface/api/5210)
 * */
export const queryC2cFastTradeSellAdMatched: MarkcoinRequest<
  YapiPostV1C2cQuickTransactionSellCurrencyApiRequest,
  YapiPostV1C2CQuickTransactionSellCurrencyListData[]
> = data => {
  return request({
    path: '/v1/c2c/quickTransaction/sellCurrency',
    method: 'POST',
    data,
  })
}

/** 查询匹配的广告价格，将买卖统一为需要的数据结构 */
export const queryC2cTradeAdMatched = async ({ isBuy, ...data }: IQueryC2cTradeAdMatchedReq) => {
  let list: IBestAdItem[] = []
  if (isBuy) {
    const res = await queryC2cFastTradeBuyAdMatched(data)
    if (!res.data || !res.isOk) {
      showCheckFailedModal({
        code: res.code,
        message: res.message,
        payments: [],
        isBuy: true,
      })
      return list
    }
    list = res.data.map(item => {
      return {
        ...item,
        accounts: [
          {
            paymentId: item.paymentId as any,
            account: item.paymentAccount,
          },
        ],
      }
    })
  } else {
    const res = await queryC2cFastTradeSellAdMatched(data)
    if (!res.data || !res.isOk) {
      showCheckFailedModal({
        code: res.code,
        message: res.message,
        isBuy: false,
        payments: [],
      })
      return list
    }
    list = res.data.map(item => {
      return {
        accounts:
          item.status === C2cFastTradeSellPaymentStatus.unbound
            ? []
            : item.list?.map(ad => {
                return {
                  paymentId: ad.paymentId as any,
                  account: ad.paymentAccount || '',
                  qrcode: ad.qrCodeAddress,
                  paymentDetails: ad.paymentDetails,
                  name: ad.openBank,
                  enabled: item.status === C2cFastTradeSellPaymentStatus.exist,
                } as IC2cPayAccount
              }) || [],
        ...(item.list?.[0] || {
          paymentAccount: '',
          paymentId: '',
          paymentType: item.paymentType,
          price: '',
          advertId: '',
        }),
      }
    })
  }

  return list
}

/**
 * [买卖币校验↗](https://yapi.nbttfc365.com/project/73/interface/api/5372)
 * */
export const checkC2cOrderBeforeCreate: MarkcoinRequest<
  YapiGetV1C2cOrderCheckBeforeCreateApiRequest,
  YapiGetV1C2COrderCheckBeforeCreateData
> = params => {
  return request({
    path: '/v1/c2c/order/checkBeforeCreate',
    method: 'GET',
    params,
  })
}
/**
 * [kyc 额度校验↗](https://yapi.nbttfc365.com/project/73/interface/api/5463)
 * */
export const checkC2cKycAmountLimit: MarkcoinRequest<
  YapiGetV1C2cOrderKycLimitCheckApiRequest,
  YapiGetV1C2COrderKycLimitCheckData
> = params => {
  return request({
    path: '/v1/c2c/order/kycLimitCheck',
    method: 'GET',
    params,
  })
}

/**
 * [广告主链是否都禁止充币↗](https://yapi.nbttfc365.com/project/73/interface/api/5390)
 * */
export const checkC2cOrderCoinForbidden: MarkcoinRequest<
  YapiGetV1C2cOrderCoinForbiddenCheckApiRequest,
  YapiGetV1C2COrderCoinForbiddenCheckData
> = params => {
  return request({
    path: '/v1/c2c/order/coinForbiddenCheck',
    method: 'GET',
    params,
  })
}

/**
 * C2C 快捷买币 (https://yapi.nbttfc365.com/project/73/interface/api/5219)
 * */
export const createC2cFastTradeBuyOrder: MarkcoinRequest<YapiPostV1C2cQuickTransactionConfirmBuyApiRequest> = data => {
  return request({
    path: '/v1/c2c/quickTransaction/confirmBuy',
    method: 'POST',
    data,
  })
}

/**
 * C2C 快捷卖币 (https://yapi.nbttfc365.com/project/73/interface/api/5219)
 * */
export const createC2cFastTradSellOrder: MarkcoinRequest<YapiPostV1C2cQuickTransactionConfirmBuyApiRequest> = data => {
  return request({
    path: '/v1/c2c/quickTransaction/confirmSell',
    method: 'POST',
    data,
  })
}

/**
 * C2C 收款方式列表 (https://yapi.nbttfc365.com/project/73/interface/api/5464)
 * */
export const queryC2cUserReceivePayments: MarkcoinRequest<any, IQueryC2cUserReceivePaymentsResp> = data => {
  return request({
    path: '/v1/c2c/payment/reciveList/group',
    method: 'GET',
    data,
  })
}
/**
 * [快捷交易获取最优价格，有输入值时↗](https://yapi.nbttfc365.com/project/73/interface/api/5474)
 * */
export const queryC2cFastTradeBestPriceCountGt0: MarkcoinRequest<
  YapiGetV1C2cQuickTransactionGetBestPriceApiRequest,
  YapiGetV1C2CQuickTransactionGetBestPriceData
> = params => {
  return request({
    path: '/v1/c2c/quickTransaction/getBestPrice',
    method: 'GET',
    params,
  })
}
/**
 * [获取广告发布开关↗](https://yapi.nbttfc365.com/project/73/interface/api/5554)
 * */
export const queryCanPublishAd: MarkcoinRequest<
  YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiRequest,
  YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiResponse['data']
> = params => {
  return request({
    path: '/v1/c2c/advert/getReleaseAdvertSwitch',
    method: 'GET',
    params,
  })
}

/**
 * [通过币种 name 获取主链信息↗](https://yapi.nbttfc365.com/project/73/interface/api/5549)
 * */
export const queryCoinOutsideAddrList: MarkcoinRequest<
  YapiPostV1C2cCoinMainChainListApiRequest,
  YapiPostV1C2CCoinMainChainListData[]
> = data => {
  return request({
    path: '/v1/c2c/coin/mainChain/list',
    method: 'POST',
    data,
  })
}
/**
 * 获取 c2c 盘口列表
 * https://yapi.nbttfc365.com/project/73/interface/api/12024
 */
export const queryC2cTradeActivities: MarkcoinRequest<
  IQueryTradingActivitiesReq,
  IQueryTradingActivitiesResp
> = params => {
  return request({
    path: '/v1/c2c/advert/tradingActivities',
    params,
    method: 'GET',
  })
}

/**
 * [检测币种是否存在交易区↗](https://yapi.nbttfc365.com/project/73/interface/api/18589)
 * */
export const getV1C2cAreaCheckCoinHasAreaApiRequest: MarkcoinRequest<
  YapiGetV1C2cAreaCheckCoinHasAreaApiRequest,
  YapiGetV1C2cAreaCheckCoinHasAreaApiResponse['data']
> = params => {
  return request({
    path: '/v1/c2c/area/checkCoinHasArea',
    method: 'GET',
    params,
  })
}

/**
 * [获取第三方支付限额↗](https://yapi.nbttfc365.com/project/44/interface/api/18994)
 * */
export const getV1OtcGetLimitApiRequest: MarkcoinRequest<
  YapiGetV1OtcGetLimitApiRequest,
  YapiGetV1OtcGetLimitApiResponse['data']
> = params => {
  return request({
    path: '/v1/otc/getLimit',
    method: 'GET',
    params,
  })
}

/**
 * [第三方支付渠道列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18999)
 * */
export const postV1OtcGetChannelsApiRequest: MarkcoinRequest<
  YapiPostV1OtcGetChannelsApiRequest,
  YapiPostV1OtcGetChannelsApiResponse['data']
> = data => {
  return request({
    path: '/v1/otc/getChannels',
    method: 'POST',
    data,
  })
}

/**
 * [三方支付币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/19109)
 * */
export const getV1OtcCoinListApiRequest: MarkcoinRequest<
  YapiGetV1OtcCoinListApiRequest,
  YapiGetV1OtcCoinListApiResponse['data']
> = params => {
  return request({
    path: '/v1/otc/coinList',
    method: 'GET',
    params,
  })
}

/**
 * [获取第三方支付跳转信息↗](https://yapi.nbttfc365.com/project/44/interface/api/19014)
 * */
export const getV1OtcGetUrlsApiRequest: MarkcoinRequest<
  YapiGetV1OtcGetUrlsApiRequest,
  YapiGetV1OtcGetUrlsApiResponse['data']
> = params => {
  return request({
    path: '/v1/otc/getUrls',
    method: 'GET',
    params,
  })
}

/**
 * [获取单一渠道价格↗](https://yapi.nbttfc365.com/project/44/interface/api/19294)
 * */
export const postV1OtcGetOneChannelPriceApiRequest: MarkcoinRequest<
  YapiPostV1OtcGetOneChannelPriceApiRequest,
  YapiPostV1OtcGetOneChannelPriceApiResponse['data']
> = data => {
  return request({
    path: '/v1/otc/getOneChannelPrice',
    method: 'POST',
    data,
  })
}
