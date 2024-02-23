import { cancelC2cOrder } from '@/apis/c2c/order'
import Icon from '@/components/icon'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import { DefaultRadioIconRender } from '@/components/radio/icon-render'
import { C2cOrderStatusEnum, getC2cOrderCancelReasons } from '@/constants/c2c/order'
import { fetchC2cTradeStoreSettings } from '@/helper/c2c/trade'
import { link } from '@/helper/link'
import { getC2cOrderDetailPageRoutePath } from '@/helper/route'
import { useC2cOrderModuleInit } from '@/hooks/features/c2c/order'
import { useHelpCenterUrl } from '@/hooks/use-help-center-url'
import { usePageContext } from '@/hooks/use-page-context'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { t } from '@lingui/macro'
import { Button, Input, Radio } from 'react-vant'
import { useMount, useRequest } from 'ahooks'
import { useState } from 'react'
import { useOrderDetail } from '../detail'
import { ActionsWrapper } from '../detail/common'

function C2cOrderCancel() {
  const { routeParams } = usePageContext()
  const [orderDetail] = useOrderDetail(routeParams.id)
  const [reasonId, setReasonId] = useState('')
  useC2cOrderModuleInit()
  const [reasonText, setReasonText] = useState('')
  const helpLink = '/support'
  // 只要不是未支付，都认为是支付了
  const paid = orderDetail?.statusCd !== C2cOrderStatusEnum.awaitPay
  const reasons = getC2cOrderCancelReasons({
    orderId: orderDetail?.id as any,
    helpLink,
    paid,
  })
  const selectedReason = reasons.find(reason => reason.id === reasonId)
  const { run, loading } = useRequest(
    async () => {
      const res = await cancelC2cOrder({
        id: orderDetail?.id as any,
        type: reasonId,
        reason: reasonText || selectedReason?.label || '',
      })
      if (res.isOk) {
        history.back()
      }
    },
    {
      manual: true,
    }
  )
  const disabled = !selectedReason || (selectedReason.placeholder && reasonText.length < 2)
  if (!orderDetail) {
    return null
  }

  return (
    <div className="text-sm pb-36">
      <NavBar title={t`features_c2c_order_cancel_index_oifgxckqnhvh7juckq092`} />
      <div className="flex px-4 py-2 bg-tips_warning_bg_color">
        <Icon className="mr-2 text-xs translate-y-1" name="msg" />
        <div className="text-warning_color text-xs">
          {paid ? (
            <p>{t`features_c2c_order_cancel_index_z9z0lskdbnfivzoj7okkq`}</p>
          ) : (
            <>
              <p>{t`features_c2c_order_cancel_index_xn0fsypideveoutrotovc`}</p>
              <p>{t`features_c2c_order_cancel_index_ma5ehjvbx20n6qwa9avh7`}</p>
            </>
          )}
        </div>
      </div>
      <div className="mt-4">
        <Radio.Group value={reasonId} onChange={setReasonId}>
          {reasons.map(reason => {
            const checked = reason.id === reasonId
            return (
              <div key={reason.id} className="mb-4 px-4">
                <div className="mb-2 flex">
                  <Radio className="mr-1" name={reason.id} iconRender={DefaultRadioIconRender}>
                    <span className="-translate-y-px">{reason.label}</span>
                  </Radio>
                </div>
                {checked && (reason.note || reason.placeholder) && (
                  <div className="bg-card_bg_color_01 p-3 rounded">
                    {reason.note && <span className="text-text_color_03 text-xs">{reason.note}</span>}
                    {reason.placeholder && (
                      <Input.TextArea
                        placeholder={reason.placeholder}
                        value={reasonText}
                        showWordLimit
                        className="text-xs"
                        maxLength={300}
                        onChange={setReasonText}
                      />
                    )}
                  </div>
                )}
                {checked && reason.link && (
                  <div className="text-right text-xs mt-1">
                    <Link href={reason.link}>
                      <span className="text-brand_color">{reason.linkLabel} &gt;</span>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </Radio.Group>
      </div>
      <ActionsWrapper>
        <Button block type="primary" disabled={!!disabled} loading={loading} onClick={run}>
          {t`features_c2c_order_cancel_index_s6miqel3vffh9v0pqrz7w`}
        </Button>
      </ActionsWrapper>
    </div>
  )
}

export default C2cOrderCancel
