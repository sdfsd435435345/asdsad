/**
 * 现货订单 - 筛选弹窗
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { useEffect, useState } from 'react'
import { Checkbox, Button, Toast, Selector } from 'react-vant'
import { formatDate, getPeriodDayTime } from '@/helper/date'
import DatePickerModal from '@/components/common-date-picker/date-picker-modal'
import { useMount, useUpdateEffect } from 'ahooks'
import { createCheckboxIconRender } from '@/components/radio/icon-render'
import { storeEnumsToOptions } from '@/helper/store'
import { OnlyOnePopup } from '@/components/only-one-overlay'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { IC2cQueryOrderListReq } from '@/typings/api/c2c/order'
import { C2cOrderDirectionEnum, C2cOrderTradeTypeEnum, getC2cOrderTradeTypeEnumName } from '@/constants/c2c/order'
import { useBaseC2cTradeStore } from '@/store/c2c/trade'
import { enumValuesToOptions } from '@/helper/c2c/order'
import styles from './filters.module.css'
import { useOrderContext } from './order-context'

const checkboxIconRender = createCheckboxIconRender('text-base')

enum DateTypeEnum {
  day = 2,
  week = 7,
  month = 30,
  threeMonth = 90,
}

export function getC2cOrderFiltersDefaultParams(tradeAreaIds?: any[]): IC2cQueryOrderListReq {
  return {
    direction: [C2cOrderDirectionEnum.buy, C2cOrderDirectionEnum.sell],
    tradeAreas: tradeAreaIds || [],
    beginDate: '' as any,
    endDate: '' as any,
    tradeTypes: [C2cOrderTradeTypeEnum.inside, C2cOrderTradeTypeEnum.outside, C2cOrderTradeTypeEnum.otc],
  }
}

function formatDateToDay(date: any) {
  return formatDate(date, 'YYYY-MM-DD')
}

export function C2cOrderFilters() {
  const { params, onParamsChange } = useOrderContext()
  const [visible, onVisibleChange] = useState(false)
  const { orderEnums } = useBaseC2cOrderStore()
  const directionList = storeEnumsToOptions(orderEnums.direction.enums)
  const tradeTypeList = enumValuesToOptions(
    [C2cOrderTradeTypeEnum.inside, C2cOrderTradeTypeEnum.outside, C2cOrderTradeTypeEnum.otc],
    getC2cOrderTradeTypeEnumName
  )
  const [formData, setFormData] = useState(params)
  const onCheckboxGroupChange = (name: string, value: any[]) => {
    if (value.length === 0) {
      Toast(t`features_c2c_order_filters_jorb6z1y6mnors_nswng-`)
      return
    }
    setFormData({ ...formData, [name]: value })
  }
  const [dateModalVisible, setDateModalVisible] = useState(false)
  /**
   * 关闭弹窗
   */
  const onCloseModal = () => {
    // 关闭时重置
    setFormData(params)
    onVisibleChange(false)
  }

  useUpdateEffect(() => {
    if (visible) {
      setFormData(params)
    }
  }, [visible])
  const onConfirm = () => {
    // 交易区可能存在按全选被取消的情况
    if (formData.tradeAreas?.length === 0) {
      Toast(t`features_c2c_order_filters_jorb6z1y6mnors_nswng-`)
      return
    }
    onParamsChange(formData)
    onVisibleChange(false)
  }
  let { tradeAreas, fetchTradeAreaList } = useBaseC2cTradeStore()
  const tradeAreaOptions = tradeAreas.map(item => ({
    label: item.currencyName,
    value: item.legalCurrencyId,
    // 这里应该不用判断是否可交易
    // disabled: item.statusCd !== 'ENABLE',
  }))
  const reset = () => {
    setFormData({
      ...getC2cOrderFiltersDefaultParams(tradeAreaOptions.map(item => item.value)),
    })
  }
  const checkedAll = formData.tradeAreas?.length === tradeAreaOptions.length
  const onCheckAllChange = () => {
    if (checkedAll) {
      setFormData({ ...formData, tradeAreas: [] })
    } else {
      setFormData({ ...formData, tradeAreas: tradeAreaOptions.map(item => item.value) })
    }
  }
  const onTradeAreaChange = (values: any[]) => {
    setFormData({ ...formData, tradeAreas: values })
  }
  useEffect(() => {
    onParamsChange({ ...formData, tradeAreas: tradeAreaOptions.map(item => item.value) })
  }, [tradeAreas])
  useMount(fetchTradeAreaList)

  return (
    <>
      <div onClick={() => onVisibleChange(true)}>
        <Icon className="text-xl" name="asset_record_filter_black" />
      </div>
      <OnlyOnePopup visible={visible} position="bottom" round closeOnClickOverlay={false}>
        <div className={styles['filters-modal-root']}>
          <div className="screen-header">
            <span>{t`features/assets/financial-record/record-screen-modal/index-0`}</span>
            <Icon hasTheme name="close" className="close-icon" onClick={onCloseModal} />
          </div>

          <div>
            <div className="flex justify-between">
              <span className="screen-title">{t`features_trade_future_c2c_22222225101604`}</span>
              <div className="mt-6">
                <Checkbox
                  className="checkbox"
                  shape="square"
                  checked={checkedAll}
                  onChange={onCheckAllChange}
                  iconRender={checkboxIconRender}
                >
                  {t`features/trade/future/settings/margin-coin-1`}
                </Checkbox>
              </div>
            </div>
            <Selector
              className="size-small"
              showCheckMark={false}
              value={formData.tradeAreas}
              onChange={(names: any[]) => {
                onCheckboxGroupChange('tradeAreas', names)
              }}
              multiple
              options={tradeAreaOptions}
            />
          </div>

          <span className="screen-title">{t`features_orders_spot_spot_filters_modal_510258`}</span>
          <Checkbox.Group
            value={formData.direction}
            direction="horizontal"
            iconSize={14}
            onChange={(names: any[]) => {
              onCheckboxGroupChange('direction', names)
            }}
          >
            {directionList.map(directionItem => {
              return (
                <Checkbox
                  className="checkbox"
                  iconRender={checkboxIconRender}
                  name={directionItem.value}
                  key={directionItem.value}
                  shape="square"
                >
                  {directionItem.label}
                </Checkbox>
              )
            })}
            <Checkbox className="invisible" />
          </Checkbox.Group>
          <span className="screen-title">{t`features_trade_future_c2c_22222225101605`}</span>
          <Checkbox.Group
            value={formData.tradeTypes}
            direction="horizontal"
            iconSize={14}
            onChange={(names: any[]) => {
              onCheckboxGroupChange('tradeTypes', names)
            }}
          >
            {tradeTypeList.map(typeItem => {
              return (
                <Checkbox
                  className="checkbox"
                  iconRender={checkboxIconRender}
                  name={typeItem.value}
                  key={typeItem.value}
                  shape="square"
                >
                  {typeItem.label}
                </Checkbox>
              )
            })}
          </Checkbox.Group>
          <span className="screen-title">{t`future.funding-history.funding-rate.column.time`}</span>
          <div className="screen-date">
            <div
              className="date"
              onClick={() => {
                setDateModalVisible(true)
              }}
            >
              {formData.beginDate && formatDateToDay(formData.beginDate)}
            </div>
            <span className="date-separate">{t`features_assets_financial_record_datetime_search_index_602`}</span>
            <div
              className="date"
              onClick={() => {
                setDateModalVisible(true)
              }}
            >
              {formData.endDate && formatDateToDay(formData.endDate)}
            </div>
          </div>
          <div className="flex py-8">
            <Button
              block
              className="mr-4 gray-button"
              onClick={reset}
            >{t`features/assets/financial-record/record-screen-modal/index-1`}</Button>
            <Button block type="primary" onClick={() => onConfirm()}>
              {t`user.field.reuse_10`}
            </Button>
          </div>
        </div>
        <DatePickerModal
          startDate={formData.beginDate!}
          endDate={formData.endDate!}
          visible={dateModalVisible}
          onClose={() => {
            setDateModalVisible(false)
          }}
          max={180}
          dateTemplate="YYYY-MM-DD"
          onCommit={newParams => {
            setFormData({
              ...formData,
              beginDate: newParams.startDate,
              endDate: newParams.endDate,
            })
            setDateModalVisible(false)
          }}
        />
      </OnlyOnePopup>
    </>
  )
}
