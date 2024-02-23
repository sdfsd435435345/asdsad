import { t } from '@lingui/macro'
import { getCoinList } from '@/apis/assets/coin'
import { AssetsRouteEnum } from '@/constants/assets'
import { C2CListCapitalTransferReactiveType, C2CListCapitalCoinType } from '@/typings/api/c2c/center'
import { useMount, useCreation, useBoolean, useToggle, useReactive } from 'ahooks'
import { usePageContext } from '@/hooks/use-page-context'
import { getAssetsHistoryPageRoutePath } from '@/helper/route'
import { C2cFundsTransfer, C2cAccountEnum, C2cFastPayTransferTypeEnum } from '@/constants/c2c/center'
import { getC2cCoinTypeList, addC2cFundsTransfer } from '@/apis/c2c/center'
import { CoinListResp, RecordsCoinListResp } from '@/typings/api/assets/assets'
import { getCoinPrecision } from '@/helper/assets/spot'
import { onSetPositionOffset } from '@/helper/assets/futures'
import { formatCurrency, formatNumberDecimal, removeDecimalZero } from '@/helper/decimal'
import { AssetsSelection } from '@/features/c2c/center/component/assets-selection'
/** 引入的组件* */
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import { Input, Toast, Button } from 'react-vant'
import LazyImage from '@/components/lazy-image'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { useCommonStore } from '@/store/common'
import { transferFastPayApiRequest } from '@/apis/c2c/mode'
import styles from './index.module.css'

enum CapitalTransferEnum {
  precision = 2,
}

function CapitalTransfer() {
  /** 对象池管理* */
  const state = useReactive<C2CListCapitalTransferReactiveType>({
    /** 当前要划转资金* */
    coinPrice: '',
    /** 当前可展示 c2c 币种* */
    coinC2cData: [],
    /** 当前可展示的资产币种* */
    coinAssetsData: [],
    coinVisible: false,
    /** 当前选择的币种数据* */
    coinType: {} as C2CListCapitalCoinType,
  })

  /** 加载状态* */
  const [loading, { setTrue, setFalse }] = useBoolean(false)
  const { c2cMode } = useCommonStore()
  /** 划转转换* */
  const [isSwitch, { toggle, setLeft, setRight }] = useToggle()

  const pageContext = usePageContext()

  /** 获取路由数据* */
  const getRouterId = () => {
    const type = pageContext?.urlParsed?.search?.type
    const coinName = pageContext?.urlParsed?.search?.coinName
    return { type, coinName }
  }

  const onCapitalSwitch = () => {
    toggle()
    state.coinPrice = ''
  }

  /** 账户详情* */
  const onAccountDetail = () => {
    link(getAssetsHistoryPageRoutePath(AssetsRouteEnum.c2c))
  }

  const onHeaderScalp = () => {
    state.coinVisible = true
  }

  /** 获取精度去除小数点后零* */
  const dotCoin = (price, precision) => {
    return removeDecimalZero(formatCurrency(price, precision)) || C2cAccountEnum.ZERO_STRING
  }

  /** 展示价格* */
  const showPrice = () => {
    let num = C2cAccountEnum.ZERO_STRING as string
    isSwitch
      ? (num = dotCoin(state.coinType?.balance, state.coinType?.coinPrecision))
      : (num = dotCoin(state.coinType?.availableAmount, state.coinType?.coinPrecision))
    return num
  }

  /** 处理当前划转类型币种* */
  const handleCoinData = data => {
    const { coinName } = getRouterId()
    const name = state.coinType?.coinName || coinName
    if (name) {
      const params = data?.find(v => v.coinName === name)
      return params && (state.coinType = params)
    }
    const coinData = data ? data[0] : []
    return (state.coinType = coinData)
  }

  /** 同时获取 c2c 和资产币种* */
  const getC2cAssetsCoinData = async (flag?: boolean) => {
    const [{ data, isOk }, { data: AssetsData, isOk: isAssetsOk }] = await Promise.all([
      getC2cCoinTypeList({}), // 获取全部资产币种
      getCoinList({ pageSize: 0, pageNum: 1 }),
    ])
    if (!isOk || !isAssetsOk) return setFalse()
    const newData = data?.map(coinParams => {
      return {
        ...coinParams,
        coinPrecision: getCoinPrecision(coinParams.symbol as string),
      }
    })
    newData && (state.coinC2cData = newData)
    /** 优化数据结构* */
    const arr = newData
      ?.map((v: RecordsCoinListResp) => {
        const params = AssetsData?.list?.find(item => item?.coinName === v?.coinName)
        return params ? { ...params, coinPrecision: getCoinPrecision(params.symbol as string) } : undefined
      })
      .filter(item => item !== undefined) as CoinListResp[]
    const handleData = isSwitch ? newData : arr
    handleData?.length && handleCoinData(flag ? newData || [] : handleData)
    state.coinAssetsData = arr || []
    setFalse()
  }

  /** 全部划转* */
  const onTransferChange = () => {
    const num = isSwitch ? state.coinType?.balance : state.coinType?.availableAmount
    state.coinPrice = removeDecimalZero(formatNumberDecimal(num, state.coinType?.coinPrecision))
  }

  /** 输入币对数* */
  const onCoinPriceChange = (v: string) => {
    /** 处理币种精度* */
    const offsetNum = onSetPositionOffset(v, state.coinType?.coinPrecision || CapitalTransferEnum.precision)
    const num = offsetNum.replace(/[^\d^\\.]+/g, '')
    state.coinPrice = num
  }

  /** 保存* */
  const onPreData = async () => {
    const currentPrice = state.coinPrice ? Number(state.coinPrice) : C2cAccountEnum.ZERO_LENGTH
    const oldPrice = showPrice() ? Number(showPrice()) : C2cAccountEnum.ZERO_LENGTH
    if (!currentPrice) {
      return Toast.info(t`features_assets_futures_common_withdraw_modal_index_5101412`)
    }
    if (currentPrice > oldPrice) {
      const message = `${t`features_c2c_center_capital_transfer_index_jflrxmmxi9dnqi70jlhsk`}${showPrice()}`
      return Toast.info(message)
    }
    setTrue()
    const { data, isOk } = await (c2cMode.isPublic
      ? transferFastPayApiRequest({
          amount: Number(state.coinPrice),
          linkedBusinessId: c2cMode.c2cBusinessId as any,
          coinId: state.coinType?.[isSwitch ? 'id' : 'coinId'] || '',
          type: isSwitch ? C2cFastPayTransferTypeEnum.wallet : C2cFastPayTransferTypeEnum.c2c,
        })
      : addC2cFundsTransfer({
          amount: state.coinPrice,
          coinId: state.coinType?.[isSwitch ? 'id' : 'coinId'],
          typeCd: C2cFundsTransfer[isSwitch ? 'c2c' : 'asstes'],
        }))
    if (isOk && data) {
      state.coinPrice = ''
      getC2cAssetsCoinData()
      Toast.success(t`features_c2c_center_capital_transfer_index_s9yfftnsefjl9kltj4ocj`)
    }
    setFalse()
  }

  const setDefaultSwitch = () => {
    const { type } = getRouterId()
    getC2cAssetsCoinData(!!type)
    if (type) {
      return setRight()
    }
    return setLeft()
  }

  useCreation(() => {
    const data = isSwitch ? state.coinC2cData : state.coinAssetsData
    data?.length && handleCoinData(data)
  }, [isSwitch])

  useMount(() => {
    setTrue()
    setDefaultSwitch()
  })

  return (
    <section className={styles['capital-transfer']}>
      <NavBar
        title={t`features_trade_future_c2c_22225101591`}
        right={<Icon name="asset_record" hasTheme className="capital-transfer-icon" onClick={onAccountDetail} />}
      />
      <header className="capital-transfer-header">
        <div className="transfer-header-text">{t`constants_c2c_common_iglude2ha-gaj2qgdfoqi`}</div>
        <div className="transfer-header-select" onClick={onHeaderScalp}>
          <div className="transfer-header-select-left">
            <LazyImage src={state.coinType?.appLogo} className="mr-1" width={22} height={22} round />
            <div className="header-select-left-text">{state.coinType?.coinName}</div>
          </div>
          <Icon name="next_arrow" hasTheme />
        </div>
      </header>
      <main className="capital-transfer-main">
        <div className="capital-transfer-main-wrap">
          <div className="capital-transfer-main-contair">
            <div className={`transfer-main-contair-text ${isSwitch ? 'transfer-main-transform-next' : ''}`}>
              <Icon name="c2c_trading_account" hasTheme className="switch-icon" />
              <span>
                {isSwitch
                  ? t`features_assets_financial_record_datetime_search_index_602`
                  : t`features_trade_future_c2c_22225101592`}
              </span>
              <label>{t`features_trade_future_c2c_22225101593`}</label>
            </div>
            <Icon name="c2c_return" hasTheme className="main-contair-middle-icon" />
            <div className={`transfer-main-contair-text ${isSwitch ? 'transfer-main-transform-up' : ''}`}>
              <Icon name="nav_order_c2c" hasTheme className="switch-icon" />
              <span>
                {isSwitch
                  ? t`features_trade_future_c2c_22225101592`
                  : t`features_assets_financial_record_datetime_search_index_602`}
              </span>
              <label>{t`features_trade_future_c2c_22225101594`}</label>
            </div>
          </div>
          <Icon name="switch" className="capital-transfer-main-icon" onClick={onCapitalSwitch} />
        </div>
      </main>
      <footer className="capital-transfer-footer">
        <div className="capital-transfer-footer-num">
          <div className="footer-num-text">{t`features/trade/spot/price-input-0`}</div>
          <div className="footer-num-usdt">{`${t`features_trade_future_c2c_22225101595`}${showPrice()} ${
            state.coinType?.coinName || ''
          }`}</div>
        </div>
        <div className="h-10 px-3 rounded flex items-center bg-bg_sr_color">
          <Input
            type="number"
            value={state.coinPrice}
            placeholder={t`features_trade_future_c2c_225101582`}
            suffix={
              <div className="text-sm font-normal flex items-center">
                <span className="text-text_color_01">{state.coinType?.coinName}</span>
                <div className="mx-1 text-text_color_04">|</div>
                <span
                  className="text-brand_color"
                  onClick={onTransferChange}
                >{t`features_trade_future_c2c_22225101596`}</span>
              </div>
            }
            onChange={onCoinPriceChange}
          />
        </div>
      </footer>
      <div className="capital-transfer-sure-button">
        <Button
          type="primary"
          onClick={onPreData}
          className="set-up-footer-button"
          disabled={!Number(state.coinPrice || C2cAccountEnum.ZERO_LENGTH)}
        >
          {t`user.field.reuse_17`}
        </Button>
      </div>
      {state.coinVisible && (
        <AssetsSelection
          showAll={false}
          title={t`features_trade_future_settings_margin_records_index_678`}
          searchHint={t`future.funding-history.search-future`}
          coinId={state.coinType?.id || state.coinType?.coinId}
          allList={isSwitch ? state.coinC2cData : state.coinAssetsData}
          onClose={() => (state.coinVisible = false)}
          onSelect={e => {
            state.coinPrice = ''
            state.coinVisible = false
            state.coinType = e as C2CListCapitalCoinType
          }}
        />
      )}
      <FullScreenLoading mask isShow={loading} />
    </section>
  )
}

export default CapitalTransfer
