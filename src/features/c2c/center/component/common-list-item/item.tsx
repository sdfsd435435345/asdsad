import { t } from '@lingui/macro'
import { useState } from 'react'
import { link } from '@/helper/link'
import { getCodeDetailList } from '@/apis/common'
import { C2cDirectionEnum } from '@/constants/c2c/center'
import { C2CCenterAssetsType } from '@/typings/api/c2c/center'
import { getC2cAdvDetailsPageRoutePath } from '@/helper/route'
import { ITradeAdItem } from '@/typings/api/c2c/trade'
import { useAdBuyOrSell } from '@/hooks/features/c2c/trade'
import {
  CodeDetailType,
  C2CAdvertNewStatus,
  C2CAdvertNewStatusText,
  C2CAdvertNewStatusEnum,
} from '@/constants/c2c/common'
import { AdvertisingDictionaryTypeEnum } from '@/constants/c2c/advertise'
import { useC2CCenterStore } from '@/store/c2c/center'
import { C2cTradeAdDirectionEnum } from '@/constants/c2c/trade'
import { C2cTradeForm } from '@/features/c2c/trade/trade-form'
import { Toast } from 'react-vant'
import { useMount } from 'ahooks'
import styles from './index.module.css'

type C2cListItemType = {
  useId: string
  data: C2CCenterAssetsType
}

export default function C2cListItem({ data, useId }: C2cListItemType) {
  const [item, setItem] = useState<ITradeAdItem>()
  const [isBuy, setIsBuy] = useState<boolean>(false)
  const [typeData, setTypeData] = useState<CodeDetailType[]>([])
  const [colorData, setColorData] = useState<CodeDetailType>()

  const { tradeAreaStore, setCurrentTradeAreaStore } = useC2CCenterStore()

  const { onBuyOrSell, formVisible, setFormVisible } = useAdBuyOrSell(data as any)

  const buyItemChange = v => {
    if (
      v?.advertNewStatus === C2CAdvertNewStatusEnum.DEALING ||
      v?.advertNewStatus === C2CAdvertNewStatusEnum.RESTING
    ) {
      return Toast.info({
        message: t`features_c2c_center_component_common_list_item_index_do9tzzqrpju32pyaapgnn`,
      })
    }
    if (!v?.canTrade) {
      return Toast.info({
        message: t`features_c2c_trade_ad_list_5101625`,
      })
    }
    const currnetTrade = tradeAreaStore.filter(params => params?.currencyName === v.areaName)
    setCurrentTradeAreaStore(currnetTrade?.[0])
    setItem(v)
    onBuyOrSell()
    setIsBuy(v.advertDirectCd === C2cTradeAdDirectionEnum.buy)
  }

  const onItemChange = (v: C2CCenterAssetsType) => {
    useId ? buyItemChange(v) : link(getC2cAdvDetailsPageRoutePath(data?.advertId))
  }

  const paymentType = async () => {
    const { data: paymentData, isOk } = await getCodeDetailList({
      codeVal: AdvertisingDictionaryTypeEnum.paymentType,
      customConfig: {
        withFastPayServer: true,
        withFastPayToken: false,
      },
    })
    isOk && typeData && setTypeData(paymentData as CodeDetailType[])
    const { data: colorTypeData, isOk: colorIsOk } = await getCodeDetailList({
      codeVal: AdvertisingDictionaryTypeEnum.paymentColor,
      customConfig: {
        withFastPayServer: true,
        withFastPayToken: false,
      },
    })
    colorIsOk && colorTypeData && setColorData(colorTypeData as any)
  }

  /** 处理买卖样式* */
  const hanleBuyOrSell = (v, type) => {
    if (v?.advertDirectCd === C2cDirectionEnum.buy) {
      return useId ? `title-sell-${type}` : `title-buy-${type}`
    }
    return useId ? `title-buy-${type}` : `title-sell-${type}`
  }

  const getColorClassType = val => {
    let color = ''
    for (let key in colorData) {
      if (colorData?.[key]?.codeVal === val) {
        color = colorData?.[key]?.codeKey
      }
    }
    return color
  }

  const getPaymentType = val => {
    let name = ''
    for (let key in typeData) {
      if (typeData?.[key]?.codeVal === val) {
        name = typeData?.[key]?.codeKey
      }
    }
    return name
  }

  useMount(() => {
    paymentType()
  })

  return (
    <div className={styles['common-list-item']}>
      <div key={data?.advertId} className="center-footer-common-list" onClick={() => onItemChange(data)}>
        <div className="footer-common-list-title">
          <div className="flex items-center">
            <div className={`tilte-line ${hanleBuyOrSell(data, 'line')}`} />
            <div className={`title-text ${hanleBuyOrSell(data, 'text')}`}>{`${data?.coinName}/${data?.areaName}`}</div>
          </div>
          <div
            className={`list-title-content ${
              C2CAdvertNewStatusText()[data?.advertNewStatus || C2CAdvertNewStatusEnum.NORMAL]
            }`}
          >
            <div className="list-title-content-status">
              {C2CAdvertNewStatus()[data?.advertNewStatus || C2CAdvertNewStatusEnum.NORMAL]}
            </div>
          </div>
        </div>
        <div className="footer-common-list-body">
          <div className="common-list-body-item">
            <div className="list-body-item-left">{t`features_trade_future_c2c_25101576`}</div>
            <div className="list-body-item-right">{`${data?.currencySymbol}${data?.price}`}</div>
          </div>
          <div className="common-list-body-item">
            <div className="list-body-item-left">{t`features_trade_future_c2c_25101577`}</div>
            <div className="list-body-item-right">{`${data?.minAmount} - ${data?.maxAmount} ${data?.coinName}`}</div>
          </div>
          <div className="common-list-body-item">
            <div className="list-body-item-left">{t`features/trade/spot/price-input-0`}</div>
            <div className="list-body-item-right">{`${data?.quantity} ${data?.coinName}`}</div>
          </div>
        </div>
        <div className="footer-common-list-mode">
          <div className="list-mode-left">
            {data?.newPayments?.length &&
              data?.newPayments?.map(params => {
                if (useId && params?.grey) return
                return (
                  <div key={params?.name} className="list-mode-left-title">
                    <div style={{ backgroundColor: getColorClassType(params?.name) }} className={`left-title-line`} />
                    <div className={`left-title-text text`}>{getPaymentType(params?.name) || ''}</div>
                  </div>
                )
              })}
          </div>
          <div className="list-mode-right">
            {data?.mainchainAddrs?.length
              ? data?.mainchainAddrs?.map(params => {
                  return (
                    <div key={params.name} className="list-mode-right-title">
                      <div className="right-title-text">{params.name}</div>
                    </div>
                  )
                })
              : null}
          </div>
        </div>
      </div>
      <C2cTradeForm isBuy={isBuy} ad={item as ITradeAdItem} visible={formVisible} onVisibleChange={setFormVisible} />
    </div>
  )
}
