import { InviteFilterInviteTypeEnum, InviteFilterKycEnum, InviteFilterSortEnum } from '@/constants/agent/invite'
import {
  YapiPostV1AgentInviteDetailsApiRequest,
  YapiPostV1AgentInviteDetailsApiResponse,
  YapiPostV1AgentInviteDetailsListMembers,
} from '@/typings/yapi/AgentInviteDetailsV1PostApi'
import {
  YapiPostV1AgentInviteHistoryApiRequest,
  YapiPostV1AgentInviteHistoryData,
  YapiPostV1AgentInviteHistoryListMembersData,
} from '@/typings/yapi/AgentInviteHistoryV1PostApi'

export type InviteFormValidator = {
  alertMessage?: string
  isValid?: boolean
}
export type InviteFormObject<T> = {
  value: T
  // on validation failed alert message
  onValidateFailedMessage?: () => React.ReactDOM
  validator?: () => InviteFormValidator
  toApiValue?: (...any) => any
}

export type InviteFormObjectWrapper<Type> = {
  [Property in keyof Type]: InviteFormObject<Type[Property]>
}

export type InviteFilterFormViewModelHelper = {
  toApiApiRequest: (viewModel: InviteFilterFormViewModel) => Partial<YapiPostV1AgentInviteDetailsApiRequest>
  // fromApiRequest: (data: YapiPostV1AgentInviteDetailsApiResponse) => InviteFilterFormViewModel
  getDefaultViewModel: () => InviteFilterFormViewModel
}

type InviteFilterFormViewModelValueOnly = Partial<
  Omit<
    YapiPostV1AgentInviteDetailsApiRequest,
    'isAgt' | 'kycStatus' | 'registerSort' | 'childNumSort' | 'page' | 'pageSize'
  > & {
    isAgt: InviteFilterInviteTypeEnum
    kycStatus: InviteFilterKycEnum
    registerSort: InviteFilterSortEnum
    childNumSort: InviteFilterSortEnum
  }
>

export type InviteFilterFormViewModel = InviteFormObjectWrapper<InviteFilterFormViewModelValueOnly>

export type YapiPostV1AgentInviteDetailsApiResponseReal = Partial<
  Omit<YapiPostV1AgentInviteDetailsApiResponse, 'members'> & {
    members?: {
      list?: YapiPostV1AgentInviteDetailsListMembers[]
      total: number
      pageSize: number
      pages: number
    }
  }
>
export type YapiPostV1AgentInviteHistoryApiResponseReal = Partial<
  Omit<YapiPostV1AgentInviteHistoryData, 'members'> & {
    members: {
      list: YapiPostV1AgentInviteHistoryListMembersData[]
      total: number
      pageSize: number
      pages: number
    }
  }
>

export type YapiPostV1AgentInviteHistoryApiRequestReal = Partial<Omit<YapiPostV1AgentInviteHistoryApiRequest, 'levelLimit' | 'targetUid'>> & {
  levelLimit?: string | number,
  targetUid?: string | number,
  forceUpdate?: object
}
