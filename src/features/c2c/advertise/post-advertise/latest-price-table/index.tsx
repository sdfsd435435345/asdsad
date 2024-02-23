/**
 * 发布广告单-c2c 最新价格展示组件
 */
import { useEffect, useRef, useState } from 'react'
import LatestPriceTableHeader from '@/features/c2c/advertise/post-advertise/latest-price-table/table-header'
import LatestPriceTableContainer from '@/features/c2c/advertise/post-advertise/latest-price-table/container'
import { CoincidenceListTypeEnum } from '@/constants/c2c/advertise'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import CommonListEmpty from '@/components/common-list/list-empty'
import { getBusinessName } from '@/helper/common'
import { Checkbox, Dialog } from 'react-vant'
import { defaultCheckboxIconRender } from '@/components/radio/icon-render'
import classNames from 'classnames'
import Icon from '@/components/icon'
import { useDebounce, useDebounceFn, useEventListener } from 'ahooks'
import TradeButtonRadios from '@/features/trade-button-radios'
import { postAdvertCoincidenceList } from '@/apis/c2c/advertise'
import { requestWithLoading } from '@/helper/order'
import { useLayoutStore } from '@/store/layout'
import { t } from '@lingui/macro'
import styles from './index.module.css'

function LimitTip() {
  const [paused, setPaused] = useState<boolean>(false)

  const customVideo = useRef<HTMLVideoElement>(null)

  useEventListener(
    'loadedmetadata',
    () => {
      customVideo.current?.play()
    },
    { target: customVideo }
  )

  useEventListener(
    'play',
    () => {
      setPaused(false)
    },
    { target: customVideo }
  )

  useEventListener(
    'pause',
    () => {
      setPaused(true)
    },
    { target: customVideo }
  )

  const play = () => {
    customVideo.current?.play()
  }
  const footerStore = useLayoutStore()
  const videoSrc = footerStore?.columnsDataByCd.advertising_overlap?.h5Url

  return (
    <div className={styles['limit-tip-wrapper']}>
      <p className="text-text_color_02">{t`features_c2c_advertise_post_advertise_latest_price_table_index_4qi85irbj5`}</p>
      <div>
        <p>{t`features_c2c_advertise_post_advertise_latest_price_table_index_hzjhy6hpsu`}</p>
        <p>{t`features_c2c_advertise_post_advertise_latest_price_table_index_fl2_xen5x5`}</p>
        <p>{t`features_c2c_advertise_post_advertise_latest_price_table_index_8smqdkjvnb`}</p>
      </div>
      <div className="video-wrapper">
        <video muted autoPlay controls={!paused} className="w-full h-full rounded" ref={customVideo} poster="">
          <source src={videoSrc} type="video/mp4" />
        </video>
        {paused && (
          <div className="custom-video-button" onClick={play}>
            <Icon name="play_icon" />
          </div>
        )}
      </div>
    </div>
  )
}

function LimitAmount({ refresh }) {
  const showVideo = () => {
    Dialog.alert({
      title: t`features_c2c_advertise_post_advertise_latest_price_table_index_yumqzrgjok`,
      confirmButtonText: t`features_trade_common_notification_index_5101066`,
      className: 'dialog-confirm-wrapper confirm-black',
      message: <LimitTip />,
    })
  }
  const coincidenceOptions = [
    {
      label: t`features_agent_agent_invite_invite_info_invite_info_content_list_filter_list_filter_form_index_5101425`,
      value: 'low',
    },
    {
      label: t`features_trade_future_settings_margin_auto_detail_index_5101367`,
      value: 'middle',
    },
    {
      label: t`features_agent_agent_invite_invite_info_invite_info_content_list_filter_list_filter_form_index_5101426`,
      value: 'high',
    },
  ]
  const {
    advertiseForm: { coincidenceValue },
    updateAdvertiseForm,
  } = useC2CAdvertiseStore()
  const setCoincidence = (value: string) => {
    updateAdvertiseForm({ coincidenceValue: value })
  }

  return (
    <div>
      <div className="flex items-center mb-2">
        <span className="mr-1">{t`features_c2c_advertise_post_advertise_latest_price_table_index_wrkh8qoocg`}</span>
        <Icon hiddenMarginTop onClick={showVideo} name="msg" hasTheme className="text-xs" />
      </div>
      <div className="flex justify-between">
        <TradeButtonRadios
          hasGap
          bothClassName="h-26 rounded px-5 !mr-0"
          inactiveClassName="text-text_color_02"
          activeClassName="button-text_color_02 bg-bg_sr_color"
          options={coincidenceOptions}
          onChange={setCoincidence}
          value={coincidenceValue}
        />
        <div onClick={() => refresh(true)} className="text-brand_color">
          {t`features_c2c_advertise_post_advertise_latest_price_table_index_s4ojbbnas7`}
        </div>
      </div>
    </div>
  )
}

function LatestPriceTable() {
  const {
    advertiseForm,
    advertiseForm: {
      coincidenceValue,
      coin,
      minAmount,
      maxAmount,
      dealTypeCd,
      currency: { legalCurrencyId = '' } = {},
    },
    postOptions: { coincidenceData },
    updateAdvertiseForm,
    updatePostOptions,
  } = useC2CAdvertiseStore()
  const { ask = [], bid = [] } = coincidenceData || {}
  const sites = [
    {
      label: getBusinessName(),
      value: 'local',
    },
    {
      label: 'OKX',
      value: 'okx',
    },
    {
      label: t`features_c2c_advertise_post_advertise_latest_price_table_index_kdhfo7j3fz`,
      value: 'binance',
    },
  ]
  const [selectedSites, setSelectedSites] = useState([sites[0].value])
  const coincidenceTableInvisible =
    !coincidenceValue || !legalCurrencyId || !coin?.id || !dealTypeCd || !minAmount || !maxAmount
  /**
   * 获取广告重合度列表
   */
  const { run: loadOrderBookList } = useDebounceFn(
    async (withLoading = false) => {
      if (Number(minAmount) >= Number(maxAmount)) {
        return
      }
      if (!minAmount || !maxAmount || Number(minAmount) === 0 || Number(maxAmount) === 0) {
        return
      }
      const promise = postAdvertCoincidenceList({
        minAmount,
        maxAmount,
        dealTypeCd,
        coincidenceDegree: coincidenceValue,
        coinId: coin?.id,
        areaId: legalCurrencyId,
        source: selectedSites,
      })
      const isEmptyData = ask.length === 0 && bid.length === 0
      const res = await (withLoading || isEmptyData ? requestWithLoading(promise) : promise)
      const { isOk, data } = res || {}
      if (!isOk) {
        return
      }

      updatePostOptions({ coincidenceData: data })
    },
    {
      wait: 200,
    }
  )
  useEffect(() => {
    if (coincidenceTableInvisible) {
      return
    }
    loadOrderBookList()
  }, [advertiseForm, coincidenceTableInvisible, selectedSites])

  const onSiteChange = (value: string, checked: boolean) => {
    const nextSelectedSites = checked ? [...selectedSites, value] : selectedSites.filter(site => site !== value)
    if (nextSelectedSites.length === 0) {
      return
    }
    setSelectedSites(nextSelectedSites)
  }

  return (
    <div className="advertise-latest-price text-sm">
      <div className="advertise-latest-price-wrap">
        <div className="sites pb-2">
          {sites.map(site => {
            const isChecked = selectedSites.includes(site.value)
            return (
              <div
                onClick={() => onSiteChange(site.value, !isChecked)}
                className={classNames('site-item rv-hairline--surround', {
                  'is-checked': isChecked,
                })}
                key={site.value}
              >
                <Checkbox shape="square" checked={isChecked} iconSize={14} iconRender={defaultCheckboxIconRender}>
                  {site.label}
                </Checkbox>
              </div>
            )
          })}
        </div>
        {!coincidenceTableInvisible && (
          <>
            <div className="mb-3">
              <LimitAmount refresh={loadOrderBookList} />
            </div>
            <LatestPriceTableHeader />

            {ask?.length === 0 && bid.length === 0 ? (
              <CommonListEmpty className="empty" />
            ) : (
              <>
                {<LatestPriceTableContainer status={CoincidenceListTypeEnum.ask} />}
                {<LatestPriceTableContainer status={CoincidenceListTypeEnum.bid} />}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default LatestPriceTable
