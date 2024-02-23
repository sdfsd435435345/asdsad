import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import { IncreaseTag } from '@/nbit/react'
import { useMount } from 'ahooks'
import { useState, useEffect } from 'react'
import { rateFilter } from '@/helper/assets/spot'
import { useMarketStore } from '@/store/market'
import NoDataImage from '@/components/no-data-image'
import { getInmail, setInmail } from '@/helper/cache/inmail'
import { Input, Cell, Switch, Button, Dialog, Toast } from 'react-vant'
import ReminderPopup from '@/features/inmail/component/reminder-popup'
import { ReminderPriceType, ReminderPageType } from '@/typings/api/inmail'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { InmailString, InmailNum } from '@/features/inmail/component/inmail-swiper'
import {
  createTradePairReminder,
  getTradePairReminder,
  delTradePairReminder,
  getPriceNotice,
  getV1PerpetualTradePairPriceNoticeSettingApiRequest,
  getV1PerpetualTradePairPriceNoticeApiRequest,
  postV1PerpetualTradePairPriceNoticeAddApiRequest,
  getV1PerpetualTradePairPriceNoticeDeleteApiRequest,
} from '@/apis/inmail'
import { usePageContext } from '@/hooks/use-page-context'
import { useContractMarketStore } from '@/store/market/contract'
// import { KLineChartType } from '@nbit/chart-utils'
import styles from './index.module.css'

const ReminderPage = () => {
  // console.log('usePageContext', usePageContext())
  const type = usePageContext()?.routeParams?.type
  const [priceValue, setPriceValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [isRepeat, setIsRepeat] = useState<boolean>(false)
  const [isPricePopup, setIsPricePopup] = useState<boolean>(false)
  const [priceNotice, setPriceNotice] = useState<any>({})
  const [reminderParams, setReminderParams] = useState<any>({})
  const [reminderPrice, setReminderPrice] = useState<ReminderPriceType>()
  const [reminderData, setReminderData] = useState<Array<ReminderPageType>>([])

  const marketState = useMarketStore()
  const contractMarketState = useContractMarketStore()

  const reminderList = [{ id: '1', name: t`store_inmail_index_5101319`, placeholder: t`store_inmail_index_5101320` }]

  const footerList = [
    { id: '1', name: t({ id: 'store_inmail_index_5101325', values: { 0: priceNotice.single } }) },
    { id: '2', name: t({ id: 'store_inmail_index_5101326', values: { 0: priceNotice.total } }) },
    { id: '3', name: t({ id: 'store_inmail_index_5101327', values: { 0: priceNotice.validDays } }) },
  ]

  /** 打开弹出框* */
  const onChangePrice = () => {
    setIsPricePopup(true)
  }

  /** 关闭弹出框* */
  const onClosePopup = () => {
    setIsPricePopup(false)
  }

  /** 选择参数关闭弹出框* */
  const onSelectPopup = v => {
    setPriceValue('')
    setReminderPrice(v)
    setIsPricePopup(false)
  }

  /** 展示的颜色* */
  const exhibitionBg = v => {
    if (v > 0) {
      return 'rise-color'
    } else if (v < 0) {
      return 'fall-color'
    } else {
      return 'grey-color'
    }
  }

  /** 获取对应币对提醒* */
  const getTradePairReminderData = async name => {
    const params = { symbol: name }
    const res: any =
      type === 1
        ? await getTradePairReminder(params)
        : await getV1PerpetualTradePairPriceNoticeApiRequest(params)
    if (res.isOk) {
      setReminderData(res.data)
    }
    setLoading(false)
  }

  /** 创建提醒* */
  const onCreateReminder = async () => {
    if (loading) return
    if (reminderData.length >= 10) {
      return Toast.info({
        duration: 2000,
        message: t({ id: 'store_inmail_index_5101325', values: { 0: priceNotice.single } }),
      })
    }
    let reminderType = 0
    if (reminderPrice?.id === InmailString.one) {
      Number(priceValue) > reminderParams.last ? (reminderType = 1) : (reminderType = 2)
    } else {
      reminderType = Number(reminderPrice?.id) + 1
    }
    const params = {
      value: priceValue,
      type: reminderType,
      symbol: reminderParams.symbolName,
      isRepeatNotice: isRepeat ? InmailNum.one : InmailNum.two,
    }
    setLoading(true)

    const res =
      type === 1
        ? await createTradePairReminder(params)
        : await postV1PerpetualTradePairPriceNoticeAddApiRequest(params as any)
    if (!res.isOk) {
      return setLoading(false)
    }
    const name = reminderParams.symbolName
    name && getTradePairReminderData(name)
  }

  /** 删除对应币对的提醒* */
  const onDeleteChange = async v => {
    setLoading(true)
    // console.log('type---', type)
    const res =
      type === 1
        ? await delTradePairReminder({ id: v.id })
        : await getV1PerpetualTradePairPriceNoticeDeleteApiRequest({ id: v.id })
    if (!res.isOk) {
      return setLoading(false)
    }
    const name = reminderParams.symbolName
    name && getTradePairReminderData(name)
  }

  /** 币对提醒数据文字格式化* */
  const reminderDataText = v => {
    switch (v.type) {
      case InmailNum.one:
        return t({
          id: 'features_inmail_reminder_page_index_5101344',
          values: { 0: v.value },
        })
      case InmailNum.two:
        return t({
          id: 'features_inmail_reminder_page_index_5101345',
          values: { 0: v.value },
        })
      case InmailNum.three:
        return t({
          id: 'features_inmail_reminder_page_index_5101346',
          values: { 0: v.value },
        })
      case InmailNum.four:
        return t({
          id: 'features_inmail_reminder_page_index_5101347',
          values: { 0: v.value },
        })
      default:
        return ''
    }
  }

  /** 获取现货 - 币对 - 价格预警全局配置* */
  const getTradePairNotice = async () => {
    const res =
      type === 1
        ? await getPriceNotice({})
        : await getV1PerpetualTradePairPriceNoticeSettingApiRequest({})
    if (!res.isOk && !res.data) return
    setPriceNotice(res.data)
  }

  /** * 输入框数字输入 */
  const setPriceInput = v => {
    // 不能输入 0
    if (v && !Number(v)) return setPriceValue('')
    const data = reminderParams.last
    const num = data?.split('.')[1]?.length || 0
    const reg = RegExp(`^\\D*([0-9]\\d*\\.?\\d{0,${num}})?.*$`)
    setPriceValue(v.replace(reg, '$1'))
  }

  /** 提醒* */
  const onShowToast = () => {
    Dialog.alert({
      message: (
        <div className={styles['regsiter-modal-wrap']}>
          {/* <Icon name="tips_icon" className="modal-wrap-icon" /> */}
          <div className="modal-wrap-text">{t`features_inmail_reminder_page_index_5101331`}</div>
        </div>
      ),
      confirmButtonColor: '#101014',
      confirmButtonText: t`features_trade_common_notification_index_5101066`,
    })
  }

  useMount(() => {
    const params = type === 1 ? marketState.currentCoin : contractMarketState.currentCoin
    getTradePairNotice()
    setReminderPrice(reminderList[0])
    if (params.id && params.symbolName && params.last) {
      setInmail(params)
      setReminderParams(params)
    } else {
      setReminderParams(getInmail() || {})
    }
  })

  useEffect(() => {
    const name = reminderParams.symbolName
    name && setLoading(true)
    name && getTradePairReminderData(name)
  }, [reminderParams])

  return (
    <div className={styles.scoped}>
      <NavBar
        title={`${reminderParams.baseSymbolName}${type === 1 ? '/' : ''}${
          reminderParams.quoteSymbolName
        }`}
        left={<Icon name="back" hasTheme />}
        right={
          <Link
            href={`/inmail/all-reminder/${type}`}
            className="all-reminder"
          >{t`features_inmail_all_reminder_index_5101315`}</Link>
        }
      />
      <div className="reminder-page-price">
        <div className="page-price-header">{reminderParams.last}</div>
        <div className="page-price-footer">
          <div className="price-footer-left">
            {rateFilter({
              amount: reminderParams.last,
              symbol: reminderParams.quoteSymbolName,
            })}
          </div>
          <div className={`price-footer-right ${exhibitionBg(reminderParams.chg)}`}>
            <IncreaseTag hasPostfix digits={2} value={reminderParams.chg} />
          </div>
        </div>
      </div>
      <div className="reminder-page-menu">
        <div className="page-menu-header" onClick={onChangePrice}>
          <div className="menu-header-text">{reminderPrice?.name}</div>
          <Icon hasTheme name="regsiter_icon_drop" className="menu-header-icon" />
        </div>
        <Input
          type="number"
          align="center"
          value={priceValue}
          className="page-menu-input"
          onChange={v => setPriceInput(v)}
          placeholder={reminderPrice?.placeholder}
          prefix={
            reminderPrice?.id === InmailString.one && priceValue ? (
              <div className={`menu-input-price`}>
                <Icon className="input-price-icon" name={Number(priceValue) > reminderParams.last ? 'rise1' : 'fall'} />
                <div className={`${Number(priceValue) > reminderParams.last ? 'rise-color' : 'fall-color'}`}>
                  {Number(priceValue) > reminderParams.last
                    ? t`features_inmail_reminder_page_index_5101332`
                    : t`features_inmail_reminder_page_index_5101333`}
                </div>
              </div>
            ) : null
          }
          suffix={reminderPrice?.id !== InmailString.one ? <span>{'%'}</span> : null}
        />
        <Cell
          title={
            <div className="page-menu-title">
              <div className="menu-title-text">{t`features_inmail_reminder_page_index_5101334`}</div>
              <Icon name="msg" className="menu-title-icon" onClick={onShowToast} />
            </div>
          }
          className="page-menu-switch"
        >
          <Switch checked={isRepeat} size={20} onChange={v => setIsRepeat(v)} />
        </Cell>
        <Button type="primary" onClick={onCreateReminder} className="page-menu-button" disabled={!priceValue}>
          <span
            className={`${!priceValue ? 'text-text_color_04' : 'button-text_02'}`}
          >{t`features_inmail_reminder_page_index_5101335`}</span>
        </Button>
      </div>
      <div className="reminder-page-footer">
        <div className="page-footer-text">{t`features_inmail_reminder_page_index_5101336`}</div>
        <div className="page-footer-content">
          {reminderData?.length ? (
            reminderData.map(v => {
              return (
                <div className="footer-content-list" key={v.id}>
                  <div className="content-list-title">
                    <div className="list-title-first">{reminderDataText(v)}</div>
                    <div className="list-title-second">
                      {v.isRepeatNotice === 1
                        ? t`features_inmail_reminder_page_index_5101348`
                        : t`features_inmail_reminder_page_index_5101338`}
                    </div>
                  </div>
                  <Icon hasTheme name="delete" className="content-list-icon" onClick={() => onDeleteChange(v)} />
                </div>
              )
            })
          ) : loading ? null : (
            <NoDataImage footerText={t`features_inmail_reminder_page_index_5101339`} className="page-footer-img" />
          )}
          <div className="page-footer-list">
            {footerList.map(v => {
              return (
                <div className="footer-list-content" key={v?.id}>
                  <Icon name="prompt-symbol" className="footer-list-icon" />
                  <div className="footer-list-text">{v.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <FullScreenLoading mask isShow={loading} className="fixed" />
      <ReminderPopup visible={isPricePopup} onClose={onClosePopup} onChange={onSelectPopup} />
    </div>
  )
}

export default ReminderPage
