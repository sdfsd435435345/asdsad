/**
 * 资产总览 - 交易总览
 */
import { t } from '@lingui/macro'
import { Button } from 'react-vant'
import { CommonDigital } from '@/components/common-digital'
import { isString } from 'lodash'
import { useAssetsStore } from '@/store/assets/spot'
import { link } from '@/helper/link'
import { useCommonStore } from '@/store/common'
import WithdrawAction from '@/features/assets/common/withdraw-action'
import { getAssetsRechargePageRoutePath, getCapitalTransfer } from '@/helper/route'
import { rateFilter } from '@/helper/assets/spot'
import { ReactNode } from 'react'
import { TotalAssets } from '../../common/total-assets'
import styles from '../index.module.css'

type overviewInfoType = {
  title: string
  onClick: () => void
  content: ReactNode
  style: {
    [key: string]: any
  }
  className: string
}

function CoinOverview() {
  const { isFusionMode } = useCommonStore()
  const { encryption, coinAssets } = useAssetsStore().assetsModule
  const { totalAmount = '', availableAmount = '', lockAmount = '', symbol: assetsSymbol = '' } = coinAssets || {}

  const onSetAmount = (amount = '', symbol = '', unit = 'code') => {
    if (!amount || !symbol) return '--'

    return rateFilter({ amount, unit, symbol })
  }

  const overviewInfo = [
    {
      title: t`features/assets/common/total-assets/index-0`,
      value: onSetAmount(availableAmount, assetsSymbol),
    },
    {
      title: t`features_assets_common_total_assets_index_510299`,
      value: onSetAmount(lockAmount, assetsSymbol),
      class: 'ml-2',
    },
    {
      title: t`features/assets/common/total-assets/index-1`,
      // TODO: 昨日盈亏的值暂时写死
      //   value: (
      //     <div className="yesterday-cell">
      //       <span className="yesterday-cell-text">+￥88.66</span>
      //       <div className="yesterday-cell-tag">
      //         <Icon name="green_rise" className="yesterday-cell-tag-icon" />
      //         <span>0.06%</span>
      //       </div>
      //     </div>
      //   ),
      value: '--',
    },
  ]

  const transfer = {
    title: t`features_trade_leveraged_leveraged_trade_index_5101278`,
    onClick: () => link(getCapitalTransfer()),
    className: 'overview-gray-btn mr-4',
  }
  const withdraw = {
    title: t`assets.common.withdraw`,
    onClick: () => {},
    content: (
      <WithdrawAction>
        <Button className="overview-gray-btn" style={{ width: '100%' }}>
          {t`assets.common.withdraw`}
        </Button>
      </WithdrawAction>
    ),
  }
  const recharge = {
    title: t`assets.financial-record.tabs.Deposit`,
    onClick: () => link(getAssetsRechargePageRoutePath()),
    className: 'overview-primary-btn ml-4',
  }

  const operateInfo = isFusionMode
    ? ([withdraw, recharge] as overviewInfoType[])
    : ([transfer, withdraw, recharge] as overviewInfoType[])

  return (
    <div className={styles['assets-overview-root']}>
      <TotalAssets
        totalAmount={`≈${rateFilter({
          amount: totalAmount || '',
          showUnit: false,
          symbol: assetsSymbol || '',
          isFormat: true,
        })}`}
        totalAmountText={t`features_assets_overview_tabs_coin_overview_index_tbegkaconkz9pue76xfee`}
      />

      <div className="assets-overview-content">
        {overviewInfo.map((info, i: number) => {
          return (
            <div key={i} className={`assets-cell ${info?.class}`}>
              <span className="assets-cell-title">{info.title}</span>
              {isString(info.value) ? (
                <CommonDigital content={info.value || ''} isEncrypt className="assets-cell-value" />
              ) : encryption ? (
                '******'
              ) : (
                info.value
              )}
            </div>
          )
        })}
      </div>

      {!isFusionMode && (
        <div className="assets-overview-buttons">
          {operateInfo.map((operate, index) => {
            if (operate.content)
              return (
                <div key={index} style={{ width: isFusionMode ? '48%' : '30%' }}>
                  {operate.content}
                </div>
              )

            return (
              <Button className={operate.className} style={operate?.style} key={index} onClick={operate.onClick}>
                {operate.title}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}
export { CoinOverview }
