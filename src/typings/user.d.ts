import { UserInfoType } from '@/typings/api/user'

export type NewsDetailReq = { id: any; locale?: string }
export type NewsDetailResp = {
  id: number
  uid: string
  title: string
  description: string
  description_html: string
  image: string
  counter_ids: string[]
  markets: string[]
  publish_at: number
  source: string
  source_url: string
  subject_codes: string
  views_count: string
  body: string
  stocks: any[]
  hot: boolean
  important: boolean
  is_like: boolean
  related_event_category: number
  main_event_title: string
  main_event_uuid: string
}

/* ========== token ========== */

export type MemberTokenResp = {
  token: string // token
}

/* ========== success ========== */
export type MemberSuccessResp = {
  isSuccess: boolean // 是否成功
}

/* ========== 注册 ========== */

export type MemberRegisterEmailReq = {
  email: string // 邮箱
  loginPassword: string // 密码
  regCountry: string // 国籍
  invite: string // 邀请码 (非必传)
}

export type MemberRegisterEmailResp = {
  isSuccess: boolean // 是否成功
  uid: number // uid
}

export type MemberRegisterPhoneReq = {
  mobileCountryCode: string // 手机区号
  mobileNumber: string // 手机号码
  loginPassword: string // 密码
  regCountry: string // 国籍
  invite: string // 邀请码 (非必传)
}

export type MemberRegisterPhoneResp = {
  isSuccess: true // 是否成功
  uid: number // uid
}

export type MemberRegisterGoogleReq = {
  idToken: string // google 返回的 token
}

export type MemberRegisterAppleReq = {
  idToken: string // apple 返回的 token
}

export type MemberRegisterValidEmailReq = {
  email: string // 邮箱
  invite?: string // 邀请码
}

export type postMemberRegisterValidPhoneReq = {
  mobileCountryCode: string // 区号
  mobileNumber: string // 手机号
  invite?: string // 邀请码
}

/* ========== 登录 ========== */

export type MemberLoginEmailReq = {
  email: string // 邮箱
  password: string // 密码
  tokenTtl?: number, // token 有效期 毫秒数
}

export type MemberLoginEmailResp = {
  token: string // 是否成功
  uid: string // uid
}

export type MemberLoginPhoneReq = {
  mobile: string // 手机号
  password: string // 密码
  mobileCountryCode: string // 手机区号
  tokenTtl?: number, // token 有效期 毫秒数
}

export type MemberLoginPhoneResp = {
  token: string // 是否成功
  uid: string // uid
}

export type MemberLoginUidReq = {
  uid: string // uid
  password: string // 密码
  tokenTtl: number // token 有效期 毫秒数
}

export type MemberLoginUidResp = {
  token: string // 是否成功
  uid: string // uid
}

export type MemberLoginGoogleReq = {
  idToken: string // google 返回的 token
}

export type MemberLoginAppleReq = {
  idToken: string // apple 返回的 token
}

export type MemberLoginGenerateUserInfomationReq = {
  account: string // 账号
  accountType: number // 类型 1 手机 2 邮箱 3 uid
  mobileCountryCode?: string // 手机区号
}

export type MemberThirdPartyConfigReq = {}

export type MemberThirdPartyConfigResp = {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}

/* ========== 绑定验证 ========== */

export type MemberSafeGoogleBindReq = {
  secretKey: string // google 密钥
  verifyCode: number // 验证码
}

export type MemberSafePhoneBindReq = {
  mobileCountryCode: string // 区号
  mobileNumber: string // 手机号码
  verifyCode: number // 验证码
  operateType: number // 类型
}

export type MemberSafeEmailBindReq = {
  email: string // 邮箱地址
  verifyCode: number // 验证码
  operateType: number // 类型
}

/* ========== 关闭验证 ========== */

export type MemberSafeGoogleStatusReq = {
  status: number // 是否开启验证
}

export type MemberSafePhoneStatusReq = {
  status: number // 是否开启验证
}

export type MemberSafeEmailStatusReq = {
  status: number // 是否开启验证
}

/* ========== 验证码 ========== */

export type MemberSafeVerifyPhoneSendReq = {
  type: number // 类型，1，手机号注册，2，极验验证，3，提现
  mobileCountryCode: string // 手机区号，未登陆必传
  mobile: string // 手机号，未登陆必传
  uid?: string // 会员 uid
}

export type MemberSafeVerifyEmailSendReq = {
  type: number // 类型，1，注册，2，极验验证，3，提现
  email: string // 邮箱
  uid?: string // 会员 uid
}

export type MemberSafeVerifyWithdrawalEmailSendReq = {
  type: number // 类型，1，注册，2，极验验证，3，提现
  email: string // 邮箱
  address: string // 提币地址
  quantity: string | number // 提币数量
  currencyCode: string // 提币币种
  memo: string // memo 地址
}

export type MemberSafeVerifyPhoneCheck = {
  type: number // 类型，1，注册，2，极验验证，3，提现
  verifyCode: string // 验证码
  mobileCountryCode?: string // 区号 用户未登录时验证需要传入
  mobile?: string // 电话号码 用户未登录时验证需要传入
}

export type MemberSafeVerifyEmailCheck = {
  type: number // 类型，1，注册，2，极验验证，3，提现
  verifyCode: string // 验证码
  email: string // 邮箱，未登陆必传
}

export type MemberSafeVerifyGoogleCheck = {
  verifyCode: string // 验证码
  uid: string // uid
}

/* ========== 密码 ========== */

export type MemberSafePasswordReq = {
  oldPassword: string // 老密码
  newPassword: string // 新密码
  safeVerifyType: string // 安全验证类型，1 手机  2 邮箱
  verifyCode: number // 验证码
}

export type MemberSafeResetPasswordReq = {
  mobileCountryCode: string // 手机区号（当 safeVerifyType=1 时不能为空）
  account: string // safeVerifyType=1 传手机号，safeVerifyType=2 传 email  safeVerifyType=3 传 uid
  newPassword: string // 新密码
  safeVerifyType: number // 类型 1 手机  2 邮箱 3 uid
  verifyCode: number // 验证码
}

/* ========== 交易密码 ========== */
export type MemberBaseTradePasswordReq = {
  oldPassword: string // 旧密码
  newPassword: string // 新密码
}

/* ========== 谷歌 Key  ========== */

export type MemberSafeVerifyGoogleSecretKeyReq = {}

export type MemberSafeVerifyGoogleSecretKeyResp = {
  secretKey: string // google 密钥
  qrPath: string // google 二维码地址
}

export type MemberSafeVerifyGenerateGoogleQrCodeReq = {
  account: string // 账号
}

export type MemberSafeVerifyGenerateGoogleQrCodeResp = {
  secretKey: string // google 密钥
  qrPath: string // google 二维码地址
}

/* ========== 防钓鱼码  ========== */

export type MemberBaseGetPhishingCodeReq = {}

export type MemberBaseGetPhishingCodeResp = {
  phishingCode: string // 防钓鱼码
}

export type MemberBaseVerifyPhishingCodeReq = {
  phishingCode: string // 防钓鱼码
}

/* ========== 个人中心设置头像、名称  ========== */

export type MemberPersonalCenterSetNickReq = {
  nickName: string // 昵称
}

/* ========== 个人中心会员 google 验证，手机验证，邮箱验证状态查询  ========== */

export type MemberBaseSafaVerifyBaseInfoReq = {}

export type MemberBaseSafaVerifyBaseInfoResp = {
  isOpenGoogleVerify: number // 是否开启谷歌验证
  isOpenPhoneVerify: number // 是否开启手机验证
  isOpenEmailVerify: number // 是否开启邮箱验证
  isBindEmailVerify: number // 邮箱是否绑定
  isBindPhoneVerify: number // 手机是否绑定
  isBindGoogleVerify: number // 谷歌是否绑定
  uid: string // 会员 uid
  email: string // 邮箱
  mobileNumber: string // 手机号码
  mobileCountryCd: string // 手机区号
  googleSecretKey: string // google 密钥
  setTradePwdInd: number // 1 已设置 2 未设置
}

/* ========== 个人中心会员 推送语言  ========== */

export type MemberBasePushLanguageReq = {
  language: string // 语言
}

/* ========== 重置安全项 (人工)  ========== */

export type MemberSafeResetReq = {
  typeInd: string // 安全认证类型 1 手机 2 邮箱 3 google 认证码 4 密码
  googleSecretKey: string // google 密钥
  googleSecretKeyCode: string // google 验证码
  email: string // 新认证的邮箱
  emailCode: string // 新认证的邮箱验证码
  mobileAreaCode: string // 新认证的手机号区号
  mobileNumber: string // 新认证的手机号
  mobileNumberCode: string // 新认证的手机号验证码
  contactsNumber: string // 联系电话
  contactsNumberCode: string // 联系电话验证码
  resetPhotosPath: string // 认证照片 OSS 地址
  contactsNumberArea: string // 联系电话区号
  uid: string // 会员 id
}

export type MemberSafeVerifyResetReq = {
  isGoogle: boolean // 谷歌
  isEmail: boolean // 邮箱
  isMobile: boolean // 手机
  googleSecretKey: string // 谷歌 SecretKey
  googleVerifyCode: number // 谷歌验证码
  email: string // 邮箱
  emailVerifyCode: string // 邮箱验证码
  mobile: string // 新手机
  mobileCountryCode: string // 新手机区号
  mobileVerifyCode: string // 新手机验证码
  applyPhotoPath: string // 认证照片 OSS 地址
  account: string // 账号
  accountType: number // 账户类型
  oldMobileCountryCode: string // 旧手机区号
}

/* ========== 个人中心修改、手机、邮箱、谷歌 key  ========== */

export type MemberSafeEmailUpdateReq = {
  operateType: number // 业务类型
  email: string // 邮箱
  verifyCode: number // 新邮箱验证码
}

export type MemberSafeMobileUpdateReq = {
  operateType: number // 业务类型
  mobileCountryCode: string // 区号
  mobileNumber: string // 手机号码
  verifyCode: number // 新手机号码验证码
}

export type MemberSafeGoogleUpdateReq = {
  operateType: number // 业务类型
  secretKey: string // google 密钥
  verifyCode: number // 会员 id
}

/* ========== 获取极验配置  ========== */

export type MemberGeeTestInitConfigReq = {
  account: string // 账户名
  clientType: number // 	客户端类型（注：1.web 2.h5 3.android  4.ios)
  operateType: number // 操作的类型（注：1.注册 2.登录 3.修改密码 4.通用安全项验证)
}

export type MemberGeeTestInitConfigResp = {
  geeTest: {
    challenge: string
    gt: string
    new_captcha: boolean
    success: number
  }
}

export type MemberVerifyGeeTestReq = {
  account: string // 账户名
  gtChallenge: string // 极验码 唯一标识
}

/* ========== 国籍、区号查询  ========== */

export type MemberMemberPhoneAreaType = {
  /** ID */
  id: number
  /** 地区值 */
  enCode: string
  /** 国家名称 */
  fullName: string
  /** 是否可用  */
  enableInd: number
  /** 国家缩写 */
  shortName: string
}

export type MemberMemberAreaType = {
  /** 地区值 */
  codeVal: string
  /** 国家名称 */
  codeKey: string
  /** 是否可用  */
  enableInd?: number
  /** 国家缩写 */
  remark: string
}

export type MemberPhoneAreaCodeReq = {
  searchParam: string // 查询条件
}

export type MemberPhoneAreaCodeResp = {
  detailVOList: Array<MemberMemberPhoneAreaType>
}

export type MemberMemberPhoneAreaReq = {
  searchParam: string // 查询条件
}

export type MemberMemberPhoneAreaResp = {
  detailVOList: Array<MemberMemberPhoneAreaType>
}

/* ========== 个人中心 账户设置 折算货币、涨跌色、选择语言  ========== */
export type MemberBaseSettingsInfoReq = {}

export type MemberBaseSettingsInfoResp = {
  businessId: number // b 端 id
  uid: number // 会员 uid
  pushLanguage: string // 推送语言
  marketSetting: number // 涨跌色
  currencyTypeCd: string // 折算货币
  antiPhishingCode: string // 反钓鱼码
  isOpenActiveWarn: number // 是否启用最新活动提醒 1=true; 2=false
  isOpenContractStatus: number // 合约开通状态 1=true; 2=false
  isOpenCurrencyWarn: number // 是否启用新币提醒 1=true; 2=false
  isOpenOrderWarn: number // 是否启用合约订单提醒 1=true; 2=false
  isOpenPriceWarn: number // 是否启用行情异动提醒 1=true; 2=false
  isOpenSpotStatus: number // 杠杆现货开通状态 1=true; 2=false
  perpetualVersion: number // 合约版本，1，专业版，2，普通版
  
}

export type MemberBaseCurrencyTypeReq = {
  currencyTypeCd: string // 折算货币
}

export type MemberBaseColorTypeReq = {
  marketSetting: number // 1.绿涨红跌 2.红涨绿跌
}

export type MemberVerifyMemberByAccounReq = {
  type: number // 类型 1 手机 2 邮箱 3 uid
  account: string // 邮箱
  password?: string // 密码
  mobileCountryCode?: string // 区号
}

export type MemberVerifyMemberByAccounResp = {
  isOpenEmailVerify: number // 是否启用邮箱 1 启用 2 未启用
  isOpenGoogleVerify: number // 是否启用谷歌 1 启用 2 未启用
  isOpenPhoneVerify: number // 是否启用手机 1 启用 2 未启用
  mobileCountryCd?: string // 手机区号
  mobileNumber?: string // 手机号
  email?: string // 邮箱
  kycType: number // Kyc 认证等级
}

export type MemberQueryWorkOrderStatusReq = {
  type: number // 类型 1 手机 2 邮箱 3 uid
  account: string // 邮箱
  mobileCountryCode?: string // 区号
}

export type MemberUploadReq = {
  image: string // base64 图片
}

export type MemberUploadResp = {
  url: string // oss 图片地址
}

export type MemberQueryWorkOrderStatusResp = {
  isBeginManualVerifyProcess: boolean // 是否存在工单
}

export type MemberUniversalSecurityVerificationRep = {
  operateType: number // 业务类型
  mobileVerifyCode: string // 手机验证码
  emailVerifyCode: string // 邮箱验证码
  googleVerifyCode: string // 谷歌验证码
}

export type MemberUserInfoReq = {}

export type MemberUserInfoResp = UserInfoType