import { UploaderValueItem } from 'react-vant'
import { CoinListResp, RecordsCoinListResp } from '@/typings/api/assets/assets'

export type C2CCenterPersonType = {
    id?: number
  businessId?: number
  uid?: number
  /**
   * 总订单数
   */
  orderCount?: number
  /**
   * 完成订单数
   */
  completedOrderCount?: number
  /**
   * 完成订单率
   */
  completedOrderRate?: number
  /**
   * 是否商户
   */
  isMerchant?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 总交易金额
   */
  totalOrderAmount?: number
  /**
   * 平均付款时间 以下时间单位都是秒
   */
  avgPayTime?: number
  /**
   * 平均放币时间 站内
   */
  avgConfirmTimeInside?: number
  /**
   * 平均放币时间 站外
   */
  avgConfirmTimeOutside?: number
  /**
   * 服务人数
   */
  customerCnt?: number
  /**
   * 注册时间
   */
  registerTime?: null
  /**
   * kyc 等级   0 或者 1 为未认证 2 为个人标准认证 3 为个人高级认证 4 为企业认证
   */
  kycType?: number
  /**
   * 是否关注
   */
  followed?: boolean
  /**
   * 是否拉黑
   */
  blocked?: boolean
  /**
   * 头像
   */
  avatarPath?: null
  /**
   * 注册国籍 字典表编码
   */
  regCountryCd: string
}

export type C2CListBalanceType = {
    symbol: string // 币种代码
    coinId: number // 币种 ID
    uid: number | null 
    balance: number // 余额
    businessId: number
    coinFullName: string // 币种名
    coinName: string
    appLogo?: string
    freezeBalance: number // 冻结金额
    merchantFreezeBalance: number
}

export type C2CUserSettingType = {
    id: number 
    uid: number | null 
    welcomeInfoType: number // 欢迎语类型（1 文字、2 图片）
    businessId: number
    online: boolean
    createdTime?: number
    connectTime: number
    welcomeInfoMessage: string // 欢迎语内容（文字或图片地址）
    receiveOrderStatus: number // 接单状态（1 可接单、2 休息、3 系统自动判断是否在线、4 设定在线时间）
    receiveOrderTimeJson: string // 接单时间 json
}

export type C2CUserTimeSettingType = {
    dayInWeek: string
    startTime?: string
    endTime?: string
}

export type C2CCenterMenuType = {
    id: string,
    title: string,
    value: string,
    type?: string
}

export type C2CListOperation = {
    kycType: number | null
    avatarPath: string | null
    nickName: string | null
    uid: number | null
    isMerchant: number
    isSelect?: boolean
}

type C2CAreaRiskWarn = {
    id:string
    title:string
    areaId:string
    businessId:string
    isForceRead:number
}

export type C2CDressingPopupType = {
    advertRequire: string
    areaRiskWarn: C2CAreaRiskWarn
    canOutTrade: string
    countryAbbreviation: string
    currencyName: string
    currencySymbol: string
    defaultClientTypeCd: string
    freezeTime: number
    legalCurrencyId: string
    payments: string[]
    precision: number
    sequence: number
    statusCd: string
    isSelected?: boolean
}

export type C2CMakePaymentsType = {
    id:string //收款方式唯一 ID	
    paymentTypeCd:string //BANK，银行卡，WECHAT，微信，ALIPAY，支付宝	
    name:string	//姓名	
    account:string	//账号	
    bankOfDeposit: string //开户行	
    qrCodeAddr: string //二维码 (图片资源地址)	
    enabled: number //是否启用，1，启用，0，未启用	
    legalCurrencyId: string
    bankBranch: string
    paymentDetails: string
}

export type C2CPayMoneyType = {
    name:string
    id:string
    enabled:number
}

type C2CCenterAssetItemType = {
    /**
   * 地址
   */
  address: null
  /**
   * 类型 TRC20
   */
  name: string
  /**
   * memo
   */
  memo: null
}

type C2CCenterAssetsItem = {
    name: string,
    grey: boolean
}

export type C2CCenterAssetsType = {
   /**
   * 最小金额
   */
  minAmount: string
  /**
   * 有效期
   */
  validDate: number
  /**
   * 支付方式
   */
  payments: string[]
  /**
   * 备注
   */
  remark: string
  /**
   * 服务人数，广告主才有
   */
  customerCnt: number
  /**
   * 成单数大于
   */
  completedOrderCount: number
  /**
   * 广告方向 (BUY SELL)
   */
  advertDirectCd: string
  /**
   * 下架时间
   */
  removalTime: number | null
  /**
   * 价格
   */
  price: string
  /**
   * 最大金额
   */
  maxAmount: string
  /**
   * 支付方式详情 (参考首页广告接口)
   */
  paymentDetails: {}
  /**
   * 下架详情
   */
  removalReason: string | null
  /**
   * 数量
   */
  quantity: string
  /**
   * 昵称
   */
  nickName: null
  /**
   * 订单数
   */
  orderCount: number
  /**
   * 是否是商户
   */
  merchant: boolean
  /**
   * 认证等级 (ELEMENTARY 初级认证 SENIOR 高级认证 ENTERPRISE 企业认证)
   */
  certificationLevelCd: string
  /**
   * 头像
   */
  avatar: null
  /**
   * 广告 id
   */
  advertId: string
  /**
   * 是否在线
   */
  onLine: boolean
  /**
   * 币种 id
   */
  coinId: string
  /**
   * 交易总量
   */
  totalOrderAmount: string
  /**
   * 创建时间
   */
  createTime: number
  /**
   * 主链地址
   */
  mainchainAddrs: C2CCenterAssetItemType[]
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 交易类型 (INSIDE OUTSIDE)
   */
  tradeTypeCd: string
  /**
   * 广告状态（ON_SHELVES 上架中、EXPIRED 到期下架、TAKE_OFF_SHELVES_MERCHANT 商家下架、TAKE_OFF_SHELVES_SYSTEM 系统下架、DEALING 交易中、WIDTHDRAW 撤回中）
   */
  statusCd: string
  /**
   * 区域名字
   */
  areaName: string
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 新的广告状态（跟商户关联）(RESTING 休息中、NORMAL 正常、DEALING 交易中)
   */
  advertNewStatus: string
  newPayments?: C2CCenterAssetsItem[]
}

type MakeAreaMenyType = {
    areaId: string
    available: boolean
}

export type MakePaymenyType = {
    /**
   * 收款方式唯一 ID
   */
  id: string
  /**
   * BANK，银行卡，WECHAT，微信，ALIPAY，支付宝
   */
  paymentTypeCd: string
  /**
   *  姓名
   */
  name: string
  /**
   *  账号
   */
  account: string
  /**
   * 开户行
   */
  bankOfDeposit: string
  /**
   * 二维码 (图片资源地址)
   */
  qrCodeAddr: string
  /**
   * 是否启用，1，启用，0，未启用
   */
  enabled: number
  /**
   * 交易区 ID，多个以逗号分割
   */
  legalCurrencyId: string

  availableData: Array<MakeAreaMenyType>
  isProhibit?: boolean
}

type PayPopupMoneyType = {
    id: string
    name: string
    value: string
    account: string
    isProhibit?: boolean
}

export type C2CSetUpReactiveType = {
    radioId: number
    radioStatus: number
    onlineText: string
    uploaderUrl: string
    uploaderUrlShow: Array<UploaderValueItem>
    userTimeSetting: C2CUserTimeSettingType
}

export type C2CListOperationReactiveType = {
    loading: boolean
    visible: boolean
    finished: boolean
    fullLoading: boolean
    pageNum: number
    currentId: number
    tabId: string
    listData: Array<C2CListOperation>
}

export type C2CListCapitalCoinType = {
    balance?:number // 余额
    availableAmount?:number // 可用余额
    coinPrecision?:number // 精度
    coinName:string // 币种名称
    appLogo?:string // 币种图标
    id?:string // 币种 id
    coinId?:string
}

export type C2CListCapitalTransferReactiveType = {
    coinPrice: string // 价格
    coinC2cData: Array<RecordsCoinListResp> // C2C 币种列表
    coinAssetsData: Array<CoinListResp> // 资产列表
    coinVisible: boolean // 选择币种弹窗
    coinType: C2CListCapitalCoinType // 选择的币种
}