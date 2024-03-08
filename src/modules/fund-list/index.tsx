import { Divider, Picker, Radio } from 'react-vant'
import NavBar from '@/components/navbar'
import { useEffect, useState, useRef } from 'react'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import styles from './index.module.css'
import { Popup, Button, Input, Form, Toast } from 'react-vant'
import { postMemberMoneyMoneyLogDetailPage } from '@/apis/server'
import CommonList from '@/components/common-list/list'
import Icon from '@/components/icon'


const MERCHANTTYPE = {
  0:{
    22: '创建卖单减款',
    32: '额度转换提币'
  },
  1:{
    11: '完成申诉单加款',
    21: '卖家撤单加款',
    13: '交易完成加款',
    31: '额度转换充币',
  },
  all: {
    22: '创建卖单减款',
    32: '额度转换提币',
    11: '完成申诉单加款',
    21: '卖家撤单加款',
    13: '交易完成加款',
    31: '额度转换充币',
  }

}

const columns = [
  { text: '减款', value: 0 },
  { text: '加款', value: 1 },
]

function FundList() {

  const [fundList, setFundList] = useState<any[]>([])

  const [moneyTypeList, setMoneyTypeList] = useState<any[]>([])

  const requestParams = useRef({
    current: 1,
    size: 10,
    moneySide: "",
    moneyType: ""
  })

  // const getMmberMoneyLastMoneyLog = async () => {
  //   const { isOk, data } = await postMemberMoneyMoneyLogDetailPage({ ...requestParams.current })
  //   if (isOk) {
  //     setFundList(data?.records)
  //     requestParams.current = {
  //       ...requestParams.current,
  //       current: requestParams.current.current + 1
  //     }
  //   }
  // }



  const [finished, setFinished] = useState(false)

  const [homeFavType, setHomeFavType] = useState()

  const [moneyTypeState, setMoneyTypeState] = useState()

  const getList = () => {
    return homeFavType !==undefined ? MERCHANTTYPE?.[homeFavType] : MERCHANTTYPE.all
  }


  useEffect(() => {

    const list = getList()
    console.log(list, 'listlistlist');
    
    const moneyTypeLists = Object.keys(list).map(item => {
      return {
        value: item,
        text: list[item]
      }
    })

    setMoneyTypeList(moneyTypeLists)

    const moneyType = moneyTypeLists.find(item => item.value === moneyTypeState)?.text

    if(!moneyType) {
      setMoneyTypeState(undefined)
      requestParams.current = { ...requestParams.current, moneyType  }
    }
    
    onLoadHistory(true)
  }, [homeFavType])

  /**
   * 获取历史记录
   */
  const onLoadHistory = async (isRefresh?: boolean) => {

    const res = await postMemberMoneyMoneyLogDetailPage({ ...requestParams.current })

    console.log(requestParams.current, 'requestParams.currentrequestParams.current');
    

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

    const newList = isRefresh ? [...data.records] : [...fundList, ...data.records]
    setFundList(newList)
    if (newList.length >= data.total) {
      setFinished(true)
    } else {
      setFinished(false)
    }
  }

  const [visible, setvisible] = useState(false)

  const [fundVisible, setFundVisible] = useState(false)
  
  return (
    <div className={styles.scoped}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>资金记录</span>
          </div>
        }
      />
      <div className="px-5 my-4 flex">
        <div>
          <span className="text-sm" onClick={() => setFundVisible(true)}>
            {homeFavType === undefined ? '资金方向' : columns.find(item => item.value === homeFavType)?.text}
            <Icon name="regsiter_icon_drop" hasTheme className="ml-1 fav-dropdown-icon" />
          </span>
          <Popup round visible={fundVisible} position="bottom">
            <Picker
              // value={homeFavType}
              onCancel={() => setFundVisible(false)}
              columns={columns}
              onConfirm={(v) => {
                setFundVisible(false)
                setHomeFavType(v)
                requestParams.current = {
                  ...requestParams.current, moneySide: v === undefined ? "" : v, current: 1,
                  size: 10,
                }
                // setFinished(false)

              }}
            />
          </Popup>
        </div>
        <div className="ml-4">
          <span className="text-sm" onClick={() => setvisible(true)}>
            {!moneyTypeState ? '交易类型' : moneyTypeList.find(item => item.value === moneyTypeState)?.text}
            <Icon name="regsiter_icon_drop" hasTheme className="ml-1 fav-dropdown-icon" />
          </span>
          <Popup round visible={visible} position="bottom">
            <Picker
              // value={homeFavType}
              onCancel={() => setvisible(false)}
              columns={moneyTypeList}
              onConfirm={(v) => {
                setvisible(false)
                setMoneyTypeState(v)
                requestParams.current = {
                  ...requestParams.current, moneyType: v === undefined ? "" : v, current: 1,
                  size: 10,
                }
 
                onLoadHistory(true)
              }}
            />
          </Popup>
        </div>
      </div>
      
      <div className='px-4'>
        <CommonList
          finished={finished}
          onLoadMore={onLoadHistory}
          finishedText="已全部加载完成~"
          listChildren={
            <>
              {
                fundList.map(item => {
                  return <div className="mx-2 rounded-lg h-[110px] p-3 mb-3 bg-brand_color_light_bg relative" key={Math.random()}>
                    <span className="text-sm">
                      <div>类型: {getList()?.[item?.moneyType]}</div>
                    </span>
                    <span className="text-sm ">时间：{item?.createTime}</span>
                    <span className="text-sm pl-2">交易数量：{item?.moneySide === 0 ? '-' : '+'}{item?.transAmount}</span>
                    {<div className="mr-3 text-sm">
                      买单单号: {item.buyOrderSeqNo || '--'}
                    </div>}
                    {<div className="mr-2 text-sm">
                      卖单单号:  {item.soldOrderSeqNo || '--'}
                    </div>}
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

export default FundList