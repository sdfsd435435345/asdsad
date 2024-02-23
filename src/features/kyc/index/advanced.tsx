/**
 * 个人高级认证 - 组件
 */
import { t } from '@lingui/macro'
import { Button, Image } from 'react-vant'
import { useState, useEffect } from 'react'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { getMainData } from '@/apis/kyc'
import { setKycData } from '@/helper/cache'
import LazyImage from '@/components/lazy-image'
import { useJudgeIsNotAble } from './useJudgeIsNotAble'
import styles from './standards.module.css'

export function KycIndexAdvanced() {
  const [data, setData] = useState<any>()
  const [isOver, setIsOver] = useState(false)
  /**
   * 获取主页数据
   */
  const getUserInfo = async () => {
    const res = await getMainData({})
    if (res.isOk) {
      setData(res.data)
      if (res.data.kycType === 3) {
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

  // 开始认证
  const begin = () => {
    let kyc_data = {
      area: {
        remark: data.countryDetail.shortName,
        codeKey: data.countryDetail.fullName,
        codeVal: data.countryDetail.enCode,
      },
    }
    setKycData(kyc_data)
    link('/kyc/load-vip')
  }

  // 跳转失败
  const goFail = () => {
    data.type = 2
    setKycData(data)
    link('/kyc/fail')
  }

  const { getJudgeIsNotAble } = useJudgeIsNotAble()

  // 按钮
  function button_text() {
    let dataA = { auditStatus: 0, isReadResult: 0 }
    data?.auditMaps?.forEach(e => {
      if (e.kycType === 3) {
        dataA = e
      }
    })

    if (getJudgeIsNotAble(data) && data.kycType === 1) {
      return <Button className="kyc_button_not">{t`features_kyc_index_business_5101199`}</Button>
    } else if (data?.kycType === 1 && (dataA?.auditStatus !== 3 || dataA?.isReadResult !== 2)) {
      return (
        <Button type="primary" className="kyc_button bg-bg_button_disabled border-none text-text_color_04">
          {t`features_kyc_index_advanced_5101200`}
        </Button>
      )
    } else if (data?.kycType === 2 || (dataA?.auditStatus === 3 && dataA?.isReadResult === 2)) {
      if (dataA) {
        if (dataA?.auditStatus === 1) {
          return (
            <Button type="primary" className="kyc_button">
              {t`features_kyc_index_standards_5101191`}
            </Button>
          )
        } else if (dataA?.auditStatus === 3 && dataA?.isReadResult === 2) {
          return (
            <Button type="primary" className="kyc_button_fail" onClick={goFail}>
              {t`features_kyc_index_standards_5101192`}
            </Button>
          )
        } else if (dataA?.auditStatus === 2) {
          return ''
        } else {
          return (
            <Button type="primary" className="kyc_button" onClick={begin}>
              {t`features_kyc_index_standards_5101193`}
            </Button>
          )
        }
      } else {
        if (data?.auditMaps[0].auditStatus === 2) {
          return (
            <Button type="primary" className="kyc_button" onClick={begin}>
              {t`features_kyc_index_standards_5101193`}
            </Button>
          )
        } else {
          return ''
        }
      }
    } else {
      return ''
    }
  }

  function getMenus() {
    let dataA = { cashOutNum: '', otcBuy: '', otcSell: '', monkeyPay: '' }
    data?.kycTypeRules.forEach(e => {
      if (e.kycType === 3) {
        dataA = e
      }
    })
    const menus = {
      list1: [
        {
          title: t`features_kyc_load_vip_index_5101167`,
          icon: 'kyc/icon_kyc_address',
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
              <Icon name={menu.icon} hasTheme className="icon_n" isRemoteUrl={menu.remote} />
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

      {button_text()}
    </div>
  )
}
