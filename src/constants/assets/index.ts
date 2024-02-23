/** 资产相关模块 */

export enum AssetsRouteEnum {
  /** 总览 */
  overview = 0,
  spot,
  /** 币种/充提 */
  coins,
  /** 借还款  */
  borrow,
  /** 合约 */
  contract,
  /** 手续费 */
  fee,
  /** 衍生品 */
  derivative,
  /** 其他 */
  other,
  /** 返佣 */
  commission,
  /** C2C */
  c2c,
  /** 杠杆 */
  leverage,
  /** 理财 */
  financial,
}

/**
 * 设置充提提醒类型
 */
export enum AssetsCoinRemindSettingTypeEnum {
  /** 充值 */
  recharge = 1,
  /** 提现 */
  withdraw,
}

/** 资产提现类型 */
export enum AssetsWithdrawTypeEnum {
  /** 区块链提币 */
  blockchain = 1,
  /** 平台内支付 */
  platform,
}

/**
 * 财务记录 tab 类型
 */
export enum FinancialRecordRouteEnum {
  /** 充提 */
  main = 'main',
  /** 合约 */
  contract = 'futures',
  /** 衍生品 */
  derivative = 'derivative',
  /** 其他 */
  other = 'other',
  /** 手续费 */
  fee = 'fee',
  /** 返佣 */
  commission = 'commission',
  /** 划转* */
  transfer = 'transfer',
  /** C2C 账户 */
  c2c = 'c2c',
}

/**
 * 根据跳转类型设置财务记录 tab
 * @param type
 * @returns
 */
export const setFinancialRecordRoute = type => {
  return {
    [AssetsRouteEnum.overview]: FinancialRecordRouteEnum.main,
    [AssetsRouteEnum.coins]: FinancialRecordRouteEnum.main,
    [AssetsRouteEnum.contract]: FinancialRecordRouteEnum.contract,
    [AssetsRouteEnum.leverage]: FinancialRecordRouteEnum.main,
    [AssetsRouteEnum.financial]: FinancialRecordRouteEnum.main,
    [AssetsRouteEnum.fee]: FinancialRecordRouteEnum.fee,
    [AssetsRouteEnum.other]: FinancialRecordRouteEnum.other,
    [AssetsRouteEnum.commission]: FinancialRecordRouteEnum.commission,
    [AssetsRouteEnum.c2c]: FinancialRecordRouteEnum.c2c,
  }[type]
}

/**
 * 根据跳转类型设置财务记录 tab
 * @param type
 * @returns
 */
export const setFinancialRecordLogType = (type: string) => {
  return {
    // [FinancialRecordRouteEnum.main]: AssetsRouteEnum.overview,
    [FinancialRecordRouteEnum.main]: AssetsRouteEnum.coins,
    [FinancialRecordRouteEnum.contract]: AssetsRouteEnum.contract,
    [FinancialRecordRouteEnum.derivative]: AssetsRouteEnum.derivative,
    [FinancialRecordRouteEnum.other]: AssetsRouteEnum.other,
    [FinancialRecordRouteEnum.fee]: AssetsRouteEnum.fee,
    [FinancialRecordRouteEnum.commission]: AssetsRouteEnum.commission,
    [FinancialRecordRouteEnum.c2c]: AssetsRouteEnum.c2c,
  }[type]
}

export enum FinancialRecordTypeEnum {
  /** 提币 */
  withdraw = 1,
  /** 充值 */
  deposit = 2,
  /** 冲正 */
  reversa = 3,
  /** Pay */
  pay = 4,
}

export enum FinancialRecordStateEnum {
  /** 进行中 */
  processing = 1,
  /** 成功 */
  success,
  /** 失败 */
  fail,
  /** 错误 */
  error,
}

export enum FinancialRecordPayTypeEnum {
  /** 发出 */
  send = 1,
  /** 接收 */
  receive = 2,
}

export enum FinancialRecordTimePickerEnum {
  /** 开始时间选择器 */
  startTime = 1,
  /** 结束时间选择器 */
  endTime = 2,
}

/** 货币代码展示 */
export enum CurrencySymbolEnum {
  /** 货币符号 - 如：$、¥ */
  symbol = 'symbol',
  /** 货币简称 - 如：CNY、USD */
  code = 'code',
}

/**
 * 主链充值类型
 */
export enum MainTypeDepositTypeEnum {
  yes = 1,
  no,
}

/**
 * 主链提币类型
 */
export enum MainTypeWithdrawTypeEnum {
  yes = 1,
  no,
}

/**
 * 主链 memo 类型
 */
export enum MainTypeMemoTypeEnum {
  yes = 1,
  no,
}

/** 资产推送订阅使用页面 */
export enum AssetWsSubscribePageEnum {
  /** 交易页 */
  trade = 'trade',
  /** 其他：资产总览、币币资产等页面 */
  other = 'other',
}

export const OSSDOMAIN_IMAGE = 'https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/'
