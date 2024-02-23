/**
 * 服务端引导图枚举
 */
export enum GuideMapEnum {
  /** 合约 k 线页面 */
  contractKline = 'contract_kline',
  /** 合约组详情页面 */
  contractGroupDetails = 'contract_group_details',
  /** 资产合约组页面 */
  assetContractGroup = 'asset_contract_group',
  /** 行情页面 */
  marketPage = 'market_page',
  /** 额外保证金列表 */
  additionalMargin = 'additional_margin',
  /** 现货 k 线页面 */
  spotKline = 'spot_kline',
  /** 资产 - 提币地址管理 */
  assetWithdrawalAddressManagement = 'asset_withdrawal_address_management',
  /** 合约交易页面 */
  contractTransactions = 'contract_transactions',
  /** 资产合约资产列表 */
  contractAssetListMargin = 'contract_asset_list_margin',
}

/**
 * 是否需要展示引导图
 */
export enum GuideMapShowEnum {
  /** 展示 */
  yes = '0',
  /** 不展示 */
  no = '1',
}
