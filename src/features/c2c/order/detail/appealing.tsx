import LazyImage from '@/components/lazy-image'
import { link } from '@/helper/link'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { Button, ImagePreview } from 'react-vant'
import { C2cOrderDirectionEnum, C2cOrderStatusEnum, getC2cOrderStatusEnumNameInList } from '@/constants/c2c/order'
import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { getC2cOrderAppealUploadPageRoutePath } from '@/helper/route'
import { useRef } from 'react'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { getTextFromStoreEnums } from '@/helper/store'
import { replaceEmpty } from '@/helper/filters'
import PromptIcon from '@/components/prompt-icon'
import { useOrderStatus } from '../order-list'
import { SellOrderInfo } from './await-pay'
import {
  C2cOrderDetailHeader,
  C2cOrderDetailCounterpartyInfo,
  ActionsWrapper,
  PropList,
  RechargeRecordButton,
  AssetsButton,
} from './common'
import { PaidBuyOrderInfo } from './paid'
import styles from './appealing.module.css'

type IProps = {
  order: IC2cOrderDetail
}
type IAppealUploadedInfoProps = {
  pictures: string[]
  videos: string[]
  isSelf: boolean
}
function AppealUploadedInfo({ pictures, videos, isSelf }: IAppealUploadedInfoProps) {
  const videosRef = useRef<HTMLVideoElement[]>([])

  return (
    <div className={styles['uploaded-info-wrapper']}>
      <div className="text-center hidden mb-2">
        {isSelf
          ? t`features_c2c_order_detail_appealing_8wkxgayh2a4w70rdmsidx`
          : t`features_c2c_order_detail_appealing_jn51kotf5kicloubtk40f`}
      </div>
      {pictures.length > 0 && (
        <>
          <div className="text-text_color_02 mb-3">{t`features_c2c_order_detail_appealing_vmzjzlitld8c3qcfnq8qo`}</div>
          <div className="box">
            {pictures.map(pic => {
              const openPreview = () => {
                ImagePreview.open({
                  images: [pic],
                  showIndex: false,
                })
              }
              return (
                <div onClick={openPreview} key={pic} className="item">
                  <LazyImage src={pic} className="media-el" />
                </div>
              )
            })}
          </div>
        </>
      )}
      {videos.length > 0 && (
        <>
          <div className="text-text_color_02 mb-3 mt-1">{t`features_c2c_order_detail_appealing_zzamdlxpmuhepfze7wq0e`}</div>
          <div className="box">
            {videos.map((video, index) => {
              const onClickVideo = () => {
                const videoEl = videosRef.current[index]
                videoEl.play()
                // sentry 报错，原因未知
                videoEl.requestFullscreen?.()
              }
              return (
                <div onClick={onClickVideo} key={video} className="item">
                  <video
                    ref={ref => {
                      if (ref) {
                        videosRef.current[index] = ref
                      }
                    }}
                    muted
                    src={video}
                    className="media-el"
                  ></video>
                  <Icon hiddenMarginTop name="video_play" className="play-icon" hasTheme />
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
export function AppealInfo({ order }: IProps) {
  const { isAppealing, isBuy, oppositeInfo } = useOrderStatus(order)
  const { orderEnums } = useBaseC2cOrderStore()
  const reasonText = getTextFromStoreEnums(order.appealReason!, orderEnums.appealReasons.enums)
  let specificReasonText = getTextFromStoreEnums(order.appealSpecificReason!, orderEnums.appealSpecificReasons.enums)
  const baseProps = [
    {
      label: t`features_c2c_order_detail_appealing_zqu9luubxvd--4pqcn4if`,
      value: `${replaceEmpty(order.appealUserName || order.appealUid)}${
        order.isAppealer ? t`features_c2c_order_detail_appealing_0k3idudxbbe0nzw1cpi8t` : ''
      }`,
    },
    {
      label: t`features_c2c_order_appeal_index_ot7u_62nxpmbdnyn7tljy`,
      value: reasonText,
    },
    {
      label: t`features_c2c_order_detail_appealing_8sk6u4fbovaa5oqwlxdce`,
      value:
        specificReasonText === replaceEmpty()
          ? t`features_c2c_order_appeal_index_onotkmcjyszif-40pc_lv`
          : specificReasonText,
    },
    ...(isAppealing
      ? []
      : [
          {
            label: t`features_c2c_order_detail_appealing_o7izbnmz118y6jbhwv553`,
            value: `${oppositeInfo.appealWinnerNickName}${
              order.isAppealWinner ? t`features_c2c_order_detail_appealing_0k3idudxbbe0nzw1cpi8t` : ''
            }`,
          },
        ]),
  ]

  return (
    <div className="px-4 mt-6">
      <div className="text-base font-medium">{t`features_c2c_order_detail_appealing_5tohgtyo-ujrm7fnryadu`}</div>
      <PropList list={baseProps} />
      {order.isComplaintInformation && (
        <>
          <div className="text-base font-medium mb-4">{t`features_c2c_order_appeal_upload_index_xbgzcuf9huuibuazwpq5y`}</div>
          <AppealUploadedInfo
            pictures={order.appealPicture || []}
            videos={order.appealVideo ? [order.appealVideo] : []}
            isSelf
          />
        </>
      )}
      {isAppealing && (
        <div className="mt-4 text-xs text-text_color_03">
          <PromptIcon />
          <span>{t`features_c2c_order_detail_appealing_elfcm0juanhultcbn7pj8`}</span>
        </div>
      )}
    </div>
  )
}
function Actions({ order }: IProps) {
  const { isBuy, isAppealing } = useOrderStatus(order)
  const toAppealUpload = () => {
    link(getC2cOrderAppealUploadPageRoutePath(order.id))
  }
  const isCanceled = [C2cOrderStatusEnum.canceledAppealFinished, C2cOrderStatusEnum.canceledAppealing].includes(
    order.statusCd as any
  )
  const showLeftButton = !order.isComplaintInformation && isAppealing
  const showRightButton = !isCanceled

  if (!showRightButton && !showLeftButton) {
    return null
  }

  return (
    <ActionsWrapper>
      {showLeftButton && (
        <Button onClick={toAppealUpload} block className="gray-button">
          {t`features_c2c_order_detail_appealing_c3ueu1kmp336ixezzlzgd`}
        </Button>
      )}
      {showRightButton && (isBuy ? <RechargeRecordButton order={order} /> : <AssetsButton order={order} />)}
    </ActionsWrapper>
  )
}

export function Appealing({ order }: IProps) {
  const { isBuy, isAppealing } = useOrderStatus(order)
  const title = isAppealing
    ? t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`
    : getC2cOrderStatusEnumNameInList(order as any, isBuy ? C2cOrderDirectionEnum.buy : C2cOrderDirectionEnum.sell)
  const who = order.isAppealer
    ? t`features_c2c_order_detail_appealing_zacmn9ecb1ltovutnmizf`
    : t`features_c2c_order_detail_appealing_inybkcnztdhgrtppeoyhg`
  const info = isAppealing
    ? order.isSystemStartAppeal
      ? t({
          id: 'features_c2c_order_detail_appealing_g3xpb32i7xkukjywtmkip',
          values: { 0: who },
        })
      : t({
          id: 'features_c2c_order_detail_appealing_9gybnt2l9zbbf-7c7l8xo',
          values: { 0: who },
        })
    : t({
        id: 'features_c2c_order_detail_appealing_vhno-inqs-a9ph8rbfedx',
        values: { 0: who },
      })

  return (
    <div>
      <C2cOrderDetailHeader hasGap order={order} title={title} info={info} />
      <C2cOrderDetailCounterpartyInfo order={order} onlyNickName />
      {isBuy && <PaidBuyOrderInfo orderInfoCollapsed order={order} />}
      {!isBuy && <SellOrderInfo addressVisible orderInfoCollapsed order={order} />}
      <AppealInfo order={order} />
      <Actions order={order} />
    </div>
  )
}
