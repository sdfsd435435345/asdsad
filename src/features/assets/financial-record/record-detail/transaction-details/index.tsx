/**
 *记录详情 - 成交明细/资金明细
 */
import { t } from '@lingui/macro'
import { useState } from 'react'
import { Tabs } from 'react-vant'
import { RecordDetailsTabEnum, RecordTransactionDetailsList } from '@/constants/assets/common'

import { useAssetsStore } from '@/store/assets/spot'
import CommonListEmpty from '@/components/common-list/list-empty'
import { formatDate } from '@/helper/date'
import { PerpetualDealDetail } from '@/typings/api/assets/assets'
import { getTextFromStoreEnums } from '@/helper/store'
import { PerpetualOrderAcceptTypeEnum } from '@/constants/assets/futures'
import { IncreaseTag } from '@/nbit/react'
import styles from './index.module.css'

function TransactionDetails() {
  const [activeTab, setActiveTab] = useState<string | number>(RecordDetailsTabEnum.transaction)
  const {
    assetsEnums,
    recordModule: {
      assetsRecordDetail: { assetDetail = [], dealDetail = [], typeInd, isAccept },
    },
  } = useAssetsStore()

  /**
   * 成交明细列表
   */
  const onRenderDealDetail = () => {
    return (
      <div className="list">
        {dealDetail.length > 0 ? (
          dealDetail.map((dealItem: PerpetualDealDetail, index: number) => {
            const { time, size = '--', price = '--', quoteSymbolName, fee = '--', baseSymbolName } = dealItem || {}
            return (
              <div className="list-item" key={index}>
                <div className="item-info">
                  <span className="info-name">{t`future.funding-history.index-price.column.time`}</span>
                  <span className="info-value">{formatDate(time) || '--'}</span>
                </div>

                <div className="item-info">
                  <span className="info-name">{t`features/trade/spot/price-input-0`}</span>
                  <span className="info-value">
                    <IncreaseTag value={size} hasPrefix={false} hasColor={false} right={` ${baseSymbolName}`} />
                  </span>
                </div>

                <div className="item-info">
                  <span className="info-name">{t`future.funding-history.index.table-type.price`}</span>
                  <span className="info-value">
                    <IncreaseTag value={price} hasPrefix={false} hasColor={false} />
                  </span>
                </div>

                <div className="item-info">
                  <span className="info-name">{t`features_assets_financial_record_financial_record_592`}</span>
                  <span className="info-value">
                    <IncreaseTag value={fee} hasPrefix={false} hasColor={false} right={` ${quoteSymbolName}`} />
                  </span>
                </div>
              </div>
            )
          })
        ) : (
          <CommonListEmpty />
        )}
      </div>
    )
  }

  /**
   * 资金明细列表
   */
  const onRenderAssetDetail = () => {
    return (
      <div className="list">
        {assetDetail.length > 0 ? (
          assetDetail.map((assetsItem, index: number) => {
            const { time, amount, assetType, coinName, currencyName, rate } = assetsItem || {}
            return (
              <div className="list-item" key={index}>
                <div className="item-info">
                  <span className="info-name">{t`future.funding-history.index-price.column.time`}</span>
                  <span className="info-value">{formatDate(time) || '--'}</span>
                </div>

                <div className="item-info">
                  <span className="info-name">{t`features/trade/spot/price-input-0`}</span>
                  <span className="info-value">
                    <IncreaseTag value={amount} hasPrefix={false} hasColor={false} right={` ${coinName}`} />
                  </span>
                </div>

                {RecordTransactionDetailsList.indexOf(typeInd) > -1 && (
                  <>
                    <div className="item-info">
                      <span className="info-name">{t`features_assets_financial_record_record_detail_transaction_details_index_5101476`}</span>
                      <span className="info-value">
                        1{coinName} = {rate}
                        {currencyName}
                      </span>
                    </div>

                    <div className="item-info">
                      <span className="info-name">{t`features/assets/financial-record/record-list/record-list-screen/index-1`}</span>
                      <span className="info-value">
                        {getTextFromStoreEnums(assetType, assetsEnums.financialRecordTypePerpetualBillList.enums)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            )
          })
        ) : (
          <CommonListEmpty />
        )}
      </div>
    )
  }

  return (
    <div className={styles.scoped}>
      {RecordTransactionDetailsList.indexOf(typeInd) > -1 && isAccept === PerpetualOrderAcceptTypeEnum.no && (
        <Tabs
          type="line"
          align="start"
          active={activeTab}
          defaultActive={activeTab}
          border={RecordTransactionDetailsList.indexOf(typeInd) > -1}
          onChange={(name: string | number) => {
            setActiveTab(name)
          }}
        >
          <Tabs.TabPane title={t`features_orders_order_detail_510272`} name={RecordDetailsTabEnum.transaction}>
            {onRenderDealDetail()}
          </Tabs.TabPane>
          <Tabs.TabPane
            title={t`features_assets_financial_record_record_detail_transaction_details_index_5101272`}
            name={RecordDetailsTabEnum.fund}
          >
            {onRenderAssetDetail()}
          </Tabs.TabPane>
        </Tabs>
      )}

      {RecordTransactionDetailsList.indexOf(typeInd) > -1 && (
        <>
          <div className="list-title">{t`features_orders_order_detail_510272`}</div>
          {onRenderDealDetail()}
        </>
      )}
      {isAccept === PerpetualOrderAcceptTypeEnum.no && (
        <>
          <div className="list-title">{t`features_assets_financial_record_record_detail_transaction_details_index_5101272`}</div>
          {onRenderAssetDetail()}
        </>
      )}
    </div>
  )
}

export { TransactionDetails }
