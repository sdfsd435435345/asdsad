import { useMount, useBoolean } from 'ahooks'
import { useState } from 'react'
import { getCodeDetailList } from '@/apis/common'
import { C2CPayMoneyType } from '@/typings/api/c2c/center'
import { C2cPaymentsEnabledEnum } from '@/constants/c2c/center'
import { getPaymentList, getPaymentEnabled } from '@/apis/c2c/payment'
import { AdvertisingDictionaryTypeEnum } from '@/constants/c2c/advertise'
/** 引入组件* */
import { Cell, Switch } from 'react-vant'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import styles from './index.module.css'

type CodeDetailType = {
  codeKey: string
  codeVal: string
  remark: string
}

function PayMoney() {
  const [colorType, setColorType] = useState<CodeDetailType>()
  const [paymentData, setPaymentData] = useState<Array<C2CPayMoneyType>>([])

  const [loading, { setTrue, setFalse }] = useBoolean(false)

  /** 获取付款列表* */
  const paymentList = async () => {
    setTrue()
    const { data, isOk } = await getPaymentList({})
    if (isOk) {
      const currentPayment: C2CPayMoneyType[] = []
      const newPayment = await getCodeDetailList({ codeVal: AdvertisingDictionaryTypeEnum.paymentType })
      data?.paymentList?.forEach(v => {
        const findPayment = newPayment?.data?.find(item => item?.codeVal === v?.paymentType)
        findPayment &&
          currentPayment.push({
            id: v?.paymentType,
            enabled: v?.enabled,
            name: findPayment.codeKey,
          })
      })
      setPaymentData(currentPayment || [])
    }
    setFalse()
  }

  const paymentColor = async () => {
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

  const onSwitchChange = async v => {
    const params = {
      paymentType: v?.id,
      enabled: v?.enabled ? C2cPaymentsEnabledEnum.disEnabled : C2cPaymentsEnabledEnum.enabled,
    }
    const { data, isOk } = await getPaymentEnabled(params)
    if (isOk && data) paymentList()
  }

  useMount(() => {
    paymentList()
    paymentColor()
  })

  return (
    <div className={styles['pay-money']}>
      {paymentData?.map(v => {
        return (
          <Cell
            key={v.id}
            center
            title={
              <div className="pay-money-cell-item">
                <div className="collapse-item-left" style={{ backgroundColor: getColorClassType(v?.id) }} />
                <label>{v.name}</label>
              </div>
            }
            rightIcon={
              <Switch
                size={20}
                checked={v?.enabled === C2cPaymentsEnabledEnum.enabled}
                onClick={e => e.stopPropagation()}
                onChange={() => onSwitchChange(v)}
              />
            }
          />
        )
      })}
      <FullScreenLoading mask isShow={loading} />
    </div>
  )
}

export default PayMoney
