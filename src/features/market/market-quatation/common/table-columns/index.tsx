import { CellContext, ColumnDef } from '@tanstack/react-table'
import { t } from '@lingui/macro'
import { ICommonTradePairType } from '@/typings/api/market'
import Icon from '@/components/icon'
import { convertToMillions, formatTradePair, getQuoteDisplayName } from '@/helper/market'
import { append0Prefix, checkTradePairType } from '@/helper/market/market-list'
import { TradePairWithCoinInfoType } from '@/typings/api/market/market-list'
import CollectStar from '@/components/collect-star'
import LazyImage from '@/components/lazy-image'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { ComingSoonColumnWrapper } from '@/features/market/market-quatation/common/table-columns/components/comming-soon-wrapper'
import { YapiGetV1PerpetualTradePairListData } from '@/typings/yapi/PerpetualTradePairListV1GetApi'
import { GlobalSearchTypesMappingEnum, MarketLisModulesEnum } from '@/constants/market/market-list/market-module'
import { useMarketListStore } from '@/store/market/market-list'
import { getHomeFavTabsConfig } from '@/constants/market/market-list/favorite-module'
import { Picker, Popup } from 'react-vant'
import { useState } from 'react'
import PriceColumn from './components/price-column'
import NameVolColumn from './components/name-vol-column'
import PriceVolColumn from './components/price-vol-column'
import ChgColumnBlockStyle from './components/chg-column-block-sytle'
import commonStyles from './index.module.css'

export type UnionedMarketListType = YapiGetV1PerpetualTradePairListData | TradePairWithCoinInfoType

/** 杠杆倍数 第二期做 */
function getLeverageColumn(item?: TradePairWithCoinInfoType) {
  return <div className="leverage-badges"></div>
}

const getTitleWithVolCol = () => [
  {
    accessorKey: 'baseSymbolName',
    header: t`features_market_activity_market_activity_layout_5101239`,
    cell: ctx => {
      const data = ctx.row.original
      return <NameVolColumn item={data} />
    },
    colSpan: 2,
    rowSpan: 2,
  },
  {
    accessorKey: 'quoteVolume',
    header: `/ ${t`store_market_market_list_spotmarkets_columnschema_2429`}`,
    colSpan: -1,
  },
]

const getTitleColumn = (hasStar: boolean, disableStar = false, hideStar = true) => [
  {
    accessorKey: 'baseSymbolName',
    header: t`features_market_activity_market_activity_layout_5101239`,
    cell: ctx => {
      const data = ctx.row.original
      return (
        <span className="inline-flex">
          {hasStar && (
            <CollectStar
              forceContext={
                (data as YapiGetV1PerpetualTradePairListData)?.typeInd
                  ? MarketLisModulesEnum.futuresMarkets
                  : MarketLisModulesEnum.spotMarkets
              }
              hideUnCheck={hideStar}
              disable={disableStar}
              needWrap={false}
              {...data}
            />
          )}
          {getQuoteDisplayName(data, true, undefined, undefined, undefined, true)}
        </span>
      )
    },
  },
]

const getTitleWithIconColumn = () => [
  {
    accessorKey: 'baseSymbolName',
    header: t`features_market_activity_market_activity_layout_5101239`,
    cell: ctx => {
      const data = ctx.row.original
      return (
        <span className="inline-flex">
          <LazyImage
            lazyload={false}
            src={data.appLogo || data.webLogo || ''}
            className="column-icon"
            width={24}
            height={24}
          />
          {getQuoteDisplayName(data, true, undefined, undefined, undefined, true)}
        </span>
      )
    },
  },
]

const HomeFavTitleHeader = () => {
  const { homeFavType, setHomeFavType } = useMarketListStore().homeModuleState
  const [visible, setvisible] = useState(false)
  const options = getHomeFavTabsConfig()
  return (
    <>
      <span onClick={() => setvisible(true)}>
        {t`features_market_activity_market_activity_layout_5101239`}
        <Icon name="regsiter_icon_drop" hasTheme className="ml-1 fav-dropdown-icon" />
      </span>
      <Popup round visible={visible} position="bottom" className={commonStyles['fav-tab-header-popup']}>
        <Picker
          value={homeFavType}
          onCancel={() => setvisible(false)}
          columns={options}
          onChange={v => {
            if (v !== undefined) setHomeFavType(v)
            setvisible(false)
          }}
          showToolbar={false}
        />
      </Popup>
    </>
  )
}

const getHomeFavTitleColumn = () => [
  {
    accessorKey: 'baseSymbolName',
    header: <HomeFavTitleHeader />,
    cell: ctx => {
      const data = ctx.row.original
      return (
        <span className="inline-flex">
          <LazyImage
            lazyload={false}
            src={data.appLogo || data.webLogo || ''}
            className="column-icon"
            width={24}
            height={24}
          />
          {getQuoteDisplayName(data, true)}
        </span>
      )
    },
  },
]

function getLastColumn(hasPopover = false, hasBaseCurrencyPrice = false) {
  return [
    {
      header: t`store_market_market_list_spotmarkets_columnschema_2432`,
      accessorKey: 'last',
      cell: ctx => {
        const item = ctx.row.original
        return (
          <ComingSoonColumnWrapper item={item}>
            <PriceColumn item={item} hasBaseCurrencyPrice={hasBaseCurrencyPrice} />
          </ComingSoonColumnWrapper>
        )
      },
      sorter: true,
      hasPopover,
    },
  ]
}

function getPriceWithVolColumn(showTextIfComingSoon = false) {
  return [
    {
      header: t`store_market_market_list_spotmarkets_columnschema_2432`,
      accessorKey: 'last',
      cell: ctx => {
        const item = ctx.row.original
        return (
          <ComingSoonColumnWrapper item={item} showMessage={showTextIfComingSoon}>
            <PriceVolColumn item={item} />
          </ComingSoonColumnWrapper>
        )
      },
      sorter: true,
      colSpan: 2,
    },
    {
      header: t`store_market_market_list_spotmarkets_columnschema_2427`,
      accessorKey: 'chg',
      sorter: true,
      colSpan: -1,
      cell: null,
    },
  ]
}

function getChgColumn(blockStyle = false, showTextIfComingSoon = false, showCommingSoonWrapper = true) {
  return [
    {
      header: t`store_market_market_list_spotmarkets_columnschema_2427`,
      accessorKey: 'chg',
      cell: ctx => {
        const item = ctx.row.original as YapiGetV1TradePairListData

        if (!showCommingSoonWrapper) {
          return blockStyle ? <ChgColumnBlockStyle item={item} /> : formatTradePair(item).chg()
        }

        return (
          <ComingSoonColumnWrapper item={item} showMessage={showTextIfComingSoon}>
            {blockStyle ? <ChgColumnBlockStyle item={item} /> : formatTradePair(item).chg()}
          </ComingSoonColumnWrapper>
        )
      },
      sorter: true,
    },
  ]
}

function getVolumnColumn(withCurrencyPrefix = true) {
  return [
    {
      header: t`store_market_market_list_spotmarkets_columnschema_2429`,
      accessorKey: 'quoteVolume',
      cell: ctx => {
        const item = ctx.row.original
        return (
          <ComingSoonColumnWrapper item={item}>
            <span className="quote-volume">{convertToMillions(item.quoteVolume, withCurrencyPrefix)}</span>
          </ComingSoonColumnWrapper>
        )
      },
      sorter: true,
    },
  ]
}

// #region 业务场景
/** 首页列表 */
export const getMarketHomeTableColumns = (): ColumnDef<ICommonTradePairType, any>[] => [
  ...getTitleWithIconColumn(),
  ...getLastColumn(false, true),
  {
    ...getChgColumn(true)[0],
    header: t`features_market_market_quatation_common_table_columns_index_5101317`,
  },
]

export const getMarketHomeVolumnTableColumns = (): ColumnDef<ICommonTradePairType, any>[] => [
  ...getTitleWithIconColumn(),
  ...getLastColumn(false, true),
  {
    ...getVolumnColumn(false)[0],
    header: t`features_market_market_quatation_common_table_columns_index_5101318`,
  },
]

export const getMarketHomeFavTableColumns = () => [
  ...getHomeFavTitleColumn(),
  ...getLastColumn(false, true),
  {
    ...getChgColumn(true)[0],
    header: t`features_market_market_quatation_common_table_columns_index_5101317`,
  },
]

export const getHotSearchingTableColumns = () => {
  return [
    {
      id: 'hotColumnLeft',
      cell: (ctx: CellContext<any, any>) => {
        const item = ctx.row.original
        const index = ctx.row.index

        return (
          <div className="hot-name-column inline-flex">
            <span className="index-wrapper">
              {index <= 2 ? (
                <Icon name="hot" hasTheme={false} />
              ) : (
                <span className="index-number">{append0Prefix(index + 1, 2)}</span>
              )}
            </span>
            <span>{getQuoteDisplayName(item, true, undefined, undefined, undefined, true)}</span>
            {/* {getFuturesTypeBadge(item)} */}
          </div>
        )
      },
    },

    {
      id: 'hotColumnRight',
      cell: (ctx: CellContext<any, any>) => {
        const item = ctx.row.original

        return (
          <div className="hot-td-right">
            <ComingSoonColumnWrapper item={item} showMessage>
              <div className="column-wrapper">
                <div className="bigger">{formatTradePair(item).lastWithDiffTarget()}</div>
                <div className="smaller">
                  <>{formatTradePair(item).chg()}</>
                </div>
              </div>
            </ComingSoonColumnWrapper>
            <div className="collect-star ml-2">{<CollectStar needWrap={false} {...item} />}</div>
          </div>
        )
      },
    },
  ].map((x: any) => {
    delete x.header
    return x
  })
}

export const getSectorHotCurrencyTableColumn = () => [
  {
    accessorKey: 'baseSymbolName',
    header: t`features_market_market_quatation_market_sector_sector_glate_detail_sector_details_table_index_510155`,
    cell: ctx => {
      const data = ctx.row.original
      return (
        <div className="market-column">
          <div className={`${commonStyles['trade-pair-title-column']} market-column-icon`}>
            <LazyImage
              lazyload={false}
              src={data.appLogo || data.webLogo || ''}
              className="column-icon"
              width={24}
              height={24}
            />
            <div className="column-icon-text">{getQuoteDisplayName(data, true)}</div>
          </div>
          <div className="market-column-price">
            <ComingSoonColumnWrapper item={data}>
              <div>{t`store_market_market_list_constant_510101`}</div>
              <div className="column-icon-text">{convertToMillions(data?.quoteVolume as string, false)}</div>
            </ComingSoonColumnWrapper>
          </div>
        </div>
      )
    },
  },
  {
    ...getLastColumn()[0],
    sorter: false,
  },

  {
    header: t`features_market_market_quatation_market_sector_sector_glate_detail_sector_details_table_index_510157`,
    accessorKey: 'chg',
    cell: ctx => {
      const item = ctx.row.original
      return (
        <ComingSoonColumnWrapper item={item} showMessage>
          <div className="market-column-sell">
            <div className="market-price-icon">{formatTradePair(item).chg()}</div>
            {/* <div>
              <div
                className="sector-table-action-button"
                onClick={() => onTradePairClickRedirectCommon(item as any, 'kline')}
              >
                {t`constants/trade-4`}
              </div>
            </div> */}
          </div>
        </ComingSoonColumnWrapper>
      )
    },
  },
]

export function getMarketListTableColumns() {
  return [...getTitleWithVolCol(), ...getLastColumn(true, true), ...getChgColumn(true, true)]
}

export function getMarketListTradeTableColumns() {
  return [...getTitleColumn(true, true), ...getPriceWithVolColumn(true)]
}

export function getMarketGlobalSearchTableColumns({ futuresCurrencyType }: { futuresCurrencyType?: string }) {
  return [
    {
      accessorKey: 'baseSymbolName',
      header: t`features_market_activity_market_activity_layout_5101239`,
      sorter: false,
      cell: ctx => {
        const data = ctx.row.original
        return (
          <span className="wrapper flex">
            <span className="left">
              <CollectStar
                forceContext={
                  (data as YapiGetV1PerpetualTradePairListData)?.typeInd
                    ? MarketLisModulesEnum.futuresMarkets
                    : MarketLisModulesEnum.spotMarkets
                }
                hideUnCheck={false}
                disable={false}
                needWrap={false}
                {...data}
              />
            </span>

            <span className="right flex-col">
              <span className="top block">{getQuoteDisplayName(data, true)}</span>
              {checkTradePairType(data) === GlobalSearchTypesMappingEnum.futures && futuresCurrencyType && (
                <span className="bottom">
                  <span className="curreyncy-type">{String(futuresCurrencyType).toUpperCase()}</span>
                  {t`features_market_market_quatation_common_table_columns_index_5101473`}
                </span>
              )}
            </span>
          </span>
        )
      },
    },
    ...getLastColumn(),
    {
      ...getChgColumn(false, true)[0],
      header: t`features_market_market_quatation_common_table_columns_index_5101360`,
    },
  ]
}

export const getSectorTableColumn = () => [
  {
    header: t`features_market_market_quatation_market_sector_sector_table_index_510150`,
    accessorKey: 'name',
    sorter: false,
  },
  {
    ...getChgColumn(true, true, false)[0],
    header: t`features_market_market_quatation_market_sector_sector_table_index_510151`,
  },
]

export const HomeTableFavHeader = () => {
  const columns = getMarketHomeFavTableColumns()
  return (
    <div className={commonStyles['home-table-fav-header']}>
      {columns.map((column, index) => (
        <span key={index}>{column.header}</span>
      ))}
    </div>
  )
}
// #endregion
