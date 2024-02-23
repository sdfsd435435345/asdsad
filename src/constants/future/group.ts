import { t } from '@lingui/macro'

export enum GroupRecordStatusEnum {
  succeed,
  failed,
  pending,
  all = '',
}
export function getGroupRecordStatusEnumName(status: GroupRecordStatusEnum): string {
  return {
    [GroupRecordStatusEnum.succeed]: t`assets.financial-record.search.success`,
    [GroupRecordStatusEnum.all]: t`assets.withdraw.form.count.withdraw-all`,
    [GroupRecordStatusEnum.failed]: t`assets.financial-record.search.failure`,
    [GroupRecordStatusEnum.pending]: t`assets.financial-record.search.underway`,
  }[status]
}
export enum GroupRecordTypeEnum {
  open,
  close,
  openFee,
  closeFee,
  closeProfit,
  forceClose,
  forceReduce,
  lockFee,
  fundingFee,
  migrate,
  forceCloseReturn,
  forceCloseFee,
  // 穿仓保险金注入
  insurance,
  recharge,
  withdraw,
  all = '',
}

export function getGroupRecordTypeEnumName(type: GroupRecordTypeEnum): string {
  return {
    [GroupRecordTypeEnum.open]: t`constants/assets/common-0`,
    [GroupRecordTypeEnum.close]: t`constants/assets/common-1`,
    [GroupRecordTypeEnum.openFee]: t`constants/assets/common-2`,
    [GroupRecordTypeEnum.closeFee]: t`constants/assets/common-3`,
    [GroupRecordTypeEnum.closeProfit]: t`constants/assets/common-4`,
    [GroupRecordTypeEnum.forceClose]: t`constants/assets/common-29`,
    [GroupRecordTypeEnum.forceReduce]: t`constants/assets/common-30`,
    [GroupRecordTypeEnum.lockFee]: t`constants/assets/common-7`,
    [GroupRecordTypeEnum.fundingFee]: t`constants_future_group_753`,
    [GroupRecordTypeEnum.migrate]: t`constants/assets/common-9`,
    [GroupRecordTypeEnum.forceCloseReturn]: t`constants/assets/common-10`,
    [GroupRecordTypeEnum.forceCloseFee]: t`constants/assets/common-11`,
    [GroupRecordTypeEnum.insurance]: t`constants/assets/common-12`,
    [GroupRecordTypeEnum.recharge]: t`constants/assets/common-14`,
    [GroupRecordTypeEnum.withdraw]: t`constants/assets/common-13`,
    [GroupRecordTypeEnum.all]: t`assets.withdraw.form.count.withdraw-all`,
  }[type]
}
