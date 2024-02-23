/**
 * 资产 - 充值
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import { AssetsDepositAddressReq, AssetsDepositAddressResp } from '@/typings/api/assets/assets'

/**
 * 资产 - 获取用户币种充值地址
 */
export const postDepositAddress: MarkcoinRequest<AssetsDepositAddressReq, AssetsDepositAddressResp> = data => {
  return request({
    path: `/v1/assets/base/queryDepositAddress`,
    method: 'POST',
    data,
  })
}
