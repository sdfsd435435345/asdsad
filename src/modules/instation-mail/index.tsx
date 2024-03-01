import { WalletCoinList } from '@/features/assets/wallet/wallet-coin-list'
import WalletHeaderCard from '@/features/assets/wallet/wallet-header-card'
import WalletTabsList from '@/features/assets/wallet/wallet-tabs-list'
import { Divider, Picker, Toast, Selector } from 'react-vant'
import NavBar from '@/components/navbar'
import { useEffect, useRef, useState } from 'react'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import styles from './index.module.css'
import C2cFooter from '@/features/c2c/footer'
import { postSiteMessageSiteMessagePage, postSiteMessageRunningOrderPage, postSiteMessageDelMessage, postSiteMessageMakeRead } from '@/apis/server'
import { useLocation } from 'react-router-dom';
import { useUserStore } from '@/store/user'
import { setToken } from '@/helper/auth'
import { useUpdateEffect } from 'ahooks'
import { Success } from '@react-vant/icons'
import CommonList from '@/components/common-list/list'

enum Trade {
  buy = 1,
  sell = 0
}

const orderStatus = {
  [Trade.buy]: [{
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
  [Trade.sell]: [{
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

function InstationMail() {

  const { userInfo } = useUserStore()

  const [fundList, setFundList] = useState<any[]>([])

  const [finished, setFinished] = useState(false)

  const [selected, setSelected] = useState(['mail'])

  const { id } = userInfo
  

  useUpdateEffect(() => {
    requestParams.current = {
      current: 1,
      size: 10,
    }
    setFundList([])
    onLoadHistory(true)
  }, [selected[0]])

  const requestParams = useRef({
    current: 1,
    size: 10,
  })

  const onLoadHistory = async (isFreshing?:boolean) => {

    const requestObj = {
      mail: postSiteMessageSiteMessagePage,
      order: postSiteMessageRunningOrderPage
    }

    const res = await requestObj?.[selected[0]]?.({ ...requestParams.current })

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

  const setDeleteInstationmail = async (id) => {
    const { isOk } = await postSiteMessageDelMessage({ id })
    if(isOk) {
      Toast('删除成功')
      requestParams.current = {
        current: 1,
        size: 10,
      }
      onLoadHistory(true)
    }
  }

  const setReadInstationmail = async (id) => {
    const { isOk } = await postSiteMessageMakeRead({ id })
    if(isOk) {
      Toast('设置已读成功')
      requestParams.current = {
        current: 1,
        size: 10,
      }
      onLoadHistory(true)
    }
  }

  const setViewOrder = () => {}


  return (
    <div className={styles.scoped}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>站内信</span>
          </div>
        }
      />
      <div className="mt-2 mb-4 w-full mx-auto px-4">
        <div>
          <Selector
            style={{
              '--rv-selector-border-radius': '100px',
              '--rv-selector-checked-border':
                'solid var(--adm-color-primary) 1px',
              '--rv-selector-padding': '5px 15px',
            }}
            showCheckMark={false}
            options={options}
            value={selected}
            onChange={(arr) => setSelected([...arr])}
          />
        </div>
      </div>

      <div className='px-4'>
        <CommonList
          finished={finished}
          onLoadMore={onLoadHistory}
          finishedText="已全部加载完成~"
          listChildren={
            <>
              { selected[0] === "mail" ?
                fundList.map(item => {
                  return <div className="mx-2 rounded-lg  p-3 mb-3 bg-brand_color_light_bg relative" key={item.accountNo}>
                    {item?.isRead && <div className="absolute text-xs text-brand_color px-2 py-1 bg-white right-0 top-0 rounded-bl-2xl">
                      已读
                    </div>}
                    <span className="text-xs">
                      <div>创建时间: {item?.createTime}</div>
                    </span>
                    <span className="text-xs">
                      <div>最后更新时间: {item?.lastUpdateTime}</div>
                    </span>
                    <div className="text-xs">
                      会员ID: {item?.memberId}
                    </div>
                    <div className="text-xs">
                      信息类型: {messageType[item?.messageType]}
                    </div>
                    <div className="text-xs">
                      备注：{item?.remark || '--'}
                    </div>
                    <div className="text-xs">
                      内容：{item?.messageContent || '--'}
                    </div>
                    <div className="absolute text-xs text-brand_color px-2 py-1 bg-white right-14 bottom-3 rounded-2xl"  onClick={()=>setReadInstationmail(item?.id)}>
                      设置为已读
                    </div>
                    <div className="absolute text-xs text-red-500 px-2 py-1 bg-white right-3 bottom-3 rounded-2xl" onClick={()=>setDeleteInstationmail(item?.id)}>
                      删除
                    </div>
                  </div>
                }) :  fundList.map(item => {
                  return <div className="mx-2 rounded-lg  p-3 mb-3 bg-brand_color_light_bg relative" key={item.accountNo}>
                    {/* {item?.isRead && <div className="absolute text-xs text-brand_color px-2 py-1 bg-white right-0 top-0 rounded-bl-2xl">
                      已读
                    </div>} */}
                    <span className="text-xs">
                      <div>订单号: {item?.seqNo}</div>
                    </span>
                    <span className="text-xs">
                      <div>交易金额: {item?.transAmount}</div>
                    </span>
                    <div className="text-xs">
                      订单状态: {orderStatus[item?.soldId === id ? Trade.sell : Trade.buy]?.find(items=> items.key === item?.orderState)?.text}
                    </div>
                    {/* <div className="text-xs">
                      信息类型: {messageType[item?.messageType]}
                    </div>
                    <div className="text-xs">
                      备注：{item?.remark || '--'}
                    </div>
                    <div className="text-xs">
                      内容：{item?.messageContent || '--'}
                    </div> */}
                    <div className="absolute text-xs text-brand_color px-2 py-1 bg-white right-10 bottom-3 rounded-2xl"  onClick={()=>setViewOrder()}>
                      去查看
                    </div>
                    {/* <div className="absolute text-xs text-red-500 px-2 py-1 bg-white right-3 bottom-3 rounded-2xl" onClick={()=>setDeleteInstationmail(item?.id)}>
                      删除
                    </div> */}
                  </div>
                }) 
              }
            </>
          }
          showEmpty={fundList.length === 0}
        />

      </div>
    </div>
  )
}

export default InstationMail