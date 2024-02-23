import { t } from '@lingui/macro'
import { useMount } from 'ahooks'
import { useState, useEffect } from 'react'
import { getAreaList } from '@/apis/c2c/common'
import { getCodeDetailList } from '@/apis/common'
import { usePageContext } from '@/hooks/use-page-context'
import { C2CMakePaymentsType } from '@/typings/api/c2c/center'
import { getCollectionAccountRoutePath } from '@/helper/route'
import { PaymentDetailsEnum, C2cUntieEnum } from '@/constants/c2c/center'
import { AdvertisingDictionaryTypeEnum } from '@/constants/c2c/advertise'
import { getPaymentUser, setReciveEditJudge, removePayment } from '@/apis/c2c/payment'
import { PayMentTypeProps, paymentTypeEnum, CodeDetailType } from '@/constants/c2c/common'
/**  引入组件* */
import { link } from '@/helper/link'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { Cell, Button, Toast } from 'react-vant'
import UserPopUp from '@/features/user/components/popup'
import QrcodePopup from '@/features/c2c/payments/component/qrcode-popup'
import UserPopupContent from '@/features/c2c/payments/component/popup-content'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import styles from './index.module.css'

type qrCodeType = {
  url: string
  type: string
}

type AreaType = {
  name: string
  available: boolean
}

function PaymentDetails() {
  const [visible, setVisible] = useState<boolean>(false)
  const [fullLoading, setFullLoading] = useState<boolean>(true)
  const [unbindingShow, setUnbindingShow] = useState<boolean>(false)
  const [editLoading, setEditLoading] = useState<boolean>(false)
  const [unbindingLoading, setUnbindingLoading] = useState<boolean>(false)
  /** 开启二维码弹框* */
  const [qrcodeVisible, setQrcodeVisible] = useState<boolean>(false)
  /** 二维码数据* */
  const [qrCodeType, setQrCodeType] = useState<qrCodeType>()
  const [popupText, setPopupText] = useState<string>('')
  /** 展示的交易区* */
  const [showArea, setShowArea] = useState<Array<AreaType>>([])
  /** 查询到的详情数据* */
  const [paymentUser, setPaymentUser] = useState<C2CMakePaymentsType>()
  const [headerTilte, setHeaderTitle] = useState<string>('')
  const [typeList, setTypeList] = useState<CodeDetailType>()
  const [paymentTypeData, setPaymentTypeData] = useState<PayMentTypeProps>()
  const [paymentInputType, setPaymentInputType] = useState<Array<string>>([])

  const pageContext = usePageContext()

  /** 获取路由数据* */
  const getRouterId = () => {
    const id = pageContext?.urlParsed?.search?.id
    const type = pageContext?.urlParsed?.search?.type
    return { id, type }
  }

  const bindingDrawer = (text: string) => {
    setVisible(true)
    setPopupText(text)
  }

  /** 判断有无广告绑定* */
  const determineBinding = async (type: PaymentDetailsEnum) => {
    const { id } = getRouterId()
    const params = {
      id,
      type,
    }
    const { data, isOk } = await setReciveEditJudge(params)
    if (!isOk && !data) {
      setEditLoading(false)
      return C2cUntieEnum.other
    }
    return data?.isPass ? C2cUntieEnum.pass : C2cUntieEnum.refuse
  }

  /** 修改* */
  const onEdit = async () => {
    const { id } = getRouterId()
    setHeaderTitle(t`user.account_security_06`)
    setEditLoading(true)
    const isPass = await determineBinding(PaymentDetailsEnum.modify)
    setEditLoading(false)
    if (isPass !== C2cUntieEnum.pass) {
      return isPass === C2cUntieEnum.refuse
        ? bindingDrawer(t`features_c2c_payments_payment_details_index_5ggepw_lwzswdbmqd1uhl`)
        : ''
    }
    link(getCollectionAccountRoutePath(id))
  }

  /** 解绑* */
  const onUnbinding = async () => {
    setHeaderTitle(t`features_message_center_index_5101364`)
    setUnbindingLoading(true)
    const isPass = await determineBinding(PaymentDetailsEnum.unbind)
    setUnbindingLoading(false)
    if (isPass !== C2cUntieEnum.pass) {
      return isPass === C2cUntieEnum.refuse
        ? bindingDrawer(t`features_c2c_payments_payment_details_index_5ggepw_lwzswdbmqd1uhs`)
        : ''
    }
    setUnbindingShow(true)
  }
  const onUnbindingContinue = async () => {
    const { id } = getRouterId()
    const { data, isOk } = await removePayment({ id })
    if (isOk && data) {
      history.back()
      Toast.success(t`features_c2c_payments_payment_details_index_qkq1q4-eqwowa3chppay5`)
    }
    setUnbindingShow(false)
  }

  /** 获取详情数据* */
  const getPaymentDetails = async () => {
    const { id } = getRouterId()
    const { data: areaData, isOk: isAreaOk } = await getAreaList({ returnAll: true })
    if (!isAreaOk) return setFullLoading(false)
    const { data, isOk } = await getPaymentUser({ id })
    if (isOk) {
      let typePaymentData = {}
      const paymentData = data?.payment
      const currencyIdData = paymentData?.availableData || []
      /** 优化数据* */
      const filterShowPayment = currencyIdData
        .map(item => {
          const newAreaData = areaData?.find(items => item.areaId === items.legalCurrencyId)
          if (newAreaData) {
            typePaymentData = { ...typePaymentData, ...newAreaData?.paymentSupportItems }
            return {
              name: newAreaData.currencyName,
              available: item.available,
            }
          }
          return newAreaData
        })
        .filter(items => items !== undefined)
      setPaymentTypeData(typePaymentData)
      const { data: typeData } = await getCodeDetailList({
        codeVal: AdvertisingDictionaryTypeEnum.paymentType,
        customConfig: {
          withFastPayServer: true,
          withFastPayToken: false,
        },
      })
      const formDetails = typeData?.find(v => v.codeVal === paymentData?.paymentTypeCd)
      const currentFormDetails = formDetails ?? {}
      const availablePayment = paymentData?.availableData?.filter(v => !v.available) || []
      Reflect.set(currentFormDetails, 'isProhibit', availablePayment?.length >= currencyIdData?.length)
      setTypeList(currentFormDetails as CodeDetailType)
      setShowArea((filterShowPayment as Array<AreaType>) || [])
      setPaymentUser(paymentData || ({} as C2CMakePaymentsType))
    }
    setFullLoading(false)
  }

  /** 展示二维码* */
  const onQrcodeChange = v => {
    const params = {
      url: v?.qrCodeAddr || '',
      type: v?.paymentTypeCd || '',
    }
    setQrCodeType(params as qrCodeType)
    setQrcodeVisible(true)
  }

  /** 关闭二维码弹框* */
  const onQrcodeClose = () => {
    setQrcodeVisible(false)
  }

  useEffect(() => {
    const cdType = paymentUser?.paymentTypeCd
    if (cdType) {
      const cdData = paymentTypeData?.[cdType] || []
      setPaymentInputType(cdData)
    }
  }, [paymentUser, paymentTypeData])

  useMount(() => {
    getPaymentDetails()
  })

  return (
    <section className={styles['payment-details-wrap']}>
      <NavBar title={typeList?.codeKey} />
      <Cell.Group border={false}>
        <Cell
          title={t`features_c2c_order_detail_await_pay_et1ryrjolzxpvu818nbgc`}
          value={paymentUser?.name}
          border={false}
        />
        {paymentInputType?.includes(paymentTypeEnum.BANKACCOUNT) && (
          <Cell
            title={t({
              id: 'features_c2c_order_detail_common_rhryjowvhbrxufo64h3oa',
              values: { 0: typeList?.codeKey },
            })}
            value={paymentUser?.account}
            border={false}
          />
        )}
        {paymentInputType?.includes(paymentTypeEnum.BANKBRANCH) && (
          <Cell
            title={t`features_c2c_payments_component_bank_form_index_vo4jubw93y`}
            value={paymentUser?.bankBranch}
            border={false}
          />
        )}
        {paymentInputType?.includes(paymentTypeEnum.PAYMENTDETAIL) && (
          <Cell
            title={t`features_c2c_payments_component_bank_form_index_pbeclq6c9x`}
            value={paymentUser?.paymentDetails}
            border={false}
          />
        )}
        {paymentInputType?.includes(paymentTypeEnum.BANKNAME) && (
          <Cell
            title={t`features_c2c_order_detail_common_2kmm8txlcjxmrwuntbsao`}
            value={paymentUser?.bankOfDeposit}
            border={false}
          />
        )}
        {paymentUser?.qrCodeAddr && (
          <Cell
            title={t`features_agent_agent_manage_index_5101559`}
            border={false}
            onClick={() => onQrcodeChange(paymentUser)}
          >
            <Icon name="asset_drawing_qr_hover" />
          </Cell>
        )}
        <Cell title={t`features_message_center_index_5101359`} border={false}>
          <div className="cell-tag">
            {showArea?.map(v => {
              return (
                <div key={v?.name} className={`cell-tag-item ${!v.available ? 'disable-tag-item' : ''}`}>
                  {v?.name || ''}
                </div>
              )
            })}
          </div>
        </Cell>
      </Cell.Group>
      <footer className="payment-details-footer">
        {!typeList?.isProhibit && (
          <div className="px-2 flex-1 edit">
            <Button className="w-full rounded" onClick={onEdit} disabled={editLoading} loading={editLoading}>
              {t`user.account_security_06`}
            </Button>
          </div>
        )}
        <div className="px-2 flex-1">
          <Button
            type="primary"
            onClick={onUnbinding}
            className="w-full rounded"
            disabled={unbindingLoading}
            loading={unbindingLoading}
          >
            {t`features_message_center_index_5101364`}
          </Button>
        </div>
      </footer>
      <UserPopUp
        visible={visible}
        slotContent={
          <UserPopupContent
            icon={<div>{headerTilte}</div>}
            onContinue={() => setVisible(false)}
            rightButtonText={t`features_message_center_index_5101365`}
            content={popupText}
          />
        }
        className={styles['list-operation-user-popUp']}
      />
      <UserPopUp
        visible={unbindingShow}
        slotContent={
          <UserPopupContent
            icon={<div>{t`features_message_center_index_5101364`}</div>}
            leftButtonText={t`assets.financial-record.cancel`}
            onClose={() => setUnbindingShow(false)}
            onContinue={onUnbindingContinue}
            content={t`features_message_center_index_5101367`}
          />
        }
        className={styles['list-operation-user-popUp']}
      />
      <FullScreenLoading mask isShow={fullLoading} />
      <QrcodePopup
        data={qrCodeType as qrCodeType}
        visible={qrcodeVisible}
        closeVisible={setQrcodeVisible}
        onClose={onQrcodeClose}
      />
    </section>
  )
}
export default PaymentDetails
