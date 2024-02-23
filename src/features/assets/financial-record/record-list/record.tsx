/**
 * 财务记录-TabPane
 */
import { t } from '@lingui/macro'
import { IncreaseTag } from '@/nbit/react'
import Icon from '@/components/icon'
import CommonList from '@/components/common-list/list'
import { link } from '@/helper/link'
import { RecordListScreen } from '@/features/assets/financial-record/record-list/record-list-screen'
import { useAssetsStore } from '@/store/assets/spot'
import { FinancialRecordRouteEnum } from '@/constants/assets'
import { formatDate } from '@/helper/date'
import { RecordsListResp } from '@/typings/api/assets/assets'
import { getTextFromStoreEnums } from '@/helper/store'
import {
  AssetsHistoryPageTypeEnum,
  AssetsRecordTypeEnum,
  AssetsTransferTypeList,
  RecordExtractBondTypeList,
  RecordFuturesTypeList,
} from '@/constants/assets/common'
import { getAssetsHistoryDetailPageRoutePath } from '@/helper/route'
import styles from './record.module.css'

function Record({
  recordList,
  finished,
  onLoadList,
  onRefreshing,
  onShowType,
}: {
  recordList: RecordsListResp[]
  finished: boolean
  onLoadList: (isRefresh?: boolean) => Promise<void>
  onRefreshing: () => void
  onShowType: (isShow: boolean) => void
}) {
  const { activeTab, updateRecordModule } = useAssetsStore().recordModule
  const { assetsEnums } = useAssetsStore()

  /**
   * 列表 item
   * @returns
   */
  function ListItem() {
    return (
      <div>
        {recordList.map((item, index: number) => (
          <div
            key={index}
            className="list-item"
            onClick={() =>
              link(getAssetsHistoryDetailPageRoutePath({ id: item.id, page: AssetsHistoryPageTypeEnum.historyList }))
            }
          >
            <div className="item-left">
              <div className="info">
                <div className="info-name">
                  <span className="mr-2">{item.businessCoin || '--'}</span>
                  {RecordFuturesTypeList.includes(item.type) && (
                    <>
                      {!RecordExtractBondTypeList.includes(item.type) && (
                        <span className="mr-2">
                          {getTextFromStoreEnums(item.groupType || '', assetsEnums.financialRecordTypeSwapList.enums)}
                        </span>
                      )}
                      <span>{item.groupName}</span>
                    </>
                  )}
                </div>

                <span className="info-total">
                  <IncreaseTag
                    value={item.total}
                    hasColor={!(item.from && item.to) && item.type !== AssetsRecordTypeEnum.migrate}
                    hasPrefix={!(item.from && item.to) && item.type !== AssetsRecordTypeEnum.migrate}
                  />
                </span>
              </div>

              {AssetsTransferTypeList.includes(item.type) && item.type !== AssetsRecordTypeEnum.migrate && (
                <div className="info-transfer">
                  <span>{item.from || t`features_trade_future_c2c_22225101593`}</span>
                  <span className="transfer-separate">{t`features_assets_financial_record_datetime_search_index_602`}</span>
                  <span>{item.to || t`features_trade_future_c2c_22225101593`}</span>
                </div>
              )}

              <div className="info !mb-0">
                <span className="info-date">
                  {formatDate(item.createdByTime)}
                  <span className="info-type">
                    {getTextFromStoreEnums(item.type, assetsEnums.financialRecordTypeEnum.enums)}
                    {RecordExtractBondTypeList.includes(item.type) &&
                      `(${getTextFromStoreEnums(
                        item.operationType || '',
                        assetsEnums.financialRecordTypeOperationList.enums
                      )})`}
                  </span>
                </span>

                <span className="info-status">
                  {getTextFromStoreEnums(item.status, assetsEnums.financialRecordStateEnum.enums)}
                </span>
              </div>
            </div>

            <Icon hasTheme name="next_arrow" className="next-arrow" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles['record-wrapper']}>
      <RecordListScreen
        showCurrency
        // TODO 衍生品/其他类型待完善暂时不展示
        showType={activeTab !== FinancialRecordRouteEnum.derivative && activeTab !== FinancialRecordRouteEnum.other}
        onCurrency={() => {
          updateRecordModule({ showAssetsSelect: true })
        }}
        onType={() => onShowType(true)}
      />

      <CommonList
        refreshing
        finished={finished}
        onRefreshing={onRefreshing}
        onLoadMore={onLoadList}
        listChildren={<ListItem />}
        showEmpty={recordList.length === 0}
      />
    </div>
  )
}

export { Record }
