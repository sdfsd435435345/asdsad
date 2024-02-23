/**
 * 资产总览 - 资产总览
 */
import { t } from '@lingui/macro'
import { Button } from 'react-vant'
import { CommonDigital } from '@/components/common-digital'
import { isString } from 'lodash'
import { useAssetsStore } from '@/store/assets/spot'
import { link } from '@/helper/link'
import WithdrawAction from '@/features/assets/common/withdraw-action'
import { getAssetsRechargePageRoutePath } from '@/helper/route'
import { rateFilterFutures } from '@/helper/assets/spot'
import { useCommonStore } from '@/store/common'
import { TotalAssets } from '../../common/total-assets'
import styles from '../index.module.css'

function AssetsOverview() {
  const { encryption, assetsData } = useAssetsStore().assetsModule
  const { totalAmount = '', availableAmount = '', lockAmount = '', positionAmount = '', symbol = '' } = assetsData || {}
  const { isFusionMode } = useCommonStore()

  const onSetAmount = (amount = '', unit = 'code') => {
    if (!amount) return '--'

    return rateFilterFutures({ amount, unit })
  }

  const overviewInfo = [
    {
      title: t`features/assets/common/total-assets/index-0`,
      value: onSetAmount(availableAmount),
    },
    {
      title: t`features_assets_common_total_assets_index_510299`,
      value: onSetAmount(lockAmount),
      class: 'ml-2',
    },
    {
      title: t`assets.common.position_assets`,
      value: onSetAmount(positionAmount),
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
      class: 'ml-2',
    },
  ]

  const operateInfo = [
    {
      title: t`assets.common.withdraw`,
      onClick: () => {},
      content: (
        <WithdrawAction>
          <Button className="overview-gray-btn" style={{ width: '100%' }}>
            {t`assets.common.withdraw`}
          </Button>
        </WithdrawAction>
      ),
    },
    {
      title: t`assets.financial-record.tabs.Deposit`,
      onClick: () => link(getAssetsRechargePageRoutePath()),
      className: 'overview-primary-btn ml-4',
    },
  ]

  return (
    <div className={styles['assets-overview-root']}>
      <TotalAssets
        totalAmount={`≈${rateFilterFutures({
          amount: totalAmount,
          showUnit: false,
          isFormat: true,
          symbol,
        })}`}
        totalAmountText={t`features/assets/assets-layout-2`}
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
                <div key={index} style={{ width: '48%' }}>
                  {operate.content}
                </div>
              )

            return (
              <Button className={operate.className} key={index} onClick={operate.onClick}>
                {operate.title}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}
export { AssetsOverview }
