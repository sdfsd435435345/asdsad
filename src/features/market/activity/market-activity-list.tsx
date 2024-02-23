/**
 * 现货 k 线 - 行情异动列表组件
 */
import { t } from '@lingui/macro'
import { useState } from 'react'
import { Toast } from 'react-vant'
import Icon from '@/components/icon'
import CommonList from '@/components/common-list/list'
import { getMarketActivities, getMarketActivitiesStatistics } from '@/apis/market'
import { formatDate } from '@/helper/date'
import { useMarketStore } from '@/store/market'
import { TopMoversColorTypeEnum, TopMoversDataTypeEnum } from '@/constants/market/market-activity'
import { useGetWsMarketActivity } from '@/hooks/features/market/activity'
import { YapiGetV1MarketMarketActivitiesListData } from '@/typings/yapi/MarketMarketActivitiesV1GetApi'
import { convertToMillions } from '@/helper/market'
import styles from './index.module.css'

function MarketActivityList() {
  const marketState = useMarketStore()
  const { symbolName } = marketState.currentCoin
  const [finished, setFinished] = useState(false)
  const [list, setList] = useState<any>([])

  /**
   * 查询行情异动列表
   */
  const onLoadList = async () => {
    const res = await getMarketActivities({ symbol: symbolName, limit: 20 })
    const { isOk, data, message = '' } = res || {}

    if (!isOk || !data) {
      Toast.info(message)
      setFinished(true)
      return
    }

    setList(data)
    setFinished(true)
  }

  /**
   * 行情异动统计
   */
  const onStatistics = async (params: YapiGetV1MarketMarketActivitiesListData) => {
    await getMarketActivitiesStatistics({ marketActivitiesId: params.id?.toString() })
    marketState.updateMarketChangesTime(params?.time)
  }

  /**
   * 行情异动推送回调
   * @param data
   */
  const wsCallBack = data => {
    if (data) {
      onLoadList()
    }
  }
  useGetWsMarketActivity(wsCallBack)

  return (
    <div className={styles['market-activity-list']}>
      <div className="header">
        <span className="table-market">{t`features_market_activity_market_activity_list_5101465`}</span>
        <span className="table-row">{t`components_chart_indicator_pop_index_510178`}</span>
        <div className="table-date">
          <span className="mr-8">{t`future.funding-history.funding-rate.column.time`}</span>
        </div>
      </div>

      <CommonList
        finished={finished}
        onLoadMore={onLoadList}
        showEmpty={list.length === 0}
        finishedText={<div />}
        listChildren={
          <>
            {list.map((item: YapiGetV1MarketMarketActivitiesListData) => {
              const textColor =
                item.colorType === TopMoversColorTypeEnum.up ? 'var(--buy_up_color)' : 'var(--sell_down_color)'

              return (
                <div className="list-item" key={item.id}>
                  <span className="table-market">{item.title || '--'}</span>
                  <span className="table-row" style={{ color: textColor }}>
                    {item.dataType === TopMoversDataTypeEnum.orderQuantity
                      ? convertToMillions(item.value, false) || '--'
                      : item.value || '--'}
                  </span>
                  <div className="table-date">
                    <span className="date-text">{formatDate(item.time, 'MM-DD HH:mm') || '--'}</span>
                    <Icon
                      className="link-icon"
                      name="market_movers_link"
                      onClick={() => {
                        // TODO
                        onStatistics(item)
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </>
        }
      />
    </div>
  )
}

export { MarketActivityList }
