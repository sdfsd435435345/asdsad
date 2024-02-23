import { t } from '@lingui/macro'
import { createPortal } from 'react-dom'
import { useMount } from 'ahooks'
import { Button, Cell, Checkbox, Image } from 'react-vant'
import { useState, useRef, useMemo, useEffect } from 'react'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
/** 引入组件* */
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import NoDataImage from '@/components/no-data-image'
import { SearchInput } from '@/features/assets/common/search-input'
import styles from './index.module.css'

type TradingAreaType = {
  data: Array<C2CAreaListResp>
  defaultData: Array<C2CAreaListResp>
  onClose: () => void
  onChange: (v: Array<C2CAreaListResp>) => void
}

function TradingArea(props: TradingAreaType) {
  const { data, defaultData, onClose, onChange } = props

  const [cellData, setCellData] = useState<Array<C2CAreaListResp>>([])
  const [searchKey, setSearchKey] = useState<string>('') // 搜索值
  const [cellCheck, setCellCheck] = useState<Array<string>>([])

  const cellAllCheck = useRef<Array<C2CAreaListResp>>([])

  /** 全选* */
  const onAllChange = () => {
    const newId = data.map(item => item.currencyName)
    setCellCheck(newId)
  }

  /** 多选框选择* */
  const onCheckGroupChange = (v: Array<string>) => {
    setCellCheck(v)
  }
  /** cell 点击* */
  const onCheckGroupToggle = (v: string) => {
    const newValue = cellCheck.includes(v) ? cellCheck.filter(el => el !== v) : [...cellCheck, v]
    setCellCheck(newValue)
  }

  /** 关闭* */
  const onLeftClose = () => {
    onClose && onClose()
  }

  /** 保存* */
  const onPreTraing = () => {
    const cellList: C2CAreaListResp[] = []
    cellCheck.forEach(v => {
      const params = cellAllCheck.current?.find(item => item.currencyName === v)
      params && cellList.push(params)
    })
    onChange && onChange(cellList)
  }

  useMemo(() => {
    if (searchKey && cellAllCheck.current?.length) {
      const newData = cellAllCheck.current?.filter(v => v.currencyName?.indexOf(searchKey) !== -1)
      setCellData(newData)
    }
    !searchKey && setCellData(cellAllCheck.current)
  }, [searchKey])

  useMount(() => {
    setCellData(data)
    cellAllCheck.current = data
  })

  useEffect(() => {
    const selectData = defaultData?.map(v => v.currencyName)
    setCellCheck(selectData || [])
  }, [defaultData])

  return (
    <>
      {createPortal(
        <div className={styles['trading-area-wrap']}>
          <NavBar
            title={t`features_message_center_index_5101368`}
            onClickLeft={onLeftClose}
            right={
              <span className="wrap-header-text" onClick={onAllChange}>
                {t`features/trade/future/settings/margin-coin-1`}
              </span>
            }
          />
          <SearchInput
            placeholder={t`future.funding-history.search-future`}
            value={searchKey}
            onChange={setSearchKey}
            className="mt-2 mb-3"
          />
          <div className="trading-area-main">
            {cellData?.length ? (
              <Checkbox.Group value={cellCheck} onChange={onCheckGroupChange}>
                <Cell.Group border={false}>
                  {cellData.map(v => {
                    return (
                      <Cell
                        clickable
                        border={false}
                        key={v.currencyName}
                        onClick={() => onCheckGroupToggle(v.currencyName)}
                        title={
                          <div className="trading-cell">
                            <Image
                              lazyload
                              className="trading-cell-icon"
                              src={`${oss_area_code_image_domain_address}${v.countryAbbreviation}.png`}
                            />
                            <div className="trading-cell-text">{v.currencyName}</div>
                          </div>
                        }
                        rightIcon={
                          <Checkbox
                            shape="square"
                            name={v.currencyName}
                            iconRender={({ checked }) => {
                              return checked ? (
                                <Icon name="login_verify_selected" className="text-base" />
                              ) : (
                                <Icon name="login_verify_unselected" hasTheme className="text-base" />
                              )
                            }}
                          />
                        }
                      />
                    )
                  })}
                </Cell.Group>
              </Checkbox.Group>
            ) : (
              <NoDataImage />
            )}
          </div>
          <div className="trading-area-footer">
            <Button type="primary" className="w-full rounded" onClick={onPreTraing} disabled={!cellCheck?.length}>
              {t`common.confirm`}
            </Button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
export default TradingArea
