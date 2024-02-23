import { t } from '@lingui/macro'
import { useState } from 'react'
import { C2cPaymentTabList } from '@/constants/c2c/common'
import { TabPaymentsEnum } from '@/constants/c2c/center'
import { getCollectionAccountRoutePath } from '@/helper/route'
/** 引入组件* */
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { Tabs } from 'react-vant'
import NavBar from '@/components/navbar'
import FullTip from '@/features/trade/common/full-tip'
import PayMoney from '@/features/c2c/payments/component/pay-money'
import MakePayments from '@/features/c2c/payments/component/make-payments'
import styles from './index.module.css'

function C2cPayments() {
  const [paymentsTab, setPaymentsTab] = useState<string>(TabPaymentsEnum.makeCollections)

  /** 添加收付款* */
  const onPaymentsChange = () => {
    link(getCollectionAccountRoutePath())
  }

  /** tab 切换事件* */
  const onTabsChange = v => {
    setPaymentsTab(v)
  }

  return (
    <section className={styles['payments-wrap']}>
      <NavBar
        title={t`features_message_center_index_5101354`}
        right={<Icon name="c2c_add" onClick={onPaymentsChange} className="c2c-add-icon" />}
      />
      <Tabs align="start" className="payments-tab" active={paymentsTab} onChange={onTabsChange}>
        {C2cPaymentTabList().map(item => (
          <Tabs.TabPane key={item.id} name={item.id} title={item.name} />
        ))}
      </Tabs>
      <FullTip
        message={
          paymentsTab === TabPaymentsEnum.makeCollections
            ? t`features_message_center_index_5101355`
            : t`features_message_center_index_5101356`
        }
      />
      <main className="payments-wrap-main">
        {paymentsTab === TabPaymentsEnum.makeCollections ? <MakePayments /> : <PayMoney />}
      </main>
    </section>
  )
}
export default C2cPayments
