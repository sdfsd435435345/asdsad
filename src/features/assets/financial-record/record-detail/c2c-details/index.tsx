/**
 * 财务记录详情-c2c
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { AssetsRecordTypeEnum } from '@/constants/assets/common'
import { formatDate } from '@/helper/date'
import { useAssetsStore } from '@/store/assets/spot'
import { getTextFromStoreEnums } from '@/helper/store'
import { getUserInfo } from '@/helper/cache'
import { useCopyToClipboard } from 'react-use'
import { Toast } from 'react-vant'
import styles from './index.module.css'

function C2CDetails() {
  const {
    assetsEnums,
    recordModule: {
      assetsRecordDetail: {
        typeInd,
        createdByTime = '--',
        updatedByTime = '--',
        typeStr = '',
        orderNumber = '--',
        transferOut = '--',
        transferIn = '--',
        fromUid = '--',
        toUid = '--',
        appealUserName,
        appealReason = '',
        appealUid,
      } = {},
    },
  } = useAssetsStore()
  const { uid = '' } = getUserInfo()

  const [state, copyToClipboard] = useCopyToClipboard()

  /**
   * 复制
   */
  const onCopy = val => {
    if (!val) {
      return
    }

    copyToClipboard(val)
    state.error ? Toast(t`assets.financial-record.copyFailure`) : Toast(t`assets.financial-record.copySuccess`)
  }

  /**
   * 划转至C2C账户/划转至交易账户
   */
  const onRenderTransfer = () => {
    return (
      <>
        <div className="transfer-info">
          <div className="transfer-item">
            <span className="transfer-label label">{t`features_assets_financial_record_record_detail_c2c_details_index_s3vbfpw0bmn5a1i94fh7h`}</span>
            <span className="value">{getTextFromStoreEnums(transferOut, assetsEnums.assetAccountTypeList.enums)}</span>
          </div>

          <div className="transfer-item">
            <span className="transfer-label label">{t`features_assets_financial_record_record_detail_c2c_details_index_xyz0pmktenaut7f5vc5pa`}</span>
            <span className="value">{getTextFromStoreEnums(transferIn, assetsEnums.assetAccountTypeList.enums)}</span>
          </div>

          <div className="transfer-item">
            <span className="transfer-label label">{t`assets.financial-record.creationTime`}</span>
            <span className="value">{formatDate(createdByTime)}</span>
          </div>

          <div className="transfer-item">
            <span className="transfer-label label">{t`assets.financial-record.completionTime`}</span>
            <span className="value">{formatDate(updatedByTime)}</span>
          </div>
        </div>
      </>
    )
  }

  /**
   * Pay-转入C2C账户/Pay-转出C2C账户/C2C赔付/
   */
  const onRenderSell = () => {
    const isForm = uid === `${fromUid}`
    return (
      <div className="sell-info">
        <div className="info-item">
          <div className="info-item-left">
            <span className="label sell-label">
              {isForm
                ? t`features_assets_financial_record_record_detail_c2c_details_index_unu-tvngmddudvorpkdeq`
                : t`features_assets_financial_record_record_detail_c2c_details_index_xahorrfdmgefdfr2jqfen`}{' '}
              UID
            </span>
            <span className="value">{isForm ? toUid : fromUid}</span>
          </div>

          <Icon name="copy" hasTheme className="text-base" onClick={() => onCopy(isForm ? toUid : fromUid)} />
        </div>

        <div className="info-item">
          <div className="info-item-left">
            <span className="label sell-label">{t`features_assets_financial_record_record_detail_c2c_details_index_lgkef6oqsknl9-euc1p7r`}</span>
            <span className="value">{getTextFromStoreEnums(typeStr, assetsEnums.c2cBillLogTypeList.enums)}</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-item-left">
            <span className="label sell-label">{t`features_c2c_order_detail_await_pay_xc0cqka6wlu6euiuggu_c`}</span>
            <span className="value">{orderNumber}</span>
          </div>

          <Icon name="copy" hasTheme className="text-base" onClick={() => onCopy(orderNumber)} />
        </div>

        {typeInd === AssetsRecordTypeEnum.c2cCompensate && (
          <>
            <div className="info-item">
              <div className="info-item-left">
                <span className="label sell-label">{t`features_assets_financial_record_record_detail_c2c_details_index_by3fehdbyx-koa9xpysmk`}</span>
                <span className="value">
                  {appealUserName || appealUid || '--'}
                  {uid === `${appealUid}` &&
                    t`features_assets_financial_record_record_detail_c2c_details_index_18wv5tiqiv3-swv_jtejj`}
                </span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-left">
                <span className="label sell-label">{t`features_c2c_order_appeal_index_ot7u_62nxpmbdnyn7tljy`}</span>
                <span className="value">
                  {getTextFromStoreEnums(appealReason, assetsEnums.c2cOrderAppealReasonTypeList.enums)}
                </span>
              </div>
            </div>
          </>
        )}

        <div className="info-item">
          <div className="info-item-left">
            <span className="label sell-label">{t`assets.financial-record.creationTime`}</span>
            <span className="value">{formatDate(createdByTime)}</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-item-left">
            <span className="label sell-label">{t`assets.financial-record.completionTime`}</span>
            <span className="value">{formatDate(updatedByTime)}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['c2c-details-root']}>
      {typeInd === AssetsRecordTypeEnum.c2cTransfer || typeInd === AssetsRecordTypeEnum.spotTransfer
        ? onRenderTransfer()
        : onRenderSell()}
    </div>
  )
}

export { C2CDetails }
