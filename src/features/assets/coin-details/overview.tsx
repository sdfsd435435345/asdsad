/**
 * 资产-币种详情-总览/底部按钮
 */
import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { Button, Popup } from 'react-vant'
import { useAssetsStore } from '@/store/assets/spot'
import { formatCoinAmount, rateFilter } from '@/helper/assets/spot'
import { link } from '@/helper/link'
import { AssetsCoinDetailResp } from '@/typings/api/assets/assets'
import { CommonDigital } from '@/components/common-digital'
import WithdrawAction from '../common/withdraw-action'

import styles from './coin-details.module.css'

export function CoinOverview({ details }: { details: AssetsCoinDetailResp }) {
  const { updateEncryption } = useAssetsStore().assetsModule
  const { assetsModule } = useAssetsStore()
  const { encryption } = assetsModule
  const [lockVisible, setLockVisible] = useState(false)

  useEffect(() => {}, [assetsModule])

  // 根据币种精度换算数量
  const onGetAmount = amount => {
    if (!amount) {
      return '--'
    }
    return formatCoinAmount(details?.symbol, amount)
  }

  // 冻结资产展示 popup 组件
  function LockPopup() {
    return (
      <Popup className={styles['lock-popup-wrapper']} visible={lockVisible} onClose={() => setLockVisible(false)}>
        <h3 className="title">{t`features_assets_common_total_assets_index_510299`}</h3>
        <div className="lock-text">{t`features_assets_coin_details_overview_5101094`}</div>
        {/* <div className="lock-text">
          1.{t`assets.layout.tabs.leverage`} - {t`features_assets_coin_details_overview_5101316`}
        </div> */}
        <div className="lock-text">1. {t`features_assets_coin_details_overview_5101097`}</div>
        <div className="lock-text">2. {t`features_assets_coin_details_overview_spp9keuxkj`}</div>
        <Button type="primary" className="lock-btn" onClick={() => setLockVisible(false)}>
          {t`features_trade_common_notification_index_5101066`}
        </Button>
      </Popup>
    )
  }

  return (
    <div className={styles['overview-wrapper']}>
      <LockPopup />

      <div className="coin-overview">
        <div className="total-content">
          <div className="total-header">
            <span>{t`features_assets_coin_details_overview_510153`}</span>
            <Icon
              name={encryption ? 'eyes_close' : 'eyes_open'}
              hasTheme
              className="total-icon"
              onClick={() => updateEncryption(!encryption)}
            />
          </div>

          <CommonDigital content={onGetAmount(details.totalAmount)} isEncrypt className="total-quantity" />
          <CommonDigital
            content={`≈${rateFilter({
              amount: details.totalAmount || '0',
              symbol: details.symbol || '',
            })}`}
            isEncrypt
            className="total-amount"
          />
        </div>
        <div className="flex">
          <div className="asset-item">
            <span className="label">{t`assets.common.available_count`}</span>
            <CommonDigital content={onGetAmount(details.availableAmount)} isEncrypt className="value" />
          </div>

          <div className="asset-item ml-10">
            <div className="lock-header">
              <span className="label">{t`features_assets_common_total_assets_index_510299`}</span>
              <Icon name="msg" hasTheme className="hit-icon" onClick={() => setLockVisible(true)} />
            </div>
            <CommonDigital content={onGetAmount(details.lockAmount)} isEncrypt className="value" />
          </div>
        </div>
      </div>
    </div>
  )
}
// TODO: 和首页按钮融合
export function CoinActions({ coinId = '', symbol }: { coinId: string; symbol: string }) {
  return (
    <div className={styles['details-buttons']}>
      <WithdrawAction coinId={coinId} symbol={symbol}>
        <Button>{t`assets.withdraw.title`}</Button>
      </WithdrawAction>
      <div className="w-4" />
      <div className="flex-1">
        <Button
          className="recharge-btn"
          type="primary"
          onClick={() => {
            link(`/assets/recharge?id=${coinId}`)
          }}
        >
          {t`assets.common.deposit`}
        </Button>
      </div>
    </div>
  )
}
