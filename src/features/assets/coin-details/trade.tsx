/**
 * 资产-去交易/历史记录组件
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { Toast, Swiper } from 'react-vant'
import { getTradeCoinTypeEnumName } from '@/constants/assets/trade'
import { IncreaseTag } from '@/nbit/react'
import CommonList from '@/components/common-list/list'
import { postRecordsList } from '@/apis/assets/financial-records'
import { formatDate } from '@/helper/date'
import { RecordsListResp } from '@/typings/api/assets/assets'

import { link } from '@/helper/link'
import { formatNumberDecimal } from '@/helper/decimal'
import { getAssetsHistoryDetailPageRoutePath, getFutureTradePagePath, getTradePagePath } from '@/helper/route'
import { getTextFromStoreEnums } from '@/helper/store'
import { useAssetsStore } from '@/store/assets/spot'
import { AssetsHistoryPageTypeEnum, AssetsRecordTypeEnum } from '@/constants/assets/common'
import { useContractMarketStore } from '@/store/market/contract'
import styles from './coin-details.module.css'
import { TradeListTypeEnum } from './coin-details'

/**
 * 去交易
 */
export function CoinTrade({ tardeList }: { tardeList: any }) {
  const { currentCoin: currentFutureCoin, defaultCoin } = useContractMarketStore()

  let newList: any = []
  if (tardeList && tardeList.length > 0) {
    // 将数据分页处理
    const chunk = 4
    for (let i = 0; i < tardeList.length; i += chunk) {
      newList.push(tardeList.slice(i, i + chunk))
    }
  }

  return (
    <div className={styles['trade-wrapper']}>
      <div className="title">{t`assets.coin.trade.go_to_trade`}</div>
      <Swiper loop={false} enabled={newList.length > 1}>
        {newList.map((item: any, index: number) => {
          return (
            <Swiper.Item key={index}>
              {item.map((info: any) => {
                return (
                  <div
                    className="trade-item"
                    key={`${info.type}${info.id}`}
                    onClick={() =>
                      link(
                        info.type === TradeListTypeEnum.spot
                          ? getTradePagePath(info)
                          : getFutureTradePagePath({
                              symbolName: currentFutureCoin.symbolName || defaultCoin.symbolName || 'BTCUSD',
                            })
                      )
                    }
                  >
                    <div className="name">
                      <span>{info.baseSymbolName || '--'}</span>
                      <span className="text-text_color_02">
                        {info.type === TradeListTypeEnum.spot && '/'}
                        {info.quoteSymbolName || '--'}
                      </span>
                      <span className="ml-1">{getTradeCoinTypeEnumName(info.typeInd as any)}</span>
                    </div>
                    <div className="price-container">
                      <span className="price w-3/5 overflow-hidden overflow-ellipsis inline-block">
                        {Number(formatNumberDecimal(info.last, info.priceOffset || 2))}
                      </span>
                      <IncreaseTag value={`${info.chg || '--'}`} needPercentCalc right={'%'} />
                    </div>
                  </div>
                )
              })}
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}

/**
 * 历史记录
 */
export function CoinTradeRecords({ coinDetails }: { coinDetails: any }) {
  const { assetsEnums } = useAssetsStore()
  const [page, setPage] = useState({
    total: 0,
    pageNum: 1,
    pageSize: 20,
  })
  const [historyList, setHistoryList] = useState<RecordsListResp[]>([])
  const [finished, setFinished] = useState(false)

  /**
   * 获取历史记录
   */
  const onLoadHistory = async () => {
    if (!coinDetails.coinId) {
      return
    }
    const res = await postRecordsList({
      coinId: coinDetails.coinId,
      pageNum: page.pageNum,
      pageSize: page.pageSize,
      type: assetsEnums.walletFinancialRecordTypeEnum.enums.map(item => item.value as number),
    })
    const { isOk, data, message = '' } = res || {}

    if (!isOk || !data) {
      Toast(message)
      setFinished(true)
      return
    }

    setPage({ ...page, pageNum: page.pageNum + 1 })
    const newList = [...historyList, ...data.list]
    setHistoryList(newList)
    if (newList.length >= data.total) {
      setFinished(true)
    }
  }

  useEffect(() => {
    onLoadHistory()
  }, [coinDetails, assetsEnums.walletFinancialRecordTypeEnum.enums])

  return (
    <div className={styles['trade-records-wrapper']}>
      <h3 className="title">{t`features_assets_coin_details_trade_510156`}</h3>

      <div className="history-list flex-wrap">
        <CommonList
          finished={finished}
          onLoadMore={onLoadHistory}
          listChildren={
            <div>
              {historyList.map((item: RecordsListResp) => {
                return (
                  <div
                    className="record-item rv-hairline--bottom"
                    key={item.id}
                    onClick={() =>
                      link(
                        getAssetsHistoryDetailPageRoutePath({
                          id: item.id,
                          type: item.type,
                          page: AssetsHistoryPageTypeEnum.coinDetail,
                        })
                      )
                    }
                  >
                    <div>
                      <div>{getTextFromStoreEnums(item.type, assetsEnums.financialRecordTypeEnum.enums)}</div>
                      <div className="date">{formatDate(item.createdByTime)}</div>
                    </div>
                    <div className="text-right">
                      <IncreaseTag
                        value={item.total}
                        hasColor={item.type !== AssetsRecordTypeEnum.migrate}
                        hasPrefix={item.type !== AssetsRecordTypeEnum.migrate && +item.total > 0}
                      />
                      <div className="status">
                        {getTextFromStoreEnums(item.status, assetsEnums.financialRecordStateEnum.enums)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          }
          showEmpty={historyList.length === 0}
        />
      </div>
    </div>
  )
}
