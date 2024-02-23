import { EntrustTypeEnum } from '@/constants/trade'
import { t } from '@lingui/macro'

export const SelectSideIdEnum = {
  [EntrustTypeEnum.normal]: 'sideInd',
  [EntrustTypeEnum.plan]: 'sideInd',
  [EntrustTypeEnum.stop]: 'triggerSideInd',
}

export function getTradePriceTypeEnumName(type: string) {
  return {
    new: t`constants_trade_752`,
    mark: t`future.funding-history.index-price.column.mark-price`,
  }[type]
}

export const getFutureRequestId = item => {
  return {
    [EntrustTypeEnum.normal]: 'id',
    [EntrustTypeEnum.plan]: 'refOrderId',
    [EntrustTypeEnum.stop]: 'refOrderId',
  }[item]
}

export const useFutureEnum = () => {
  const succeedConfig = {
    textColor: 'text-success_color',
    bgColor: 'bg-success_color_special_02',
  }
  const failedConfig = {
    bgColor: 'bg-card_bg_color_02',
    textColor: 'text-text_color_03',
  }

  const statusConfigs = {
    revoke: { text: t`constants/assets/common-33`, ...failedConfig, showButton: true },
    revoke_sys: { text: t`features_orders_spot_open_order_item_510253`, ...failedConfig, showButton: true },
    unsold: { text: t`constants_order_736`, ...failedConfig, showButton: false },
    partially: { text: t`constants_future_future_const_jchz8c55dlr0fwtn2-lrv`, ...succeedConfig, showButton: false },
    deal_done: { text: t`features_orders_spot_open_order_item_510252`, ...succeedConfig, showButton: true },
    partial_deal_canceled: {
      text: t`constants/assets/common-32`,
      bgColor: 'bg-brand_color_special_02',
      textColor: 'text-brand_color',
      showButton: true,
    },
    not_triggered: {
      text: t`constants_order_739`,
      showButton: false,
    },
    already_triggered: {
      text: t`features_orders_spot_open_order_item_510255`,
      ...succeedConfig,
      showButton: true,
    },
    triggered_failed: {
      text: t`features_orders_spot_open_order_item_510256`,
      ...failedConfig,
      showButton: true,
    },
    already_triggered_stop: {
      text: t`modules_future_stop_profitloss_index_page_5101509`,
      ...succeedConfig,
      showButton: true,
    },
    triggered_failed_stop: {
      text: t`constants_future_future_const_ql57pj3ytqhbzggvjr7av`,
      ...failedConfig,
      showButton: true,
    },
  }

  return {
    statusConfigs,
    failedConfig,
    succeedConfig,
  }
}
/** 合约相关帮助中心文档链接枚举 */
export enum FutureHelpCenterEnum {
  /** 标记价格说明 */
  markPrice = 'mark_price_help',
  /** 指数价格说明 */
  indexPrice = 'index_price_help',
  /** 资金费率说明 */
  fundingRate = 'funding_rate_help',
  /** 协议 */
  futureAgreement = 'contract_user_agreement',
  /** 风险提示 */
  futureRisk = 'risk_warning_statement',
  /** 额外保证金说明 */
  extraMargin = 'additional_margin',
  /** 强平规则 */
  liquidationRule = 'liquidation_rules',
}
