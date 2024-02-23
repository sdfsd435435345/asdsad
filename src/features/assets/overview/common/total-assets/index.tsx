/**
 * 资产总览 - 资产总额
 */
import { t } from '@lingui/macro'
import { useRef } from 'react'
import { Popover, PopoverInstance } from 'react-vant'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { getAssetsHistoryPageRoutePath } from '@/helper/route'
import { CommonDigital } from '@/components/common-digital'
import styles from './index.module.css'

interface ITotalAssetsProps {
  /** 是否展示法币选择组件 */
  isShowFiatCurrency?: boolean
  /** 总资产 */
  totalAmount?: string
  /** 总资产文案 */
  totalAmountText?: string
}

function TotalAssets(props: ITotalAssetsProps) {
  const popover = useRef<PopoverInstance>(null)
  const {
    isShowFiatCurrency = true,
    totalAmount = '0.00',
    totalAmountText = t`features/assets/assets-layout-2`,
  } = props || {}

  const { activeTab, encryption, updateEncryption } = { ...useAssetsStore().assetsModule }
  const { fiatCurrencyData, updateFiatCurrencyData } = usePersonalCenterStore()

  return (
    <div className={styles['total-assets-root']}>
      <div className="total-header">
        <div className="total-header-left">
          <span>{totalAmountText}</span>
          <Icon
            name={encryption ? 'eyes_close' : 'eyes_open'}
            hasTheme
            className="total-icon"
            onClick={() => {
              updateEncryption(!encryption)
            }}
          />
        </div>

        <Icon
          hasTheme
          name="asset_record"
          className="total-icon"
          onClick={() => link(getAssetsHistoryPageRoutePath(activeTab))}
        />
      </div>

      <CommonDigital content={totalAmount} isEncrypt className="total-num">
        {isShowFiatCurrency && (
          <Popover
            ref={popover}
            placement="bottom-end"
            className={styles['total-unit-popover-root']}
            reference={
              encryption ? (
                ''
              ) : (
                <div className="total-popover">
                  <span className="total-unit">{fiatCurrencyData?.currencyEnName}</span>
                  <Icon name="regsiter_icon_drop" hasTheme className="dropdown-menu-icon" />
                </div>
              )
            }
          >
            <div className="unit-popover-content">
              {fiatCurrencyData?.currencyList &&
                fiatCurrencyData?.currencyList.map(item => {
                  return (
                    <div
                      key={item.id}
                      className={`unit-popover-item ${
                        fiatCurrencyData.currencySymbol === item.currencySymbol && 'unit-popover-item-active'
                      }`}
                      onClick={() => {
                        updateFiatCurrencyData('currencySymbol', item.currencySymbol)
                        popover.current?.hide()
                      }}
                    >
                      {item.currencyEnName}
                    </div>
                  )
                })}

              {fiatCurrencyData?.currencyList.length > 3 && (
                <div className="unit-popover-more" onClick={() => link('/personal-center/settings/converted-currency')}>
                  <span>{t`features_home_more_toolbar_header_toolbar_index_510105`}</span>
                  <Icon className="more-icon" name="regsiter_icon_drop" hasTheme />
                </div>
              )}
            </div>
          </Popover>
        )}
      </CommonDigital>
    </div>
  )
}

export { TotalAssets }
