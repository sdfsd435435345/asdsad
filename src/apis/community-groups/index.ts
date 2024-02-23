import request, { MarkcoinRequest } from '@/plugins/request'

/**
 * 获取社群数据
 */
export const getCommunityGroups: MarkcoinRequest = params => {
  return request({
    path: `/v1/group/config/getList`,
    method: 'GET',
    params,
  })
}
