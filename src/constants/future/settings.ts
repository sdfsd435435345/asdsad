import { t } from '@lingui/macro'

export enum FutureSettingKLinePositionEnum {
  top,
  bottom,
  none,
}
export function getFutureSettingKLinePositionEnumName(type: FutureSettingKLinePositionEnum) {
  return {
    [FutureSettingKLinePositionEnum.top]: t`constants_future_settings_9hrut7ty5zwp8u7viwlan`,
    [FutureSettingKLinePositionEnum.bottom]: t`constants_future_settings_j4_fqdxwyukhw9n06rmct`,
    [FutureSettingKLinePositionEnum.none]: t`constants_future_settings_756`,
  }[type]
}
export enum FutureSettingOrderAreaPositionEnum {
  left,
  right,
}
export function getFutureSettingOrderAreaPositionEnumName(type: FutureSettingOrderAreaPositionEnum) {
  return {
    [FutureSettingOrderAreaPositionEnum.left]: t`constants_future_settings_757`,
    [FutureSettingOrderAreaPositionEnum.right]: t`constants_future_settings_758`,
  }[type]
}

export enum DepthColorBlockEnum {
  grandTotal = 1,
  single,
}

export function getFutureSettingDepthColorBlockEnumName(type: DepthColorBlockEnum) {
  return {
    [DepthColorBlockEnum.grandTotal]: t`constants_future_settings_4zr8vmu97q`,
    [DepthColorBlockEnum.single]: t`constants_future_settings_v26kvq8pgo`,
  }[type]
}

export enum TabEnum {
  /** 当前持仓 */
  holdingOrder = 'holding-order',
  /** 当前委托 */
  openOrder = 'open-order',
  /** 资产 */
  assets = 'assets',
  /** 合约要素 */
  elementOrder = 'element-order',
}

export const getFutureSettingModuleOrder = () => {
  return [
    { sort: 1, value: TabEnum.holdingOrder },
    { sort: 2, value: TabEnum.openOrder },
    { sort: 3, value: TabEnum.assets },
    { sort: 4, value: TabEnum.elementOrder },
  ]
}

export const getFutureSettingModuleOrderObject = () => {
  return {
    [TabEnum.holdingOrder]: t`constants_order_729`,
    [TabEnum.openOrder]: t`hooks_features_contract_5101491`,
    [TabEnum.assets]: t`page_title.assets`,
    [TabEnum.elementOrder]: t`features_trade_future_my_trade_index_5101489`,
  }
}

/** 保证金取回方式 */
export enum FutureSettingMarginTakeWayEnum {
  auto,
  manual,
}

export enum FutureSettingPEnum {
  auto = 'auto',
  manual = 'manual',
}
