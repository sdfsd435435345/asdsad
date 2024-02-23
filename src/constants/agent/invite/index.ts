// 邀请明细表单筛选条件 Enum

import { t } from '@lingui/macro'

/** 邀请类型 1为代理 2非代理	 */
export enum InviteFilterInviteTypeEnum {
  total = '',
  agentInvite = '1',
  normalInvite = '2',
}

/**
 * https://yapi.nbttfc365.com/project/44/interface/api/4159
 * 实名状态 1为未认证，2为已认证，传3查所有
 */
export enum InviteFilterKycEnum {
  total = '',
  verified = '2',
  notVerified = '1',
}

// 排序约定 1正序 2倒序
export enum InviteFilterSortEnum {
  default = '',
  asc = '1',
  desc = '2',
}

export enum IsContractOpen {
  yes = '1',
}

export enum DateOptionsTypesInvite {
  now,
  last7Days,
  last30Days,
}

export const dateOptionsTypesInviteApiKeyMap = {
  [DateOptionsTypesInvite.now]: 'today',
  [DateOptionsTypesInvite.last7Days]: 'sevenDays',
  [DateOptionsTypesInvite.last30Days]: 'thirtyDays',
}

export const dateOptionsInvite = () => [
  {
    label: t`constants_agent_invite_index_5101402`,
    value: DateOptionsTypesInvite.now,
  },
  {
    label: t`constants_agent_5101365`,
    value: DateOptionsTypesInvite.last7Days,
  },
  {
    label: t`constants_agent_5101366`,
    value: DateOptionsTypesInvite.last30Days,
  },
]

export const infoHeaderTypesInvite = () => {
  return {
    [DateOptionsTypesInvite.now]: {
      title: t`constants_agent_invite_index_5101402`,
      content: t`constants_agent_invite_index_5101403`,
    },
    [DateOptionsTypesInvite.last7Days]: {
      title: t`constants_agent_invite_index_5101404`,
      content: t`constants_agent_invite_index_5101405`,
    },
    [DateOptionsTypesInvite.last30Days]: {
      title: t`constants_agent_invite_index_5101406`,
      content: t`constants_agent_invite_index_5101407`,
    },
  }
}
