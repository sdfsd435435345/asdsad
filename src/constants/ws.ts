// https://cd.admin-devops.com/zentao/doc-objectLibs-custom-0-79-665.html#app=doc
export enum WsTypesEnum {
  market = 'market',
  perpetualMarket = 'perpetual_market',
  perpetualIndex = 'perpetual_index',
  deal = 'deal',
  perpetualDeal = 'perpetual_deal',
  minedeal = 'mine_deal',
  depth = 'depth',
  perpetualDepth = 'perpetual_depth',
  kline = 'kline',
  perpetualKline = 'perpetual_kline',
  order = 'order',
  asset = 'asset',
  planOrder = 'stopOrder',
  marketFullAmount = 'trade_pairs_all',
  marketSlow = 'market_2s',
  concept = 'concept',
  marketActivities = 'market_activities',
  notice = 'notice',
  perpetualOrder = 'perpetual_order',
  perpetualGroupDetail = 'perpetual_group_detail',
  PerpetualPlanOrder = 'perpetual_plan',
  PerpetualProfitLoss = 'perpetual_profit_loss',
  perpetualGroupRefresh = 'perpetual_group_refresh',
  spotAssetsChange = 'spot_assets_change',
  c2cOrder = 'c2c_order',
  rate = 'rate',
  c2cAccount = 'c2c_account',
}

export enum WsBizEnum {
  spot = 'spot',
  perpetual = 'perpetual',
  c2c = 'c2c',
}

export enum InmailTypeEnum {
  spot = 'spot',
  type = 'notice',
}

export enum WsThrottleTimeEnum {
  Slower = 2000, // 慢速 2 秒 1 次
  Slow = 1000, // 慢速 1 秒 1 次
  Market = 500, // 正常速度 1 秒 2 次
  Medium = 300, // 中等速度 1 秒 3 次
  Fast = 100, // 快速 1 秒 10 次
}

export function getWsContractType(type: WsTypesEnum) {
  return `perpetual_${type}`
}
