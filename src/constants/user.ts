/** 验证方式 */
export enum UserValidateMethodEnum {
  email = 'email', // 邮箱验证
  phone = 'phone', // 手机验证
  validator = 'validator', // 验证器验证
  uid = 'uid', // uid 验证
}

/** 账号安全设置方式 */
export enum UserAccountSettingsTypeEnum {
  bind = 'bind', // 绑定或设置
  modify = 'modify', // 修改
}

/** 注册方式 */
export enum UserRegisterTypeEnum {
  default = 'default', // 默认
  thirdParty = 'thirdParty', // 第三方
}

/** 平台类型 */
export enum PlatformTypeEnum {
  web = 1, // web
  h5, // h5
  android, // android
  ios, // ios
}

/** GeeTest 操作类型 */
export enum GeeTestOperationTypeEnum {
  register = 1,
  login,
  modifyPassword,
  resetSecurity,
}

/** 启用状态 */
export enum UserEnabledStateTypeEnum {
  enable = 1, // 已启用
  unEnable = 2, // 未启用
}

/** 选择国家或者区号类型 */
export enum UserSelectAreaTypeEnum {
  phone = 'phone', // 手机
  area = 'area', // 国家
}

/** 验证码验证类型 */
export enum UserSendValidateCodeBusinessTypeEnum {
  register = 1, // 注册
  login, // 登录
  withdraw, // 提币
  resetPassword, // 重置密码
  modifyEmail, // 修改邮箱前进行通用验证
  closeEmailVerification, // 关闭邮箱前进行通用验证
  modifyNewEmail, // 修改新邮箱号
  bindEmail, // 邮箱号绑定
  modifyPhone, // 修改手机号前进行通用验证
  closePhoneVerification, // 关闭手机号前进行通用验证
  modifyNewPhone, // 修改新手机号码
  bindPhone, // 手机号码绑定
  securityItemApply, // 重置安全项申请表单
  modifyGoogle, // 修改谷歌验证
  closeGoogleVerification, // 关闭谷歌验证
  deletePhoneVerification, // 删除手机验证
  apiManage = 19, // 创建 Api
  userLogoutApplication = 24,
  payPassword = 23, // 支付密码
}

/** 验证类型 */
export enum UserVerifyTypeEnum {
  phone = 1,
  email,
  uid,
}

/** 货币符号 */
export enum UserCurrencySymbolEnum {
  cny = '¥', // 人民币
  usd = '$', // 美元
}

/** 货币名称 */
export enum UserCurrencyNameEnum {
  '¥' = 'CNY', // 人民币
  '$' = 'USD', // 美元
}

/** 涨跌色 */
export enum UserUpsAndDownsColorEnum {
  greenUpRedDown = 1, // 绿涨红跌
  redUpGreenDown = 2, // 红涨绿跌
}

/** KYC 认证状态 */
export enum UserKycTypeEnum {
  notCertified = 1, // 未认证
  standardCertification, // 个人标准认证
  advancedCertification, // 个人高级认证
  enterpriseCertification, // 企业认证
}

export enum UserAgreementEnum {
  unreceiveVerificationCode = 'unreceive_verification_code', // 未收到验证码
  termsService = 'terms_service', // 服务条款
}

export enum ColorBlockSettingsEnum {
  grandTotal = 1, // 累计
  Single, // 单条
}

export enum UserModuleDescribeKeyEnum {
  login = 'login', // 登录
  register = 'register', // 注册
  agentCenter = 'agentCenter', // 代理商中心
  default = 'default', // 默认描述
}

export enum UserPhoneSliceNumEnum {
  chinaNum = 3, // 中国截取前 3
  defaultNum = 4, // 默认 4 位
  chinaSliceNum = 7, // 中国从第 7 位截取
  defaultSliceNum = 8, // 默认第 8 位截取
}

export enum ChinaAreaCodeEnum {
  code = '86', // 中国区号
  remark = 'CN', // 中国
}

export enum ManageAccountEnum {
  noAccount = '1', // 不想再使用该账户
  allAccount = '2', // 合并多个账户
  other = '3', // 其它
}

export enum SignInWithEnum {
  apple = 'apple',
  google = 'google',
}

export enum BindTypeEnum {
  apple = 'appid',
  google = 'google',
}

export enum LoginTypeStatusEnum {
  isLogin = 'isLogin',
  needBind = 'needBind',
  registering = 'registering',
}

export enum ThirdPartyCheckoutType {
  apple = 'apple',
  firebase = 'firebase',
}
