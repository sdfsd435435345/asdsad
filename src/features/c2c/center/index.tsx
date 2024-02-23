import { t } from '@lingui/macro'
import { useState, useRef } from 'react'
import { postReleasesCoinList } from '@/apis/c2c/common'
import { useC2CCenterStore } from '@/store/c2c/center'
import { useSize, useMount, useCreation, useDebounce } from 'ahooks'
import { usePageContext } from '@/hooks/use-page-context'
import { C2CCoinListResp, C2CAreaListResp } from '@/typings/api/c2c/common'
import { AssetsSelection } from '@/features/assets/common/assets-selection'
import { getTimeDiff, getWeekDay, getCurrentTimeDiff } from '@/helper/date'
import { getC2CAccount, getC2CListOperation } from '@/helper/route'
import {
  getC2cPersonSetting,
  addFollowUser,
  unFollowUser,
  addBlackList,
  delBlackList,
  getAdvertList,
} from '@/apis/c2c/center'
import { IC2cCoinItem, IQueryTradeAdListReq } from '@/typings/api/c2c/trade'
import { C2cTradeAdDirectionEnum } from '@/constants/c2c/trade'
import { useC2cTradeBaseHooks } from '@/hooks/features/c2c/trade'
import { ITradeContext, tradeContext } from '@/features/c2c/trade/trade-context'
import { C2cCenterActions, C2cCenterMenuData, C2cCenterTime } from '@/constants/c2c/common'
import { C2cAccountEnum, C2cCenterListEnum, C2cCenterStatusEnum } from '@/constants/c2c/center'
import { useUserStore } from '@/store/user'
import { C2CUserSettingType, C2CCenterAssetsType } from '@/typings/api/c2c/center'
/** 引入的组件* */
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import CommonList from '@/components/common-list/list'
import UserPopUp from '@/features/user/components/popup'
import { Button, Popover, Input, Toast } from 'react-vant'
import C2CCenterHeader from '@/features/c2c/center/component/c2c-center-header'
import CommonListItem from '@/features/c2c/center/component/common-list-item'
import BlackImage from '@/features/c2c/center/component/black-image'
import DressingPopup from '@/features/c2c/center/component/dressing-popup'
import OperationPopup from '@/features/c2c/center/component/operation-popup'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import UserPopupContent from '@/features/c2c/payments/component/popup-content'
import MenuCard from '@/features/c2c/center/component/menu-card'
import styles from './index.module.css'

export type DressingPopupDefault = {
  tradeTypeCds?: string[] // 交易类型
  advertDirectCds?: string[] // 广告方向
  areaIds?: string[] // 交易区域
  isAllSelect?: boolean
}

function C2cCenter() {
  const [page, setPage] = useState<number>(C2cAccountEnum.ZERO_LENGTH)
  /** 确认拉黑状态* */
  const [blackLoading, setBlackLoading] = useState<boolean>(false)
  /** 条件搜索状态* */
  const [searchLoading, setSearchLoading] = useState<boolean>(false)
  const [searchHeight, setSearchHeight] = useState<number>(C2cAccountEnum.ZERO_LENGTH)
  const [loading, setLoading] = useState<boolean>(false)
  /** 关注时拉黑确认弹窗* */
  const [visible, setVisible] = useState<boolean>(false)
  /** 上拉刷新状态* */
  const [finished, setFinished] = useState<boolean>(false)
  /** 当前在线状态* */
  const [isOnline, setIsOnline] = useState<boolean>(false)
  /** 是否设置过状态* */
  const [onlineSettingText, setOnlineSettingText] = useState<string>('')
  /** 筛选* */
  const [visibleDressing, setVisibleDressing] = useState<boolean>(false)
  /** 拉黑原因弹窗* */
  const [operationVisible, setOperationVisible] = useState<boolean>(false)
  const [blackVisible, setBlackVisible] = useState<boolean>(false)
  /** 选择的币种* */
  const [coinType, setCoinType] = useState<IC2cCoinItem>({} as IC2cCoinItem)
  /** 币种数据* */
  const [coinData, setCoinData] = useState<C2CCoinListResp[]>([])
  /** 是否有币种列表广告* */
  const [isCoinList, setIsCoinList] = useState<boolean>(false)
  const [coinVisible, setCoinVisible] = useState<boolean>(false)
  /** 用户设置信息* */
  const [userSetting, setUserSetting] = useState<C2CUserSettingType>()
  const [useId, setUseId] = useState<string>('')
  /** 广告列表* */
  const [advertisementList, setAdvertisementList] = useState<Array<C2CCenterAssetsType>>([])
  const [filterAdvertisement, setFilterAdvertisement] = useState<DressingPopupDefault>()
  const [amountScalp, setAmountScalp] = useState<string>()

  const { C2CCenterUser, currentTradeAreaStore, getC2CCenterUser } = useC2CCenterStore()

  const [params, setParams] = useState<IQueryTradeAdListReq>({
    coinId: coinType?.id,
    currentTradeArea: currentTradeAreaStore as C2CAreaListResp,
    currentCoin: coinType as IC2cCoinItem,
    advertDirectCds: [C2cTradeAdDirectionEnum.buy],
  })

  const isDelFollow = useRef<boolean>(false)
  const isBlack = useRef<boolean>(false)
  const pageSize = useRef<number>(10)
  const listDom = useRef<HTMLDivElement>(null)

  const listSize = useSize(listDom)
  const debounceAmountScalp = useDebounce(amountScalp, { wait: 500 })

  const pageContext = usePageContext()
  const { userInfo, c2cUserInfo } = useUserStore()
  const uid = c2cUserInfo.uid || userInfo.uid
  const select = option => {
    link(option.id === C2cCenterListEnum.account ? getC2CAccount() : getC2CListOperation(option.id))
  }

  const getRouterId = () => {
    const routerUid = pageContext.urlParsed?.search?.uid
    return routerUid || ''
  }

  /** 获取未全选交易区下的币种* */
  const getUnAllCoinData = (v?: string[]) => {
    const routerUid = getRouterId()
    return postReleasesCoinList({
      areaIds: v || [],
      uid: routerUid,
      isActivityOnSheves: true,
    })
  }

  /** 下拉刷新* */
  const onRefreshing = () => {
    setPage(0)
    setFinished(false)
    setAdvertisementList([])
  }

  /** 上拉加载* */
  const onLoadRefresh = async () => {
    setFinished(true)
    !finished && setPage(page + 1)
  }

  /** 拉黑弹窗原因* */
  const onContinue = () => {
    setVisible(false)
    setOperationVisible(true)
    isDelFollow.current = true
  }

  /** 处理接单状态* */
  const handleStatus = (status: C2CUserSettingType, currentUid: string) => {
    /** 如果不是自己主页就不用管在线状态* */
    if (currentUid) return setIsOnline(true)
    const { receiveOrderStatus: onlineStatus } = status || {}
    const { receiveOrderTimeJson } = status || {}
    const { dayInWeek, startTime, endTime } = JSON.parse(receiveOrderTimeJson || '{}')
    let isOnlineStatus = false
    let lineSettingText = '--'
    switch (onlineStatus) {
      case C2cCenterStatusEnum.order:
        isOnlineStatus = true
        lineSettingText = t`features_trade_future_c2c_5101557`
        break
      case C2cCenterStatusEnum.system:
        isOnlineStatus = status?.online || false
        lineSettingText = status?.online ? t`features_trade_future_c2c_5101557` : t`features_trade_future_c2c_5101559`
        break
      case C2cCenterStatusEnum.setUp:
        const currentWeek = getWeekDay()
        const weekTime = dayInWeek?.split(',') || []
        const isInWeek = weekTime.includes(String(currentWeek))
        if (isInWeek) {
          const { startDate, endDate, currentDate } = getCurrentTimeDiff(startTime, endTime)
          const currentStatus = startDate <= currentDate && endDate >= currentDate
          isOnlineStatus = currentStatus
          lineSettingText = currentStatus ? t`features_trade_future_c2c_5101557` : t`features_trade_future_c2c_5101559`
        } else {
          isOnlineStatus = false
          lineSettingText = t`features_trade_future_c2c_5101559`
        }
        break
      case C2cCenterStatusEnum.rest:
        isOnlineStatus = false
        lineSettingText = t`features_trade_future_c2c_5101559`
        break
      default:
        isOnlineStatus = false
    }
    setIsOnline(isOnlineStatus)
    setOnlineSettingText(lineSettingText)
  }

  /** 处理获取的数据* */
  const handleProfileList = async () => {
    setLoading(true)
    const routerId = getRouterId()
    const currentUid = routerId && routerId !== uid ? routerId : ''
    setUseId(currentUid)
    /** 获取个人信息* */
    getC2CCenterUser(currentUid)
    /** 获取设置信息* */
    const { data: personData, isOk: isSetting } = await getC2cPersonSetting({})
    if (personData && isSetting) {
      setUserSetting(personData)
      handleStatus(personData, currentUid)
    }
    /** 获取有广告币种列表* */
    const { data: coinAllData, isOk: isCoinOk } = await getUnAllCoinData()
    if (coinAllData && isCoinOk) {
      setIsCoinList(coinAllData?.length > 0)
      setCoinData(coinAllData as C2CCoinListResp[])
      setCoinType(coinAllData?.[0] as IC2cCoinItem)
    }
    setLoading(false)
  }

  /** 处理时间* */
  const handleTime = (status: C2CUserSettingType) => {
    const onlineStatus = status?.receiveOrderStatus
    switch (onlineStatus) {
      case C2cCenterStatusEnum.setUp:
        const time = status?.receiveOrderTimeJson ? JSON.parse(status.receiveOrderTimeJson) : ''
        const weekTime = time.dayInWeek?.split(',')
        const newWeekTime = weekTime?.map(v => C2cCenterTime()[v])
        const orderTime =
          newWeekTime?.length >= 7 ? t`features_c2c_center_index_xl4h8_ooznprzn-3hlve3` : newWeekTime?.join(' ')
        return `${t`features_c2c_center_index_whqfj9mjdvr-acbtrtqzy`}${orderTime} ${time.startTime} ~ ${time.endTime}`
      case C2cCenterStatusEnum.system:
        const startText = t`features_c2c_center_index_hncvcy3-i3d9hmrx0lfvd`
        const currentTime = Number(status?.connectTime || C2cAccountEnum.ZERO_LENGTH)
        const day = getTimeDiff(currentTime, 'day') || C2cAccountEnum.ZERO_LENGTH
        if (day > C2cAccountEnum.ZERO_LENGTH) {
          return `${startText}${day}d${t`features_c2c_center_index_yuzk8i-8-iqqasnhdrjq0`}`
        }
        const hour = getTimeDiff(currentTime, 'hour') || C2cAccountEnum.ZERO_LENGTH
        if (hour > C2cAccountEnum.ZERO_LENGTH) {
          return `${startText}${hour}h${t`features_c2c_center_index_yuzk8i-8-iqqasnhdrjq0`}`
        } else {
          const minTime = getTimeDiff(currentTime, 'minute')
          return `${startText}${minTime || 0}${t`features_inmail_index_5101342`}`
        }
      default:
        return ''
    }
  }

  /** 关注* */
  const addFollow = async (flag: boolean) => {
    const useParams = {
      userIds: [useId],
    }
    const reuqestParams = C2CCenterUser?.followed ? unFollowUser : addFollowUser
    const { data, isOk } = await reuqestParams(useParams)
    if (isOk && data) {
      if (flag) {
        const toastText = C2CCenterUser?.followed
          ? t`features_c2c_center_index_hzen0jx4tjudw93zaxoc0`
          : t`features_c2c_center_index_8y3l7vmnvp2peqfjghvwn`
        Toast.success(toastText)
        handleProfileList()
      } else {
        isDelFollow.current = false
      }
      setAdvertisementList([])
    }
  }
  const onMeansChange = async () => {
    if (!C2CCenterUser?.followed && C2CCenterUser?.blocked) {
      isBlack.current = false
      setBlackVisible(true)
      return
    }
    addFollow(true)
  }

  /** 选择原因拉黑* */
  const onOperationChange = async (v: string) => {
    const useParams = {
      userId: useId,
      reasonCode: v,
    }
    setBlackLoading(true)
    isDelFollow.current && addFollow(false)
    const { data, isOk } = await addBlackList(useParams)
    if (data && isOk) {
      Toast.success(t`features_c2c_center_index_m-fymzsmp1voegs3cgyfh`)
      handleProfileList()
      setOperationVisible(false)
    }
    setBlackLoading(false)
  }

  /** 确认取消拉黑* */
  const delBlack = async (flag: boolean) => {
    const useParams = {
      userIds: [useId],
    }
    const { data, isOk } = await delBlackList(useParams)
    if (isOk && data) {
      setAdvertisementList([])
      flag || isBlack.current ? Toast.success(t`features_c2c_center_index_c1m6fvcokimazxok7wbpn`) : addFollow(true)
      handleProfileList()
    }
  }
  const onBlackContinue = () => {
    delBlack(false)
    setBlackVisible(false)
  }

  /** 点击拉黑* */
  const onBlackChange = () => {
    if (C2CCenterUser?.blocked) {
      isBlack.current = true
      setBlackVisible(true)
    } else {
      C2CCenterUser?.followed ? setVisible(true) : setOperationVisible(true)
    }
  }

  /** 获取上架的广告列表* */
  const getAdvertisementList = async () => {
    const paramsData = {
      uid: useId,
      pageNum: page,
      advertStatus: C2cAccountEnum.ONE_STRING, // 固定查询上架的广告
      pageSize: pageSize.current,
      amount: amountScalp,
      coinIds: coinType?.id ? [coinType?.id] : [],
      areaIds: filterAdvertisement?.areaIds || [],
      tradeTypeCds: filterAdvertisement?.tradeTypeCds || [],
      advertDirectCds: filterAdvertisement?.advertDirectCds || [],
    }
    setSearchLoading(true)
    const res = await getAdvertList(paramsData)
    if (!res.isOk && !res.data) return setSearchLoading(false)
    if (!res.data.list?.length) {
      setFinished(true)
      setSearchLoading(false)
      return
    }
    const arr = [...advertisementList, ...res.data.list]
    setSearchLoading(false)
    setFinished(arr?.length >= res.data.total)
    arr && setAdvertisementList(arr)
  }

  /** 筛选* */
  const onDressingChange = async (v: DressingPopupDefault) => {
    const { data = [], isOk } = await getUnAllCoinData(v?.areaIds)
    if (isOk) {
      const hasCoin = data?.some(item => item.id === coinType?.id)
      setCoinData((data as C2CCoinListResp[]) || [])
      !hasCoin && setCoinType(data?.[0] as IC2cCoinItem)
    }
    setPage(0)
    setFinished(false)
    setAdvertisementList([])
    setFilterAdvertisement(v)
    setSearchHeight(listSize?.height ?? 0)
  }

  const onParamsChange = (newParams: IQueryTradeAdListReq) => {
    setParams(old => ({ ...old, ...newParams }))
  }

  useC2cTradeBaseHooks()
  const contextValue: ITradeContext = useCreation(() => {
    return { params, onParamsChange }
  }, [currentTradeAreaStore, params, onParamsChange])

  /** 当前交易区变动，以及币种变动* */
  useCreation(() => {
    setParams({
      coinId: coinType?.id,
      currentTradeArea: currentTradeAreaStore as C2CAreaListResp,
      currentCoin: coinType as IC2cCoinItem,
      advertDirectCds: [C2cTradeAdDirectionEnum.buy],
    })
  }, [currentTradeAreaStore, coinType])

  /** 输入的数量* */
  const onAmountChange = (v: string) => {
    const num = v.replace(/[^\d^\\.]+/g, '')
    setAmountScalp(num)
  }

  /** 输入数量搜索* */
  useCreation(() => {
    if (amountScalp === C2cAccountEnum.ZERO_STRING)
      return Toast.info(t`features_assets_futures_common_withdraw_modal_index_5101412`)
    setPage(C2cAccountEnum.ZERO_LENGTH)
    setFinished(false)
    setSearchHeight((listSize?.height as number) || C2cAccountEnum.ZERO_LENGTH)
    setAdvertisementList([])
  }, [debounceAmountScalp])

  useCreation(() => {
    coinType?.id && page && getAdvertisementList()
  }, [page, coinType])

  useMount(() => {
    onLoadRefresh()
    handleProfileList()
  })

  return (
    <section className={styles['c2c-center']}>
      <NavBar
        title={t`features_trade_future_c2c_25101566`}
        right={
          useId ? (
            !C2CCenterUser?.blocked && (
              <Icon name="c2c_block" hasTheme onClick={onBlackChange} className="c2c-center-icon" />
            )
          ) : (
            <Popover
              actions={C2cCenterActions()}
              onSelect={select}
              placement="bottom-end"
              className="c2c-center-popover"
              reference={<Icon name="c2c_more" hasTheme className="popover-icon" />}
            />
          )
        }
      />
      <header className="c2c-center-header">
        <div className="c2c-center-header-means">
          <C2CCenterHeader />
          {useId && (
            <Button
              size="small"
              disabled={loading}
              onClick={onMeansChange}
              type={C2CCenterUser?.followed ? undefined : 'primary'}
              className={`means-button ${C2CCenterUser?.followed ? 'means-button-text' : ''}`}
            >
              {C2CCenterUser?.followed
                ? t`features_trade_future_c2c_2225101588`
                : t`features_trade_future_c2c_25101572`}
            </Button>
          )}
        </div>
        {isCoinList && !useId && (
          <div className="c2c-center-header-status">
            <div className="header-my-status">
              <div className="my-status-text">
                {t`features_trade_future_c2c_25101573`}
                <span className={`${isOnline ? 'status-online' : 'status-reset'}`}>{onlineSettingText}</span>
              </div>
              <Link href="/c2c/center/set-up">
                <div className="my-status-fit">
                  {t`user.account_security.google_01`}
                  <Icon name="next_arrow" className="status-fit-icon" />
                </div>
              </Link>
            </div>
            <div className="header-my-time">{handleTime(userSetting as C2CUserSettingType)}</div>
          </div>
        )}
      </header>
      <div className="c2c-center-divider" />
      {C2CCenterUser?.blocked && useId ? (
        <BlackImage className="mt-20" />
      ) : (
        <>
          <MenuCard data={C2cCenterMenuData()} useId={useId} isCoinList={isCoinList} />
          <footer className="c2c-center-footer">
            {isCoinList && (
              <div className="center-footer-scalp">
                <Input
                  value={amountScalp}
                  placeholder={t`features_trade_spot_exchange_amount_510110`}
                  onChange={onAmountChange}
                  className="center-footer-scalp-input"
                  prefix={
                    <div className="center-footer-scalp-prefix" onClick={() => setCoinVisible(true)}>
                      <LazyImage width={16} height={16} src={coinType?.appLogo || ' '} round />
                      <label className="scalp-prefix-text">{coinType?.coinName || '--'}</label>
                      <Icon name="regsiter_icon_drop" className="scalp-prefix-drop" hasTheme />
                      <div className="scalp-divider" />
                    </div>
                  }
                />
                <Icon
                  hasTheme
                  name="asset_record_filter"
                  className="center-footer-scalp-icon"
                  onClick={() => setVisibleDressing(true)}
                />
              </div>
            )}
            <CommonList
              refreshing={false}
              finished={finished}
              onLoadMore={onLoadRefresh}
              onRefreshing={onRefreshing}
              finishedText={' '}
              listChildren={
                isCoinList && (
                  <div ref={listDom}>
                    <tradeContext.Provider value={contextValue}>
                      <CommonListItem
                        useId={useId}
                        data={advertisementList}
                        searchLoading={searchLoading}
                        filterAdvertisement={filterAdvertisement as DressingPopupDefault}
                      />
                    </tradeContext.Provider>
                  </div>
                )
              }
            />
            {searchLoading && <div style={{ height: `${searchHeight}px` }} />}
          </footer>
        </>
      )}
      <UserPopUp
        visible={visible}
        slotContent={
          <UserPopupContent
            onClose={() => setVisible(false)}
            onContinue={onContinue}
            leftButtonText={t`features_trade_future_c2c_25101579`}
            content={<div className="text-center">{t`features_trade_future_c2c_25101580`}</div>}
          />
        }
        className={styles['center-user-popUp']}
      />
      <UserPopUp
        visible={blackVisible}
        slotContent={
          <UserPopupContent
            onClose={() => setBlackVisible(false)}
            onContinue={onBlackContinue}
            leftButtonText={t`features_trade_future_c2c_25101579`}
            content={<div className="text-center">{t`features_trade_future_c2c_2225101590`}</div>}
          />
        }
        className={styles['center-user-popUp']}
      />

      <DressingPopup
        visible={visibleDressing}
        setVisible={setVisibleDressing}
        defaultData={filterAdvertisement}
        onChange={onDressingChange}
      />
      {operationVisible && (
        <OperationPopup
          visible={operationVisible}
          setVisible={setOperationVisible}
          loading={blackLoading}
          onChange={onOperationChange}
        />
      )}
      {coinVisible && (
        <AssetsSelection
          visible={coinVisible}
          showAll={false}
          title={t`features_trade_future_settings_margin_records_index_678`}
          searchHint={t`future.funding-history.search-future`}
          allList={coinData}
          coinId={coinType?.id}
          onClose={() => setCoinVisible(false)}
          onSelect={e => {
            setCoinVisible(false)
            if (coinType?.id === e?.id) return
            setCoinType(e as IC2cCoinItem)
            setAdvertisementList([])
          }}
        />
      )}
      <FullScreenLoading mask isShow={loading || searchLoading} className="fixed" />
    </section>
  )
}
export default C2cCenter
