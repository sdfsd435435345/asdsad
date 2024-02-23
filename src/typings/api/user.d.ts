export interface PersonalCenterAccountSecurityType {
  /** 邮箱 */
  email?: string
  /** 邮箱是否启用 */
  isOpenEmailVerify?: number
  /** 手机是否启用 */
  isOpenPhoneVerify?: number
  /** 谷歌是否启用 */
  isOpenGoogleVerify?: number
  /** 邮箱是否绑定 */
  isBindEmailVerify?: number
  /** 手机是否绑定 */
  isBindPhoneVerify?: number
  /** 谷歌是否绑定 */
  isBindGoogleVerify?: number
  /** 手机区号 */
  mobileCountryCd?: string
  /** 手机号码 */
  mobileNumber?: string
  /** 秘钥 */
  googleSecretKey?: string
  /** 会员 ID */
  uid: string
}

export interface UserSelectConfigurationItemType {
  /** key */
  key: number
  /** 图标 */
  icon?: React.ReactNode
  /** 设置的值 */
  value: string | number
  /** 文本 */
  text: string
  /** 是否选择 */
  isChecked?: boolean
}

export interface UserLoginInfoType {
  /** 邮箱 */
  email?: string
  /** 手机 */
  mobile?: string
  /** 密码 */
  password: string
  /** 手机区号 */
  mobileCountryCode?: string
}

export interface UserVerifyMemberAccountInfoType {
  /** 邮箱是否启用 */
  isOpenEmailVerify: number
  /** 谷歌验证器是否启用 */
  isOpenGoogleVerify: number
  /** 手机是否启用 */
  isOpenPhoneVerify: number
  /** 手机区号 */
  mobileCountryCd?: string
  /** 手机 */
  mobileNumber?: string
  /** 邮箱 */
  email?: string
}

export interface UserInfoType {
  /** b 端平台 id */
  businessId?: string
  /** 头像地址 */
  avatarPath?: string
  /** 合约交易状态 */
  contractStatusInd?: number
  /** 充提状态 1=可充币不可提币；2=可提币不可充币；3=不可充提币 */
  deWStatusInd?: number
  id?: number
  /** 删除 flag:1 已删除，2 未删除 */
  isDelete?: number
  /** 是否绑定邮箱 */
  isBindEmailVerify: number
  /** 是否绑定谷歌 */
  isBindGoogleVerify: number
  /** 是否绑定手机 */
  isBindPhoneVerify: number
  /** 是否启用邮箱验证 1 已开启，2 未开启 */
  isOpenEmailVerify?: number
  /** 是否启用 google 验证 1 已开启，2 未开启 */
  isOpenGoogleVerify?: number
  /** 是否启用手机验证 1 已开启，2 未开启 */
  isOpenPhoneVerify?: number
  /** 是否设置交易密码 */
  setTradePwdInd?: number
  /** 手机区号 */
  mobileCountryCd?: string
  /** 手机号码 */
  mobileNumber?: string
  /** 是否设置交易密码 */
  settedTradePassword?: boolean
  /** 注册时的账号，风控备份使用 */
  regAccount?: string
  /** 注册国籍 字典表编码 */
  regCountryCd?: number
  /** 注册方式 1=邮箱注册；2=console 台注册；3=手机号注册；4=appid 注册；5=google 注册 */
  regTypeInd?: number
  /** 0000-00-00 00:00:00 重置密码特殊限制到期时间 */
  rsPwdLimitExpDate?: string
  /** 重置密码特殊限制 1=已限制 24 小时；2=无限制 */
  rsPwdLimitInd?: number
  /** 0000-00-00 00:00:00 重置安全项特殊限制 到期时间 */
  rsSafeLimitExpDate?: string
  /** 重置安全项特殊限制 1=限制 48 小时；2=无限制； */
  rsSafeLimitInd?: number
  /* 是否已设置昵称 1 ture 2 false */
  setNicknameInd?: number
  /** 现货交易状态 1=现货可卖出不可买入；2=可现货交易;3=不可现货交易； */
  spotStatusInd?: number
  /** 用户状态 1 正常，2 失效 */
  statusInd?: number
  /** uid */
  uid?: string
  /** 版本号 */
  version?: number
  /** 昵称 */
  nickName?: string
  /** 国籍 字典表编码 */
  kycCountryCd?: string
  /** kyc 认证等级 */
  kycType: number
  /** 邮箱 */
  email?: string
  /** 备注 */
  remark?: string
}

/** 极验验证类型 */
interface GeeTestSuccessResultType {
  geetest_challenge: string
  geetest_seccode: string
  geetest_validate: string
}