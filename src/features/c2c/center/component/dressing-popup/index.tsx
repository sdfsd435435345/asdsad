import { t } from '@lingui/macro'
import { useState, useMemo, useEffect } from 'react'
import { Popup, Checkbox, Toast } from 'react-vant'
import Icon from '@/components/icon'
import { getAreaList } from '@/apis/c2c/center'
import { useC2CCenterStore } from '@/store/c2c/center'
import { C2cDirectionEnum, C2cBusinessDataEnum } from '@/constants/c2c/center'
import { C2cDirectionData, C2cBusinessData } from '@/constants/c2c/common'
import { C2CDressingPopupType } from '@/typings/api/c2c/center'
import styles from './index.module.css'

type DressingPopupDefault = {
  tradeTypeCds?: string[] // 交易类型
  advertDirectCds?: string[] // 广告方向
  areaIds?: string[] // 交易区域
  isAllSelect?: boolean // 是否选择全部交易区
}

type DressingPopupType = {
  type?: string // 交易类型文案
  visible: boolean // 弹框状态
  setVisible: (v: boolean) => void // 关闭弹框
  onChange?: (v: DressingPopupDefault) => void // 点击确认
  defaultData?: DressingPopupDefault // 需要默认选中的数据
}

function DressingPopup(props: DressingPopupType) {
  const { visible, setVisible, onChange, defaultData, type } = props
  const [isAllCheck, setIsAllCheck] = useState<boolean>(false)
  const [coinData, setCoinData] = useState<Array<C2CDressingPopupType>>([])
  const [businessData, setBusinessData] = useState<string[]>(
    defaultData?.tradeTypeCds || [C2cBusinessDataEnum.inside, C2cBusinessDataEnum.outside]
  )
  const [directionData, setDirectionData] = useState<string[]>(
    defaultData?.advertDirectCds || [C2cDirectionEnum.buy, C2cDirectionEnum.sell]
  ) // 广告方向

  const { setTradeAreaStore } = useC2CCenterStore()

  /** 处理获取的数据* */
  const handleCoinData = (data, newData) => {
    if (newData?.length) {
      data?.forEach(v => {
        const params = newData?.find(item => item === v.legalCurrencyId)
        if (params) {
          v.isSelected = true
        }
      })
      return data
    }
    data?.forEach(v => {
      v.isSelected = true
    })
    return data
  }

  /** 获取交易区数据* */
  const getAreaData = async () => {
    const { data, isOk } = await getAreaList({})
    if (data && isOk) {
      const newData = defaultData?.areaIds
      setTradeAreaStore(data)
      if (data?.length) {
        const arr = handleCoinData(data, newData)
        return setCoinData(arr)
      }
      return setCoinData(data)
    }
  }

  const onCoinSelect = v => {
    setCoinData(prevData =>
      prevData.map(item => (item.currencyName === v.currencyName ? { ...item, isSelected: !item.isSelected } : item))
    )
  }

  const onAllCheckChange = isCheck => {
    setCoinData(prevData => prevData.map(item => ({ ...item, isSelected: isCheck })))
  }

  /** 重置，注释部分功能改变，暂不删除* */
  const resetDressing = () => {
    const newCoinData = coinData?.map(v => {
      return { ...v, isSelected: true }
    })
    setCoinData(newCoinData)
    setDirectionData([C2cDirectionEnum.buy, C2cDirectionEnum.sell])
    setBusinessData([C2cBusinessDataEnum.inside, C2cBusinessDataEnum.outside])
  }

  /** 确认* */
  const onSureChange = () => {
    const newCoinData = coinData?.filter(v => v.isSelected)
    if (!businessData?.length || !directionData?.length || !newCoinData?.length) {
      return Toast.info(t`features_c2c_center_component_dressing_popup_index_hhi2n-hzfacwiut9stcgb`)
    }
    const params = {
      tradeTypeCds: businessData,
      advertDirectCds: directionData,
      areaIds: newCoinData?.map(item => item.legalCurrencyId),
      isAllSelect: coinData?.length === newCoinData?.length,
    } as DressingPopupDefault
    onChange && onChange(params)
    setVisible(false)
  }

  useMemo(() => {
    const memoCoinData = coinData.filter(v => v.isSelected)
    if (memoCoinData?.length >= coinData?.length) {
      setIsAllCheck(true)
    } else {
      setIsAllCheck(false)
    }
  }, [coinData])

  useEffect(() => {
    getAreaData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Popup visible={visible} position="bottom" className={styles['dressing-popup-wrap']}>
      <div className={styles['dressing-popup']}>
        <div className="dressing-popup-header">
          <div className="dressing-popup-header-text">{t`features/assets/financial-record/record-screen-modal/index-0`}</div>
          <Icon name="close" hasTheme className="dressing-popup-header-icon" onClick={() => setVisible(false)} />
        </div>
        <div className="dressing-popup-business">
          <div className="popup-business-text">{t`features_trade_future_c2c_22222225101604`}</div>
          <Checkbox
            shape="square"
            checked={isAllCheck}
            onChange={onAllCheckChange}
            iconRender={({ checked: isActive }) =>
              isActive ? (
                <Icon name="login_verify_selected" className="selected" />
              ) : (
                <Icon name="login_verify_unselected" className="unselected" hasTheme />
              )
            }
          >
            {t`features/trade/future/settings/margin-coin-1`}
          </Checkbox>
        </div>
        <div className="dressing-popup-select">
          {coinData?.map(v => {
            return (
              <div
                key={v.currencyName}
                onClick={() => onCoinSelect(v)}
                className={`popup-select-contair ${v?.isSelected ? 'selected' : ''}`}
              >
                <div className="popup-select-item">{v.currencyName}</div>
              </div>
            )
          })}
        </div>
        <div className="dressing-popup-direction">
          <div className="popup-direction-text">
            {type
              ? t`features_c2c_advertise_post_advertise_index_222222225101683`
              : t`features_orders_spot_spot_filters_modal_510258`}
          </div>
          <Checkbox.Group direction="horizontal" value={directionData} onChange={setDirectionData}>
            {C2cDirectionData(type)?.map(v => {
              return (
                <Checkbox
                  key={v.id}
                  name={v.id}
                  shape="square"
                  iconRender={({ checked: isActive }) =>
                    isActive ? (
                      <Icon name="login_verify_selected" className="selected" />
                    ) : (
                      <Icon name="login_verify_unselected" className="unselected" hasTheme />
                    )
                  }
                >
                  {v.name}
                </Checkbox>
              )
            })}
          </Checkbox.Group>
        </div>
        <div className="dressing-popup-direction">
          <div className="popup-direction-text">{t`features_trade_future_c2c_22222225101605`}</div>
          <Checkbox.Group direction="horizontal" value={businessData} onChange={setBusinessData}>
            {C2cBusinessData()?.map(v => {
              return (
                <Checkbox
                  key={v.id}
                  name={v.id}
                  shape="square"
                  iconRender={({ checked: isActive }) =>
                    isActive ? (
                      <Icon name="login_verify_selected" className="selected" />
                    ) : (
                      <Icon name="login_verify_unselected" className="unselected" hasTheme />
                    )
                  }
                >
                  {v.name}
                </Checkbox>
              )
            })}
          </Checkbox.Group>
        </div>
        <div className="dressing-popup-footer">
          <div className="popup-footer-button">
            <div
              className="bg-bg_sr_color py-2 rounded"
              onClick={resetDressing}
            >{t`features/assets/financial-record/record-screen-modal/index-1`}</div>
          </div>
          <div className="popup-footer-button">
            <div className="bg-brand_color py-2 rounded" onClick={onSureChange}>
              {t`common.confirm`}
            </div>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default DressingPopup
