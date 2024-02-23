import { formatTradePair, getQuoteDisplayName } from '@/helper/market'
import { SpotFavoriteDefaultDataType } from '@/typings/api/market/market-list'
import { IncreaseTag } from '@/nbit/react'
import { Checkbox } from 'react-vant'
import styles from './index.module.css'

function FavoriteSpotItemBox({
  ...props
}: Required<Pick<SpotFavoriteDefaultDataType, 'baseSymbolName' | 'quoteSymbolName' | 'baseSymbolFullName' | 'id'>>) {
  const { baseSymbolFullName, id } = props
  return (
    <div className={styles.scoped}>
      <div className="content">
        <div className="header">
          <div className="pair">{getQuoteDisplayName(props, true)}</div>
          <div className="check-box">
            <Checkbox name={id} shape="square" />
          </div>
        </div>
        <div className="symbol-fullname">{baseSymbolFullName}</div>
      </div>
    </div>
  )
}

function FavoriteFuturesItemBox({
  ...props
}: Required<
  Pick<SpotFavoriteDefaultDataType, 'baseSymbolName' | 'quoteSymbolName' | 'baseSymbolFullName' | 'id' | 'chg' | 'last'>
>) {
  const { id, chg, last } = props
  return (
    <div className={styles.scoped}>
      <div className="content">
        <div className="header">
          <div className="pair">{getQuoteDisplayName(props, true, false)}</div>
          <div className="check-box">
            <Checkbox name={id} shape="square" />
          </div>
        </div>
        <div className="flex flex-row gap-x-2">
          <IncreaseTag value={last} hasColor={false} kSign hasPrefix={false} />
          <IncreaseTag digits={2} delZero={false} value={chg} hasPostfix hasPrefix defaultEmptyText={'--'} />
        </div>
      </div>
    </div>
  )
}

export { FavoriteSpotItemBox, FavoriteFuturesItemBox }
