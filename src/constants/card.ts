import { t } from '@lingui/macro'

export enum CardLogStatusEnum {
  create = 'create',
  success = 'success',
  fail = 'fail',
}

export function getCardLogStatusEnumName(status: CardLogStatusEnum) {
  return {
    [CardLogStatusEnum.create]: t`features_kyc_index_standards_5101191`,
    [CardLogStatusEnum.success]: t`assets.financial-record.search.success`,
    [CardLogStatusEnum.fail]: t`assets.financial-record.search.failure`,
  }[status]
}
