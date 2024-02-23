/**
 * 广告单详情 - 广告内容（详情）
 */
import { t } from '@lingui/macro'
import { Toast } from 'react-vant'
import { useCopyToClipboard } from 'react-use'
import Icon from '@/components/icon'
import {
  AdvertisingDirectionTypeEnum,
  getValidDaysTypeName,
  HistoryVersionTypeEnum,
  PaymentTypeEnum,
} from '@/constants/c2c/advertise'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { getTextFromStoreEnums } from '@/helper/store'
import { formatCurrency } from '@/helper/decimal'
import { formatDate } from '@/helper/date'
import { dateFormatEnum } from '@/constants/dateFomat'
import { IPaymentDetails } from '@/typings/api/c2c/advertise/post-advertise'
import { AreaTransactionTypeEnum } from '@/constants/c2c/common'
import { PaymentTypeInfo } from '../../common/payment-type-info'
import { MainnetInfo } from '../../common/mainnet-info'
import styles from './index.module.css'

function AdvertiseContentDetails() {
  const {
    advertiseEnums,
    advertiseDetails: {
      advertId = '',
      coinName = '',
      advertDirectCd = '',
      tradeTypeCd = '',
      minAmount = '--',
      maxAmount = '--',
      quantity = '--',
      createTime = '',
      removalTime = '',
      price = '--',
      validDate = '--',
      completedOrderCount = '--',
      mainchainAddrs = [],
      certificationLevelCd = '',
      paymentDetails = [],
      areaName = '--',
      buyRemaining,
      isOnShelves,
      newPayments,
    },
    advertiseHistory: { version },
  } = useC2CAdvertiseStore()
  const [state, copyToClipboard] = useCopyToClipboard()

  const isBuy = advertDirectCd === AdvertisingDirectionTypeEnum.buy
  const tradeList = [
    { label: t`features_trade_future_c2c_22222225101604`, value: areaName },
    { label: t`assets.layout.tabs.coins`, value: coinName },
    {
      label: t`features_c2c_advertise_post_advertise_index_222222225101683`,
      value: (
        <span style={{ color: isBuy ? 'var(--gr-05)' : 'var(--rd-05)' }}>
          {getTextFromStoreEnums(advertDirectCd, advertiseEnums.advertDirectEnum.enums)}
        </span>
      ),
    },
    {
      label: t`features_trade_future_c2c_22222225101605`,
      value: getTextFromStoreEnums(tradeTypeCd, advertiseEnums.detailAdvertDealTypeEnum.enums),
    },
    {
      label: t`features_c2c_advertise_advertise_history_history_list_index_otdc-vsfhwtkjtzw2nngm`,
      value: formatDate(createTime, dateFormatEnum.minuteSlash),
      isHide: version === HistoryVersionTypeEnum.normal,
    },
    {
      label: t`features_c2c_advertise_advertise_history_history_list_index_t_vpbzahwz7jujwprbe1e`,
      value: formatDate(removalTime, dateFormatEnum.minuteSlash),
      isHide: version === HistoryVersionTypeEnum.normal,
    },
  ]

  const quotaList = [
    {
      label: t`features_c2c_advertise_post_advertise_index_222222225101686`,
      value: `${formatCurrency(minAmount)} - ${formatCurrency(maxAmount)} ${coinName}`,
    },
    {
      label: isBuy
        ? t`features_c2c_advertise_post_advertise_index_222222225101687`
        : t`features/trade/spot/price-input-0`,
      value: `${formatCurrency(quantity)} ${coinName}`,
      isHide: !isBuy && !isOnShelves,
    },
    {
      label: t`features_c2c_advertise_advertise_details_advertise_content_details_index_k-bpvvbjdpqf2hxg5ewpj`,
      value: `${formatCurrency(buyRemaining)} ${coinName}`,
      isHide: !isBuy || !isOnShelves,
    },
    {
      label: t`features_c2c_advertise_post_advertise_index_222222225101688`,
      value: `${formatCurrency(price)} ${areaName}`,
    },
    {
      label: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_jomtvodwq7p3aehfiu6-4`,
      value: getValidDaysTypeName(validDate),
    },
    {
      label: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_zqnjxev750jsaafwbnm8o`,
      value: formatCurrency(completedOrderCount),
    },
  ]

  const onCopy = (val: string) => {
    copyToClipboard(val)
    state.error ? Toast(t`assets.financial-record.copyFailure`) : Toast(t`user.secret_key_01`)
  }

  return (
    <div className={styles['advertise-content-details-root']}>
      <div className="header">
        <span className="header-title">{t`features_c2c_advertise_advertise_details_advertise_content_details_index_pyxp6uatqprvyj2vaebtr`}</span>

        <div className="header-copy">
          <span>
            {t`features_c2c_advertise_advertise_details_advertise_content_details_index_fegs-2nr6bnk8ge6njsje`}{' '}
            {advertId || '--'}
          </span>
          <Icon name="copy" hasTheme className="copy-icon" onClick={() => onCopy(advertId)} />
        </div>
      </div>

      <div className="info-list">
        {tradeList &&
          tradeList.map((tradeItem, index: number) => {
            if (tradeItem?.isHide) return
            return (
              <div className="info-item" key={index}>
                <span className="info-label">{tradeItem.label}</span>
                <span className="info-value">{tradeItem.value}</span>
              </div>
            )
          })}
      </div>

      {tradeTypeCd === AreaTransactionTypeEnum.outside && (
        <div className="mainnet-list">
          <div className="info-item">
            <span className="info-label">{t`features_c2c_trade_trade_form_22225101640`}</span>
            <MainnetInfo list={mainchainAddrs} />
          </div>

          {advertDirectCd === AdvertisingDirectionTypeEnum.buy &&
            mainchainAddrs &&
            mainchainAddrs.map((mainnetItem, index: number) => {
              return (
                <div className="" key={index}>
                  <div className="info-item" key={index}>
                    <span className="info-label">
                      {t({
                        id: 'features_c2c_advertise_advertise_details_advertise_content_details_index_whv_fezm0m1lidfwboqp8',
                        values: { 0: mainnetItem?.name },
                      })}
                    </span>
                    <span className="info-value">
                      {mainnetItem?.address ? mainnetItem?.address.replace(/(.{3}).*(.{4})/, '$1....$2') : '--'}
                    </span>
                  </div>

                  {mainnetItem?.memo && (
                    <div className="info-item" key={index}>
                      <span className="info-label">
                        {t({
                          id: 'features_c2c_advertise_advertise_details_advertise_content_details_index_zhb5xyotlhqks-zjeeyf0',
                          values: { 0: mainnetItem?.name },
                        })}
                        Memo
                      </span>
                      <span className="info-value">{mainnetItem?.memo}</span>
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      )}

      <div className="info-list">
        {quotaList.map((tradeItem, index: number) => {
          if (tradeItem?.isHide) return

          return (
            <div className="info-item" key={index}>
              <span className="info-label">{tradeItem.label}</span>
              <span className="info-value">{tradeItem.value}</span>
            </div>
          )
        })}
      </div>

      <div className="info-list !border-b-0">
        <div className="info-item">
          <span className="info-label">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_xfepqthhaq85sypne38uh`}</span>
          <span className="info-value">
            {getTextFromStoreEnums(certificationLevelCd, advertiseEnums.certificationLevelEnum.enums)}
          </span>
        </div>

        <div className="info-item">
          <span className="info-label">
            {advertDirectCd === AdvertisingDirectionTypeEnum.buy
              ? t`features_c2c_trade_filters_225101634`
              : t`features_c2c_advertise_post_advertise_payment_form_index_njsea2zvnnjsyzm1ctsum`}
          </span>
          <PaymentTypeInfo paymentClassName={'payment-text'} paymentList={newPayments} />
        </div>

        {advertDirectCd === AdvertisingDirectionTypeEnum.sell &&
          paymentDetails.length > 0 &&
          paymentDetails.map((paymentItem: IPaymentDetails, index: number) => {
            return (
              <div className="info-item" key={index}>
                <span className="info-label">
                  {getTextFromStoreEnums(paymentItem?.paymentTypeCd, advertiseEnums.paymentTypeEnum.enums)}
                </span>
                <div className={`info-payment ${paymentItem?.grey && 'info-value-grey'}`}>
                  {paymentItem?.bankOfDeposit && <span className="payment-bank">{paymentItem?.bankOfDeposit}</span>}
                  <span className="payment-details">{paymentItem?.account || paymentItem?.paymentDetails}</span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export { AdvertiseContentDetails }
