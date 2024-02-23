import request, { MarkcoinRequest } from '@/plugins/request'
import { YapiGetV1KycCommonGetMainDataApiResponse } from '@/typings/yapi/KycCommonGetMainDataV1GetApi'

/** ============ KYC 相关接口 ============ */
/**
 * 获取认证主页数据
 * https://yapi.admin-devops.com/mock/44/v1/kyc/common/getMainData
 */
export const getMainData: MarkcoinRequest = () => {
  return request({
    path: `/v1/kyc/common/getMainData`,
    method: 'GET',
  })
}
/** ============ 上传图片 ============ */
/**
 * 上传图片
 * https://yapi.admin-devops.com/mock/44/v1/storage/file/upload
 */
export const postUpload: MarkcoinRequest = options => {
  return request({
    path: `/v1/storage/file/upload`,
    timeout: 20 * 1000,
    method: 'POST',
    data: {
      image: options.image, // base64 image 文件
    },
  })
}
/** ============ 提交基础认证 ============ */
/**
 * 个人基础认证
 * https://yapi.admin-devops.com/mock/44/v1/kyc/auth/basic/submit
 */
export const basicSubmit: MarkcoinRequest = options => {
  return request({
    path: `/v1/kyc/auth/basic/submit`,
    method: 'POST',
    data: options,
  })
}
/** ============ 提交高级认证 ============ */
/**
 * 个人高级认证
 * https://yapi.admin-devops.com/mock/44/v1/kyc/auth/senior/submit
 */
export const seniorSubmit: MarkcoinRequest = options => {
  return request({
    path: `/v1/kyc/auth/senior/submit`,
    method: 'POST',
    data: options,
  })
}
/** ============ 获取认证状态及反馈信息 ============ */
/**
 * 获取认证状态
 * https://yapi.admin-devops.com/mock/44/v1/kyc/common/getApprovalResult
 */
export const getApprovalResult: MarkcoinRequest = options => {
  return request({
    path: `/v1/kyc/common/getApprovalResult`,
    method: 'GET',
    params: {
      kycId: options.kycId, // 认证 ID
      kycType: options.kycType, // 认证类型
    },
  })
}
/** ============ 重新发起认证更新状态 ============ */
/**
 * 个人高级认证
 * https://yapi.admin-devops.com/mock/44/v1/kyc/common/resubmitUpdate
 */
export const resubmitUpdate: MarkcoinRequest = options => {
  return request({
    path: `/v1/kyc/common/resubmitUpdate`,
    method: 'POST',
    data: options,
  })
}
