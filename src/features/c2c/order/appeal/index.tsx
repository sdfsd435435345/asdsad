import { appealC2cOrder, getV1AppealGetReasonListApiRequest } from '@/apis/c2c/order'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { OnlyOneActionSheet } from '@/components/only-one-overlay'
import { getC2cOrderAppealReasons } from '@/constants/c2c/order'
import { fetchC2cTradeStoreSettings } from '@/helper/c2c/trade'
import { link } from '@/helper/link'
import { getC2cOrderAppealUploadPageRoutePath } from '@/helper/route'
import { useC2cOrderModuleInit } from '@/hooks/features/c2c/order'
import { usePageContext } from '@/hooks/use-page-context'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { YapiGetV1AppealGetReasonListData } from '@/typings/yapi/AppealGetReasonListV1GetApi'
import { t } from '@lingui/macro'
import { ActionSheetProps, Button } from 'react-vant'
import { useMount, useRequest, useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
import { useState } from 'react'
import { useOrderDetail } from '../detail'
import { ActionsWrapper } from '../detail/common'
import { useOrderStatus } from '../order-list'

type ISelectActionSheetProps = {
  actions: {
    name: string
    value: any
  }[]
  value: any
  onChange: (value: any) => void
  placeholder: string
}
function SelectActionSheet({ actions, value, onChange, placeholder }: ISelectActionSheetProps) {
  const [show, setShow] = useState(false)
  const selectedAction = actions.find(action => action.value === value)
  const displayActions: ActionSheetProps['actions'] = actions.map(action => {
    return {
      ...action,
      className: classNames('text-sm', {
        'selected-action text-brand_color': value === action.value,
      }),
    }
  })
  const onSelect = (action: any) => {
    onChange?.(action.value)
    setShow(false)
  }
  const onTrigger = () => {
    if (displayActions.length === 0) {
      return
    }
    setShow(true)
  }

  return (
    <>
      <div onClick={onTrigger} className="flex items-center justify-between bg-bg_sr_color rounded px-3 py-2.5">
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {selectedAction ? (
            <span>{selectedAction.name}</span>
          ) : (
            <span className="text-text_color_03">{placeholder}</span>
          )}
        </div>
        {actions.length > 0 && <Icon name="regsiter_icon_drop" className="text-xs scale-75" hasTheme />}
      </div>
      <OnlyOneActionSheet
        onSelect={onSelect}
        visible={show}
        onCancel={() => setShow(false)}
        cancelText={t`assets.financial-record.cancel`}
        actions={displayActions}
      />
    </>
  )
}

function C2cOrderAppeal() {
  const { routeParams } = usePageContext()
  const [orderDetail] = useOrderDetail(routeParams.id)
  const [reasonId, setReasonId] = useState('')
  useC2cOrderModuleInit()
  const [subReasonId, setSubReasonId] = useState('')
  const [resReasons, setResReasons] = useState<YapiGetV1AppealGetReasonListData[]>([])
  const { isBuy } = useOrderStatus(orderDetail || ({} as any))
  const reasons = getC2cOrderAppealReasons(isBuy, resReasons)
  const { run, loading } = useRequest(
    async () => {
      const res = await appealC2cOrder({
        id: orderDetail?.id as any,
        appealReason: reasonId,
        specificReason: subReasonId || 'SELL_W',
      } as any)
      if (res.isOk) {
        link(getC2cOrderAppealUploadPageRoutePath(orderDetail?.id as any), {
          overwriteLastHistoryEntry: true,
        })
      }
    },
    {
      manual: true,
    }
  )
  useMount(async () => {
    const res = await getV1AppealGetReasonListApiRequest({})
    if (!res.isOk || !res.data) {
      return
    }

    setResReasons(res.data)
  })
  const selectedReason = reasons.find(reason => reason.id === reasonId)
  const subReasons = selectedReason?.children || []
  const reasonActions = reasons.map(reason => {
    return {
      name: reason.label,
      value: reason.id,
    }
  })
  const subReasonActions = subReasons.map(reason => {
    return {
      name: reason.label,
      value: reason.id,
    }
  })
  useUpdateEffect(() => {
    setSubReasonId(subReasonActions[0]?.value || '')
  }, [reasonId])
  const disabled = !selectedReason || (selectedReason.children.length > 0 && !subReasonId)

  return (
    <div className="text-sm pb-36">
      <NavBar title={t`features_c2c_order_appeal_index_iuiem_zlsewnnvwfxq_dk`} />
      <div className="flex px-4 py-2 bg-tips_warning_bg_color">
        <Icon className="mr-2 text-xs translate-y-1" name="msg" />
        <div className="text-warning_color text-xs">
          <p>{t`features_c2c_order_appeal_index_itk3gxdcommvlybi6q8ch`}</p>
          <p>{t`features_c2c_order_appeal_upload_index_smq5pjkvwisylfwbhhioa`}</p>
        </div>
      </div>
      <div className="mt-4 px-4">
        <div className="mb-4">
          <div className="mb-2 text-text_color_02">{t`features_c2c_order_appeal_index_ot7u_62nxpmbdnyn7tljy`}</div>
          <SelectActionSheet
            placeholder={t`features_c2c_order_appeal_index_yyb-6vy4m0eoot9tpv1_h`}
            value={reasonId}
            onChange={setReasonId}
            actions={reasonActions}
          />
        </div>
        <div>
          <div className="mb-2 text-text_color_02">{t`features_c2c_order_appeal_index_oed3yiozcy2jw5equ6fs1`}</div>
          <SelectActionSheet
            placeholder={t`features_c2c_order_appeal_index_mym8zg9g7vrtpzfcwtzg7`}
            value={subReasonId}
            onChange={setSubReasonId}
            actions={subReasonActions}
          />
        </div>
      </div>
      <ActionsWrapper>
        <Button block type="primary" disabled={!!disabled} loading={loading} onClick={run}>
          {t`features_c2c_order_appeal_index_xcn-akf0yeer_olhybuna`}
        </Button>
      </ActionsWrapper>
    </div>
  )
}

export default C2cOrderAppeal
