/**
 * c2c-发布广告单
 */
import { t } from '@lingui/macro'
import { Button, Input, Toast } from 'react-vant'
import NavBar from '@/components/navbar'
import { AdvertisingDirectionTypeEnum } from '@/constants/c2c/advertise'
import { defaultAdvertiseForm, useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { useEffect, useState } from 'react'
import { AssetsSelection } from '@/features/assets/common/assets-selection'
import { useMount, useUnmount, useUpdateEffect } from 'ahooks'
import { postCoinList } from '@/apis/c2c/common'
import { C2CAreaListResp, C2CCoinListResp, C2CMainTypeListResp } from '@/typings/api/c2c/common'
import { AreaTransactionTypeEnum, CoinTradingStatusTypeEnum } from '@/constants/c2c/common'
import { onSetPositionOffset } from '@/helper/assets/futures'
import { MainTypeMemoTypeEnum } from '@/constants/assets'
import { requestWithLoading } from '@/helper/order'
import { getMerchantInfo, getPaymentList, getReceiptList } from '@/apis/c2c/advertise'
import { rateFilterCoinQuantity } from '@/helper/assets/spot'
import { formatCurrency, removeDecimalZero } from '@/helper/decimal'
import { MainnetSelectionModal } from './mainnet-selection-modal'
import LatestPriceTable from './latest-price-table'
import { TradingAreaSelection } from '../../common/trading-area-selection'
import { PostAdvertiseConfirm } from './post-advertise-confirm'
import { MainnetForm } from './mainnet-form'
import { TradeForm } from './trade-form'
import styles from './index.module.css'
import { PriceNotify } from './price-notify'

function PostAdvertiseLayout() {
  const {
    advertiseForm,
    advertiseForm: {
      currency,
      coin,
      advertDirectCd,
      dealTypeCd,
      chainAddress,
      minAmount,
      maxAmount,
      price,
      quantity,
      isFirstError,
      priceVolatilityLow,
      priceVolatilityHigh,
      priceVolatilityEnabled,
    },
    postOptions,
    postOptions: {
      chainAddressList,
      coinList,
      merchantInfo: { merchantInfo },
    },
    updateAdvertiseForm,
    updatePostOptions,
    fetchAdvertiseEnums,
  } = useC2CAdvertiseStore()
  const [mainnetVisible, setMainnetVisible] = useState(false) // 是否展示主链选择弹窗
  const [tradingAreaVisible, setTradingAreaVisible] = useState(false) // 是否展示选择交易区
  const [coinVisible, setCoinVisible] = useState(false) // 是否展示币种选择
  const [postConfirmVisible, setPostConfirmVisible] = useState(false) // 是否展示发布广告单下一步
  useMount(fetchAdvertiseEnums)

  /**
   * 查询交易区下币种列表
   */
  const onLoadCoinList = async () => {
    updateAdvertiseForm({ coin: {} as C2CCoinListResp })
    const res = await requestWithLoading(
      postCoinList({
        areaIds: [currency?.legalCurrencyId],
      })
    )

    const { isOk, data } = res || {}
    if (!isOk || !data) {
      return
    }

    // TODO 返回数据应该是 list，待修改
    if (data && data.length > 0) {
      const newList = data.filter((item: C2CCoinListResp) => {
        return item.statusCd === CoinTradingStatusTypeEnum.enable
      })

      updatePostOptions({ coinList: newList })
    } else {
      updatePostOptions({ coinList: [] })
    }
  }

  /**
   * 查询交易区下收款方式列表（出售）
   */
  const onLoadReceiptList = async () => {
    const res = await getReceiptList({ legalCurrencyId: currency?.legalCurrencyId })

    const { isOk, data } = res || {}
    if (!isOk || !data) {
      return
    }

    if (data?.paymentList.length === 0) Toast.info(t`features_c2c_advertise_post_advertise_index_4rrjq_uqsvldipkpsla6m`)

    updatePostOptions({ receiptList: data?.paymentList })
  }

  /**
   * 查询交易区下支付方式列表（购买）
   */
  const onLoadPaymentList = async () => {
    const res = await getPaymentList({ legalCurrencyId: currency?.legalCurrencyId })

    const { isOk, data } = res || {}
    if (!isOk || !data) {
      return
    }

    updatePostOptions({ paymentList: data?.paymentList })
  }

  /**
   * 查询当前商家的状态
   */
  const onLoadMerchantInfo = async () => {
    const res = await getMerchantInfo({})
    const { isOk, data } = res || {}

    if (!isOk) {
      return
    }

    updatePostOptions({ merchantInfo: data })
  }

  /**
   * 校验单笔限额
   */
  const onCheckAmount = () => {
    if (+minAmount > +maxAmount || +minAmount < +coin?.minTransQuantity || +maxAmount > +coin?.maxTransQuantity)
      return false

    if (advertDirectCd === AdvertisingDirectionTypeEnum.sell) {
      if (dealTypeCd === AreaTransactionTypeEnum.inside && +maxAmount > +coin?.balance) return false

      if (
        dealTypeCd === AreaTransactionTypeEnum.outside &&
        +maxAmount >
          rateFilterCoinQuantity({
            amount: merchantInfo?.reputationVal || '',
            currencySymbol: 'USD',
            symbol: coin?.symbol,
          })
      )
        return false
    }

    return true
  }

  useEffect(() => {
    onLoadMerchantInfo()
  }, [])

  useUpdateEffect(() => {
    onLoadCoinList()
    onLoadReceiptList()
    onLoadPaymentList()

    if (currency?.defaultClientTypeCd !== AreaTransactionTypeEnum.all && currency?.defaultClientTypeCd !== dealTypeCd)
      updateAdvertiseForm({ dealTypeCd: '' })
  }, [currency])

  useUpdateEffect(() => {
    updateAdvertiseForm({
      ...advertiseForm,
      minAmount: '',
      maxAmount: '',
      price: '',
      chainAddress: [],
      showCoincidenceTable: false,
    })
  }, [coin])

  useUpdateEffect(() => {
    updateAdvertiseForm({ payments: [] })
  }, [advertDirectCd])

  useUpdateEffect(() => {
    updatePostOptions({ ...postOptions, coincidenceData: {} })
  }, [currency, coin, dealTypeCd, minAmount, maxAmount])

  const nextStep = () => {
    if (isFirstError) {
      return
    }
    if (
      priceVolatilityEnabled &&
      (Number(priceVolatilityLow) >= Number(price) || Number(priceVolatilityHigh) <= Number(price))
    ) {
      Toast.info(t`features_c2c_advertise_post_advertise_index_f3vbop7yz4`)
      return
    }
    setPostConfirmVisible(true)
  }

  useUpdateEffect(() => {
    if (
      !currency?.legalCurrencyId ||
      !coin?.id ||
      !dealTypeCd ||
      !minAmount ||
      !maxAmount ||
      !onCheckAmount() ||
      !price ||
      +price <= 0 ||
      (advertDirectCd === AdvertisingDirectionTypeEnum.buy && !quantity) ||
      (advertDirectCd === AdvertisingDirectionTypeEnum.buy && +quantity < +maxAmount) ||
      (priceVolatilityEnabled && !priceVolatilityLow && !priceVolatilityHigh)
    ) {
      updateAdvertiseForm({ isFirstError: true })
      return
    }

    if (dealTypeCd === AreaTransactionTypeEnum.outside) {
      if (chainAddress.length === 0) {
        updateAdvertiseForm({ isFirstError: true })
        return
      }

      if (advertDirectCd === AdvertisingDirectionTypeEnum.buy) {
        const chainAddressArr =
          chainAddress.filter((item: C2CMainTypeListResp) => {
            return !item?.address || item?.addressError || (item?.isUseMemo === MainTypeMemoTypeEnum.yes && !item?.memo)
          }) || ([] as C2CMainTypeListResp[])

        if (chainAddressArr.length > 0) {
          updateAdvertiseForm({ isFirstError: true })
          return
        }
      }
    }

    updateAdvertiseForm({ isFirstError: false })
  }, [advertiseForm])

  useUnmount(() => {
    updateAdvertiseForm(defaultAdvertiseForm)
    updatePostOptions({ coincidenceData: {} })
  })

  return (
    <div className={styles['post-advertise-root']}>
      <NavBar title={t`features_c2c_advertise_post_advertise_index_222222225101676`} />

      <div className="page-content">
        <TradeForm onSelectArea={() => setTradingAreaVisible(true)} onSelectCoin={() => setCoinVisible(true)} />

        <MainnetForm onSelect={() => setMainnetVisible(true)} />

        <div className="form-item">
          <span className="form-label">{t`features_c2c_advertise_post_advertise_index_222222225101686`}</span>
          <div className="amount">
            <div className="amount-item">
              <Input
                type="number"
                placeholder={coin?.minTransQuantity || ''}
                value={minAmount}
                onChange={(val: string) => {
                  updateAdvertiseForm({
                    minAmount: onSetPositionOffset(val.replace(/[^\d.]/g, ''), coin?.trade_precision),
                  })
                }}
                onBlur={() => {
                  if (minAmount && maxAmount && !onCheckAmount())
                    Toast.info(t`features_c2c_advertise_post_advertise_index_qqkzsjk-0qfexgoycvd6c`)
                }}
              />
              <span>{coin?.coinName}</span>
            </div>
            ~
            <div className="amount-item">
              <Input
                type="number"
                placeholder={coin?.maxTransQuantity || ''}
                value={maxAmount}
                onChange={(val: string) =>
                  updateAdvertiseForm({
                    maxAmount: onSetPositionOffset(val.replace(/[^\d.]/g, ''), coin?.trade_precision),
                  })
                }
                onBlur={() => {
                  if (minAmount && maxAmount && !onCheckAmount())
                    Toast.info(t`features_c2c_advertise_post_advertise_index_qqkzsjk-0qfexgoycvd6c`)
                }}
              />
              <span>{coin?.coinName}</span>
            </div>
          </div>
          {advertDirectCd === AdvertisingDirectionTypeEnum.sell && coin?.symbol && (
            <span className="amount-hint">
              {dealTypeCd === AreaTransactionTypeEnum.inside
                ? `${t`features_c2c_advertise_post_advertise_index_2222222225101689`} ${
                    removeDecimalZero(formatCurrency(coin?.balance, coin?.trade_precision)) || '0'
                  }${coin?.coinName || '--'}`
                : `${t`features_c2c_advertise_post_advertise_index_2222222225101690`} ${
                    merchantInfo?.reputationVal || 0
                  } USD`}
            </span>
          )}
        </div>

        {advertDirectCd === AdvertisingDirectionTypeEnum.buy && (
          <div className="form-item">
            <span className="form-label">{t`features_c2c_advertise_post_advertise_index_222222225101687`}</span>
            <div className="select-item">
              <Input
                type="number"
                placeholder={`${maxAmount || '1'} ${
                  coin?.coinName || '--'
                } ${t`features_c2c_advertise_post_advertise_index_pfwxolbhbvflzcuuduxwm`}`}
                value={quantity}
                onChange={(val: string) =>
                  updateAdvertiseForm({
                    quantity: onSetPositionOffset(val.replace(/[^\d.]/g, ''), coin?.trade_precision),
                  })
                }
                onBlur={() => {
                  if (advertDirectCd === AdvertisingDirectionTypeEnum.buy && +quantity < +maxAmount)
                    Toast.info(t`features_c2c_advertise_post_advertise_index_nnudeqwgn0iml7ku1aj5y`)
                }}
              />
              <span>{coin?.coinName}</span>
            </div>
          </div>
        )}

        <div className="form-item">
          <span className="form-label flex justify-between items-center !mb-4">
            <span>C2C {t`constants_trade_752`}</span>
            <span className="text-xs text-text_color_03">{t`features_c2c_advertise_post_advertise_index__trkccdbem`}</span>
          </span>
          <LatestPriceTable />
        </div>

        <div className="form-item mb-4">
          <span className="form-label">{t`features_c2c_advertise_post_advertise_index_222222225101688`}</span>
          <div className="rate">
            <span>1 {coin?.coinName || '--'} =</span>
            <Input
              type="number"
              placeholder={t`features_c2c_advertise_post_advertise_index_222222225101675`}
              value={price}
              className="rate-input"
              onChange={(val: string) =>
                updateAdvertiseForm({ price: onSetPositionOffset(val.replace(/[^\d.]/g, ''), currency?.precision) })
              }
            />
            <span>{currency?.currencyName || '--'}</span>
          </div>
        </div>
        {price && Number(price) > 0 && <PriceNotify />}
      </div>

      <div className="page-bottom">
        <Button className="next-button" type="primary" onClick={nextStep} disabled={isFirstError}>
          {t`user.field.reuse_23`}
        </Button>
      </div>

      {mainnetVisible && (
        <MainnetSelectionModal
          select={chainAddress}
          visible={mainnetVisible}
          onClose={() => setMainnetVisible(false)}
          onCommit={v => {
            setMainnetVisible(false)

            const newMainnet: any = []
            if (v.length > 0) {
              chainAddressList.forEach(item => {
                if (v.includes(item.id)) {
                  newMainnet.push({ ...item, name: item.mainType })
                }
              })
            }
            updateAdvertiseForm({ chainAddress: newMainnet })
          }}
        />
      )}

      {tradingAreaVisible && (
        <TradingAreaSelection
          id={currency?.legalCurrencyId}
          disabledKey="canPublishAdvert"
          returnAll={false}
          onCloseModal={() => setTradingAreaVisible(false)}
          onSelect={(e: C2CAreaListResp) => {
            setTradingAreaVisible(false)
            if (e?.legalCurrencyId === currency?.legalCurrencyId) {
              return
            }

            updateAdvertiseForm({
              ...defaultAdvertiseForm,
              currency: e,
              dealTypeCd:
                e?.defaultClientTypeCd === AreaTransactionTypeEnum.all
                  ? AreaTransactionTypeEnum.inside
                  : e?.defaultClientTypeCd,
            })
          }}
        />
      )}

      {coinVisible && (
        <AssetsSelection
          visible={coinVisible}
          showAll={false}
          coinId={coin?.id}
          title={t`features_trade_future_settings_margin_records_index_678`}
          searchHint={t`future.funding-history.search-future`}
          allList={coinList}
          onClose={() => setCoinVisible(false)}
          onSelect={e => {
            updateAdvertiseForm({ coin: e })
            setCoinVisible(false)
          }}
        />
      )}

      {postConfirmVisible && (
        <PostAdvertiseConfirm visible={postConfirmVisible} onClose={() => setPostConfirmVisible(false)} />
      )}
    </div>
  )
}

export { PostAdvertiseLayout }
