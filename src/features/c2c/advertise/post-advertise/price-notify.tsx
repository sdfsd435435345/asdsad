import Icon from '@/components/icon'
import Slider from '@/components/slider'
import PriceInput from '@/features/trade/common/price-input'
import UnderlineTip from '@/features/trade/common/underline-tip'
import { formatNumberDecimalWhenExceed } from '@/helper/decimal'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { t } from '@lingui/macro'
import { decimalUtils } from '@/nbit'
import { Switch, Toast } from 'react-vant'
import { useUnmount, useUpdateEffect } from 'ahooks'
import { useEffect } from 'react'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

export function PriceNotify() {
  const {
    advertiseForm: {
      price,
      currency,
      priceVolatilityEnabled,
      priceVolatilityHigh,
      priceVolatilityLow,
      priceVolatilityPercent,
    },
    updateAdvertiseForm,
  } = useC2CAdvertiseStore()

  const onPriceVolatilityHighChange = (value: string) => {
    updateAdvertiseForm({
      priceVolatilityHigh: value,
    })
  }
  const onPriceVolatilityLowChange = (value: string) => {
    updateAdvertiseForm({
      priceVolatilityLow: value,
    })
  }
  // 没有的话取 0，而不是 2
  const digit = currency?.precision || 0
  function getTargetPrice(percent: number) {
    const realPercent = SafeCalcUtil.mul(20, percent).div(10000)

    return {
      priceVolatilityLow: formatNumberDecimalWhenExceed(
        SafeCalcUtil.mul(price, SafeCalcUtil.sub(1, realPercent)),
        digit
      ),
      priceVolatilityHigh: formatNumberDecimalWhenExceed(
        SafeCalcUtil.mul(price, SafeCalcUtil.add(1, realPercent)),
        digit
      ),
    }
  }

  const onPriceVolatilityPercentChange = (value: number) => {
    updateAdvertiseForm({
      priceVolatilityPercent: value,
      ...getTargetPrice(value),
    })
  }

  const onPriceVolatilityEnabledChange = (checked: boolean) => {
    if (checked) {
      updateAdvertiseForm({
        priceVolatilityEnabled: checked,
        priceVolatilityPercent: 25,
        ...getTargetPrice(25),
      })
    } else {
      updateAdvertiseForm({
        priceVolatilityEnabled: checked,
        priceVolatilityPercent: 0,
        priceVolatilityLow: '',
        priceVolatilityHigh: '',
      })
    }
  }
  const sliderPoints = [
    {
      value: 0,
      text: '0',
    },
    {
      value: 25,
      text: '±5%',
    },
    {
      value: 50,
      text: '±10%',
    },
    {
      value: 75,
      text: '±15%',
    },
    {
      value: 100,
      text: '±20%',
    },
  ]

  useUpdateEffect(() => {
    if (!priceVolatilityEnabled) {
      return
    }
    // 价格为空，关掉展示
    // 价格变动，重新计算
    updateAdvertiseForm({
      ...(Number(price) > 0
        ? {}
        : {
            priceVolatilityEnabled: false,
          }),
      ...(priceVolatilityPercent > 0 && priceVolatilityEnabled ? getTargetPrice(Number(price || 0)) : {}),
    })
  }, [price])
  // price 删除的时候组件就没了
  useUnmount(() => {
    updateAdvertiseForm({
      priceVolatilityEnabled: false,
      priceVolatilityLow: '',
      priceVolatilityHigh: '',
      priceVolatilityPercent: 0,
    })
  })

  return (
    <div className="text-sm text-leading-1-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <span className="mr-1">{t`features_c2c_advertise_post_advertise_price_notify_rxutr0ymlj`}</span>
          <UnderlineTip
            title={t`features_c2c_advertise_post_advertise_price_notify_2lksd2jisp`}
            popup={t`features_c2c_advertise_post_advertise_price_notify_s6mrt_6x1y`}
          >
            <Icon name="msg" hasTheme className="text-xs" />
          </UnderlineTip>
        </div>
        <Switch size="24" onChange={onPriceVolatilityEnabledChange} checked={priceVolatilityEnabled} />
      </div>
      <div className="mb-8">
        <Slider
          disabled={!priceVolatilityEnabled}
          value={priceVolatilityPercent}
          onChange={onPriceVolatilityPercentChange}
          points={sliderPoints}
        />
      </div>
      <div className="flex mb-2">
        <PriceInput
          onlyInput
          className="flex-1 mr-4"
          value={priceVolatilityLow}
          digit={digit}
          placeholder={t`features_c2c_advertise_post_advertise_price_notify_zitg3hll2r`}
          inputProps={{
            prefix: t`features_c2c_advertise_post_advertise_price_notify_fk73w8jien`,
            noFocus: true,
            align: 'right',
            disabled: !priceVolatilityEnabled,
          }}
          onChange={onPriceVolatilityLowChange}
          onBlur={() => {
            if (Number(priceVolatilityLow) >= Number(price)) {
              Toast(t`features_c2c_advertise_post_advertise_price_notify_2_chbnl4ey`)
            }
          }}
        />
        <PriceInput
          onlyInput
          digit={digit}
          className="flex-1"
          value={priceVolatilityHigh}
          disabled={!priceVolatilityEnabled}
          placeholder={t`features_c2c_advertise_post_advertise_price_notify_zitg3hll2r`}
          inputProps={{
            prefix: t`features_c2c_advertise_post_advertise_price_notify_t0q771hhsx`,
            align: 'right',
            noFocus: true,
            disabled: !priceVolatilityEnabled,
          }}
          onBlur={() => {
            if (Number(priceVolatilityHigh) <= Number(price)) {
              Toast(t`features_c2c_advertise_post_advertise_price_notify_kpyg5msi3f`)
            }
          }}
          onChange={onPriceVolatilityHighChange}
        />
      </div>
      <div className="text-xs text-text_color_03">
        {t`features_c2c_advertise_post_advertise_price_notify_gk_fjvfvh4`}
      </div>
    </div>
  )
}
