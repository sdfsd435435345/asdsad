import { CommonDigital } from '@/components/common-digital'
import Icon from '@/components/icon'
import { rateFilterFutures } from '@/helper/assets/spot'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { t } from '@lingui/macro'
import { Button, Popover, PopoverInstance } from 'react-vant'
import { useEffect, useRef } from 'react'
import { link } from '@/helper/link'
import { useUserStore } from '@/store/user'
import { getAssetsOverview } from '@/apis/assets/common'
import { getAssetsRechargePageRoutePath } from '@/helper/route'
import styles from './index.module.css'

function UserTotalAsset() {
  const { encryption, updateEncryption, assetsData, updateAssetsModule } = useAssetsStore().assetsModule
  const { totalAmount = '', symbol = '' } = assetsData || {}
  const { fiatCurrencyData, updateFiatCurrencyData } = usePersonalCenterStore()
  const popover = useRef<PopoverInstance>(null)
  const { isLogin } = useUserStore()

  const onLoadAssets = async () => {
    const res = await getAssetsOverview({})
    const { isOk, data } = res || {}
    if (!isOk || !data) {
      return
    }

    updateAssetsModule({ assetsData: data })
  }

  useEffect(() => {
    isLogin && onLoadAssets()
  }, [isLogin])

  if (!isLogin) return <></>

  return (
    <div className={styles.scoped}>
      <div>
        <div>
          <span className="text-xs font-normal">
            <span>{t`features_home_components_user_total_asset_index_cd2wna1g2x`}</span>
            <span className="total-unit text-xs font-normal">({fiatCurrencyData?.currencyEnName})</span>
          </span>
          <Popover
            ref={popover}
            placement="bottom-end"
            className={styles['total-unit-popover-root']}
            reference={encryption ? '' : <Icon name="regsiter_icon_drop" hasTheme className="dropdown-menu-icon" />}
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
        </div>
        <div className="flex flex-row items-center">
          <CommonDigital
            content={rateFilterFutures({
              amount: totalAmount,
              showUnit: false,
              isFormat: true,
              symbol,
            })}
            isEncrypt
            className="total-num"
          />
          <Icon
            name={encryption ? 'eyes_close' : 'eyes_open'}
            hasTheme
            className="encrypt-icon"
            onClick={() => {
              updateEncryption(!encryption)
            }}
          />
        </div>
      </div>
      <Button
        type="primary"
        onClick={() => link(getAssetsRechargePageRoutePath())}
        className="total-asset-button"
        text={t`assets.financial-record.tabs.Deposit`}
      />
    </div>
  )
}

export default UserTotalAsset
