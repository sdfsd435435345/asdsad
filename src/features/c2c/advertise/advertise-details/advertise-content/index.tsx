/**
 * 广告单详情 - 广告内容
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { AdvertisingDirectionTypeEnum } from '@/constants/c2c/advertise'
import { dateFormatEnum } from '@/constants/dateFomat'
import { formatDate } from '@/helper/date'
import { formatCurrency } from '@/helper/decimal'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { AdvertiseMore } from '../advertise-more'
import styles from './index.module.css'
import { MainnetInfo } from '../../common/mainnet-info'
import { PaymentTypeInfo } from '../../common/payment-type-info'

interface IAdvertiseContentProps {
  isMore: boolean
  onChangeMore: (e: boolean) => void
}

function AdvertiseContent(props: IAdvertiseContentProps) {
  const { isMore, onChangeMore } = props || {}
  const {
    advertiseDetails: {
      coinName = '',
      advertDirectCd = '',
      minAmount = '--',
      maxAmount = '--',
      quantity = '--',
      createTime = '',
      removalTime = '',
      currencySymbol = '',
      price = '--',
      areaName = '--',
      mainchainAddrs = [],
      isOnShelves,
      buyRemaining = '--',
      newPayments = [],
    },
  } = useC2CAdvertiseStore()
  const color = advertDirectCd === AdvertisingDirectionTypeEnum.buy ? 'var(--gr-05)' : 'var(--rd-05)'

  const infoList = [
    {
      label: t({
        id: 'features_c2c_advertise_advertise_details_advertise_content_index_xpttqp-u2gwuib7aicpar',
        values: { 0: areaName },
      }),
      value: `${currencySymbol} ${formatCurrency(price)}`,
    },
    {
      label: t`features_trade_future_c2c_25101577`,
      value: `${formatCurrency(minAmount)} - ${formatCurrency(maxAmount)} ${coinName}`,
    },
    {
      label:
        advertDirectCd === AdvertisingDirectionTypeEnum.buy
          ? t`features_c2c_advertise_post_advertise_index_222222225101687`
          : t`features/trade/spot/price-input-0`,
      value: `${formatCurrency(quantity)} ${coinName}`,
      isHide: !isOnShelves,
    },
    {
      label: t`features_c2c_advertise_advertise_details_advertise_content_details_index_k-bpvvbjdpqf2hxg5ewpj`,
      value: `${formatCurrency(buyRemaining)} ${coinName}`,
      isHide: advertDirectCd !== AdvertisingDirectionTypeEnum.buy || !isOnShelves,
    },
    {
      label: t`features_c2c_advertise_advertise_history_history_list_index_otdc-vsfhwtkjtzw2nngm`,
      value: formatDate(createTime, dateFormatEnum.minuteSlash),
    },
    {
      label: t`features_c2c_advertise_advertise_history_history_list_index_t_vpbzahwz7jujwprbe1e`,
      value: formatDate(removalTime, dateFormatEnum.minuteSlash),
    },
  ]

  return (
    <>
      <div className={styles['advertise-content-root']}>
        <div className="header-item">
          <span className="title">{t`features_c2c_advertise_advertise_details_advertise_content_details_index_pyxp6uatqprvyj2vaebtr`}</span>
          <div className="more" onClick={() => onChangeMore(true)}>
            <span>{t`features_home_more_toolbar_header_toolbar_index_510105`}</span>

            <Icon name="next_arrow" className="more-icon" />
          </div>
        </div>

        <div className="coin-info">
          <div className="line" style={{ backgroundColor: color }} />
          <span style={{ color }}>
            {coinName}/{areaName}
          </span>
        </div>

        {infoList.map((infoItem, index: number) => {
          if (infoItem.isHide) return
          return (
            <div className="content-info" key={index}>
              <span className="info-label">{infoItem.label}</span>
              <span className="info-value">{infoItem.value}</span>
            </div>
          )
        })}

        <div className="bottom">
          <PaymentTypeInfo paymentClassName={'payment-type'} paymentList={newPayments} />

          <div className="bottom-main">
            <MainnetInfo list={mainchainAddrs} />
          </div>
        </div>
      </div>

      {isMore && <AdvertiseMore visible={isMore} onClose={() => onChangeMore(false)} />}
    </>
  )
}

export { AdvertiseContent }
