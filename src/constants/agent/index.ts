// export const agentTitleContentNav = () => `统计详情`
// export const agentTitleGainsAnalyticsNav = () => `收益明细分析`
// export const agentTitleInviteAnalyticsNav = () => `邀请明细分析`
// export const agentTitleInviteDetailsTable = () => `邀请用户详情`

import { t } from '@lingui/macro'

/**
  邀请返佣 ~/agent
  管理邀请码 ~/agent/manage
  成为顶级代理商 ~/agent/apply
  成为顶级代理商表单提交页面 ~/agent/join
  收益明细分析 ~/agent/gains
  邀请用户详情 ~/agent/invitation
  邀请明细分析 ~/agent/invite-analytics
  周返佣排行榜 ~/agent/rank
  代理商申请结果 ~/agent/result

  @doc https://doc.nbttfc365.com/docs/front-end/fe-feature/agent/%E4%BB%A3%E7%90%86%E5%95%86%E6%96%87%E6%A1%A3
*/
export const agentModuleRoutes = {
  default: '/agent',
  gains: '/agent/gains',
  // gains 图表分析页
  gainsAnalytics: 'agent/gains/detail',

  invite: '/agent/invite-analytics',
  // invite 图表分析页
  inviteAnalytics: '/agent/invite-analytics/detail',
  // invite 聚焦搜索页
  inviteSearching: '/agent/invite-analytics/search',
  // invite 用户详情列表页
  inviteCheckMore: '/agent/invitation',
}

export enum AgentContentTypeEnum {
  gains = 'gains',
  invite = 'invite',
}

export function getAgentContentTypeEnumTab() {
  return [
    {
      title: t`constants_agent_5101362`,
      id: AgentContentTypeEnum.gains,
    },
    {
      title: t`constants_agent_5101363`,
      id: AgentContentTypeEnum.invite,
    },
  ]
}

export function getRouteUrlByAgentType(type: AgentContentTypeEnum) {
  return {
    [AgentContentTypeEnum.gains]: agentModuleRoutes.gains,
    [AgentContentTypeEnum.invite]: agentModuleRoutes.invite,
  }[type]
}

export function getTitleNameByAgentType(type: AgentContentTypeEnum) {
  return {
    [AgentContentTypeEnum.gains]: t`constants_agent_5101362`,
    [AgentContentTypeEnum.invite]: t`constants_agent_5101363`,
  }[type]
}

enum DateOptionsTypes {
  custom,
  now,
  last7Days,
  last30Days,
}

const dateOptions = () => [
  {
    label: t`constants_agent_5101364`,
    value: DateOptionsTypes.last7Days,
  },
  {
    label: t`constants_agent_5101365`,
    value: DateOptionsTypes.last30Days,
  },
  {
    label: t`constants_agent_5101366`,
    value: DateOptionsTypes.custom,
  },
]

const infoHeaderTypes = () => {
  return {
    [DateOptionsTypes.now]: {
      title: t`constants_agent_5101367`,
      content: t`constants_agent_5101368`,
    },
    [DateOptionsTypes.last7Days]: {
      title: t`constants_agent_5101369`,
      content: t`constants_agent_5101370`,
    },
    [DateOptionsTypes.last30Days]: {
      title: t`constants_agent_5101371`,
      content: t`constants_agent_5101372`,
    },
  }
}

const productCodeMapToRates = {
  1: 'spotRate',
  2: 'contractRate',
  3: 'borrowCoinRate',
}

const totalIncomeChartDefaultProperties = {
  color: '#F1AE3D',
}

const incomeAnalysisChartDefaultProperties = [{ color: '#FF7E77' }, { color: '#29DC92' }, { color: '#6195F6' }]

enum AgentChartKeyEnum {
  TotalIncomes = 'totalIcomes',
  IncomeAnalysis = 'incomeAnalysis',
  InvitedList = 'invitedList',
  TotalInvitedList = 'totalInvitedList',
}

export {
  DateOptionsTypes,
  AgentChartKeyEnum,
  dateOptions,
  infoHeaderTypes,
  totalIncomeChartDefaultProperties,
  productCodeMapToRates,
  incomeAnalysisChartDefaultProperties,
}
