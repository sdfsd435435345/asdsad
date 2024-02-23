import { link } from '@/helper/link'
import { getAssetsRechargePageRoutePath, getC2cFastTradePageRoutePath } from '@/helper/route'
import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import { useState } from 'react'
import styles from './index.module.css'
import WithdrawAction from '../../common/withdraw-action'

function WalletTabsList() {
  return (
    <div className={styles.scoped}>
      <div className="handle-button-icon">
        <div>
          <Icon name="assets_withdrawal" hasTheme />
          <div>币U互换</div>
        </div>
        <div onClick={() => link(getAssetsRechargePageRoutePath())}>
          <Icon name="assets_deposit" hasTheme />
          <div>站内信</div>
        </div>
        <div>
          <Icon onClick={() => link(getC2cFastTradePageRoutePath())} name="assets_c2c" hasTheme />
          <div>客服</div>
        </div>
      </div>
      <div className="handle-button">
         <div>买币</div>
         <div>卖币</div>
      </div>
    </div>
  )
}

export default WalletTabsList
