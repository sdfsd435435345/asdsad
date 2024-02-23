import classNames from 'classnames'
import { Cell } from 'react-vant'
import styles from './index.module.css'

export interface IQuoteItemDetails {
  coin: string
  volume: number
  pairPrice: number
  fiatPrice: number
  changes: string
}

function QuoteItemDetails(props: IQuoteItemDetails) {
  const { coin, volume, pairPrice, fiatPrice, changes } = props
  return (
    <>
      <Cell
        title={
          <>
            <span className="text-lg">{coin.split('/')[0]}</span>
            <span>{` /${coin.split('/')[1]}`}</span>
          </>
        }
        label={volume}
      />
      <Cell className={classNames(styles.prices)} title={pairPrice} label={fiatPrice} />
      <Cell className={classNames(styles.changes)}>
        <div className={classNames({ 'item-up': changes[0] === '+' }, { 'item-down': changes[0] === '-' })}>
          {changes}
        </div>
      </Cell>
    </>
  )
}

export default QuoteItemDetails
