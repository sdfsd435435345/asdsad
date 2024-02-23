/**
 * 企业认证 - 组件
 */
import { t } from '@lingui/macro'
import { Button, Image } from 'react-vant'
import { useState, useEffect } from 'react'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { getMainData } from '@/apis/kyc'
import LazyImage from '@/components/lazy-image'
import styles from './standards.module.css'

export function KycIndexBusiness() {
  const [data, setData] = useState<any>('')
  const [isOver, setIsOver] = useState(false)
  /**
   * 获取主页数据
   */
  const getUserInfo = async () => {
    const res = await getMainData({})
    if (res.isOk) {
      setData(res.data)
      if (res.data.kycType === 4) {
        setIsOver(true)
      }
    }
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  // 单位换算
  function number(val) {
    if (val >= 0) {
      return val >= 1000 ? `$${val / 1000}K` : `$${val}`
    } else {
      return ''
    }
  }
  function number_text(val) {
    if (val >= 0) {
      return t`features_kyc_index_5101102`
    } else {
      return t`features_kyc_index_5101103`
    }
  }

  function number_text2() {
    if (data?.kycType === 1) {
      return (
        <Button className="kyc_button kyc_button_not border-none text-text_color_04">
          {t`features_kyc_index_business_5101198`}
        </Button>
      )
    } else if (data?.kycType === 4) {
      return ''
    } else {
      return (
        <Button className="kyc_button kyc_button_not border-none text-text_color_04">
          {t`features_kyc_index_business_5101199`}
        </Button>
      )
    }
  }

  function getMenus() {
    let dataA = { cashOutNum: '', otcBuy: '', otcSell: '', monkeyPay: '' }

    data?.kycTypeRules?.forEach(e => {
      if (e.kycType === 4) {
        dataA = e
      }
    })
    const menus = {
      list1: [
        {
          title: t`features_kyc_index_business_5101198`,
          icon: 'kyc/icon_computer',
          remote: true,
        },
        {
          title: t`features_kyc_index_standards_5101188`,
          icon: 'certification_time',
        },
      ],
      list2: [
        {
          title: t`features_kyc_index_standards_5101189`,
          price: data && number(dataA.otcBuy),
          unit: data && number_text(dataA.otcBuy),
        },
        {
          title: t`features_kyc_index_standards_5101190`,
          price: data && number(dataA.otcSell),
          unit: data && number_text(dataA.otcSell),
        },
      ],
      list3: [
        {
          title: t`assets.financial-record.tabs.Deposit`,
          price: data && number(dataA.monkeyPay),
          unit: data && number_text(dataA.monkeyPay),
        },
        {
          title: t`assets.common.withdraw`,
          price: data && number(dataA.cashOutNum),
          unit: data && number_text(dataA.cashOutNum),
        },
      ],
    }
    return menus
  }

  const menus = getMenus()

  return (
    <div className={styles['overview-wrapper']}>
      <div className="title">
        {t`features_kyc_index_standards_5101194`}
        <div className={isOver ? 'over' : 'hidden'}>
          <LazyImage
            width={15}
            height={15}
            className="icon_img"
            src={'http://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/user_verifieduser_verified.png'}
          />
          {t`assets.financial-record.complete`}
        </div>
      </div>
      {menus.list1.map(menu => {
        return (
          <div key={menu.title} className="menu-item rv-hairline--bottom">
            <div className="flex item-center">
              <Icon className="icon_n" hasTheme name={menu.icon} isRemoteUrl={menu.remote} />
              <span className="text-text_color_02">{menu.title}</span>
            </div>
            <div className="flex flex-col items-end"></div>
          </div>
        )
      })}
      <div className="title">{t`features_kyc_index_standards_5101195`}</div>
      <div className="m_title">
        <Icon name="login_password_satisfy" className={isOver ? 'mr-1' : 'hidden'} />
        {t`features_kyc_index_standards_5101196`}
      </div>
      {menus.list2.map(menu => {
        return (
          <div key={menu.title} className="menu-item rv-hairline--bottom">
            <div className="flex">
              <span className="text-text_color_02">{menu.title}</span>
            </div>
            <div className="flex items-end text-text_color_01">
              {menu.price}
              <span className="ml-1">{menu.unit}</span>
            </div>
          </div>
        )
      })}
      <div className="m_title">
        <Icon name="login_password_satisfy" className={isOver ? 'mr-1' : 'hidden'} />
        {t`features_kyc_index_standards_5101197`}
      </div>
      {menus.list3.map(menu => {
        return (
          <div key={menu.title} className="menu-item rv-hairline--bottom">
            <div className="flex">
              <span className="text-text_color_02">{menu.title}</span>
            </div>
            <div className="flex items-end text-text_color_01">
              {menu.price}
              <span className="ml-1">{menu.unit}</span>
            </div>
          </div>
        )
      })}
      {number_text2()}
    </div>
  )
}
