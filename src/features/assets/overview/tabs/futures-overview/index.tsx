/**
 * 资产总览 - 合约总览
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { SafeCalcUtil, formatCurrency } from '@/nbit/lib/decimal'
import { useAssetsStore } from '@/store/assets/spot'
import { useAssetsFuturesStore } from '@/store/assets/futures'
import { link } from '@/helper/link'
import { CommonDigital } from '@/components/common-digital'
import { isString } from 'lodash'
import { Button } from 'react-vant'
import { useHelpCenterUrl } from '@/hooks/use-help-center-url'
import { FutureHelpCenterEnum } from '@/constants/future/future-const'
import { IncreaseTag } from '@/nbit/react'
import { HintModal } from '@/features/assets/futures/common/hint-modal'
import { useState } from 'react'
import { TotalAssets } from '../../common/total-assets'
import styles from '../index.module.css'

function FuturesOverview() {
  const { futuresAssets, encryption } = useAssetsStore().assetsModule
  const {
    totalPerpetualAsset = '--',
    totalPositionAssets = '',
    totalMarginAvailable = '',
    totalUnrealizedProfit = '',
    totalMarginCoinAvailable = '',
    totalPositionCoinAsset = '',
    totalLockCoinAsset = '',
    totalLockMarginAsset = '',
    marginAmount = '',
    baseCoin = '--',
    isAutoAdd,
  } = futuresAssets || {}
  const { futuresCurrencySettings } = useAssetsFuturesStore()
  const extraMarginUrl = useHelpCenterUrl(FutureHelpCenterEnum.extraMargin)
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupProps, setPopupProps] = useState<any>({
    title: '',
    content: [],
  })

  const onSetAmount = (val: string) => {
    if (!val) return '--'
    return `${formatCurrency(val, futuresCurrencySettings.offset || 2)} ${baseCoin}`
  }

  const overviewInfo = [
    {
      title: t`features_assets_overview_tabs_futures_overview_index_6smbzvwja_urqpxiansft`,
      value: onSetAmount(totalMarginCoinAvailable),
      showHint: true,
      popupTitle: t`features_assets_overview_tabs_futures_overview_index_6smbzvwja_urqpxiansft`,
      popupContent: (
        <>
          <div>
            {t`features_assets_overview_tabs_futures_overview_index_nzhg964odaxu2ubzy6yuu`}
            {onSetAmount(totalMarginCoinAvailable)}
          </div>
          <div>
            {t`features_assets_overview_tabs_futures_overview_index_wfkv7f4h5gw9yfu_aai1i`}
            {onSetAmount(totalMarginAvailable)}
          </div>
        </>
      ),
    },
    {
      title: t`features_assets_overview_tabs_futures_overview_index_prpefec5tniqe5-enjxmb`,
      value: onSetAmount(totalPositionCoinAsset),
      class: `ml-2`,
      showHint: true,
      popupTitle: t`features_assets_overview_tabs_futures_overview_index_prpefec5tniqe5-enjxmb`,
      popupContent: (
        <>
          <div>
            {t`features_assets_overview_tabs_futures_overview_index_nzhg964odaxu2ubzy6yuu`}
            {onSetAmount(totalPositionCoinAsset)}
          </div>
          <div>
            {t`features_assets_overview_tabs_futures_overview_index_wfkv7f4h5gw9yfu_aai1i`}
            {onSetAmount(totalPositionAssets)}
          </div>
        </>
      ),
    },
    {
      title: t`features_assets_overview_tabs_futures_overview_index_zjwoechttcqcmln2a_fzn`,
      value: onSetAmount(totalLockMarginAsset),
      showHint: true,
      popupTitle: t`features_assets_overview_tabs_futures_overview_index_zjwoechttcqcmln2a_fzn`,
      popupContent: (
        <>
          <div>
            {t`features_assets_overview_tabs_futures_overview_index_nzhg964odaxu2ubzy6yuu`}
            {onSetAmount(totalLockMarginAsset)}
          </div>
          <div>
            {t`features_assets_overview_tabs_futures_overview_index_wfkv7f4h5gw9yfu_aai1i`}
            {onSetAmount(totalLockCoinAsset)}
          </div>
        </>
      ),
    },
    {
      title: t`features_orders_future_holding_index_603`,
      value: encryption ? (
        ''
      ) : (
        <div className="unrealized-text">
          <IncreaseTag
            value={totalUnrealizedProfit}
            digits={futuresCurrencySettings.offset || 2}
            right={` ${baseCoin}`}
          />
        </div>
      ),
      class: `ml-2`,
    },
    {
      title: (
        <span className="assets-cell-title">
          {t`features_assets_common_total_assets_index_5101398`}{' '}
          <Icon name="msg" hasTheme className="msg-icon" onClick={() => link(extraMarginUrl)} />
        </span>
      ),
      value: onSetAmount(marginAmount),
      class: `${!isAutoAdd && '!hidden'}`,
    },
  ]

  const operateInfo = [
    {
      title: t`features/assets/assets-layout-0`,
      onClick: () => link('/future/settings'),
      className: 'overview-gray-btn',
      isShow: true,
    },
    {
      title: t`features/assets/assets-layout-1`,
      onClick: () => link(`/future/settings/margin/auto-detail?autoRefresh='1'`),
      className: 'overview-gray-btn ml-4',
      isShow: isAutoAdd,
    },
  ]

  return (
    <>
      <div className={styles['assets-overview-root']}>
        <TotalAssets
          isShowFiatCurrency={false}
          totalAmount={`≈${onSetAmount(`${SafeCalcUtil.add(totalPerpetualAsset, totalUnrealizedProfit)}`)}`}
          totalAmountText={t`assets.index.overview.contract_assets`}
        />

        <div className="assets-overview-content">
          {overviewInfo.map((info, index: number) => {
            return (
              <div key={index} className={`assets-cell ${info?.class}`}>
                {isString(info.title) ? (
                  <div className="flex">
                    <span
                      className="assets-cell-title"
                      style={{ borderBottomWidth: info.showHint ? '1px' : '0px' }}
                      onClick={() => {
                        if (!info.showHint) return

                        setPopupProps({ title: info.popupTitle, content: info.popupContent })
                        setPopupVisible(true)
                      }}
                    >
                      {info.title}
                    </span>
                  </div>
                ) : (
                  info.title
                )}
                {isString(info.value) ? (
                  <CommonDigital content={info.value} isEncrypt className="assets-cell-value" />
                ) : (
                  info.value
                )}
              </div>
            )
          })}
        </div>

        <div className="assets-overview-buttons">
          {operateInfo.map((operate, index) => {
            if (!operate.isShow) return null
            return (
              <Button className={operate.className} key={index} onClick={operate.onClick}>
                {operate.title}
              </Button>
            )
          })}
        </div>
      </div>

      <HintModal
        visible={popupVisible}
        title={popupProps.title}
        content={popupProps.content}
        onCommit={() => setPopupVisible(false)}
        {...popupProps}
      />
    </>
  )
}

export { FuturesOverview }
