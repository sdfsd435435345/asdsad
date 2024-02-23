import React from 'react'
import { i18n } from '@lingui/core'
import styles from './index.module.css'

/**
 * currency
 * price: 价格
 */
export default ({ currency, price }) => {
  return (
    <div className={styles.scoped}>
      <div className="price">{i18n.number(price, { style: 'currency', currency })}</div>
    </div>
  )
}
