import request, { MarkcoinRequest } from '@/plugins/request'
import { IFutureGroup } from '@/typings/api/future/common'
import { IMarginRecord } from '@/typings/api/future/margin'
import { IMarginCoinItem } from '@/typings/api/trade'

/**
 * 查询已自动追加保证金的合约组
 */
export const queryEnableAutoAddMarginFutureGroups: MarkcoinRequest<any, IFutureGroup[]> = () => {
  return request({
    path: `/trade/future/auto-add-margin/groups`,
    method: 'GET',
  })
}
/**
 * 修改合约组是否需要自动追加保证金
 */
export const updateFutureGroupsAutoAddMargin: MarkcoinRequest<
  {
    id: string
    enabled: boolean
  }[]
> = data => {
  return request({
    path: `/trade/future/groups/update-auto-add-margin`,
    method: 'POST',
    data,
  })
}
/**
 * 查询已添加自动追加保证金的币种
 */
export const queryAutoAddMarginCoins: MarkcoinRequest<any, IMarginCoinItem[]> = () => {
  return request({
    path: `/trade/future/auto-add-margin/coins`,
    method: 'GET',
  })
}
/**
 * 从自动追加保证金的币种中移除
 */
export const removeAutoAddMarginCoin: MarkcoinRequest<{
  id: string
}> = data => {
  return request({
    path: `/trade/future/auto-add-margin/coins`,
    method: 'DELETE',
    data,
  })
}

/**
 * 从自动追加保证金的币种中添加币种
 */
export const addAutoAddMarginCoin: MarkcoinRequest<{
  ids: string[]
}> = data => {
  return request({
    path: `/trade/future/auto-add-margin/coins`,
    method: 'POST',
    data,
  })
}
/**
 * 从自动追加保证金的币种更新余额
 */
export const updateAutoAddMarginCoin: MarkcoinRequest<{
  id: string
  max: string
}> = data => {
  return request({
    path: `/trade/future/auto-add-margin/coins`,
    method: 'PU',
    data,
  })
}
/**
 * 查询自动追加保证金的币种详情
 */
export const queryAutoAddMarginCoinDetail: MarkcoinRequest<{ id: string }, IMarginCoinItem> = ({ id }) => {
  return request({
    path: `/trade/future/auto-add-margin/coins/${id}`,
    method: 'GET',
  })
}

/**
 * 查询自动追加保证金记录
 */
export const queryAutoAddMarginRecords: MarkcoinRequest<
  { id: string; page: number; pageSize: number },
  IMarginRecord[]
> = ({ id, page, pageSize }) => {
  return request({
    path: `/trade/future/auto-add-margin/coins/${id}/records`,
    method: 'GET',
    params: {
      page,
      pageSize,
    },
  })
}
