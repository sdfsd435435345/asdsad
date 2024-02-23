import request, { MarkcoinRequest } from '@/plugins/request'
import {
  MemberTokenResp,
  MemberSuccessResp,
  MemberRegisterEmailReq,
  MemberRegisterEmailResp,
  MemberRegisterPhoneReq,
  MemberRegisterPhoneResp,
  MemberRegisterGoogleReq,
  MemberRegisterAppleReq,
  MemberLoginEmailReq,
  MemberLoginEmailResp,
  MemberLoginPhoneReq,
  MemberLoginPhoneResp,
  MemberLoginUidReq,
  MemberLoginUidResp,
  MemberLoginGoogleReq,
  MemberLoginAppleReq,
  MemberSafePhoneBindReq,
  MemberSafeEmailBindReq,
  MemberSafeGoogleBindReq,
  MemberSafeGoogleStatusReq,
  MemberSafePhoneStatusReq,
  MemberSafeEmailStatusReq,
  MemberSafeVerifyPhoneSendReq,
  MemberSafeVerifyEmailSendReq,
  MemberSafeVerifyPhoneCheck,
  MemberSafeVerifyEmailCheck,
  MemberSafeVerifyGoogleCheck,
  MemberSafePasswordReq,
  MemberSafeResetPasswordReq,
  MemberSafeVerifyGoogleSecretKeyReq,
  MemberSafeVerifyGoogleSecretKeyResp,
  MemberBaseGetPhishingCodeReq,
  MemberBaseGetPhishingCodeResp,
  MemberBaseVerifyPhishingCodeReq,
  MemberPersonalCenterSetNickReq,
  MemberBaseSafaVerifyBaseInfoReq,
  MemberBaseSafaVerifyBaseInfoResp,
  MemberSafeResetReq,
  MemberSafeEmailUpdateReq,
  MemberSafeMobileUpdateReq,
  MemberSafeGoogleUpdateReq,
  MemberGeeTestInitConfigReq,
  MemberGeeTestInitConfigResp,
  MemberPhoneAreaCodeReq,
  MemberPhoneAreaCodeResp,
  MemberMemberPhoneAreaReq,
  MemberMemberPhoneAreaResp,
  MemberBaseSettingsInfoReq,
  MemberBaseSettingsInfoResp,
  MemberBaseCurrencyTypeReq,
  MemberBaseColorTypeReq,
  MemberRegisterValidEmailReq,
  postMemberRegisterValidPhoneReq,
  MemberVerifyMemberByAccounReq,
  MemberVerifyMemberByAccounResp,
  MemberVerifyGeeTestReq,
  MemberThirdPartyConfigReq,
  MemberThirdPartyConfigResp,
  MemberQueryWorkOrderStatusReq,
  MemberQueryWorkOrderStatusResp,
  MemberSafeVerifyGenerateGoogleQrCodeReq,
  MemberSafeVerifyGenerateGoogleQrCodeResp,
  MemberSafeVerifyResetReq,
  MemberUniversalSecurityVerificationRep,
  MemberUploadReq,
  MemberUploadResp,
  MemberUserInfoReq,
  MemberUserInfoResp,
  MemberBasePushLanguageReq,
  MemberBaseTradePasswordReq,
  MemberLoginGenerateUserInfomationReq,
  MemberSafeVerifyWithdrawalEmailSendReq,
} from '@/typings/user'
import {
  YapiPostAuthRefreshTokenApiRequest,
  YapiPostAuthRefreshTokenData,
} from '@/typings/yapi/AuthRefreshTokenPostApi'
import {
  YapiPostV1MemberLoginH5ApiRequest,
  YapiPostV1MemberLoginH5ApiResponse,
} from '@/typings/yapi/MemberLoginH5V1PostApi'
import {
  YapiGetV1VccGetUserVccInfoApiRequest,
  YapiGetV1VccGetUserVccInfoApiResponse,
} from '@/typings/yapi/VccGetUserVccInfoV1GetApi'
import {
  YapiPostV1VccUpdatePasswordApiRequest,
  YapiPostV1VccUpdatePasswordApiResponse,
} from '@/typings/yapi/VccUpdatePasswordV1PostApi'

/* ========== 第三方服务配置 ========== */
/**
 * 配置信息
 * https://yapi.coin-online.cc/project/44/interface/api/240
 */
export const getThirdPartyConfig: MarkcoinRequest<MemberThirdPartyConfigReq, MemberThirdPartyConfigResp> = () => {
  return request({
    path: `/v1/google/param/get`,
    method: 'GET',
  })
}

/* ========== 注册 ========== */

/**
 * 邮箱注册
 * https://yapi.coin-online.cc/project/44/interface/api/145
 */
export const postMemberRegisterEmail: MarkcoinRequest<MemberRegisterEmailReq, MemberRegisterEmailResp> = options => {
  return request({
    path: `/v1/member/register/email`,
    method: 'POST',
    signature: true,
    data: {
      email: options.email, // 邮箱
      loginPassword: options.loginPassword, // 密码
      regCountry: options.regCountry, // 国籍
      invite: options.invite, // 邀请码 (非必传)
    },
  })
}
/**
 * 手机注册
 * https://yapi.coin-online.cc/project/44/interface/api/142
 */
export const postMemberRegisterPhone: MarkcoinRequest<MemberRegisterPhoneReq, MemberRegisterPhoneResp> = options => {
  return request({
    path: `/v1/member/register/mobile`,
    method: 'POST',
    signature: true,
    data: {
      mobileCountryCode: options.mobileCountryCode, // 手机区号
      mobileNumber: options.mobileNumber, // 手机号码
      loginPassword: options.loginPassword, // 密码
      regCountry: options.regCountry, // 国籍
      invite: options.invite, // 邀请码 (非必传)
    },
  })
}
/**
 * Google 注册
 * https://yapi.coin-online.cc/project/44/interface/api/280
 */
export const postMemberRegisterGoogle: MarkcoinRequest<MemberRegisterGoogleReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/register/google`,
    method: 'POST',
    data: {
      idToken: options.idToken, // google 返回的 token
    },
  })
}
/**
 * Apple 注册
 * https://yapi.coin-online.cc/project/44/interface/api/288
 */
export const postMemberRegisterApple: MarkcoinRequest<MemberRegisterAppleReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/register/apple`,
    method: 'POST',
    data: {
      idToken: options.idToken, // apple 返回的 token
    },
  })
}
/**
 * 校验邮箱注册
 * https://yapi.coin-online.cc/project/44/interface/api/602
 */
export const postMemberRegisterValidEmail: MarkcoinRequest<
  MemberRegisterValidEmailReq,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/member/register/valid/email`,
    method: 'POST',
    data: {
      email: options.email, // 邮箱
      invite: options.invite, // 邀请码
    },
  })
}
/**
 * 校验手机号注册
 * https://yapi.coin-online.cc/project/44/interface/api/608
 */
export const postMemberRegisterValidPhone: MarkcoinRequest<
  postMemberRegisterValidPhoneReq,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/member/register/valid/mobile`,
    method: 'POST',
    data: {
      mobileCountryCode: options.mobileCountryCode, // 区号
      mobileNumber: options.mobileNumber, // 手机号
      invite: options.invite, // 邀请码
    },
  })
}

/* ========== 登录 ========== */

/**
 * 手机号登录
 * https://yapi.coin-online.cc/project/44/interface/api/127
 */
export const postMemberLoginPhone: MarkcoinRequest<MemberLoginPhoneReq, MemberLoginPhoneResp> = options => {
  return request({
    path: `/v1/member/login/mobile`,
    method: 'POST',
    signature: true,
    data: {
      mobile: options.mobile, // 手机号
      password: options.password, // 密码
      mobileCountryCode: options.mobileCountryCode, // 手机区号
      tokenTtl: options.tokenTtl, // token 有效期 毫秒数
    },
  })
}
/**
 * 邮箱登录
 * https://yapi.coin-online.cc/project/44/interface/api/136
 */
export const postMemberLoginEmail: MarkcoinRequest<MemberLoginEmailReq, MemberLoginEmailResp> = options => {
  return request({
    path: `/v1/member/login/email`,
    method: 'POST',
    signature: true,
    data: {
      email: options.email, // 邮箱
      password: options.password, // 密码
      tokenTtl: options.tokenTtl, // token 有效期 毫秒数
    },
  })
}
/**
 * uId 登录
 * https://yapi.coin-online.cc/project/44/interface/api/248
 */
export const postMemberLoginByUid: MarkcoinRequest<MemberLoginUidReq, MemberLoginUidResp> = options => {
  return request({
    path: `/v1/member/login/uid`,
    method: 'POST',
    signature: true,
    data: {
      uid: options.uid, // uid
      password: options.password, // 密码
      tokenTtl: options.tokenTtl, // token 有效期 毫秒数
    },
  })
}
/**
 * Google 登录
 * https://yapi.coin-online.cc/project/44/interface/api/240
 */
export const postMemberLoginGoogle: MarkcoinRequest<MemberLoginGoogleReq, MemberTokenResp> = options => {
  return request({
    path: `/v1/member/login/google`,
    method: 'POST',
    data: {
      idToken: options.idToken, // google 返回的 token
    },
  })
}
/**
 * Apple 登录
 * https://yapi.coin-online.cc/project/44/interface/api/184
 */
export const postMemberLoginApple: MarkcoinRequest<MemberLoginAppleReq, MemberTokenResp> = options => {
  return request({
    path: `/v1/member/login/apple`,
    method: 'POST',
    data: {
      idToken: options.idToken, // apple 返回的 token
    },
  })
}

/**
 * 分发 userInfo, token 接口
 * https://yapi.admin-devops.com/project/44/interface/api/2786
 */
export const postMemberLoginGenerateUserInfomation: MarkcoinRequest<
  MemberLoginGenerateUserInfomationReq,
  MemberTokenResp
> = options => {
  return request({
    path: `/v1/member/login/generate_user_Infomation`,
    method: 'POST',
    data: {
      account: options.account, // apple 返回的 token
      accountType: options.accountType, // 类型 1 手机 2 邮箱 3 uid
      mobileCountryCode: options.mobileCountryCode, // 手机区号
    },
  })
}

/* ========== 绑定验证 ========== */
/**
 * 绑定 google 验证
 * https://yapi.coin-online.cc/project/44/interface/api/151
 */
export const postMemberSafeGoogleBind: MarkcoinRequest<MemberSafeGoogleBindReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/google/bind`,
    method: 'POST',
    data: {
      secretKey: options.secretKey, // google 密钥
      verifyCode: options.verifyCode, // 验证码
    },
  })
}
/**
 * 绑定 手机 验证
 * https://yapi.coin-online.cc/project/44/interface/api/154
 */
export const postMemberSafePhoneBind: MarkcoinRequest<MemberSafePhoneBindReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/mobile/bind`,
    method: 'POST',
    data: {
      mobileCountryCode: options.mobileCountryCode, // 区号
      mobileNumber: options.mobileNumber, // 手机号码
      verifyCode: options.verifyCode, // 验证码
      operateType: options.operateType, // 类型
    },
  })
}
/**
 * 绑定 邮箱 验证
 * https://yapi.coin-online.cc/project/44/interface/api/157
 */
export const postMemberSafeEmailBind: MarkcoinRequest<MemberSafeEmailBindReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/email/bind`,
    method: 'POST',
    data: {
      email: options.email, // 邮箱地址
      verifyCode: options.verifyCode, // 验证码
      operateType: options.operateType, // 类型
    },
  })
}
/* ========== 关闭验证 ========== */
/**
 * 关闭 google 验证
 * https://yapi.coin-online.cc/project/44/interface/api/347
 */
export const postMemberSafeGoogleStatus: MarkcoinRequest<MemberSafeGoogleStatusReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/google/status`,
    method: 'POST',
    data: {
      status: options.status,
    },
  })
}
/**
 * 关闭 手机 验证
 * https://yapi.coin-online.cc/project/44/interface/api/350
 */
export const postMemberSafePhoneUnStatus: MarkcoinRequest<MemberSafePhoneStatusReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/mobile/status`,
    method: 'POST',
    data: {
      status: options.status,
    },
  })
}
/**
 * 关闭 邮箱 验证
 * https://yapi.coin-online.cc/project/44/interface/api/356
 */
export const postMemberSafeEmailStatus: MarkcoinRequest<MemberSafeEmailStatusReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/email/status`,
    method: 'POST',
    data: {
      status: options.status,
    },
  })
}

/**
 * 删除 手机 验证
 * https://yapi.admin-devops.com/project/44/interface/api/428
 */
export const deleteMemberSafeMobile: MarkcoinRequest = () => {
  return request({
    path: `/v1/member/safe/mobile`,
    method: 'DELETE',
  })
}

/* ========== 验证码 ========== */
/**
 * 发送手机验证码
 * https://yapi.coin-online.cc/project/44/interface/api/554
 */
export const postMemberSafeVerifyPhoneSend: MarkcoinRequest<
  MemberSafeVerifyPhoneSendReq,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/send/sms`,
    method: 'POST',
    data: {
      type: options.type, // 类型，1，手机号注册，2，极验验证，3，提现
      mobileCountryCode: options.mobileCountryCode, // 手机区号，未登陆必传
      mobile: options.mobile, // 手机号，未登陆必传
      uid: options.uid, // 会员 id
    },
  })
}
/**
 * 发送邮箱验证码
 * https://yapi.coin-online.cc/project/44/interface/api/557
 */
export const postMemberSafeVerifyEmailSend: MarkcoinRequest<
  MemberSafeVerifyEmailSendReq,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/send/email`,
    method: 'POST',
    data: {
      type: options.type, // 类型，1，邮箱注册，2，极验验证，3，提现
      email: options.email, // 邮箱
      uid: options.uid, // 会员 id
    },
  })
}
/**
 * 发送邮箱验证码 - 提币
 * https://yapi.nbttfc365.com/project/44/interface/api/3819
 */
export const postMemberSafeVerifyWithdrawalEmailSend: MarkcoinRequest<
  MemberSafeVerifyWithdrawalEmailSendReq,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/send/withdrawalEmail`,
    method: 'POST',
    data: {
      type: options.type, // 类型，1，邮箱注册，2，极验验证，3，提现
      email: options.email, // 邮箱
      address: options.address, // 提币地址
      quantity: options.quantity, // 提币数量
      currencyCode: options.currencyCode, // 提币币种
      memo: options.memo, // memo 地址
    },
  })
}
/**
 * 手机验证码验证
 * https://yapi.coin-online.cc/project/44/interface/api/560
 */
export const postMemberSafeVerifyPhoneCheck: MarkcoinRequest<
  MemberSafeVerifyPhoneCheck,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/send/checkSmsCode`,
    method: 'POST',
    data: {
      type: options.type, // 类型，1，注册，2，极验验证，3，提现
      verifyCode: options.verifyCode, // 验证码
      mobileCountryCode: options.mobileCountryCode, // 区号 用户未登录时验证需要传入
      mobile: options.mobile, // 电话号码 用户未登录时验证需要传入
    },
  })
}
/**
 * 邮箱验证码验证
 * https://yapi.coin-online.cc/project/44/interface/api/563
 */
export const postMemberSafeVerifyEmailCheck: MarkcoinRequest<
  MemberSafeVerifyEmailCheck,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/send/checkEmailCode`,
    method: 'POST',
    data: {
      type: options.type, // 类型，1，注册，2，极验验证，3，提现
      verifyCode: options.verifyCode, // 验证码
      email: options.email, // 邮箱，未登陆必传
    },
  })
}
/**
 * 谷歌验证码验证
 * https://yapi.admin-devops.com/project/44/interface/api/2789
 */
export const getMemberSafeVerifyGoogleCheck: MarkcoinRequest<
  MemberSafeVerifyGoogleCheck,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/member/safe/verify/google/login_check`,
    method: 'GET',
    params: {
      verifyCode: options.verifyCode, // 验证码
      uid: options.uid, // uid
    },
  })
}

/* ========== 密码 ========== */
/**
 * 修改密码
 * https://yapi.coin-online.cc/project/44/interface/api/166
 */
export const postMemberSafePassword: MarkcoinRequest<MemberSafePasswordReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/pwd`,
    method: 'POST',
    signature: true,
    data: {
      oldPassword: options.oldPassword, // 老密码
      newPassword: options.newPassword, // 新密码
      safeVerifyType: options.safeVerifyType, // 安全验证类型，1 手机  2 邮箱
      verifyCode: options.verifyCode, // 验证码
    },
  })
}
/**
 * 重置密码
 * https://yapi.coin-online.cc/project/44/interface/api/365
 */
export const postMemberSafeResetPassword: MarkcoinRequest<MemberSafeResetPasswordReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/pwd/reset`,
    method: 'POST',
    signature: true,
    data: {
      mobileCountryCode: options.mobileCountryCode, // 手机区号（当 safeVerifyType=1 时不能为空）
      account: options.account, // safeVerifyType=1 传手机号，safeVerifyType=2 传 email , safeVerifyType=3 传 uid
      newPassword: options.newPassword, // 新密码
      safeVerifyType: options.safeVerifyType, // 类型 1 手机  2 邮箱 3 uid
      verifyCode: options.verifyCode, // 验证码
    },
  })
}

/**
 * 交易密码
 * https://yapi.coin-online.cc/project/44/interface/api/365
 */
export const postMemberBaseTradePassword: MarkcoinRequest<MemberBaseTradePasswordReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/trade/pwd`,
    method: 'POST',
    data: {
      oldPassword: options.oldPassword || '', // 老密码
      newPassword: options.newPassword, // 新密码
    },
  })
}

/* ========== 谷歌 Key  ========== */
/**
 * 获取 google 绑定密钥
 * https://yapi.coin-online.cc/project/44/interface/api/160
 */
export const getMemberSafeVerifyGoogleSecretKey: MarkcoinRequest<
  MemberSafeVerifyGoogleSecretKeyReq,
  MemberSafeVerifyGoogleSecretKeyResp
> = () => {
  return request({
    path: `/v1/member/safe/verify/google/secret/key`,
    method: 'GET',
  })
}

/**
 * 获取 google 绑定密钥
 * https://yapi.admin-devops.com/project/44/interface/api/2681
 */
export const postMemberSafeVerifyGenerateGoogleQrCode: MarkcoinRequest<
  MemberSafeVerifyGenerateGoogleQrCodeReq,
  MemberSafeVerifyGenerateGoogleQrCodeResp
> = options => {
  return request({
    path: `/v1/member/safe/verify/generate_google_qrcode`,
    method: 'POST',
    data: {
      account: options.account, // 账号
    },
  })
}

/* ========== 防钓鱼码  ========== */
/**
 * 获取防钓鱼码
 * https://yapi.coin-online.cc/project/44/interface/api/338
 */
export const getMemberBaseGetPhishingCode: MarkcoinRequest<
  MemberBaseGetPhishingCodeReq,
  MemberBaseGetPhishingCodeResp
> = () => {
  return request({
    path: `/v1/member/base/getPhishingCode`,
    method: 'GET',
  })
}
/**
 * 设置防钓鱼码
 * https://yapi.coin-online.cc/project/44/interface/api/341
 */
export const getMemberBaseVerifyPhishingCode: MarkcoinRequest<
  MemberBaseVerifyPhishingCodeReq,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/member/base/verifyPhishingCode`,
    method: 'POST',
    data: {
      phishingCode: options.phishingCode, // 防钓鱼码
    },
  })
}

/* ========== 个人中心设置头像、名称  ========== */
/**
 * 设置昵称
 * https://yapi.coin-online.cc/project/44/interface/api/264
 */
export const postMemberPersonalCenterSetNick: MarkcoinRequest<
  MemberPersonalCenterSetNickReq,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/member/base/nickName`,
    method: 'POST',
    data: {
      nickName: options.nickName, // 昵称
    },
  })
}

/* ========== 个人中心会员 google 验证，手机验证，邮箱验证状态查询  ========== */
/**
 * 会员 google 验证，手机验证，邮箱验证状态查询
 * https://yapi.coin-online.cc/project/44/interface/api/148
 */
export const getMemberBaseSafaVerifyBaseInfo: MarkcoinRequest<
  MemberBaseSafaVerifyBaseInfoReq,
  MemberBaseSafaVerifyBaseInfoResp
> = () => {
  return request({
    path: `/v1/member/safe/verifyMemberBaseInfo`,
    method: 'GET',
  })
}

/* ========== 个人中心会员 推送语言  ========== */
/**
 * 推送语言设置
 * https://yapi.admin-devops.com/project/44/interface/api/2687
 */
export const postMemberBasePushLanguage: MarkcoinRequest<MemberBasePushLanguageReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/base/language`,
    method: 'POST',
    data: {
      language: options.language, // 语言
    },
  })
}

/* ========== 重置安全项 (人工)  ========== */
/**
 * 会员 google 验证，手机验证，邮箱验证状态查询
 * https://yapi.coin-online.cc/project/44/interface/api/133
 */
export const postMemberSafeReset: MarkcoinRequest<MemberSafeResetReq, MemberSuccessResp> = options => {
  return request({
    path: `/member/safe/reset`,
    method: 'POST',
    data: {
      typeInd: options.typeInd, // 安全认证类型 1 手机 2 邮箱 3 google 认证码 4 密码
      googleSecretKey: options.googleSecretKey, // google 密钥
      googleSecretKeyCode: options.googleSecretKeyCode, // google 验证码
      email: options.email, // 新认证的邮箱
      emailCode: options.emailCode, // 新认证的邮箱验证码
      mobileAreaCode: options.mobileAreaCode, // 新认证的手机号区号
      mobileNumber: options.mobileNumber, // 新认证的手机号
      mobileNumberCode: options.mobileNumberCode, // 新认证的手机号验证码
      contactsNumber: options.contactsNumber, // 联系电话
      contactsNumberCode: options.contactsNumberCode, // 联系电话验证码
      resetPhotosPath: options.resetPhotosPath, // 认证照片 OSS 地址
      contactsNumberArea: options.contactsNumberArea, // 联系电话区号
      uid: options.uid, // 会员 id
    },
  })
}

/**
 * 会员 google 验证，手机验证，邮箱验证状态查询
 * https://yapi.coin-online.cc/project/44/interface/api/133
 */
export const postMemberSafeVerifyReset: MarkcoinRequest<MemberSafeVerifyResetReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/verify/reset`,
    method: 'POST',
    data: {
      isGoogle: options.isGoogle, // 谷歌
      isEmail: options.isEmail, // 邮箱
      isMobile: options.isMobile, // 手机
      googleSecretKey: options.googleSecretKey, // 谷歌 SecretKey
      googleVerifyCode: options.googleVerifyCode, // 谷歌验证码
      email: options.email, // 邮箱
      emailVerifyCode: options.emailVerifyCode, // 邮箱验证码
      mobile: options.mobile, // 新手机
      mobileCountryCode: options.mobileCountryCode, // 新手机区号
      mobileVerifyCode: options.mobileVerifyCode, // 新手机验证码
      applyPhotoPath: options.applyPhotoPath, // 认证照片 OSS 地址
      account: options.account, // 账号
      accountType: options.accountType, // 账户类型
      oldMobileCountryCode: options.oldMobileCountryCode, // 旧手机区号
    },
  })
}

/* ========== 个人中心修改、手机、邮箱、谷歌 key  ========== */
/**
 * 修改邮箱
 * https://yapi.coin-online.cc/project/44/interface/api/425
 */
export const postMemberSafeEmailUpdate: MarkcoinRequest<MemberSafeEmailUpdateReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/email/update`,
    method: 'POST',
    data: {
      operateType: options.operateType, // 业务类型
      email: options.email, // 邮箱
      verifyCode: options.verifyCode, // 新邮箱验证码
    },
  })
}
/**
 * 修改手机
 * https://yapi.coin-online.cc/project/44/interface/api/422
 */
export const postMemberSafeMobileUpdate: MarkcoinRequest<MemberSafeMobileUpdateReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/mobile/update`,
    method: 'POST',
    data: {
      operateType: options.operateType, // 业务类型
      mobileCountryCode: options.mobileCountryCode, // 区号
      mobileNumber: options.mobileNumber, // 手机号码
      verifyCode: options.verifyCode, // 新手机号码验证码
    },
  })
}
/**
 * 修改谷歌 key
 * https://yapi.coin-online.cc/project/44/interface/api/419
 */
export const postMemberSafeGoogleUpdate: MarkcoinRequest<MemberSafeGoogleUpdateReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/safe/google/update`,
    method: 'POST',
    data: {
      operateType: options.operateType, // 类型
      secretKey: options.secretKey, // google 密钥
      verifyCode: options.verifyCode, // 会员 id
    },
  })
}

/* ========== 获取极验配置  ========== */
/**
 * 获取极验初始化配置
 * https://yapi.coin-online.cc/project/44/interface/api/2585
 */
export const getMemberGeeTestInitConfig: MarkcoinRequest<
  MemberGeeTestInitConfigReq,
  MemberGeeTestInitConfigResp
> = options => {
  return request({
    path: '/v1/gee_test/get_behavior_verify_model',
    method: 'GET',
    params: {
      account: options.account, // 账户名
      clientType: options.clientType, // 	客户端类型（注：1.web 2.h5 3.android  4.ios)
      operateType: options.operateType, // 操作的类型（注：1.注册 2.登录 3.修改密码 4.通用安全项验证)
    },
  })
}

/**
 * 校验极验验证
 */
export const postMemberVerifyGeeTest: MarkcoinRequest<MemberVerifyGeeTestReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/gee_test/set_verified_gee`,
    method: 'POST',
    data: {
      account: options.account, // 账户名
      gtChallenge: options.gtChallenge, // 极验码 唯一标识
    },
  })
}

/* ========== 国籍、区号查询  ========== */
/**
 * 手机区域列表查询
 * https://yapi.coin-online.cc/project/44/interface/api/139
 */
export const getMemberPhoneAreaCode: MarkcoinRequest<MemberPhoneAreaCodeReq, MemberPhoneAreaCodeResp> = options => {
  return request({
    path: `/v1/member/phone/area_code`,
    method: 'GET',
    params: {
      searchParam: options.searchParam,
    },
  })
}
/**
 * 国籍列表查询
 * https://yapi.coin-online.cc/project/44/interface/api/181
 */
export const getMemberPhoneArea: MarkcoinRequest<MemberMemberPhoneAreaReq, MemberMemberPhoneAreaResp> = options => {
  return request({
    path: `/v1/member/phone/area`,
    method: 'GET',
    params: {
      searchParam: options.searchParam,
    },
  })
}

/* ========== 个人中心 账户设置 折算货币、涨跌色、选择语言  ========== */
/**
 * 会员信息
 * https://yapi.coin-online.cc/project/44/interface/api/446
 */
export const getMemberBaseSettingsInfo: MarkcoinRequest<MemberBaseSettingsInfoReq, MemberBaseSettingsInfoResp> = () => {
  return request({
    path: `/v1/member/base/settings/info`,
    method: 'GET',
  })
}
/**
 * 折算货币设置
 * https://yapi.coin-online.cc/project/44/interface/api/440
 */
export const postMemberBaseCurrencyType: MarkcoinRequest<MemberBaseCurrencyTypeReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/base/currency`,
    method: 'POST',
    data: {
      currencyTypeCd: options.currencyTypeCd, // USD 美元 CNY 人民币 HKD 港币
    },
  })
}
/**
 * 涨跌色设置
 * https://yapi.coin-online.cc/project/44/interface/api/443
 */
export const postMemberBaseColorTtpe: MarkcoinRequest<MemberBaseColorTypeReq, MemberSuccessResp> = options => {
  return request({
    path: `/v1/member/base/market/color`,
    method: 'POST',
    data: {
      marketSetting: options.marketSetting, // 1.绿涨红跌 2.红涨绿跌
    },
  })
}

/* ========== 通过邮箱、手机、uid 获取信息  ========== */
/**
 * 通过 邮箱、密码 获取安全项启用状态
 * https://yapi.coin-online.cc/project/44/interface/api/2579
 */
export const postMemberVerifyMemberByAccoun: MarkcoinRequest<
  MemberVerifyMemberByAccounReq,
  MemberVerifyMemberByAccounResp
> = options => {
  return request({
    path: `/v1/member/safe/verifyMemberByAccount`,
    method: 'POST',
    data: {
      type: options.type, // 类型 1 手机 2 邮箱 3 uid
      account: options.account, // 邮箱
      password: options.password, // 密码
    },
  })
}

/**
 * 无密码 获取安全项启用状态
 * https://yapi.admin-devops.com/project/44/interface/api/2606
 */
export const postMemberVerifyByAccoun: MarkcoinRequest<
  MemberVerifyMemberByAccounReq,
  MemberVerifyMemberByAccounResp
> = options => {
  return request({
    path: `/v1/member/safe/query_verify_subject_by_account`,
    method: 'POST',
    data: {
      type: options.type, // 类型 1 手机 2 邮箱 3 uid
      account: options.account, // 邮箱
      mobileCountryCode: options.mobileCountryCode, // 区号
    },
  })
}

/**
 * 通过 邮箱、手机号 获取工单状态
 * https://yapi.admin-devops.com/project/44/interface/api/2645
 */
export const postMemberQueryWorkOrderStatus: MarkcoinRequest<
  MemberQueryWorkOrderStatusReq,
  MemberQueryWorkOrderStatusResp
> = options => {
  return request({
    path: `/v1/member/safe/query_is_process_by_account`,
    method: 'POST',
    data: {
      type: options.type, // 类型 1 手机 2 邮箱
      account: options.account, // 邮箱
      mobileCountryCode: options.mobileCountryCode, // 区号
    },
  })
}

/** ============ 上传图片 ============ */
/**
 * 上传图片
 * https://yapi.admin-devops.com/project/44/interface/api/2678
 */
export const postMemberUpload: MarkcoinRequest<MemberUploadReq, MemberUploadResp> = options => {
  return request({
    path: `/v1/storage/file/upload`,
    method: 'POST',
    timeout: 20 * 1000,
    data: {
      image: options.image, // base64 image 文件
    },
  })
}

/** ============ 通用安全验证 ============ */
/**
 * 通过 邮箱、手机号 获取工单状态
 * https://yapi.admin-devops.com/project/44/interface/api/2603
 */
export const postMemberUniversalSecurityVerification: MarkcoinRequest<
  MemberUniversalSecurityVerificationRep,
  MemberSuccessResp
> = options => {
  return request({
    path: `/v1/member/safe/common_verify`,
    method: 'POST',
    data: {
      operateType: options.operateType, // 业务类型
      mobileVerifyCode: options.mobileVerifyCode, // 手机验证码
      emailVerifyCode: options.emailVerifyCode, // 邮箱验证码
      googleVerifyCode: options.googleVerifyCode, // 谷歌验证码
    },
  })
}

/** ============ 获取用户信息 ============ */
/**
 * 获取用户信息 userInfo
 * https://yapi.admin-devops.com/project/44/interface/api/2576
 */
export const getMemberUserInfo: MarkcoinRequest<MemberUserInfoReq, MemberUserInfoResp> = () => {
  return request({
    path: `/v1/member/base/info`,
    method: 'GET',
  })
}

/** ============ 用户登出 ============ */
/**
 * 用户登出
 * https://yapi.admin-devops.com/project/44/interface/api/2711
 */
export const getMemberUserLoginOut: MarkcoinRequest = () => {
  return request({
    path: `/v1/member/logout`,
    method: 'GET',
  })
}

/** ============ 根据 ip 查询国家 ============ */
/**
 * 根据 ip 查询国家
 * https://yapi.admin-devops.com/project/44/interface/api/2867
 */
export const getMemberAreaIp: MarkcoinRequest = () => {
  return request({
    path: `/v1/member/phone/area_ip`,
    method: 'GET',
  })
}

/** ============ 获取 ip 地址等信息 ============ */
/**
 * 根据 ip 查询国家
 * https://yapi.nbttfc365.com/project/44/interface/api/3547
 */
export const getMemberLocation: MarkcoinRequest = () => {
  return request({
    path: `/v1/member/phone/location`,
    method: 'GET',
  })
}

/** ============ 刷新 token ============ */
/**
 * 刷新 token
 * https://yapi.admin-devops.com/project/44/interface/api/3507
 */
export const postMemberAuthRefreshToken: MarkcoinRequest<
  YapiPostAuthRefreshTokenApiRequest,
  YapiPostAuthRefreshTokenData
> = options => {
  return request({
    path: `/auth/refreshToken`,
    method: 'POST',
    data: {
      refreshToken: options.refreshToken, // 登陆成功后获取的 refreshToken 值
      tokenTtl: options.tokenTtl, // 登录时长
    },
  })
}

/** ============ 获取法币列表 ============ */
/**
 * 获取法币列表
 * https://yapi.nbttfc365.com/project/44/interface/api/2948
 */
export const getMemberCurrencyList: MarkcoinRequest = () => {
  return request({
    path: `/v1/member/currency/list`,
    method: 'GET',
  })
}

/**
 * [通过 app 登录 token 颁发 h5token↗](https://yapi.nbttfc365.com/project/44/interface/api/4267)
 * */
export const postV1MemberLoginH5ApiRequest: MarkcoinRequest<
  YapiPostV1MemberLoginH5ApiRequest,
  YapiPostV1MemberLoginH5ApiResponse
> = params => {
  return request({
    path: '/v1/member/login/h5',
    method: 'POST',
    params,
  })
}

/**
 * [获取平台 VCC 配置↗](https://yapi.nbttfc365.com/project/77/interface/api/9004)
 * */
export const getV1VccGetUserVccInfoApiRequest: MarkcoinRequest<
  YapiGetV1VccGetUserVccInfoApiRequest,
  YapiGetV1VccGetUserVccInfoApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getUserVccInfo',
    method: 'GET',
    params,
  })
}

/**
 * [更新支付密码↗](https://yapi.nbttfc365.com/project/77/interface/api/10399)
 * */
export const postV1VccUpdatePasswordApiRequest: MarkcoinRequest<
  YapiPostV1VccUpdatePasswordApiRequest,
  YapiPostV1VccUpdatePasswordApiResponse['data']
> = data => {
  return request({
    path: '/v1/vcc/updatePassword',
    method: 'POST',
    data,
  })
}

/**
 * apple 注册
 * https://yapi.nbttfc365.com/project/44/interface/api/184
 */
export const postRegisterAppleRequest: MarkcoinRequest = data => {
  return request({
    path: '/v1/member/register/apple',
    method: 'POST',
    data,
  })
}

/**
 * google 注册
 * https://yapi.nbttfc365.com/project/44/interface/api/240
 */
export const postRegisterGoogleRequest: MarkcoinRequest = data => {
  return request({
    path: '/v1/member/register/google',
    method: 'POST',
    data,
  })
}

/** 设置密码* */
export const postSetPasswordRequest: MarkcoinRequest = data => {
  return request({
    path: '/v1/member/login/passwordSet',
    method: 'POST',
    signature: true,
    data,
  })
}
