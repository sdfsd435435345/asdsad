/**
 * 发布广告单-交易区/广告方向/交易类型
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { Radio, Toast, Image } from 'react-vant'
import {
  AdvertisingDirectionTypeEnum,
  CurrencyCanOutTradeEnum,
  MerchantCanOutTradeEnum,
} from '@/constants/c2c/advertise'
import { AreaTransactionTypeEnum, C2CMerchantStatusTypeEnum } from '@/constants/c2c/common'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { useUpdateEffect } from 'ahooks'

interface TradeFormProps {
  onSelectArea: () => void
  onSelectCoin: () => void
}

function TradeForm(props: TradeFormProps) {
  const { onSelectArea, onSelectCoin } = props || {}
  const {
    advertiseForm: { currency, coin, advertDirectCd, dealTypeCd },
    postOptions: {
      merchantInfo: { merchantInfo, status },
    },
    updateAdvertiseForm,
  } = useC2CAdvertiseStore()

  const onRenderRadio = (type: string, id: string, title: string, disabled = false) => {
    return (
      <Radio
        disabled={disabled}
        name={id}
        iconRender={() => {
          return (
            <Icon
              className="radio-icon"
              name={type === id ? 'login_agreement_selected' : 'login_agreement_unselected'}
            />
          )
        }}
      >
        {title}
      </Radio>
    )
  }

  useUpdateEffect(() => {}, [status])

  return (
    <>
      <div className="form-item">
        <span className="form-label">{t`future.funding-history.index-price.ingredient.column.pair`}</span>
        <div className="trading-pair">
          <div className="trade-item" onClick={onSelectArea}>
            {currency && currency?.legalCurrencyId ? (
              <div className="trade-info">
                <Image
                  src={`${oss_area_code_image_domain_address}${currency?.countryAbbreviation}.png`}
                  width={20}
                  height={20}
                  round
                />
                <span>{currency.currencyName}</span>
              </div>
            ) : (
              <span className="trade-placeholder">{t`features_c2c_advertise_post_advertise_index_222222225101682`}</span>
            )}

            <Icon name="regsiter_icon_drop" hasTheme className="drop-icon" />
          </div>

          <div
            className="trade-item"
            onClick={() => {
              if (!currency?.legalCurrencyId) {
                Toast.info(t`features_c2c_advertise_post_advertise_index_222222225101677`)
                return
              }

              onSelectCoin()
            }}
          >
            {coin?.id ? (
              <div className="trade-info">
                <Image src={coin?.appLogo} width={20} height={20} round />
                <span>{coin?.coinName}</span>
              </div>
            ) : (
              <span className="trade-placeholder">{t`assets.layout.tabs.coins`}</span>
            )}

            <Icon name="regsiter_icon_drop" hasTheme className="drop-icon" />
          </div>
        </div>
      </div>

      <div className="form-item">
        <span className="form-label">{t`features_c2c_advertise_post_advertise_index_222222225101683`}</span>
        <Radio.Group
          defaultValue={advertDirectCd}
          direction="horizontal"
          onChange={(name: string) => updateAdvertiseForm({ advertDirectCd: name })}
        >
          {onRenderRadio(
            advertDirectCd,
            AdvertisingDirectionTypeEnum.sell,
            t`constants_c2c_common_eymujozkjshqnbz2oe1s7`
          )}
          {onRenderRadio(
            advertDirectCd,
            AdvertisingDirectionTypeEnum.buy,
            t`constants_c2c_common_klbatexmpyxqjfja8c2a-`
          )}
        </Radio.Group>
      </div>

      <div className="form-item">
        <span className="form-label">{t`features_c2c_trade_filters_225101627`}</span>
        <Radio.Group
          defaultValue={dealTypeCd}
          direction="horizontal"
          onChange={(name: string) => updateAdvertiseForm({ dealTypeCd: name })}
        >
          {onRenderRadio(dealTypeCd, AreaTransactionTypeEnum.inside, t`features_c2c_trade_filters_225101628`)}
          {onRenderRadio(
            dealTypeCd,
            AreaTransactionTypeEnum.outside,
            t`features_c2c_trade_filters_225101629`,
            status !== C2CMerchantStatusTypeEnum.enable ||
              currency?.canOutTrade === CurrencyCanOutTradeEnum.no ||
              !merchantInfo?.canOutTrade ||
              merchantInfo?.canOutTrade === MerchantCanOutTradeEnum.no
          )}
        </Radio.Group>
      </div>
    </>
  )
}

export { TradeForm }
