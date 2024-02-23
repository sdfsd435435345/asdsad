/**
 * 行情异动
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { PullRefresh, Steps, Sticky, Toast } from 'react-vant'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import Icon from '@/components/icon'
import ListEmpty from '@/components/common-list/list-empty'
import PullRefreshAnimation from '@/components/pull-refresh-animation'
import { getMarketActivities, getMarketActivitiesStatistics } from '@/apis/market'
import { formatDate } from '@/helper/date'
import { TopMoversColorTypeEnum, TopMoversDataTypeEnum } from '@/constants/market/market-activity'
import { CommonDigital } from '@/components/common-digital'
import { link } from '@/helper/link'
import { convertToMillions, generateKlineUrl } from '@/helper/market'
import { useGetWsMarketActivity } from '@/hooks/features/market/activity'
import { YapiGetV1MarketMarketActivitiesListData } from '@/typings/yapi/MarketMarketActivitiesV1GetApi'
import { useMarketStore } from '@/store/market'
import { MarketDetailTabTypeEnum } from '@/constants/market'
import { getMarketDetailPagePath } from '@/helper/route'
import styles from './index.module.css'

function MarketActivityLayout() {
  const marketStore = useMarketStore()
  const [list, setList] = useState<any>([])

  /**
   * 列表分组
   * @param data 分组前的列表
   * @param template 格式化时间
   * @returns 分组后的列表
   */
  const onResortList = (data: any, template: string) => {
    let newArr: any = []
    data.forEach((item: any, i) => {
      let index = -1
      // 判断数组中是否已经存在当前遍历数据的时间
      let isExist = newArr.some((newItem: any, j: number) => {
        if (formatDate(item.time, template) === formatDate(newItem.time, template)) {
          index = j
          return true
        }
        return false
      })

      // 如果没有就存储一条新对象数据
      if (!isExist) {
        let subList: any = []
        subList.push(item)
        newArr.push({
          time: item.time,
          subList,
          id: item.id,
        })
      } else {
        // 如果有就插入到已存在的对象中
        newArr[index].subList.push(item)
      }
    })

    return newArr
  }

  /**
   * 查询行情异动列表
   */
  const onLoadList = async () => {
    Toast.loading({ duration: 0, message: t`features_assets_coin_details_coin_details_510157` })
    const res = await getMarketActivities({})
    const { isOk, data, message = '' } = res || {}

    if (!isOk || !data) {
      Toast.info(message)
      return
    }

    /**
     * 按照日期分组
     * 1、同一天的为一组
     * 2、同一天中的同一时间段的为一组
     */
    const dateList = onResortList(data, 'YYYY-MM-DD')
    const newList = dateList.map(item => {
      item.subList = onResortList(item.subList, 'HH:mm')

      return item
    })

    setList(newList)
    Toast.clear()
  }

  /**
   * 行情异动统计
   */
  const onStatistics = async (params: YapiGetV1MarketMarketActivitiesListData) => {
    await getMarketActivitiesStatistics({ marketActivitiesId: params.id?.toString() })
  }

  /**
   * 下拉刷新
   */
  const onRefresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        onLoadList()
        resolve(true)
      }, 1000)
    })
  }

  useEffect(() => {
    onLoadList()
  }, [])

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
    <div className={styles['market-activity-layout']}>
      <Sticky>
        <NavBar title={t`features_message_index_5101225`} />
        <div className="header">
          <span className="table-name">{`${t`features_market_activity_market_activity_layout_5101239`}/${t`future.funding-history.index.table-type.price`}`}</span>
          <span className="table-row value">{t`components_chart_indicator_pop_index_510178`}</span>
          <span className="table-row">{t`features_market_activity_market_activity_layout_5101240`}</span>
        </div>
      </Sticky>

      <PullRefresh
        onRefresh={onRefresh}
        pullingText={({ distance }) => <PullRefreshAnimation />}
        loosingText={() => <PullRefreshAnimation />}
        loadingText={() => <PullRefreshAnimation />}
      >
        {list.length > 0 &&
          list.map(item => {
            return (
              <div key={item.id} className="list">
                <Sticky offsetTop={78}>
                  <div className="list-title">{formatDate(item.time, 'YYYY-MM-DD')}</div>
                </Sticky>

                <Steps direction="vertical">
                  {item.subList.map((row: any) => {
                    return (
                      <Steps.Item
                        key={row.id}
                        activeIcon={<Icon name="time_indicator" hasTheme className="indicator-icon" />}
                        inactiveIcon={<Icon name="time_indicator" hasTheme className="indicator-icon" />}
                      >
                        <div className="coin-time">{formatDate(row.time, 'HH:mm')}</div>

                        {row.subList.map(coin => {
                          const textColor =
                            coin.colorType === TopMoversColorTypeEnum.up
                              ? 'var(--buy_up_color)'
                              : 'var(--sell_down_color)'

                          return (
                            <div
                              key={coin.id}
                              className="coin"
                              onClick={() => {
                                marketStore.updateCurrentTab(MarketDetailTabTypeEnum.activities)
                                onStatistics(coin)

                                link(getMarketDetailPagePath({ ...coin, symbolName: coin.symbol }))
                              }}
                            >
                              <div className="table-name">
                                <span className="text-base">
                                  {coin.base || '--'}
                                  <span className="quote">/{coin.quote || '--'}</span>
                                </span>
                                <span className="price">
                                  {coin.price !== null || coin.price !== undefined ? coin.price : '--'}
                                </span>
                              </div>

                              <CommonDigital
                                content={
                                  coin.dataType === TopMoversDataTypeEnum.orderQuantity
                                    ? convertToMillions(coin.value, false) || '--'
                                    : coin.value || '--'
                                }
                                className="table-row value"
                                style={{ color: textColor }}
                              />

                              <div className="table-row indicator-name">
                                <LazyImage src={coin.icon} width={14} height={14} round />
                                <span className="ml-1">{coin.title}</span>
                              </div>
                            </div>
                          )
                        })}
                      </Steps.Item>
                    )
                  })}
                </Steps>
              </div>
            )
          })}

        {list.length === 0 && <ListEmpty />}
      </PullRefresh>
    </div>
  )
}

export { MarketActivityLayout }
