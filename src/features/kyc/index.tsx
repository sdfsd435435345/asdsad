import NavBar from '@/components/navbar'
import { t } from '@lingui/macro'
import { useCreation } from 'ahooks'
import { useState, useEffect } from 'react'
import { Tabs, Popup, PopupPosition, Button, Image } from 'react-vant'

import { useAssetsStore } from '@/store/assets/spot'
import { KycIndexStand } from '@/features/kyc/index/standards'
import { KycIndexAdvanced } from '@/features/kyc/index/advanced'
import { KycIndexBusiness } from '@/features/kyc/index/business'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import LazyImage from '@/components/lazy-image'
import { MemberMemberPhoneAreaType } from '@/typings/user'
import { getMainData } from '@/apis/kyc'
import { link } from '@/helper/link'
import Icon from '@/components/icon'
import styles from './index.module.css'

export default function KycIndex() {
  const [area, setArea] = useState<MemberMemberPhoneAreaType>()
  const [selectArea, setSelectArea] = useState<boolean>(false)
  const [data, setData] = useState<any>('')
  const { activeTab, updateAssetsModule } = useAssetsStore().assetsModule
  const [state, setState] = useState<PopupPosition>('')
  const onClose = () => setState('')

  /**
   * 获取主页数据
   */
  const getUserInfo = async () => {
    const res = await getMainData({})
    if (res.isOk) {
      setArea(res.data.countryDetail)
      setSelectArea(false)
      setData(res.data)
    }
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  // 单位换算
  function number(val) {
    if (!val) {
      return false
    }
    if (val >= 0) {
      return `$${val / 1000}K`
    } else {
      return t`features_kyc_index_5101103`
    }
  }
  function number_text(val) {
    if (!val) {
      return false
    }
    if (val >= 0) {
      return t`features_kyc_index_5101102`
    } else {
      return ''
    }
  }

  // 权益内容

  enum kycType {
    notCertiFied = 1, // 未认证
    certiFied = 2, // 个人标准认证
    certiVip = 3, // 个人高级认证
    certiBusiness = 4, // 企业高级认证
  }

  const getKycTypeShowProfit = (kycTypeRules, kycTypes) => {
    return kycTypeRules?.find(item => item?.kycType === kycTypes)
  }

  const text = () => {
    switch (data.kycType) {
      case undefined:
      case kycType.notCertiFied:
        return (
          <div>
            <LazyImage
              src="http://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/equity_not_certified.png"
              className="mt-9 mb-3 w-24 inline-block"
              width={96}
              height={96}
            />
            <div className="text-text_color_01 text-base font-semibold mb-3">{t`features_kyc_index_5101104`}</div>
            <div className="text-sm text-text_color_03 mb-3">{t`features_kyc_index_5101105`}</div>
          </div>
        )
      case kycType.certiFied:
      case kycType.certiVip:
      case kycType.certiBusiness:
        return (
          <div>
            <div className="text-left mt-6">
              <div>
                <Icon name="icon_equity_buy" hasTheme className="mr-2" />
                <span className="text-text_color_01 text-base font-semibold">
                  {number(data && getKycTypeShowProfit(data?.kycTypeRules, data?.kycType)?.otcBuy)}
                </span>
                <span className="text-text_color_02 text-sm ml-1">
                  {number_text(data && getKycTypeShowProfit(data?.kycTypeRules, data?.kycType)?.otcBuy)}
                </span>
              </div>
              <div className="pl-6 text-text_color_02">{t`features_kyc_index_5101106`}</div>
            </div>
            <div className="text-left mt-6">
              <div>
                <Icon name="icon_equity_sell" hasTheme className="mr-2" />
                <span className="text-text_color_01 text-base font-semibold">
                  {number(data && getKycTypeShowProfit(data?.kycTypeRules, data?.kycType)?.otcSell)}
                </span>
                <span className="text-text_color_02 text-sm ml-1">
                  {number_text(data && getKycTypeShowProfit(data?.kycTypeRules, data?.kycType)?.otcSell)}
                </span>
              </div>
              <div className="pl-6 text-text_color_02">{t`features_kyc_index_5101107`}</div>
            </div>
            <div className="text-left mt-6">
              <div>
                <Icon name="icon_equity_recharge" hasTheme className="mr-2" />
                <span className="text-text_color_01 text-base font-semibold">
                  {number(data && getKycTypeShowProfit(data?.kycTypeRules, data?.kycType)?.monkeyPay)}
                </span>
                <span className="text-text_color_02 text-sm ml-1">
                  {number_text(data && getKycTypeShowProfit(data?.kycTypeRules, data?.kycType)?.monkeyPay)}
                </span>
              </div>
              <div className="pl-6 text-text_color_02">{t`features_kyc_index_5101108`}</div>
            </div>
            <div className="text-left mt-6">
              <div>
                <Icon name="icon_equity_withdrawal" hasTheme className="mr-2" />
                <span className="text-text_color_01 text-base font-semibold">
                  {number(data && getKycTypeShowProfit(data?.kycTypeRules, data?.kycType)?.cashOutNum)}
                </span>
                <span className="text-text_color_02 text-sm ml-1">
                  {number_text(data && getKycTypeShowProfit(data?.kycTypeRules, data?.kycType)?.cashOutNum)}
                </span>
              </div>
              <div className="pl-6 text-text_color_02">{t`features_kyc_index_5101109`}</div>
            </div>
          </div>
        )
      default:
        break
    }
  }

  // 节点缓存
  const tabs = useCreation(() => {
    return [
      { title: t`features_kyc_index_5101110`, content: <KycIndexStand />, id: `1` },
      { title: t`features_kyc_index_5101111`, content: <KycIndexAdvanced />, id: '2' },
      { title: t`features_kyc_index_5101112`, content: <KycIndexBusiness />, id: '3' },
    ]
  }, [])

  /**
   * 关闭弹窗
   */
  const onCloseModal = () => {
    // setFormData(defaultFormData)
    onClose()
  }

  return (
    <div className={`kyc-index ${styles.scoped}`}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>{t`features_kyc_index_5101113`}</span>
          </div>
        }
      />
      <div className="kyc-index-wrap">
        <div className="kyc-index-wrap-top">
          <div className="top">
            {t`features_kyc_index_5101114`}
            <span className="icon">
              <Icon name="c2c_authentication" className="text-2xl" />
            </span>
          </div>
          <div className="bottom">
            <span className="tag relative" onClick={() => setState('bottom')}>
              <Icon name="icon_certification_equity" className="w-5 h-5 absolute text-xl inline-block left-2 top-1" />
              {t`features_kyc_index_5101115`}
            </span>
            <span className="china_icon">
              {area?.shortName && (
                <LazyImage
                  className="w-6 h-6 round"
                  lazyload
                  width={24}
                  height={24}
                  src={`${oss_area_code_image_domain_address}${area?.shortName}.png`}
                />
              )}
            </span>
          </div>
        </div>

        <div className="kyc-index-wrap-center">
          <Tabs
            className="tabs"
            active={activeTab}
            onClickTab={(params: any) => {
              updateAssetsModule({ activeTab: params.nam })
            }}
          >
            {tabs.map(({ title, content, id }) => (
              <Tabs.TabPane title={title} name={id} key={id}>
                {content}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
        <Popup
          visible={state === 'bottom'}
          style={{ height: data.kycType === 1 ? '360px' : '420px' }}
          round
          position="bottom"
          onClose={onCloseModal}
        >
          <div className="kyc_popup px-4">
            <div className="flex flex-row items-center justify-between pt-4">
              <span className="text-base text-text_color_01 font-semibold">{t`features_kyc_index_5101116`}</span>
              <Icon hasTheme name="close" className="close-icon text-xl" onClick={onCloseModal} />
            </div>
            <div className="text-center">
              {text()}
              <Button
                type="primary"
                className="w-full mt-8 font-semibold"
                onClick={onCloseModal}
              >{t`common.confirm`}</Button>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  )
}
