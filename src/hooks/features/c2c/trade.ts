import { useC2CCenterStore } from '@/store/c2c/center'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { ITradeAdItem } from '@/typings/api/c2c/trade'
import { AreaTransactionTypeEnum } from '@/constants/c2c/common'
import { C2cTradeAdDirectionEnum } from '@/constants/c2c/trade'
import {
  checkCanOrder,
  getCoinCanDeposit,
  getCoinCanRecharge,
  paymentTypeToPayment,
  validateCountry,
  fetchC2cTradeStoreSettings,
  validateSellPayments,
} from '@/helper/c2c/trade'
import { useBaseC2cTradeStore } from '@/store/c2c/trade'
import { t } from '@lingui/macro'
import { Dialog } from 'react-vant'
import { useRequest, useMount } from 'ahooks'
import { useState } from 'react'
import { useTradeContext } from '@/features/c2c/trade/trade-context'
import { queryC2cTradeActivities } from '@/apis/c2c/trade'

/** 获取 c2c 账户余额 */
export function useC2cCoinBalance(coinId: any) {
  const { balanceList, getBalanceList } = useC2CCenterStore()
  // TODO: 订阅
  return Number(balanceList.find(ad => ad?.coinId?.toString() === coinId?.toString())?.balance || 0)
}
/** C2C 交易所需 hook 一次性调用 */
export function useC2cTradeBaseHooks() {
  const { fetchOrderEnums, setDefaultEnums } = useBaseC2cOrderStore()
  const { getC2CCenterUser, getBalanceList } = useC2CCenterStore()
  useMount(() => {
    setDefaultEnums()
    fetchOrderEnums()
    fetchC2cTradeStoreSettings()
    getC2CCenterUser('', true)
    getBalanceList()
  })
}
/** 返回广告购买或出售的验证函数 */
export function useAdBuyOrSell(ad: ITradeAdItem) {
  const { params } = useTradeContext()
  const currentTradeArea = params.currentTradeArea!
  const isBuy = ad?.advertDirectCd === C2cTradeAdDirectionEnum.buy
  const canTrade = ad?.canTrade
  const test = false
  // 就用这个
  const userInfo = {
    country: '1',
    tradeLimit: 100,
    tradeAmount: 80,
    payments: ['WECHAT', 'ALIPAY', 'BANK'],
  }
  const [formVisible, setFormVisible] = useState(false)
  const { settings } = useBaseC2cTradeStore()
  const isOutside = ad?.tradeTypeCd === AreaTransactionTypeEnum.outside
  const adPayments = (ad.newPayments || [])
    .filter(v => !v.grey)
    .map(v => v.name)
    .map(paymentTypeToPayment)
  const networkNames = (ad?.mainchainAddrs || [])
    .map(net => `${params.currentCoin?.symbol}(${net.name})`)
    .join(t`features_c2c_trade_ad_list_2222222225101679`)
  async function buy() {
    const [kycResult, rechargeResult] = await Promise.all([
      test
        ? Promise.resolve(true)
        : checkCanOrder({
            isBuy: true,
            adId: ad?.advertId,
            payments: adPayments,
            count: 0,
          }),
      test ? Promise.resolve(true) : isOutside ? getCoinCanRecharge(ad?.advertId) : Promise.resolve(true),
    ])
    if (!kycResult) {
      return
    }
    // 站外风险提示
    if (isOutside && settings.showOutsideInfo) {
      settings.updateShowOutsideInfo(false)
      await Dialog.confirm({
        title: t`features_c2c_trade_ad_list_2222222225101680`,
        className: 'dialog-confirm-wrapper confirm-black',
        message: t`features_c2c_trade_ad_list_2222222225101683`,
        confirmButtonText: t`features_c2c_trade_ad_list_2222222225101682`,
        cancelButtonText: t`features_c2c_trade_ad_list_2222222225101684`,
      })
    }
    // 主链禁止充值
    if (isOutside && !rechargeResult) {
      Dialog.alert({
        title: t`features_c2c_trade_ad_list_2222222225101685`,
        className: 'dialog-confirm-wrapper confirm-black',
        message: t({
          id: 'features_c2c_trade_ad_list_2222222225101686',
          values: { 0: networkNames },
        }),
        confirmButtonText: t`features_c2c_trade_ad_list_2222222225101684`,
      })
      return
    }

    setFormVisible(true)
  }
  async function sell() {
    const [kycResult, depositResult] = await Promise.all([
      test
        ? Promise.resolve(true)
        : checkCanOrder({
            isBuy: false,
            adId: ad?.advertId,
            count: 0,
            payments: adPayments,
          }),
      test ? Promise.resolve(true) : isOutside ? getCoinCanDeposit(ad?.advertId) : Promise.resolve(true),
    ])
    if (!kycResult) {
      return
    }
    // 支付方式
    if (!validateSellPayments(ad?.payments?.map(paymentTypeToPayment), userInfo)) {
      return
    }
    // 站外风险提示
    if (isOutside && settings.showOutsideInfo) {
      settings.updateShowOutsideInfo(false)
      await Dialog.confirm({
        className: 'dialog-confirm-wrapper confirm-black',
        title: t`features_c2c_trade_ad_list_2222222225101680`,
        message: t`features_c2c_trade_ad_list_2222222225101687`,
        confirmButtonText: t`features_c2c_trade_ad_list_2222222225101682`,
        cancelButtonText: t`features_c2c_trade_ad_list_2222222225101684`,
      })
    }
    // 主链禁止提币
    if (isOutside && !depositResult) {
      Dialog.alert({
        title: t`features_c2c_trade_ad_list_2222222225101685`,
        className: 'dialog-confirm-wrapper confirm-black',
        message: t({
          id: 'features_c2c_trade_ad_list_2222222225101688',
          values: { 0: networkNames },
        }),
        confirmButtonText: t`features_c2c_trade_ad_list_2222222225101684`,
      })
      return
    }

    setFormVisible(true)
  }
  const { runAsync: onBuyOrSell, loading } = useRequest(
    async () => {
      if (!canTrade) {
        return
      }
      if (!validateCountry(params.currentTradeArea!, userInfo.country)) {
        return
      }
      if (isBuy) {
        await buy()
      } else {
        await sell()
      }
    },
    {
      manual: true,
    }
  )

  return {
    onBuyOrSell,
    formVisible,
    loading,
    setFormVisible,
  }
}

export function useQueryC2CTradingActivities({ coinId, areaId }) {
  return useRequest(() => queryC2cTradeActivities({ coinId, areaId }), {
    refreshDeps: [coinId, areaId],
    ready: !!coinId && !!areaId,
  })
}
/**
 * 获取 c2c 为公共模式时发生页面跳转，并返回是否可以展示页面的布尔值
 * @return 是否可以展示页面
 */
export function useC2cToPublic() {
  return false
}
