/**
 * 财务记录 - 记录详情 - 交易状态组件
 */
import { t } from '@lingui/macro'
import LazyImage from '@/components/lazy-image'
import { FinancialRecordStateEnum, OSSDOMAIN_IMAGE } from '@/constants/assets'
import { AssetsHistoryPageTypeEnum, AssetsRecordTypeEnum } from '@/constants/assets/common'
import { useAssetsStore } from '@/store/assets/spot'
import { getTextFromStoreEnums } from '@/helper/store'
import { formatNonExponential } from '@/helper/decimal'
import { IncreaseTag } from '@/nbit/react'
import { usePageContext } from '@/hooks/use-page-context'
import styles from './index.module.css'

// 状态图标
function StateIconItem({ state }: { state: number }) {
  let svgList = {
    success: 'recharge_icon_success',
    processing: 'recharge_icon_processing',
    fail: 'recharge_icon_fail',
    error: 'recharge_icon_error',
  }

  let imgUrl = svgList.success
  switch (state) {
    case FinancialRecordStateEnum.success:
      imgUrl = `${OSSDOMAIN_IMAGE}${svgList.success}`
      break
    case FinancialRecordStateEnum.processing:
      imgUrl = `${OSSDOMAIN_IMAGE}${svgList.processing}`
      break
    case FinancialRecordStateEnum.fail:
      imgUrl = `${OSSDOMAIN_IMAGE}${svgList.fail}`
      break
    case FinancialRecordStateEnum.error:
      imgUrl = `${OSSDOMAIN_IMAGE}${svgList.error}`
      break
    default:
      imgUrl = `${OSSDOMAIN_IMAGE}${svgList.success}`
      break
  }

  return <LazyImage src={imgUrl} width={68} height={64} />
}

export function RecordDetailState() {
  const pageContext = usePageContext()
  const pageType = pageContext.urlParsed.search?.page
  const pageAmount = pageContext.urlParsed.search?.amount
  const {
    typeInd,
    businessCoin,
    amount = '',
    feeCoinName,
    fee = '',
    coinName,
    statusCd,
    transferIn,
    transferOut,
  } = useAssetsStore().recordModule.assetsRecordDetail || {}
  const { assetsEnums } = useAssetsStore()

  /**
   * 获取状态对应 classname
   */
  const getStateCss = (state: number) => {
    switch (state) {
      case FinancialRecordStateEnum.success:
        return 'success'
      case FinancialRecordStateEnum.processing:
        return 'processing'
      case FinancialRecordStateEnum.fail:
        return 'fail'
      case FinancialRecordStateEnum.error:
        return 'error'
      default:
        return 'success'
    }
  }

  const getAmount = () => {
    const newAmount = typeInd === AssetsRecordTypeEnum.spotCommission ? Number(fee) : Number(amount)
    return formatNonExponential(newAmount)
  }

  return (
    <div className={styles.scoped}>
      <div className={`order-info ${getStateCss(statusCd)}`}>
        <StateIconItem state={statusCd} />
        <div className="left">
          <div>
            {typeInd === AssetsRecordTypeEnum.extractCommission
              ? t`assets.withdraw.title`
              : getTextFromStoreEnums(typeInd, assetsEnums.financialRecordTypeEnum.enums)}
          </div>
          <div className="font-color">
            {getTextFromStoreEnums(statusCd, assetsEnums.financialRecordStateEnum.enums)}
          </div>
        </div>
        <div className="right">
          <div>{typeInd === AssetsRecordTypeEnum.spotCommission ? feeCoinName : businessCoin || coinName || '--'} </div>
          <div className="recordDetail.money">
            <span
              className={`${
                statusCd !== FinancialRecordStateEnum.success &&
                statusCd !== FinancialRecordStateEnum.fail &&
                'font-color'
              }`}
            >
              <IncreaseTag
                value={pageAmount || getAmount()}
                hasColor={
                  typeInd !== AssetsRecordTypeEnum.migrate &&
                  !(pageType === AssetsHistoryPageTypeEnum.historyList && transferIn && transferOut) &&
                  (statusCd === FinancialRecordStateEnum.success || statusCd === FinancialRecordStateEnum.fail)
                }
                hasPrefix={
                  !(pageType === AssetsHistoryPageTypeEnum.historyList && transferIn && transferOut) &&
                  typeInd !== AssetsRecordTypeEnum.migrate &&
                  +getAmount() > 0
                }
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
