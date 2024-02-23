/**
 *记录详情 - 详情
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { Toast } from 'react-vant'
import {
  AssetsRecordTypeEnum,
  RecordTransactionDetailsList,
  RecordExpenseDetailsList,
  RecordRechargeTypeList,
  RecordDetailsChannelIdEnum,
  getDelegationTypeName,
  RecordRebateTypeList,
  RecordFuturesTypeList,
  RecordCommissionTypeList,
} from '@/constants/assets/common'
import { FinancialRecordStateEnum } from '@/constants/assets'
import { useCopyToClipboard } from 'react-use'
import { useAssetsStore } from '@/store/assets/spot'
import { formatDate } from '@/helper/date'
import { IncreaseTag } from '@/nbit/react'
import { TradeDirectionEnum } from '@/constants/trade'
import { ReactNode, useEffect, useState } from 'react'
import { getTextFromStoreEnums } from '@/helper/store'
import {
  getStopLimitEntrustTypeName,
  PerpetualMigrateTypeEnum,
  StopLimitEntrustTypeEnum,
} from '@/constants/assets/futures'
import styles from './index.module.css'

interface IListEnum {
  label: string
  value: ReactNode | string
}

function RecordDetailsInfo() {
  const {
    typeInd,
    symbol,
    blockTotal,
    confirmation,
    address,
    txHash,
    createdByTime,
    updatedByTime,
    toUid,
    fromUid,
    amount = '',
    statusCd,
    reason,
    fee,
    feeCoinName,
    mainnet,
    channelInd,
    side,
    orderType,
    businessCoin,
    groupName = '--',
    operationType = '',
    toGroupName = '--',
    lever,
    entrustTypeInd,
    price,
    size,
    tradeSize,
    tradePrice,
    realizedProfit,
    quoteCoinShortName,
    baseCoinShortName,
    orderTypeInd,
    migrateMargin,
    migrateType = '',
    orderStatus,
    transferIn,
    transferOut,
  } = useAssetsStore().recordModule.assetsRecordDetail || {}
  const { assetsEnums } = useAssetsStore()
  const [list, setList] = useState<IListEnum[]>([])

  /**
   * 初始化返佣数据
   */
  const onInitRebateData = () => {
    let nList: IListEnum[] = []
    if (RecordRebateTypeList.indexOf(typeInd) > -1) {
      nList = [
        { label: t`assets.financial-record.creationTime`, value: createdByTime ? formatDate(createdByTime) : '--' },
        { label: t`assets.financial-record.completionTime`, value: updatedByTime ? formatDate(updatedByTime) : '--' },
      ]
    }

    setList(nList)
  }

  /**
   * 初始化合约数据
   */
  const onInitContractData = () => {
    let nList: IListEnum[] = []

    if (RecordTransactionDetailsList.indexOf(typeInd) > -1) {
      // 强制平仓/强制减仓
      nList = [
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_qlxkmuwdvjiibzzhbgurg`,
          value: groupName,
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-8`,
          value: getTextFromStoreEnums(side, assetsEnums.financialRecordTypeCttSideList.enums),
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-7`,
          value: lever ? `${lever}X` : '--',
        },
        {
          label: t`features/trade/future/price-input-1`,
          value:
            entrustTypeInd === StopLimitEntrustTypeEnum.market ? (
              getStopLimitEntrustTypeName(entrustTypeInd)
            ) : (
              <IncreaseTag
                value={price || ''}
                hasPrefix={false}
                hasColor={false}
                right={` ${quoteCoinShortName || '--'}`}
              />
            ),
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-9`,
          value: getTextFromStoreEnums(orderTypeInd || '', assetsEnums.financialRecordTypeCttOrderList.enums),
        },
        {
          label: t`user.security_verification_status_05`,
          value: getTextFromStoreEnums(orderStatus || '', assetsEnums.financialRecordTypeEntrustStatusList.enums),
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-10`,
          value: (
            <IncreaseTag
              value={size || ''}
              hasPrefix={false}
              hasColor={false}
              right={` ${baseCoinShortName || '--'}`}
            />
          ),
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-11`,
          value: <IncreaseTag hasPrefix={false} value={tradeSize || ''} right={` ${baseCoinShortName || '--'}`} />,
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-1`,
          value: createdByTime ? formatDate(createdByTime) : '--',
        },
        {
          label: t`assets.financial-record.completionTime`,
          value: updatedByTime ? formatDate(updatedByTime) : '--',
        },
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_5101335`,
          value: <IncreaseTag hasPrefix={false} hasColor={false} value={tradePrice || ''} />,
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-12`,
          value: (
            <IncreaseTag
              hasPrefix={false}
              hasColor={false}
              value={realizedProfit || ''}
              right={` ${quoteCoinShortName}`}
            />
          ),
        },
      ]
    } else if (typeInd === AssetsRecordTypeEnum.migrate) {
      // 迁移
      nList = [
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_fayrrftmdxm7mm08lrsik`,
          value: groupName,
        },
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_ey9w7qbwvfb_bwxttl5mc`,
          value: toGroupName,
        },
        {
          label:
            migrateType === PerpetualMigrateTypeEnum.merge
              ? t`features_assets_financial_record_record_detail_record_details_info_index_zxhxrhymcnkpvw7lkjrdl`
              : t`features_assets_financial_record_record_detail_record_details_info_index_5101536`,
          value: `${migrateMargin || '--'} ${quoteCoinShortName}`,
        },
        {
          label: t`features/assets/financial-record/record-list/record-list-screen/index-1`,
          value: getTextFromStoreEnums(migrateType, assetsEnums.financialRecordTypePerpetualMigrateList.enums),
        },
        { label: t`assets.financial-record.creationTime`, value: createdByTime ? formatDate(createdByTime) : '--' },
        { label: t`assets.financial-record.completionTime`, value: updatedByTime ? formatDate(updatedByTime) : '--' },
      ]
    } else if (typeInd === AssetsRecordTypeEnum.futuresTransfer) {
      // 划转
      nList = [
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_fayrrftmdxm7mm08lrsik`,
          value: transferOut || t`features_trade_future_c2c_22225101593`,
        },
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_z4--vqe8gft0luh4ryq9k`,
          value: transferIn || t`features_trade_future_c2c_22225101593`,
        },
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_ex9bnddil91n3yjwfrkng`,
          value: getTextFromStoreEnums(operationType, assetsEnums.financialRecordTypeOperationList.enums),
        },
        { label: t`assets.financial-record.creationTime`, value: createdByTime ? formatDate(createdByTime) : '--' },
        { label: t`assets.financial-record.completionTime`, value: updatedByTime ? formatDate(updatedByTime) : '--' },
      ]
    } else if (RecordExpenseDetailsList.indexOf(typeInd) > -1) {
      // 资金费用/强平返还/强平手续费/开仓手续费/平仓手续费/平仓盈亏/锁仓手续费
      nList = [
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_qlxkmuwdvjiibzzhbgurg`,
          value: groupName,
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-6`,
          value: getTextFromStoreEnums(side, assetsEnums.financialRecordTypeCttPositionSideList.enums),
        },
        {
          label: t`features/assets/financial-record/record-detail/record-details-info/index-7`,
          value: lever ? `${lever}X` : '--',
        },
        { label: t`assets.financial-record.creationTime`, value: createdByTime ? formatDate(createdByTime) : '--' },
        { label: t`assets.financial-record.completionTime`, value: updatedByTime ? formatDate(updatedByTime) : '--' },
      ]
    } else if (typeInd === AssetsRecordTypeEnum.benefitsInjection) {
      //  穿仓保险金注入
      nList = [
        {
          label: t`features_assets_financial_record_record_detail_record_details_info_index_qlxkmuwdvjiibzzhbgurg`,
          value: groupName,
        },
        { label: t`assets.financial-record.creationTime`, value: createdByTime ? formatDate(createdByTime) : '--' },
        { label: t`assets.financial-record.completionTime`, value: updatedByTime ? formatDate(updatedByTime) : '--' },
      ]
    }

    setList(nList)
  }

  useEffect(() => {
    // 合约
    if (RecordFuturesTypeList.includes(typeInd)) {
      onInitContractData()
    }

    // 返佣
    if (RecordCommissionTypeList.includes(typeInd)) {
      onInitRebateData()
    }
  }, [typeInd, assetsEnums])

  /**
   * 充值/冲正/提币/pay/提币手续费
   */
  function RechargeInfo() {
    const [state, copyToClipboard] = useCopyToClipboard()

    /**
     * 复制
     */
    const copyToClipbordFn = val => {
      if (!val) {
        return
      }

      copyToClipboard(val)
      state.error ? Toast(t`assets.financial-record.copyFailure`) : Toast(t`assets.financial-record.copySuccess`)
    }

    return (
      <>
        {(typeInd === AssetsRecordTypeEnum.recharge ||
          typeInd === AssetsRecordTypeEnum.extract ||
          typeInd === AssetsRecordTypeEnum.extractCommission) && (
          <>
            {typeInd === AssetsRecordTypeEnum.recharge && channelInd === RecordDetailsChannelIdEnum.platformBlockchain && (
              <div className="detail-item">
                <div className="label">{t`features_assets_financial_record_record_detail_record_details_info_index_5101223`}</div>
                <div className="value">
                  <IncreaseTag value={fee} hasPrefix={false} hasColor={false} right={` ${feeCoinName || '--'}`} />
                </div>
              </div>
            )}
            <div className="detail-item">
              <div className="label">{t`assets.financial-record.transferNetwork`}</div>
              <div className="value">
                {typeInd === AssetsRecordTypeEnum.recharge || typeInd === AssetsRecordTypeEnum.extract
                  ? symbol
                  : mainnet}
              </div>
            </div>
            {typeInd !== AssetsRecordTypeEnum.recharge && (
              <div className="detail-item">
                <div className="label">{t`features_assets_financial_record_record_detail_record_details_info_index_510294`}</div>
                <div className="value">
                  <IncreaseTag value={fee} hasPrefix={false} hasColor={false} right={` ${feeCoinName || '--'}`} />
                </div>
              </div>
            )}
            <div className="detail-item">
              <div className="label">{t`assets.financial-record.blockNumber`}</div>
              <div className="value">
                {channelInd === RecordDetailsChannelIdEnum.platformBlockchain || !blockTotal || !txHash
                  ? '--'
                  : `${blockTotal} / ${confirmation}`}
              </div>
            </div>
            <div className="detail-item">
              <div className="label">
                {typeInd === AssetsRecordTypeEnum.recharge
                  ? t`features_assets_recharge_pay_address_index_510098`
                  : t`assets.withdraw.form.address.label`}
              </div>
              <div className="value">{address || '--'}</div>
              {address && <Icon name="copy" hasTheme onClick={() => copyToClipbordFn(address)} className="copy-icon" />}
            </div>
            <div className="detail-item">
              <div className="label">{t`assets.financial-record.tradeHash`}</div>
              <div className="value">{txHash || '--'}</div>
              {txHash && <Icon name="copy" hasTheme onClick={() => copyToClipbordFn(txHash)} className="copy-icon" />}
            </div>
          </>
        )}

        {typeInd === AssetsRecordTypeEnum.pay && (
          <div className="detail-item">
            <div className="label">
              {Number(amount) > 0 ? t`assets.financial-record.fromUID` : t`assets.financial-record.targetUID`}
            </div>
            <div className="value">{+amount > 0 ? fromUid || '--' : toUid || '--'}</div>
            <Icon
              name="copy"
              hasTheme
              onClick={() => copyToClipbordFn(+amount > 0 ? fromUid : toUid)}
              className="copy-icon"
            />
          </div>
        )}

        {typeInd === AssetsRecordTypeEnum.spotFuturesTransfer && (
          <>
            <div className="detail-item">
              <div className="label">{t`features_assets_financial_record_record_detail_record_details_info_index_fayrrftmdxm7mm08lrsik`}</div>
              <div className="value">{transferOut || t`features_trade_future_c2c_22225101593`}</div>
            </div>
            <div className="detail-item">
              <div className="label">{t`features_assets_financial_record_record_detail_record_details_info_index_z4--vqe8gft0luh4ryq9k`}</div>
              <div className="value">{transferIn || t`features_trade_future_c2c_22225101593`}</div>
            </div>
            <div className="detail-item">
              <div className="label">{t`features_assets_financial_record_record_detail_record_details_info_index_ex9bnddil91n3yjwfrkng`}</div>
              <div className="value">
                {getTextFromStoreEnums(operationType, assetsEnums.financialRecordTypeOperationList.enums)}
              </div>
            </div>
          </>
        )}

        <div className="detail-item">
          <div className="label">{t`assets.financial-record.creationTime`}</div>
          <div className="value">{createdByTime ? formatDate(createdByTime) : '--'}</div>
        </div>
        <div className="detail-item">
          <div className="label">{t`assets.financial-record.completionTime`}</div>
          <div className="value">{updatedByTime ? formatDate(updatedByTime) : '--'}</div>
        </div>
      </>
    )
  }

  /**
   * 现货手续费
   */
  function SpotFeeInfo() {
    return (
      <>
        <div className="detail-item">
          <div className="label">{t`future.funding-history.index-price.ingredient.column.pair`}</div>
          <div className="value">{symbol || '--'}</div>
        </div>
        <div className="detail-item">
          <div className="label">{t`features/assets/financial-record/record-detail/record-details-info/index-8`}</div>
          <div
            className="value"
            style={{ color: side === TradeDirectionEnum.buy ? 'var(--buy_up_color)' : 'var(--sell_down_color)' }}
          >
            {side === TradeDirectionEnum.buy
              ? t`features/market/detail/index-1`
              : t`features/market/detail/index-2` || '--'}
          </div>
        </div>
        <div className="detail-item">
          <div className="label">{t`features/assets/financial-record/record-detail/record-details-info/index-9`}</div>
          <div className="value">{getDelegationTypeName(orderType)}</div>
        </div>
        <div className="detail-item">
          <div className="label">{t`features_market_market_quatation_common_market_table_index_510104`}</div>
          <div className="value">
            <IncreaseTag value={amount} hasPrefix={false} hasColor={false} right={` ${businessCoin || '--'}`} />
          </div>
        </div>
        <div className="detail-item">
          <div className="label">{t`assets.financial-record.creationTime`}</div>
          <div className="value">{createdByTime ? formatDate(createdByTime) : '--'}</div>
        </div>
        <div className="detail-item">
          <div className="label">{t`assets.financial-record.completionTime`}</div>
          <div className="value">{updatedByTime ? formatDate(updatedByTime) : '--'}</div>
        </div>
      </>
    )
  }

  /**
   * 列表 item 渲染
   */
  const onRenderItem = () => {
    return (
      <>
        {list.map((item: IListEnum, index) => {
          return (
            <div className="details-item" key={index}>
              <span className="item-name">{item.label}</span>
              <span className="item-value">{item.value}</span>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className={styles.scoped}>
      {/* 充值/冲正/提币/pay || 提币手续费 */}
      {(RecordRechargeTypeList.indexOf(typeInd) > -1 ||
        typeInd === AssetsRecordTypeEnum.extractCommission ||
        typeInd === AssetsRecordTypeEnum.spotFuturesTransfer) && <RechargeInfo />}

      {/* 现货手续费 */}
      {typeInd === AssetsRecordTypeEnum.spotCommission && <SpotFeeInfo />}

      {RecordRechargeTypeList.indexOf(typeInd) === -1 &&
        typeInd !== AssetsRecordTypeEnum.extractCommission &&
        typeInd !== AssetsRecordTypeEnum.spotCommission &&
        onRenderItem()}

      {statusCd === FinancialRecordStateEnum.fail && (
        <div className="detail-item">
          <div className="label">{t`features_assets_financial_record_record_detail_record_details_info_index_510233`}</div>
          <div className="value">{reason}</div>
        </div>
      )}
    </div>
  )
}

export { RecordDetailsInfo }
