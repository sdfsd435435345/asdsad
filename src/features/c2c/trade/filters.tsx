import { getMainTypeList } from '@/apis/c2c/common'
import Icon from '@/components/icon'
import { createCheckboxIconRender, DefaultRadioIconRender } from '@/components/radio/icon-render'
import { C2cTradeFilterAdTypeEnum, C2cTradeFilterOrderByEnum, C2cTradeFilterTradeWayEnum } from '@/constants/c2c/trade'
import { getDefaultTradeWays, paymentTypeToPayment } from '@/helper/c2c/trade'
import { C2CMainTypeListResp } from '@/typings/api/c2c/common'
import { IQueryTradeAdListReq } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { Button, Checkbox, Popup, Selector, Toast } from 'react-vant'
import { useUpdate, useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
import { useState, ReactNode, useRef, useEffect } from 'react'
import styles from './common.module.css'
import { useTradeContext } from './trade-context'

type ICoinSelectProps = {
  params: IQueryTradeAdListReq
  onChange: (params: IQueryTradeAdListReq) => void
}
type IValue = string | number | boolean
type IFilterItemProps = {
  label: string
  value: IValue | IValue[]
  options: {
    label: string
    value: IValue
    desc?: string
    invisible?: boolean
    activeNode?: ReactNode
  }[]
  allowEmpty?: boolean
  isSelector?: boolean
  onChange: (value: IValue | IValue[]) => void
}

function FilterItem({ label, allowEmpty = false, isSelector, value, options, onChange }: IFilterItemProps) {
  const isMul = Array.isArray(value)

  return (
    <div className={styles['filter-item']}>
      <div className="label">{label}</div>
      <div className="options">
        {isSelector && (
          <Selector
            showCheckMark={false}
            className="size-small"
            value={value as any}
            onChange={onChange}
            multiple={isMul}
            options={options as any}
          />
        )}
        {!isSelector &&
          options
            .filter(option => !option.invisible)
            .map(option => {
              const isActive = isMul ? (value as IValue[]).includes(option.value) : value === option.value
              const onSelect = () => {
                if (isMul) {
                  const newValue = isActive
                    ? (value as IValue[]).filter(v => v !== option.value)
                    : [...(value as IValue[]), option.value]
                  if (newValue.length === 0 && !allowEmpty) {
                    Toast(t`features_c2c_order_filters_jorb6z1y6mnors_nswng-`)
                    return
                  }
                  onChange(newValue)
                } else {
                  if (isActive) {
                    return
                  }
                  onChange(option.value)
                }
              }
              return (
                <>
                  <div
                    onClick={onSelect}
                    key={option.value?.toString()}
                    className={classNames('option', {
                      'is-active': isActive,
                    })}
                  >
                    <div className="flex flex-wrap items-center w-4/5">
                      <span className="mr-2">{option.label}</span>
                      {option.desc && <span className="desc">{option.desc}</span>}
                    </div>
                    <Checkbox
                      shape={isMul ? 'square' : 'round'}
                      iconRender={isMul ? createCheckboxIconRender('text-base') : DefaultRadioIconRender}
                      checked={isActive}
                    />
                  </div>
                  {isActive && option.activeNode}
                </>
              )
            })}
      </div>
    </div>
  )
}

export function C2cTradeFilters({ iconSize = 20, inOrderBook = false }) {
  const { params, onParamsChange } = useTradeContext()
  const [visible, onVisibleChange] = useState(false)
  const tradeAreaOutSide = params.currentTradeArea?.canOutTrade
  const paymentMethods = (params.currentTradeArea?.payments || []).map(paymentTypeToPayment).map(item => ({
    label: item.name,
    value: item.type,
  }))
  const [currentParams, setCurrentParams] = useState({ ...params })
  const paramsRef = useRef(params)
  paramsRef.current = params
  const onCurrentParamsChange = (newParams: IQueryTradeAdListReq) => {
    setCurrentParams(old => ({ ...old, ...newParams }))
  }
  const [networks, setNetworks] = useState([] as IFilterItemProps['options'])

  const onReset = () => {
    onCurrentParamsChange({
      chains: getDefaultTradeWays(params.currentTradeArea?.defaultClientTypeCd).includes(
        C2cTradeFilterTradeWayEnum.outside
      )
        ? networks.map(v => v.value)
        : [],
      tradeTypeCds: getDefaultTradeWays(params.currentTradeArea?.defaultClientTypeCd),
      advertTypeCds: [],
      ...(inOrderBook
        ? {
            sort: C2cTradeFilterOrderByEnum.orderCount,
          }
        : {
            payments: paymentMethods.map(item => item.value),
          }),
    })
  }
  const onConfirm = () => {
    onParamsChange(currentParams)
    onVisibleChange(false)
  }
  const getNetworks = async () => {
    if (!params.coinId) {
      return
    }
    const res = await getMainTypeList({
      coinId: params.coinId!,
    })
    if (!res.isOk || !res.data) {
      return
    }
    setNetworks(
      res.data.map(item => ({
        label: item.mainType!,
        value: item.mainType,
      }))
    )
    // 站外交易是默认项的话全部选中
    if (paramsRef.current?.tradeTypeCds?.includes(C2cTradeFilterTradeWayEnum.outside)) {
      onParamsChange({
        chains: res.data.map(item => item.mainType),
      })
    }
  }
  useUpdateEffect(() => {
    if (!visible) {
      setCurrentParams({ ...params })
    }
  }, [visible])
  useUpdateEffect(() => {
    setCurrentParams({ ...params })
  }, [params])
  useEffect(() => {
    getNetworks()
  }, [params.coinId])
  const onNetworkChange = (value: string[]) => {
    if (value.length === 0) {
      Toast(t`features_c2c_order_filters_jorb6z1y6mnors_nswng-`)
      return
    }
    onCurrentParamsChange({ chains: value })
  }

  const NetWorksNode = (
    <div>
      <Selector
        showCheckMark={false}
        className="size-small"
        value={currentParams.chains}
        onChange={onNetworkChange}
        multiple
        options={networks as any}
      />
    </div>
  )

  const filters: IFilterItemProps[] = [
    ...(inOrderBook
      ? [
          {
            isSelector: true,
            label: t`features_c2c_trade_filters_jrc28xedfa`,
            value: currentParams.sort || '',
            options: [
              {
                label: t`features_c2c_trade_filters_9h48ifsata`,
                value: C2cTradeFilterOrderByEnum.orderCount,
              },
              {
                label: t`features_c2c_order_order_list_xdkzbu4gfypbnaowor7kh`,
                value: C2cTradeFilterOrderByEnum.orderSucceedCount,
              },
            ],
            onChange: value => {
              if (value.length === 0) {
                return
              }
              onCurrentParamsChange({ sort: value[0] })
            },
          },
        ]
      : []),
    {
      label: t`features_c2c_trade_filters_225101627`,
      value: currentParams.tradeTypeCds || [],
      options: [
        {
          label: t`features_c2c_trade_filters_225101628`,
          value: C2cTradeFilterTradeWayEnum.inside,
        },
        {
          label: t`features_c2c_trade_filters_225101629`,
          invisible: !tradeAreaOutSide,
          desc: t`features_c2c_trade_filters_225101630`,
          value: C2cTradeFilterTradeWayEnum.outside,
          activeNode: NetWorksNode,
        },
      ],
      onChange: value => {
        const oldHasOutside = currentParams.tradeTypeCds?.includes(C2cTradeFilterTradeWayEnum.outside)
        onCurrentParamsChange({
          tradeTypeCds: value as any[],
          // 新勾选才默认选中
          chains:
            Array.isArray(value) && value.includes(C2cTradeFilterTradeWayEnum.outside) && !oldHasOutside
              ? networks.map(v => v.value)
              : currentParams.chains,
        })
      },
    },
    {
      label: t`features_c2c_trade_filters_225101631`,
      allowEmpty: true,
      value: currentParams.advertTypeCds || [],
      options: [
        {
          label: t`features_c2c_trade_filters_225101632`,
          value: C2cTradeFilterAdTypeEnum.onlyEnabled,
        },
        {
          label: t`features_c2c_trade_filters_225101633`,
          value: C2cTradeFilterAdTypeEnum.traded,
        },
        ...(inOrderBook
          ? [
              {
                label: t`features_c2c_trade_filters_mxqdqgvfwr`,
                value: C2cTradeFilterAdTypeEnum.followed,
              },
            ]
          : []),
      ],
      onChange: value => {
        onCurrentParamsChange({ advertTypeCds: value as any[] })
      },
    },
    ...(inOrderBook
      ? []
      : [
          {
            label: t`features_c2c_trade_filters_225101634`,
            value: currentParams.payments || [],
            options: paymentMethods,
            onChange: value => {
              onCurrentParamsChange({ payments: value as any[] })
            },
          },
        ]),
  ]

  return (
    <>
      <div
        className="flex"
        onClick={() => onVisibleChange(true)}
        style={{
          fontSize: `${iconSize}px`,
        }}
      >
        <Icon hiddenMarginTop name="asset_record_filter" hasTheme />
      </div>
      <Popup className="rounded-t-lg" position="bottom" visible={visible} onClose={() => onVisibleChange(false)}>
        <div className={classNames(styles['filters-popup-wrapper'], 'p-4 rounded-t')}>
          <div className="flex justify-between mb-4 items-center">
            <span className="text-base font-medium">{t`features/assets/financial-record/record-screen-modal/index-0`}</span>
            <Icon hasTheme name="close" className="text-xl" onClick={() => onVisibleChange(false)} />
          </div>
          <div className="mb-8 filter-content">
            {filters.map(filter => (
              <FilterItem key={filter.label} {...filter} />
            ))}
          </div>
          <div className="pb-6 flex">
            <Button block onClick={onReset} className="gray-button">
              {t`features/assets/financial-record/record-screen-modal/index-1`}
            </Button>
            <Button block onClick={onConfirm} className="ml-4" type="primary">
              {t`common.confirm`}
            </Button>
          </div>
        </div>
      </Popup>
    </>
  )
}
