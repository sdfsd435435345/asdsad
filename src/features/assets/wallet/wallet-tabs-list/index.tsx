import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import { useState } from 'react'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import { PendingPayment } from '@react-vant/icons'

function WalletTabsList() {

  const navigate = useNavigate()

  return (
    <div className={styles.scoped}>
      <div className="handle-button-icon">
        <div>
          <Icon name="assets_withdrawal" hasTheme />
          <div>币U互换</div>
        </div>
        <div onClick={() => { navigate('/instationmail') }}>
          <Icon name="assets_deposit" hasTheme />
          <div>站内信</div>
        </div>
        <div onClick={() => navigate('/kyc') }>
          <Icon name="assets_financial_records" hasTheme />
          <div>kyc认证</div>
        </div>
        <div onClick={() => navigate('/c2cpayments') }>
          <PendingPayment  />
          <div>支付方式</div>
        </div>
        {/* <div>
          <Icon onClick={() => {}} name="assets_c2c" hasTheme />
          <div>客服</div>
        </div> */}
      </div>
      <div className="handle-button">
         <div onClick={() => navigate('/coin-shop') }>买币</div>
         <div onClick={() => navigate('/sell-coin') } >卖币</div>
      </div>
    </div>
  )
}

export default WalletTabsList
