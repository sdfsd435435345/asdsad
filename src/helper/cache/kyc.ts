import cacheUtils from 'store'

// 用户保存 KYC 认证资料
export const kycName = 'KYC_DATA'

export function setKycData(val) {
  return cacheUtils.set(kycName, val)
}

export function getKycData() {
  return cacheUtils.get(kycName)
}
