import { t } from '@lingui/macro'
import { useMount } from 'ahooks'
import { useState, useEffect } from 'react'
import { getAreaList } from '@/apis/c2c/common'
import { getCodeDetailList } from '@/apis/common'
import { useC2CCenterStore } from '@/store/c2c/center'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import { usePageContext } from '@/hooks/use-page-context'
import { getPaymentUser, addPayment, modifyPayment } from '@/apis/c2c/payment'
import { C2cStatusEnum } from '@/constants/c2c/center'
import { PayMentTypeProps, CodeDetailType } from '@/constants/c2c/common'
import { C2CMakePaymentsType } from '@/typings/api/c2c/center'
import { AdvertisingDictionaryTypeEnum } from '@/constants/c2c/advertise'
/** 引入的组件* */
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { Toast } from 'react-vant'
import BankForm from '@/features/c2c/payments/component/bank-form'
import PayPopup from '@/features/c2c/payments/component/pay-popup'
import TradingArea from '@/features/c2c/payments/component/trading-area'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import styles from './index.module.css'

function CollectionAccount() {
  const [loading, setLoading] = useState<boolean>(false)
  const [payShow, setPayShow] = useState<boolean>(false)
  const [fullLoading, setFullLoading] = useState<boolean>(true)
  /** 交易区* */
  const [areaList, setAreaList] = useState<C2CAreaListResp[]>([])
  /** 选择的交易区* */
  const [areaSelectList, setAreaSelectList] = useState<C2CAreaListResp[]>([])
  /** 查询到的用户详情数据* */
  const [paymentUser, setPaymentUser] = useState<C2CMakePaymentsType>()
  const [tradingAreaVisible, setTradingAreaVisible] = useState(false)
  const [accountId, setAccountId] = useState<string>('')
  const [payType, setPayType] = useState<CodeDetailType>()
  const [colorType, setColorType] = useState<CodeDetailType>()
  const [remarkType, setRemarkType] = useState<CodeDetailType>()
  const [remarkContent, setRemarkContent] = useState<string>('')
  const [paymentTypeData, setPaymentTypeData] = useState<PayMentTypeProps>()
  const [typePaymentList, setTypePaymentList] = useState<CodeDetailType[]>([])

  const pageContext = usePageContext()
  const { setPaymentTypeStore } = useC2CCenterStore()

  const showToast = (text: string, type: string) => {
    Toast[type](text)
  }

  const onSelectContent = () => {
    setPayShow(true)
  }
  const onPayShowClose = () => {
    setPayShow(false)
  }
  const onPayShowChange = v => {
    setPayType(v)
    setPayShow(false)
  }

  /** 删除选择的交易区* */
  const onTagClose = (v: C2CAreaListResp, e: Event) => {
    e.stopPropagation()
    const newTagList = areaSelectList?.filter(item => item.legalCurrencyId !== v.legalCurrencyId)
    setAreaSelectList(newTagList || [])
  }

  const onCollectionSelect = () => {
    setTradingAreaVisible(true)
  }
  const onTradingAreaChange = v => {
    setPayType({} as CodeDetailType)
    setAreaSelectList(v)
    setTradingAreaVisible(false)
  }

  /** 获取路由数据* */
  const getRouterId = () => {
    const id = pageContext?.urlParsed?.search?.id
    return { id }
  }

  /** 获取详情数据* */
  const getPaymentDetails = async () => {
    const { data: areaData, isOk: isAreaOk } = await getAreaList({ returnAll: true })
    const { data: typeData, isOk: isTypeOk } = await getCodeDetailList({
      codeVal: AdvertisingDictionaryTypeEnum.paymentType,
      customConfig: {
        withFastPayServer: true,
        withFastPayToken: false,
      },
    })
    isTypeOk && setTypePaymentList(typeData as CodeDetailType[])
    if (!isAreaOk) return setFullLoading(false)
    const newAreaData = areaData || []
    setAreaList(newAreaData as C2CAreaListResp[])
    const { id } = getRouterId()
    if (!id) {
      const defaultArea = newAreaData?.[0]
      defaultArea && setAreaSelectList([defaultArea])
      setFullLoading(false)
      return
    }
    const { data, isOk } = await getPaymentUser({ id })
    if (isOk) {
      const currencyIdData = data?.payment?.legalCurrencyId?.split(',') || []
      const filterShowPayment: C2CAreaListResp[] = []
      currencyIdData?.forEach(item => {
        const findPayment = newAreaData?.find(items => item === items.legalCurrencyId)
        findPayment && filterShowPayment.push(findPayment)
      })
      setAreaSelectList(filterShowPayment || [])
      const currentPayment = data?.payment || {}
      const paymentTypeCd = currentPayment.paymentTypeCd
      const newPayList = typeData?.find(item => item.codeVal === paymentTypeCd)
      newPayList && setPayType(newPayList as CodeDetailType)
      setPaymentUser(currentPayment || {})
    }
    setFullLoading(false)
  }

  /** 表单处理* */
  const onFormChange = async form => {
    if (!areaSelectList?.length)
      return showToast(t`features_c2c_advertise_post_advertise_index_222222225101677`, 'info')
    if (!form.paymentTypeCd)
      return showToast(
        t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_vckx0nlqowattvp_xr7ou`,
        'info'
      )
    const { id } = getRouterId()
    const params = { ...form, legalCurrencyId: areaSelectList?.map(v => v?.legalCurrencyId)?.join(',') }
    id && (params.id = id)
    setLoading(true)
    const requestType = id ? modifyPayment : addPayment
    const { data, isOk } = await requestType(params)
    if (isOk && data?.isSuccess) {
      history.back()
      showToast(
        id
          ? t`features_user_personal_center_account_security_google_verification_index_510233`
          : t`features_agent_agent_manage_index_5101553`,
        'success'
      )
      /** 保存收款账户类型，便于回显* */
      setPaymentTypeStore(params?.paymentTypeCd)
    }
    setLoading(false)
  }

  const getColorClassType = val => {
    let color = ''
    for (let key in colorType) {
      if (colorType?.[key]?.codeVal === val) {
        color = colorType?.[key]?.codeKey
      }
    }
    return color
  }

  /** 获取支付方式相关数据字典 */
  const getPaymentMethodType = async () => {
    const { data: remarkData, isOk: remarkOk } = await getCodeDetailList({
      codeVal: AdvertisingDictionaryTypeEnum.paymentRemark,
      customConfig: {
        withFastPayServer: true,
        withFastPayToken: false,
      },
    })
    if (remarkOk && remarkData) {
      setRemarkType(remarkData as any)
    }
    const { data: colorData, isOk: colorOk } = await getCodeDetailList({
      codeVal: AdvertisingDictionaryTypeEnum.paymentColor,
      customConfig: {
        withFastPayServer: true,
        withFastPayToken: false,
      },
    })
    if (colorData && colorOk) {
      setColorType(colorData as any)
    }
  }

  useMount(() => {
    const { id } = getRouterId()
    id && setAccountId(id)
    getPaymentDetails()
    getPaymentMethodType()
  })

  useEffect(() => {
    for (let key in remarkType) {
      if (remarkType[key]?.codeVal === payType?.codeVal) {
        setRemarkContent(remarkType[key]?.codeKey)
      }
    }
  }, [payType])

  useEffect(() => {
    let paymentType = {}
    areaSelectList?.forEach(item => {
      paymentType = { ...paymentType, ...item?.paymentSupportItems }
    })
    setPaymentTypeData(paymentType)
  }, [areaSelectList])

  return (
    <section className={styles['collection-account-wrap']}>
      <NavBar
        title={
          accountId
            ? t`features_c2c_payments_collection_account_index_r2zjkm_vc-lj2zz7yc9ue`
            : t`features_c2c_advertise_post_advertise_payment_form_index_62061fcby9iwhhz8mvy8q`
        }
      />
      <main className="collection-account-wrap-main">
        <div className="collection-account-select">
          <div className="collection-account-select-header">{t`features_trade_future_c2c_22222225101604`}</div>
          <div className="collection-account-select-content" onClick={onCollectionSelect}>
            <div className="collection-account-select-tag">
              {areaSelectList?.length ? (
                areaSelectList.map(v => {
                  return (
                    <div key={v?.legalCurrencyId} className="tag-item">
                      <div className="text-xs font-medium text-text_color_01">{v?.currencyName}</div>
                      <Icon name="close" hasTheme className="tag-item-icon" onClick={(e: Event) => onTagClose(v, e)} />
                    </div>
                  )
                })
              ) : (
                <span className="mb-2 text-sm text-text_color_04">
                  {t`features_c2c_advertise_post_advertise_index_222222225101677`}
                </span>
              )}
            </div>
            <Icon hasTheme name="regsiter_icon_drop" className="collection-account-select-icon mb-2" />
          </div>
        </div>
        <div className="collection-account-select">
          <div className="collection-account-select-header">
            {t`features_c2c_advertise_post_advertise_payment_form_index_njsea2zvnnjsyzm1ctsum`}
          </div>
          <div className="collection-account-select-content pb-2" onClick={onSelectContent}>
            <div className="collection-account-select-type items-center">
              {payType?.codeVal ? (
                <>
                  <div
                    className={`collection-item-left`}
                    style={{ backgroundColor: getColorClassType(payType?.codeVal) }}
                  />
                  <label>{payType?.codeKey}</label>
                </>
              ) : (
                <span className="text-sm text-text_color_04">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_m6lsfg5_9cwhbylo9uqtz`}</span>
              )}
            </div>
            <Icon name="regsiter_icon_drop" hasTheme className="collection-account-select-icon" />
          </div>
        </div>
        <span className="text-xs text-text_color_02">{remarkContent || ''}</span>
        <BankForm
          type={payType as CodeDetailType}
          onChange={onFormChange}
          payShow={payShow as boolean}
          paymentTypeData={paymentTypeData as PayMentTypeProps}
          paymentUser={paymentUser as C2CMakePaymentsType}
        />
        {payType?.codeVal && areaSelectList?.length >= C2cStatusEnum.no && (
          <div className="make-payments-footer-list">
            <Icon name="prompt-symbol" className="footer-list-icon" />
            <div className="footer-list-text">{t`features_c2c_payments_collection_account_index_ypwfrsx7cz35kecotq6sh`}</div>
          </div>
        )}
      </main>
      {payShow && (
        <PayPopup
          visible={payShow}
          typeData={typePaymentList}
          payType={payType as CodeDetailType}
          onClose={onPayShowClose}
          onChange={onPayShowChange}
          areaSelectList={areaSelectList}
        />
      )}
      {tradingAreaVisible && (
        <TradingArea
          data={areaList}
          defaultData={areaSelectList}
          onChange={onTradingAreaChange}
          onClose={() => setTradingAreaVisible(false)}
        />
      )}
      <FullScreenLoading mask isShow={fullLoading || loading} />
    </section>
  )
}

export default CollectionAccount
