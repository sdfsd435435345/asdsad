/**
 * 资产总览 - 列表 - 币种单元
 */
import { AssetsC2CListResp, CoinListResp } from '@/typings/api/assets/assets'
import LazyImage from '@/components/lazy-image'
import { CommonDigital } from '@/components/common-digital'
import { formatCoinAmount, rateFilter } from '@/helper/assets/spot'
import Icon from '@/components/icon'
import { useState } from 'react'
import useRateFilter from '@/hooks/use-rate-filter'
import styles from './index.module.css'

interface ICoinCellProps {
  /** 币种信息 */
  data: CoinListResp | AssetsC2CListResp
  /** 展开信息 */
  expandList: any
  /** 总数量 */
  totalAmount: string | number
  onClick?: () => void
}

function CoinCell(props: ICoinCellProps) {
  const { data, expandList = [], totalAmount = '--', onClick } = props || {}
  const { appLogo = '', coinName = '--', coinFullName = '--', symbol = '' } = data || {}
  const [expand, setExpand] = useState(false)

  // fix rate filter fn dependencies not sync problem
  const rates = useRateFilter({ amount: totalAmount, symbol })

  return (
    <div className={styles['coin-cell-root']} onClick={onClick}>
      <div className="coin-cell-simple">
        <div className="coin-cell-info">
          <div className="coin-cell-title">
            <LazyImage src={appLogo} width={20} height={20} round className="mr-2" />
            <span>{coinName}</span>
          </div>

          <span className="coin-cell-name ml-7">{coinFullName}</span>
        </div>

        <div className="coin-cell-info w-3/5 items-end">
          <div className="coin-cell-title justify-end">
            <CommonDigital content={formatCoinAmount(symbol, totalAmount)} isEncrypt />
            <Icon
              name={expand ? 'asset_view_coin_fold' : 'asset_view_coin_unfold'}
              hasTheme
              className="expand-icon"
              onClick={(e: any) => {
                e.stopPropagation()
                setExpand(!expand)
              }}
            />
          </div>

          <CommonDigital content={rates} isEncrypt className="coin-cell-name text-end mr-7" />
        </div>
      </div>

      {expand && (
        <div className="coin-cell-expand">
          {expandList.map((expandItem, index) => {
            return (
              <div key={index} className="expand-info">
                <span>{expandItem.title}</span>
                <CommonDigital content={expandItem.content} isEncrypt className="expand-num" />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export { CoinCell }
