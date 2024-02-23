export function getC2cSettingPageRoutePath() {
  return `/c2c/center/set-up`
}

/**
 * 添加或修改收付款，修改时两参数都需要传
 * @param id 查询详情需要的唯一标识
 * @param type 查询的转账类型
 */
export function getCollectionAccountRoutePath(id?: string) {
  let url = `/c2c/payments/collection-account`
  if (id) url += `?id=${id}`
  return url
}

/**
 * 收付款详情
 * @param id 查询详情需要的唯一标识
 * @param paymentTypeCd 查询的转账类型
 */
export function getCollectionDetailRoutePath(id: string) {
  return `/c2c/payments/payment-details?id=${id}`
}
/** 跳转币对划转* */
export function getCapitalTransfer(type?: string) {
  if (type) {
    return `/c2c/center/capital-transfer?type=${type}`
  }
  return '/c2c/center/capital-transfer'
}

export function getC2cPaymentsManagePageRoutePath() {
  return '/c2c/payments'
}

export function getC2cCenterPageRoutePath(id?: any) {
  return `/c2c/center?uid=${id || ''}`
}
export function getC2cOrdersPageRoutePath() {
  return `/c2c/orders`
}
export function getC2cOrderDetailPageRoutePath(id?: string | number, withAction?: boolean) {
  return `/c2c/orders/detail/${id}?withAction=${withAction ? true : ''}`
}
export function getC2cThirdOrderDetailPageRoutePath(id?: string | number) {
  return `/c2c/orders/third-detail/${id}`
}
export function getC2cOrderCancelPageRoutePath(id?: string | number) {
  return `/c2c/orders/cancel/${id}`
}
export function getC2cOrderAppealPageRoutePath(id?: string | number) {
  return `/c2c/orders/appeal/${id}`
}
export function getC2cOrderAppealUploadPageRoutePath(id?: string | number) {
  return `/c2c/orders/appeal-upload/${id}`
}
export function getC2cOrderImPageRoutePath(id?: string | number) {
  return `/c2c/orders/im/${id}`
}
export function getC2cTradePageRoutePath(tab?: any) {
  return `/c2c/trade${tab ? `?tab=${tab}` : ''}`
}
export function getC2cFastTradePageRoutePath() {
  return `/c2c/fast-trade`
}
export function getC2cThirdTradePageRoutePath() {
  return `/c2c/third-trade`
}
/** c2c-发布广告 */
export function getC2cPostAdvPageRoutePath() {
  return `/c2c/post/adv`
}

/** c2c-广告单记录 */
export function getC2cAdsHistoryPageRoutePath() {
  return `/c2c/ads/history`
}

/** c2c-广告单详情 */
export function getC2cAdvDetailsPageRoutePath(id: string) {
  return `/c2c/adv/details/${id}`
}

/** c2c-merchant homepage */
export function getC2cMerchantPageRoutePath() {
  return '/c2c/merchant'
}

/** c2c-merchant form application */
export function getC2cMerchantApplicationPageRoutePath() {
  return '/c2c/merchant/application'
}

/** c2c-merchant form application success */
export function getC2cMerchantApplicationSuccessPageRoutePath() {
  return '/c2c/merchant/application-success'
}

/**
 * c2c 账户
 */
export function getC2CAccount() {
  return `/c2c/center/account`
}

/**
 * c2c 黑白名单
 * @param id 初始展示的名单
 */
export function getC2CListOperation(id: string) {
  return `/c2c/center/list-operation/${id}`
}

/**
 * c2c 盘口单详情
 * @param id 初始展示的名单
 */
export function getC2cOrderBookDetailPagePath() {
  return `/c2c/trade/handicap-detail`
}
