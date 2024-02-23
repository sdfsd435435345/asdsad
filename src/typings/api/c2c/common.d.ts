import { YapiGetV1C2CCommonSettingData } from "@/typings/yapi/C2cCommonSettingV1GetApi";

/**
 * 获取可交易的区域列表
 */
export type C2CAreaListReq =  {
    /** 筛选关键字 */
    searchKey?: string;
    /** 是否返回所有区域（true 返回所有区域，false 返回可以交易的区域）默认值 true */
    returnAll?: boolean;
}

type AreaRiskWarn = {
    /** 区域 id */
    areaId: string;
    /** 是否强制阅读 */
    isForceRead: string;
    businessId: string;
    id: string;
    /** 标题 */
    title: string;
    /** 内容 */
    content: string;
}

type MakeAreaMenyType = {
  areaId: string
  available: boolean
}

export type C2CAreaListResp = {
  /** 国家缩写，用于拉取图片（跟注册页面相同） */
  countryAbbreviation: string;
  /** 风险提示 */
  areaRiskWarn: AreaRiskWarn;
  /** 发布广告要求（NONE 没要求，MERCHANT 认证商家 */
  advertRequire: string;
  /** 支付方式 */
  payments?: any;
  /** 价格精度 */
  precision: number;
  /** 货币符号 */
  currencySymbol: string;
  /** 冻结时间 */
  freezeTime: number;
  /** 交易状态（ENABLE、DISABLE） */
  statusCd: string;
  /** 默认显示类型 ALL 全部、INSIDE 站内、OUTSIDE 站外 */
  defaultClientTypeCd: string;
  /** 是非允许站外交易（YES 可以 NO 不可以） */
  canOutTrade: string;
  /** 序号 */
  sequence: number;
  /** 法币 id */
  legalCurrencyId: string;
  /** 交易区名字 */
  currencyName: string;
  /** 是否可以发布广告 */
  canPublishAdvert?: boolean;

  paymentSupportItems: Array<any>
  availableData:Array<MakeAreaMenyType>
}

/**
 * 获取可交易的区域下的币种列表
 */
export type C2CCoinListReq = {
    /** 区域 id 集合 */
    areaIds: string[];
    /** 搜索关键字 */
    searchKey?: string;
}

export type C2CCoinListResp = {
  /** 余额 */
  balance: string;
  id: string;
  /** 交易状态（ENABLE、DISABLE） */
  statusCd: string;
  /** 币对 */
  symbol: string;
  webLogo: string;
  appLogo: string;
  /** 最大交易数量 */
  maxTransQuantity: string;
  /** 币种名称 */
  coinFullName: string;
  /** 币种名称 */
  coinName: string;
  /** 最小交易数量 */
  minTransQuantity: string;
  /** 币种价格精度 */
  precision?: number;
  /** 币种数量精度 */
  trade_precision?: number;
  /** 是否默认选中 */
  defaultShow?: boolean;
}

/**
 * 获取币种下主链列表
 */
export type C2CMainTypeListReq = {
    /** 币种 id */
    coinId: string;
}

export type C2CMainTypeListResp = {
    webLogo: string;
    mainnet: string;
    appLogo: string;
    symbol: string;
    /** 币种名称 */
    coinFullName: string;
    /** 是否使用地址标签，1 是，2 否 */
    isUseMemo: number;
    /** 是否开启充值，1 开启，2 关闭 */
    isDeposit: number;
    /** 主链类型 */
    mainType: string;
    /** 是否可以提现 */
    isWithdraw: number;
    /** 币种名称 */
    coinName: string;
    id: string;
    /** 充币地址 */
    address?: string;
    /** memo 地址 */
    memo?: string;
    name?: string;
    /** 充币地址是否错误 */
    addressError?: boolean;
}

export type IC2cCommonSettings = YapiGetV1C2CCommonSettingData