import { useState, useEffect } from 'react'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import Icon from '@/components/icon'
import { decimalUtils } from '@/nbit'
// import { ResponsiveTreeMapHtml } from '@nivo/treemap'
import { MarketSectorType } from '@/typings/api/sector'
import { marketSectorHandleOtherData } from '@/helper/market/sector'
import { MarketListRouteEnum } from '@/constants/market/market-list/market-module'
import styles from './index.module.css'

type SectorHotGainersType = {
  data: Array<MarketSectorType>
  onChange?: (v: MarketSectorType) => void
}

enum HotGainersEnum {
  none,
  one,
  two,
  minSize = 12, // 最小字体大小
  maxSize = 16, // 最大字体大小
  hidden = 18,
  writing = 36,
  maxHeight = 40,
  full = 100,
}
enum HotGainersOtherEnum {
  Other = 'other',
}
const SafeCalcUtil = decimalUtils.SafeCalcUtil
function SectorHotGainers({ data, onChange }: SectorHotGainersType) {
  const [treeMapData, setTreeMapData] = useState<Array<MarketSectorType>>([])

  /** 处理市值占比问题* */
  const handleMarketValue = params => {
    // 获取前几位总的市值
    let allMountMark: number = HotGainersEnum.none
    params.forEach(item => {
      let allValue = SafeCalcUtil.add(allMountMark, Number(item?.marketValue || HotGainersEnum.none))
      allMountMark = Number(`${allValue}`)
    })
    if (params?.length) {
      const newMarketData: Array<MarketSectorType> = []
      // 可以展示的市值占比的总数
      let availablePercent: number = HotGainersEnum.none
      // 遍历算出每个板块占比，大于 2 的才显示
      params.forEach(item => {
        const marketValue = Number(item?.marketValue || HotGainersEnum.none)
        const proportion = Number(
          `${SafeCalcUtil.mul(SafeCalcUtil.div(marketValue, allMountMark), HotGainersEnum.full)}`
        )
        item.value = proportion
        if (proportion > HotGainersEnum.two) {
          newMarketData.push(item)
          let availableValue = SafeCalcUtil.add(availablePercent, proportion || HotGainersEnum.none)
          availablePercent = Number(`${availableValue}`)
        }
      })
      // 排序
      const sortMarketData = newMarketData?.sort((a, b) => {
        return Number(b?.value) - Number(a?.value)
      })
      // 如果出现小于 2 的情况，用其它代替
      if (sortMarketData?.length < params?.length) {
        const otherValue = SafeCalcUtil.sub(HotGainersEnum.full, availablePercent)
        const otherData = {
          name: t`assets.enum.tradeRecordType.other`,
          textColor: 'text-text_color_01',
          color: 'bg-bg_button_disabled',
          id: HotGainersOtherEnum.Other,
          value: Number(`${otherValue}`),
        }
        // 如果有其它的就进入其它模块占比算法
        return marketSectorHandleOtherData(sortMarketData, otherData)
      }
      return sortMarketData
    }
  }
  useEffect(() => {
    if (data?.length) {
      setTreeMapData(handleMarketValue(data) || [])
    }
  }, [data])

  const onChangeTreeMap = v => {
    // 如果点击其它板块则跳转板块列表
    if (v?.data?.id === HotGainersOtherEnum.Other) {
      return link(MarketListRouteEnum.sectorTable)
    }
    onChange && onChange(v?.data)
  }

  const treeMapNode = v => {
    const minSize = HotGainersEnum.minSize // 最小字体大小
    const maxSize = HotGainersEnum.maxSize // 最大字体大小
    const maxNum = Math.max(v.height, v.width)
    const fontSize = Math.max(Math.min(maxNum / 8, maxSize), minSize)
    return (
      <div
        style={{
          top: v.y,
          left: v.x,
          width: v.width,
          height: v.height,
        }}
        className={`gainers-tree-map ${v.color}`}
        onClick={() => onChangeTreeMap(v)}
      >
        {v.height < HotGainersEnum.hidden || v.width < HotGainersEnum.hidden ? (
          <span className="px-1 text-button_text_01">ⵈ</span>
        ) : (
          <>
            <div style={{ fontSize: `${fontSize}px` }} className="tree-map-text tree-map-name">
              {v.width < HotGainersEnum.writing &&
              v.width > HotGainersEnum.hidden &&
              v.data?.id === HotGainersOtherEnum.Other ? (
                <span className={`${v.data?.textColor || ''} text-center`} style={{ writingMode: 'vertical-lr' }}>
                  {v.data?.name || ''}
                </span>
              ) : (
                <span className={`${v.data?.textColor || ''}`}>{v.data?.name || ''}</span>
              )}
            </div>
            {v.height > HotGainersEnum.maxHeight && (
              <div style={{ fontSize: `${fontSize}px` }} className="tree-map-text tree-map-price">
                {v.data?.chgValue || ''}
              </div>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <div className={styles.scoped}>
      <div className="hot-gainers-content">
        {treeMapData?.length > HotGainersEnum.none ? (
          34223432
        ) : (
          <div className="no-result">
            <div className="icon">
              <Icon name="no_data" hasTheme isRemoteUrl />
            </div>
            <div className="text">
              <label>{t`features_orders_order_detail_510288`}</label>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default SectorHotGainers
