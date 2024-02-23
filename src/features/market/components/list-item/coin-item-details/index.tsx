import { StarO } from '@react-vant/icons'
import classNames from 'classnames'
import { Cell } from 'react-vant'
import { ISearchListItem } from '../index'
import styles from './index.module.css'

export interface ICoinItemDetailsProps extends ISearchListItem {
  coin: string
  pairPrice: number
  changes: string
}

function CoinItemDetails(props: ICoinItemDetailsProps) {
  const { ranking, coin, pairPrice, changes } = props

  const handleFavClick = e => {
    e.currentTarget.classList.toggle('is_active')
  }
  return (
    <>
      <div className={classNames(styles.layout)}>
        {ranking}
        <Cell
          title={
            <>
              <span className="text-lg">{coin.split('/')[0]}</span>
              <span>{` /${coin.split('/')[1]}`}</span>
            </>
          }
        />
      </div>
      <div className={classNames(styles.layout)}>
        <Cell title={pairPrice} label={changes} />
        <StarO onClick={handleFavClick} />
      </div>
    </>
  )
}

export default CoinItemDetails
