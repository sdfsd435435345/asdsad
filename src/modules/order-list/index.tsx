import WalletHeaderCard from '@/features/assets/wallet/wallet-header-card'
import WalletTabsList from '@/features/assets/wallet/wallet-tabs-list'
import { Divider, Picker, Toast, Tabs, Popup } from 'react-vant'
import { useEffect, useRef, useState } from 'react'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import styles from './index.module.css'
import C2cFooter from '@/features/c2c/footer'
import { postMemberTransMyBuyOrderPage, postMemberTransMySoldOrderPage, postMemberTransSonOrders, postMemberCancelSoldOrder } from '@/apis/server'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/user'
import { setToken } from '@/helper/auth'
import { useUpdateEffect } from 'ahooks'
import { Success } from '@react-vant/icons'
import CommonList from '@/components/common-list/list'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'

enum Trade {
  buy = 1,
  sell = 2
}

const orderStatus = {
  [Trade.buy]: [{
    text: '待接单',
    key: 1
  }, {
    text: '待付款',
    key: 2
  }, {
    text: '待发货',
    key: 3
  }, {
    text: '已完成',
    key: 4
  }, {
    text: '已撤回',
    key: -1
  }, {
    text: '申诉单',
    key: -2
  }
  ],
  [Trade.sell]: [
    {
      text: '待交易',
      key: 0
    }, {
      text: '交易中',
      key: 1
    }, {
      text: '已完成',
      key: 2
    }, {
      text: '部分完成',
      key: 3
    }, {
      text: '已撤回',
      key: -1
    }, {
      text: '申诉单',
      key: -2
    }],
}

export const options = [
  {
    label: '当前站内信',
    value: 'mail',
  },
  {
    label: '未处理的订单',
    value: 'order',
  }
]

const messageType = {
  0: '网站',
  1: '个人'
}

function OrderList() {

  const navigate = useNavigate()

  const { userInfo } = useUserStore()

  const [fundList, setFundList] = useState<any[]>([])

  const [fundSonList, setFundSonList] = useState<any[]>([])

  const [finished, setFinished] = useState(false)

  const [selected, setSelected] = useState<number>(Trade.buy)

  const [visible, setVisible] = useState<boolean>(false)

  const { id } = userInfo


  useUpdateEffect(() => {
    requestParams.current = {
      current: 1,
      size: 10,
    }
    setFundList([])
    onLoadHistory(true)
  }, [selected])

  const requestParams = useRef({
    current: 1,
    size: 10,
  })

  const onLoadHistory = async (isFreshing?: boolean) => {

    const requestObj = {
      [Trade.buy]: postMemberTransMyBuyOrderPage,
      [Trade.sell]: postMemberTransMySoldOrderPage
    }

    const res = await requestObj?.[selected]?.({ ...requestParams.current })

    const { isOk, data, message = '' } = res || {}

    if (!isOk || !data) {
      Toast(message)
      setFinished(true)
      return
    }

    requestParams.current = {
      ...requestParams.current,
      current: requestParams.current.current + 1
    }

    const newList = isFreshing ? [...data.records] : [...fundList, ...data.records]
    setFundList(newList)
    if (newList.length >= data.total) {
      setFinished(true)
    }
  }


  const setReadInstationmail = async (seqNo) => {
    const { isOk, data } = await postMemberTransSonOrders({ current: 1, size: 20, seqNo })
    if (isOk) {
      if (data?.records?.length > 0) {
        setVisible(true)
        setFundSonList([...data?.records])
      } else {
        Toast.fail('暂无子卖单')
      }
    }
  }

  const setReadInstationmailBuy = async (seqNo) => {
    navigate(`/order-info?seqNo=${seqNo}`);
  }

  const setInspect = (seqNo) => {
    navigate(`/order-info?seqNo=${seqNo}`);
  }


  const setRevert = async (seqNo) => {
    const { isOk } = await postMemberCancelSoldOrder({ seqNo })
    if (isOk) {
      Toast.success('撤单成功')
      requestParams.current = {
        current: 1,
        size: 10,
      }
      // setFundList([])
      onLoadHistory(true)
    }
  }

  return (
    <div className={styles.scoped}>
      <NavBar
        title={
          <div className="mb-4 mt-2  w-full mx-auto px-4 flex justify-center">
          <div className='order-tab py-2'>
            <Tabs active={selected} onChange={(e) => setSelected(e as number)}>
              {[{ title: '购买', key: Trade.buy }, { title: '出售', key: Trade.sell }].map(item => (
                <Tabs.TabPane key={item.key} name={item.key} title={item.title}>
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </div>
        }
      />
 
      <Popup
        visible={visible}
        className={styles.modal}
        position='bottom'
        closeable
        destroyOnClose
        round
        onClose={() => setVisible(false)}
      >
        <div className="pt-12">
          {
            fundSonList.map(item => {
              return <div className="mx-4 rounded-lg  p-3 px-4 mb-3 bg-brand_color_light_bg relative" key={item.id}>
                <div className="text-xs">
                  订单号: {item?.seqNo}
                </div>
                <div className="text-xs">
                  订单状态: {orderStatus[Trade.buy]?.find(items => items.key === item?.orderState)?.text}
                </div>
                <span className="text-xs">
                  <div>最后更新时间: {item?.lastUpdateTime}</div>
                </span>
                <div className="text-xs">
                  交易金额: {item?.transAmount || '--'}
                </div>
                <div className="absolute text-xs text-brand_color px-3 py-2 bg-white right-6 bottom-3 rounded-2xl" onClick={() => setInspect(item?.seqNo)}>
                  查看订单
                </div>
              </div>
            })
          }
        </div>
      </Popup>

      <div className='px-4 pt-3'>
        <CommonList
          finished={finished}
          onLoadMore={onLoadHistory}
          finishedText="已全部加载完成~"
          listChildren={
            <>
              {selected === Trade.buy ?
                fundList.map(item => {
                  return <div className="mx-2 rounded-lg  p-3 px-4 mb-3 bg-brand_color_light_bg relative" key={item.id}>
                    <div className="text-xs">
                      订单号: {item?.seqNo}
                    </div>
                    <div className="text-xs">
                      订单状态: {orderStatus[Trade.buy]?.find(items => items.key === item?.orderState)?.text}
                    </div>
                    <span className="text-xs">
                      <div>创建时间: {item?.createTime}</div>
                    </span>
                    <span className="text-xs">
                      <div>最后更新时间: {item?.lastUpdateTime}</div>
                    </span>
                    <div className="text-xs">
                      交易金额: {item?.transAmount || '--'}
                    </div>
                    <div className="text-xs">
                      剩余金额: {item?.leftAmount || '--'}
                    </div>
                    <div className="text-xs">
                      手续费(卖家): {item?.transFee || '--'}
                    </div>
                    <div className="text-xs">
                      备注：{item?.remark || '--'}
                    </div>
                    <div className="text-xs">
                      最低可拆金额：{item?.splitMin || '--'}
                    </div>
                    <div className="absolute text-xs text-brand_color px-3 py-2 bg-white right-6 bottom-3 rounded-2xl" onClick={() => setReadInstationmailBuy(item?.seqNo)}>
                      点击查看
                    </div>
                  </div>
                }) : fundList.map(item => {
                  return <div className="mx-2 rounded-lg  p-3 mb-3 bg-brand_color_light_bg relative" key={item.id}>
                    <div className="text-xs">
                      订单号: {item?.seqNo}
                    </div>
                    <div className="text-xs">
                      订单状态: {orderStatus[Trade.sell]?.find(items => items.key === item?.orderState)?.text}
                    </div>
                    <span className="text-xs">
                      <div>创建时间: {item?.createTime}</div>
                    </span>
                    <span className="text-xs">
                      <div>最后更新时间: {item?.lastUpdateTime}</div>
                    </span>
                    <div className="text-xs">
                      交易金额: {item?.transAmount || '--'}
                    </div>
                    <div className="text-xs">
                      剩余金额: {item?.leftAmount || '--'}
                    </div>
                    <div className="text-xs">
                      手续费(卖家): {item?.transFee || '--'}
                    </div>
                    <div className="text-xs">
                      备注：{item?.remark || '--'}
                    </div>
                    <div className="text-xs">
                      最低可拆金额：{item?.splitMin || '--'}
                    </div>
                    <div className="absolute text-xs text-brand_color px-3 py-2 bg-white right-24 bottom-3 rounded-2xl" onClick={() => setRevert(item?.seqNo)}>
                      撤单
                    </div>
                    <div className="absolute text-xs text-brand_color px-3 py-2 bg-white right-4 bottom-3 rounded-2xl" onClick={() => setReadInstationmail(item?.seqNo)}>
                      点击查看
                    </div>
                  </div>
                })
              }
            </>
          }
          showEmpty={fundList.length === 0}
        />

      </div>
      {/* <C2cFooter /> */}
    </div>
  )
}

export default OrderList