enum AuditStatusEnum {
  // 待审批
  PendingApproval = 1,
  // 已通过
  Passed = 2,
}

export const useJudgeIsNotAble = () => {
  const setShowSort = auditMap => {
    return auditMap
      ?.filter(item => item?.auditStatus !== 4 && item?.isReadResult !== 1)
      ?.map(item => {
        return item?.kycType
      })
      ?.sort((a, b) => b - a)
  }

  const getJudgeIsNotAble = data => {
    const showKycType = setShowSort(data?.auditMaps)?.[0]
    const companyStatus = data?.auditMaps?.find(item => item?.kycType === showKycType && item?.kycType === 4)

    return (
      companyStatus?.kycType === 4 &&
      [AuditStatusEnum.Passed, AuditStatusEnum.PendingApproval].includes(companyStatus?.auditStatus) &&
      companyStatus?.isReadResult === 2
    )
  }

  return { getJudgeIsNotAble }
}
