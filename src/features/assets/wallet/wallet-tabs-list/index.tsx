import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import { useState } from 'react'
import styles from './index.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { PendingPayment } from '@react-vant/icons'


function WalletTabsList({ cancel }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  const navigate = useNavigate()

  const navigateRoute = (url) => {
    cancel()
    navigate(`${url}?token=${token}`)
  }

  return (
    <div className={styles.scoped}>
      <div className="handle-button-icon">
        {/* <div>
          <Icon name="assets_withdrawal" hasTheme />
          <div>币U互换</div>
        </div> */}
        <div onClick={() => { navigateRoute('/instationmail') }}>
          <Icon name="assets_deposit" hasTheme />
          <div>站内信</div>
        </div>
        <div onClick={() => navigateRoute('/kyc') }>
          <Icon name="assets_financial_records" hasTheme />
          <div>kyc认证</div>
        </div>
        <div onClick={() => navigateRoute('/c2cpayments') }>
          <PendingPayment  />
          <div>支付方式</div>
        </div>
        <div onClick={() => navigateRoute('/orderlist') }>
          <Icon onClick={() => {}} name="c2c_icon_order" hasTheme />
          <div>订单列表</div>
        </div>
      </div>
      <div className="handle-button">
         <div onClick={() => navigateRoute('/coin-shop') }>买币</div>
         <div onClick={() => navigateRoute('/edit-buy-coin') } >卖币</div>
      </div>
    </div>
  )
}

export default WalletTabsList
