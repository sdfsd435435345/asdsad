import { t } from '@lingui/macro'
import { useMount, useBoolean, useUpdateEffect } from 'ahooks'
import { useRef, useState, useEffect } from 'react'
import { getAreaList } from '@/apis/c2c/common'
import { getCodeDetailList } from '@/apis/common'
import { useC2CCenterStore } from '@/store/c2c/center'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import { AdvertisingDictionaryTypeEnum } from '@/constants/c2c/advertise'
import { getCollectionDetailRoutePath, getCollectionAccountRoutePath } from '@/helper/route'
import { C2CMakePaymentsType, MakePaymenyType } from '@/typings/api/c2c/center'
import { getPaymentReciveList, getPaymentReciveEnabled, getDragChangePayment } from '@/apis/c2c/payment'
import { C2cPaymentsEnabledEnum } from '@/constants/c2c/center'
/** 引入到组件* */
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { Collapse, Toast } from 'react-vant'
import NoDataImage from '@/components/no-data-image'
import TradingArea from '@/features/c2c/payments/component/trading-area'
import QrcodePopup from '@/features/c2c/payments/component/qrcode-popup'
import MakePaymentsDrap from '@/features/c2c/payments/component/make-payments-drag'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import styles from './index.module.css'

type qrCodeType = {
  url: string
  type: string
}

type RecivePaymentListType = {
  id: string
  name: string
  data: MakePaymenyType[]
}

type CodeDetailType = {
  codeKey: string
  codeVal: string
  remark: string
}

function MakePayments() {
  /** 开启二维码弹框* */
  const [qrcodeVisible, setQrcodeVisible] = useState<boolean>(false)
  /** 二维码数据* */
  const [qrCodeType, setQrCodeType] = useState<qrCodeType>()
  /** 获取的收付款列表* */
  const [recivePaymentList, setRecivePaymentList] = useState<Array<RecivePaymentListType>>([])
  /** 交易区* */
  const [areaList, setAreaList] = useState<C2CAreaListResp[]>([])
  /** 选择的交易区* */
  const [areaSelectList, setAreaSelectList] = useState<C2CAreaListResp[]>([])
  /** 展开的 collapse* */
  const [showCollapse, setShowCollapse] = useState<string[]>([])
  /** 是否展示选择交易区* */
  const [tradingAreaVisible, setTradingAreaVisible] = useState<boolean>(false)
  /** 加载状态* */
  const [loading, { setTrue, setFalse }] = useBoolean(true)
  const [colorType, setColorType] = useState<CodeDetailType>()
  const isMountLoad = useRef<boolean>(false)

  const { paymentTypeStore } = useC2CCenterStore()

  /** 获取可交易区域* */
  const getAreaListData = async () => {
    setTrue()
    const { data, isOk } = await getAreaList({ returnAll: true })
    if (isOk) {
      setAreaList(data || [])
      /** 初始默认选择全部* */
      setAreaSelectList(data || [])
    }
  }

  /** 获取收付款列表* */
  const paymentReciveList = async (flag?: boolean, text?: string) => {
    setTrue()
    /** 获取可交易的交易区* */
    const { data, isOk } = await getPaymentReciveList({
      legalCurrencyId: areaSelectList?.map(v => v.legalCurrencyId)?.join(','),
    })
    if (isOk) {
      const reciveList = data?.recivePaymentList
      /** 如果没有数据则返回清空* */
      if (!reciveList?.length) {
        setFalse()
        setRecivePaymentList([])
        return
      }
      const { data: typeData } = await getCodeDetailList({
        codeVal: AdvertisingDictionaryTypeEnum.paymentType,
        customConfig: {
          withFastPayServer: true,
          withFastPayToken: false,
        },
      })
      const collapseArea = typeData?.map(item => ({
        id: item?.codeVal || '',
        name: item?.codeKey || '',
        data: reciveList.filter(v => v?.paymentTypeCd === item?.codeVal),
      }))
      setRecivePaymentList(collapseArea || [])
    }
    setFalse()
    !flag && Toast.success(text || '')
  }

  const onCollapseChange = (v: C2CMakePaymentsType) => {
    link(getCollectionDetailRoutePath(v?.id))
  }

  const onSwitchChange = async v => {
    const params = {
      id: v?.id,
      enabled: v?.enabled ? C2cPaymentsEnabledEnum.disEnabled : C2cPaymentsEnabledEnum.enabled,
    }
    const { data, isOk } = await getPaymentReciveEnabled(params)
    if (data && isOk) {
      paymentReciveList(
        false,
        v?.enabled
          ? t`features_c2c_payments_component_make_payments_index_t2jcvufadgzddxovy2bmm`
          : t`features_c2c_payments_component_make_payments_index_7btfr-2z-cyjrw95mwwz9`
      )
    }
  }

  /** 交易区选择的数据* */
  const onTradingAreaChange = (data: C2CAreaListResp[]) => {
    setAreaSelectList(data)
    setTradingAreaVisible(false)
  }

  /** 拖拽* */
  const onDrapChange = async v => {
    const paymentList = v?.map((item, index) => {
      return {
        sort: index + 1,
        id: item.id,
      }
    })
    setTrue()
    const { isOk } = await getDragChangePayment({ paymentList })
    if (!isOk) return setFalse()
    paymentReciveList(true)
  }

  /** 展示二维码* */
  const showQRCode = item => {
    const params = {
      url: item.qrCodeAddr,
      type: item.paymentTypeCd,
    }
    setQrCodeType(params)
    setQrcodeVisible(true)
  }

  /** 关闭二维码弹框* */
  const onQrcodeClose = () => {
    setQrCodeType({} as qrCodeType)
    setQrcodeVisible(false)
  }

  /** 展开* */
  const onShowCollapse = v => {
    setShowCollapse(v)
  }

  /** 展示选择的交易区文字* */
  const showSelectArea = v => {
    switch (true) {
      case v?.length > 1 && v?.length < areaList?.length:
        return t`features_c2c_payments_component_make_payments_index_t8r6fsdtjjpkvvfrx8xsk`
      case v?.length === 1:
        return v?.[0]?.currencyName
      default:
        return t`constants_market_market_list_market_module_index_5101071`
    }
  }

  /** 添加收款账户* */
  const addPayments = () => {
    link(getCollectionAccountRoutePath())
  }

  /** 获取收款方式颜色 */
  const getPaymentsColor = async () => {
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

  const getColorClassType = val => {
    let color = ''
    for (let key in colorType) {
      if (colorType?.[key]?.codeVal === val) {
        color = colorType?.[key]?.codeKey
      }
    }
    return color
  }

  useUpdateEffect(() => {
    paymentReciveList(true)
  }, [areaSelectList])

  /** 初始化* */
  useMount(() => {
    isMountLoad.current = true
    getAreaListData()
    getPaymentsColor()
  })

  useEffect(() => {
    paymentTypeStore && setShowCollapse([paymentTypeStore])
  }, [paymentTypeStore])

  return (
    <div className={styles['make-payments']}>
      <div className="payments-header" onClick={() => setTradingAreaVisible(true)}>
        <div className="payments-header-text">{t`features_c2c_payments_component_make_payments_index_mwguf0h6lxcpbr-h7ri1a`}</div>
        <div className="payments-header-text">{showSelectArea(areaSelectList)}</div>
        <Icon name="regsiter_icon_drop" className="payments-header-icon" hasTheme />
      </div>
      <div className="payments-contair">
        {recivePaymentList.length > 0 ? (
          <>
            <Collapse
              border={false}
              className="payments-contair-collapse"
              initExpanded={showCollapse}
              onChange={onShowCollapse}
            >
              {recivePaymentList?.map(v => {
                if (!v?.data?.length) {
                  return
                }
                return (
                  <Collapse.Item
                    key={v?.id}
                    border={false}
                    name={v?.id}
                    disabled={!v?.data?.length}
                    title={
                      <div className="payments-contair-collapse-item">
                        <div className={`collapse-item-left`} style={{ backgroundColor: getColorClassType(v?.id) }} />
                        <label>{v?.name}</label>
                      </div>
                    }
                    value={
                      <Icon
                        hasTheme
                        className="collapse-item-icon"
                        name={showCollapse?.includes(v?.id) ? 'asset_view_coin_fold' : 'asset_view_coin_unfold'}
                      />
                    }
                    className={v?.data?.length ? '' : 'payments-collapse-items'}
                  >
                    <MakePaymentsDrap
                      data={v?.data || []}
                      areaList={areaList}
                      onChange={onDrapChange}
                      onShowQRCode={showQRCode}
                      onSwitchChange={onSwitchChange}
                      onCollapseChange={onCollapseChange}
                    />
                  </Collapse.Item>
                )
              })}
            </Collapse>
            <div className="make-payments-footer-list">
              <Icon name="prompt-symbol" className="footer-list-icon" />
              <div className="footer-list-text">
                <span className="text-brand_color">{t`features_c2c_payments_component_make_payments_index_z8gmh03glqh2zsnhzywn4`}</span>
                {t`features_c2c_payments_component_make_payments_index_qjos0r9avzdtjilpbwuh_`}
              </div>
            </div>
          </>
        ) : (
          !loading && (
            <NoDataImage
              className="payments-no-data-image"
              footerText={
                <div className="payments-footer-image">
                  <div className="text-center">{t`features_c2c_payments_component_make_payments_index_ak3pc-l2o0lvfnmv42yvg`}</div>
                  <div className="footer-image-button" onClick={addPayments}>
                    {t`features_c2c_advertise_post_advertise_payment_form_index_62061fcby9iwhhz8mvy8q`}
                  </div>
                </div>
              }
            />
          )
        )}
      </div>
      {tradingAreaVisible && (
        <TradingArea
          data={areaList}
          defaultData={areaSelectList}
          onChange={onTradingAreaChange}
          onClose={() => setTradingAreaVisible(false)}
        />
      )}
      <QrcodePopup
        data={qrCodeType as qrCodeType}
        visible={qrcodeVisible}
        closeVisible={setQrcodeVisible}
        onClose={onQrcodeClose}
      />
      <FullScreenLoading mask isShow={loading} />
    </div>
  )
}

export default MakePayments
