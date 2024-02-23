/**
 * 资产总览-C2C 总览
 */
import { t } from '@lingui/macro'
import { rateFilter } from '@/helper/assets/spot'
import { useAssetsStore } from '@/store/assets/spot'
import { CommonDigital } from '@/components/common-digital'
import { Button } from 'react-vant'
import { link } from '@/helper/link'
import { getC2cFastTradePageRoutePath, getCapitalTransfer } from '@/helper/route'
import { TotalAssets } from '../../common/total-assets'
import styles from '../index.module.css'

function C2COverview() {
  const { assetsData } = useAssetsStore().assetsModule
  const {
    totalAmount = '--',
    availableAmount = '--',
    lockAmount = '--',
    symbol = '--',
  } = assetsData.c2cAssetsData || {}

  const onSetAmount = (amount = '', unit = 'code') => {
    if (!amount || !symbol) return '--'

    return rateFilter({ amount, unit, symbol })
  }

  const overviewInfo = [
    {
      title: t`features/assets/common/total-assets/index-0`,
      value: onSetAmount(availableAmount) || '',
    },
    {
      title: t`features_assets_common_total_assets_index_510299`,
      value: onSetAmount(lockAmount) || '',
      class: 'ml-2',
    },
  ]

  const operateInfo = [
    {
      title: t`features_trade_leveraged_leveraged_trade_index_5101278`,
      onClick: () => link(getCapitalTransfer('1')),
      className: 'overview-gray-btn',
    },
    {
      title: t`features_assets_overview_c2c_overview_knro0veozagstcy9ungh3`,
      isShow: true,
      onClick: () => link(getC2cFastTradePageRoutePath()),
      className: 'overview-primary-btn ml-4',
    },
  ]

  return (
    <div className={styles['assets-overview-root']}>
      <TotalAssets
        totalAmount={`≈${rateFilter({ amount: totalAmount, showUnit: false, symbol, isFormat: true }) || '--'}`}
        totalAmountText={t`features_assets_overview_tabs_c2c_overview_index_nyfvfmshpdgkj9fa95jic`}
      />

      <div className="assets-overview-content">
        {overviewInfo.map((info, index: number) => {
          return (
            <div key={index} className={`assets-cell ${info?.class}`}>
              <span className="assets-cell-title">{info.title}</span>
              <CommonDigital content={info.value} isEncrypt className="assets-cell-value" />
            </div>
          )
        })}
      </div>

      <div className="assets-overview-buttons">
        {operateInfo.map((operate, index) => {
          return (
            <Button className={operate.className} key={index} onClick={operate.onClick}>
              {operate.title}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export { C2COverview }
