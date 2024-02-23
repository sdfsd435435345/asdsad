import { getAdvertDelete, getAdvertDown } from '@/apis/c2c/advertise'
import { t } from '@lingui/macro'
import { Toast } from 'react-vant'
import { requestWithLoading } from '../order'

/**
 * 下架广告
 * @param advertId 广告 ID
 * @returns isSuccess
 */
export const onBlindAdvertise = async (advertId: string) => {
  const res = await requestWithLoading(getAdvertDown({ advertId }), 0)
  const { isOk, data } = res || {}
  if (!isOk || !data?.isSuccess) {
    Toast.info(t`helper_c2c_advertise_jfqx9yriryelkj-kje5cu`)
    return false
  }

  return true
}

/**
 * 删除广告
 * @param advertId 广告 ID
 * @returns isSuccess
 */
export const onDelAdvertise = async (advertId: string) => {
  const res = await requestWithLoading(getAdvertDelete({ advertId }), 0)

  const { isOk, data } = res || {}
  if (!isOk || !data?.isSuccess) {
    Toast.info(t`helper_c2c_advertise_usz8u6zaz9rzgduvjawau`)
    return false
  }

  return true
}
