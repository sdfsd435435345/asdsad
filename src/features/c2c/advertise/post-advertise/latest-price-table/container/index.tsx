import { t } from '@lingui/macro'
import { CoincidenceListTypeEnum } from '@/constants/c2c/advertise'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { replaceEmpty } from '@/helper/filters'
import styles from '../index.module.css'

interface LatestPriceTableHeaderProps {
  /** 买盘或卖盘状态 */
  status: string
  /** 买盘反转 */
  reverse?: boolean
}

function LatestPriceTableContainer({ status, reverse }: LatestPriceTableHeaderProps) {
  const {
    postOptions: { coincidenceData },
  } = useC2CAdvertiseStore()
  const isBuy = status === CoincidenceListTypeEnum.bid
  const list = coincidenceData ? [...coincidenceData[status]] : []
  if (reverse) list.reverse()
  list.sort((a, b) => {
    if (Number(a.price) > Number(b.price)) {
      return -1
    } else if (Number(a.price) < Number(b.price)) {
      return 1
    } else {
      return 0
    }
  })
  while (list.length < 5) {
    if (isBuy) {
      list.push({ price: '', amount: '' })
    } else {
      list.unshift({ price: '', amount: '' })
    }
  }

  return (
    <div className={`latest-price-container ${styles['latest-price-container-wrap']}`}>
      <div className="latest-price-container-wrap">
        {list.map((v, index) => (
          <div className={isBuy ? 'buy' : 'sell'} key={index}>
            <div className="gear">
              <label>{`${
                isBuy
                  ? t`features_order_book_market_header_index_510274`
                  : t`features_order_book_market_header_index_510275`
              }${isBuy ? index + 1 : list.length - index}`}</label>
            </div>
            <div className="price">
              <label>{replaceEmpty(v.price)}</label>
            </div>
            <div className="quantity">
              <label>{replaceEmpty(v.amount)}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestPriceTableContainer
