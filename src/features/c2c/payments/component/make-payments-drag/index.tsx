import Icon from '@/components/icon'
import { Switch } from 'react-vant'
import { useEffect, useState } from 'react'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import { MakePaymenyType } from '@/typings/api/c2c/center'
import { C2cPaymentsEnabledEnum } from '@/constants/c2c/center'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'
import styles from './index.module.css'

type CoinDragType = {
  onCollapseChange?: (v) => void
  onSwitchChange?: (v) => void
  onShowQRCode?: (v) => void
  onChange?: (v) => void
  data?: Array<MakePaymenyType>
  areaList?: Array<C2CAreaListResp>
}

const MakePaymentsDrap = (props: CoinDragType) => {
  const { data, areaList, onChange, onShowQRCode, onSwitchChange, onCollapseChange } = props
  const [items, setItems] = useState<Array<MakePaymenyType>>([])

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove([...items], oldIndex, newIndex))
    onChange && onChange(arrayMove([...items], oldIndex, newIndex))
  }

  const collapseChange = (v: MakePaymenyType) => {
    onCollapseChange && onCollapseChange(v)
  }

  const showQRCode = (v: MakePaymenyType) => {
    onShowQRCode && onShowQRCode(v)
  }

  const switchChange = (v: MakePaymenyType) => {
    onSwitchChange && onSwitchChange(v)
  }

  /** 展示的交易区* */
  const showAreaTag = v => {
    const areaData = v || []
    const newAreaData = areaData
      .map(item => {
        const findArea = areaList?.find(params => item.areaId === params.legalCurrencyId)
        findArea && Reflect.set(findArea, 'available', item.available)
        return findArea
      })
      ?.filter(item => item !== undefined)
    return newAreaData
  }

  const MakePaymentsDrapContainers: any = SortableContainer(({ children }) => {
    return <div>{children}</div>
  })

  const MakePaymentsDrapItem: any = SortableElement(item => {
    return (
      <div key={item?.value?.id} className="collapse-item-content">
        {!item?.value?.qrCodeAddr ? (
          <div className="collapse-item-wrap" onClick={() => collapseChange(item?.value)}>
            <div className="collapse-item-make-header">
              <div className={`make-header-title ${item?.value?.isProhibit ? 'text-disable' : ''}`}>
                {item?.value?.bankOfDeposit || item?.value?.paymentDetails}
              </div>
            </div>
            <div className={`collapse-item-make-body ${item?.value?.isProhibit ? 'collapse-item-disable' : ''}`}>
              <div className="make-body-title">{item?.value?.name}</div>
              <div className="make-body-text">{item?.value?.account?.replace(/(.{4}).*(.{4})/, '$1....$2') || ''}</div>
            </div>
            <div className="mt-2 flex items-center flex-wrap">
              {showAreaTag(item?.value?.availableData)?.map(params => {
                return (
                  <div
                    key={params?.currencyName}
                    className={`make-header-text mb-1 ${!params?.available ? 'make-header-disable-text' : ''}`}
                  >
                    <div className="make-header-text-item">{params?.currencyName || ''}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div
            onClick={() => collapseChange(item?.value)}
            className={`collapse-item-other ${item?.value?.isProhibit ? 'collapse-item-other-disable' : ''}`}
          >
            <div className="flex items-center">
              <div>{item?.value?.name?.replace(/(.{5}).*(.{0})/, '$1...') || ''}</div>
              <div className="mx-2">{item?.value?.account?.replace(/(.{4}).*(.{4})/, '$1 *** $2') || ''}</div>
              <Icon
                name="asset_drawing_qr_hover"
                onClick={e => {
                  e.stopPropagation()
                  showQRCode(item?.value)
                }}
                className="mt-px"
              />
            </div>
            <div className="mt-2 flex items-center flex-wrap">
              {showAreaTag(item?.value?.availableData)?.map(params => {
                return (
                  <div
                    key={params?.currencyName}
                    className={`item-other-tag mb-1 ${!params?.available ? 'make-header-disable-text' : ''}`}
                  >
                    <div className="make-header-text-item">{params?.currencyName || ''}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        <Switch
          size={21}
          disabled={item?.value?.isProhibit}
          onClick={e => e.stopPropagation()}
          onChange={() => switchChange(item?.value)}
          checked={item?.value?.enabled === C2cPaymentsEnabledEnum.enabled}
        />
        <Icon name="contract_drag" className="drag-icon" hasTheme />
      </div>
    )
  })

  useEffect(() => {
    if (data?.length) {
      data.forEach(v => {
        const newData = v?.availableData?.filter(item => !item.available)
        v.isProhibit = newData?.length >= v?.availableData?.length
      })
      setItems(data)
    }
  }, [data])

  return (
    <div className={styles['make-payment-drag']}>
      <MakePaymentsDrapContainers
        lockAxis={'y'}
        lockOffset={0}
        pressDelay={150}
        lockToContainerEdges
        useDragHandle={false}
        onSortEnd={onSortEnd}
      >
        {items.map((v, index) => (
          <MakePaymentsDrapItem key={v.id} index={index} value={v} />
        ))}
      </MakePaymentsDrapContainers>
    </div>
  )
}
export default MakePaymentsDrap
