/** 资产 store */
import produce from 'immer'
import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import { subscribeWithSelector } from 'zustand/middleware'
import {
  AssetsDictionaryTypeEnum,
  AssetsRecordDateTypeEnum,
  AssetsRecordTypeEnum,
  DelegationTypeEnum,
  RecordDetailsChannelIdEnum,
} from '@/constants/assets/common'
import {
  AssetsRouteEnum,
  AssetsWithdrawTypeEnum,
  FinancialRecordRouteEnum,
  FinancialRecordStateEnum,
} from '@/constants/assets'
import { IAssetsRecordResp } from '@/typings/assets'
import {
  AssetsC2CListResp,
  AssetsCoinOverviewResp,
  AssetsOverviewResp,
  AssetsRecordsDetails,
  AssetsWithdrawCoinInfoResp,
  FinancialAssetsData,
  QuerySubCoinListSubCoinListResp,
} from '@/typings/api/assets/assets'
import { getBeforeDate } from '@/helper/date'
import cacheUtils from 'store'
import { getCoinRate } from '@/apis/assets/common'
import { getCodeDetailListBatch } from '@/apis/common'
import { IStoreEnum } from '@/typings/store/common'
import { FuturesAssetsResp, FuturesList, IFuturesAssetsList } from '@/typings/api/assets/futures'
import { TradeDirectionEnum } from '@/constants/trade'
import ws from '@/plugins/ws'
import { WsBizEnum, WsThrottleTimeEnum, WsTypesEnum } from '@/constants/ws'
// import { WSThrottleTypeEnum } from '@nbit/chart-utils'
import { Asset_Body } from '@/plugins/ws/protobuf/ts/proto/Asset'
import { formatCoinAmount, removeRepeatData } from '@/helper/assets/spot'
import { FuturesOverviewTabTypeEnum } from '@/constants/assets/futures'
import { Rate } from '@/plugins/ws/protobuf/ts/proto/Rate'
import { YapiGetV1C2CBalanceAllListData } from '@/typings/yapi/C2cBalanceAllV1GetApi'

type IStore = ReturnType<typeof getStore>

const encryption = 'ENCRYPTION'
const addressGuideVisible = 'ADDRESS_GUIDE_VISIBLE'

export const defaultData: IAssetsRecordResp = {
  /** 资产 */
  coinId: '',
  coinName: '',
  /** 类型 */
  type: '',
  /** 时间类型 */
  dateType: AssetsRecordDateTypeEnum.week,
  /** 开始时间 */
  startDate: getBeforeDate(AssetsRecordDateTypeEnum.week) || 0,
  /** 结束时间 */
  endDate: new Date(new Date(new Date().getTime()).setHours(23, 59, 59, 59)).getTime(),
  /** 状态 */
  status: [
    FinancialRecordStateEnum.success,
    FinancialRecordStateEnum.processing,
    FinancialRecordStateEnum.fail,
    FinancialRecordStateEnum.error,
  ],
}

const defaultOverviewData: FinancialAssetsData = {
  totalAmount: '',
  coinName: '',
  availableAmount: '',
  lockAmount: '',
  symbol: '',
  positionAmount: '',
}

/** 币种资产默认数据 */
export const defaultCoinAsset = {
  totalAmount: '0', // 总资产
  lockAmount: '0', // 锁定资产
  availableAmount: '0', // 可用资产
  positionAmount: '0', // 仓位资产
  totalAmountText: '0', // 总资产 - 千分位
  lockAmountText: '0', // 锁定资产 - 千分位
  availableAmountText: '0', // 可用资产 - 千分位
  positionAmountText: '0', // 仓位资产 - 千分位
  coinName: '', // 币名称
  symbol: '', // 币符号
  coinId: 0,
}

function getStore(set, get) {
  return {
    /** 资产 */
    assetsModule: {
      /** 当前 tab */
      activeTab: AssetsRouteEnum.overview,
      /** 合约当前 tab */
      futuresActiveTab: FuturesOverviewTabTypeEnum.isolated,
      /** 是否隐藏资产 */
      encryption: cacheUtils.get(encryption) || false,
      /** 资产总览数据 */
      assetsData: {
        totalAmount: '',
        availableAmount: '',
        lockAmount: '',
        coinName: '',
        symbol: '',
        positionAmount: '',
        coinAssetsData: defaultOverviewData,
        futuresAssetsData: defaultOverviewData,
        marginAssetsData: defaultOverviewData,
        financialAssetsData: defaultOverviewData,
        c2cAssetsData: defaultOverviewData,
      } as AssetsOverviewResp,
      /** 币种汇率列表 */
      coinRate: {
        coinRate: [],
        legalCurrencyRate: {},
      },
      /** 所有主币列表 */
      coinList: [],
      /** 币种资产列表 */
      coinAssetsList: [],
      /** 合约逐仓列表 */
      futuresAssetsList: [] as FuturesList[],
      /** 合约资产列表 */
      futuresAssetsMarginList: [] as IFuturesAssetsList[],
      /** c2c 列表 */
      c2cAssetsList: [] as AssetsC2CListResp[],
      c2cAssetsListAll: [] as YapiGetV1C2CBalanceAllListData[],
      /** 资产总览 - 币种 */
      coinAssets: {} as AssetsCoinOverviewResp,
      /** 资产总览 - 合约 */
      futuresAssets: {} as FuturesAssetsResp,
      /** 资产合约 - 资金列表 -  */
      updateAssetsModule: (values: any) => {
        set((store: IStore) => {
          return produce(store, _store => {
            const newAssetsModule = { ..._store.assetsModule, ...values }

            _store.assetsModule = newAssetsModule
          })
        })
      },
      updateEncryption: (newEncryption: boolean) =>
        set((store: IStore) => {
          return produce(store, _store => {
            const newAssetsModule = { ..._store.assetsModule, encryption: newEncryption }
            _store.assetsModule = newAssetsModule
            cacheUtils.set(encryption, newEncryption)
          })
        }),
      async fetchCoinRate() {
        const res = await getCoinRate({})
        if (!res.isOk || !res.data) {
          return
        }
        const store: IStore = get()
        store.assetsModule.updateAssetsModule({ coinRate: res.data })
      },
      wsRateCallback: (data: Rate[]) => {
        if (!data || data.length === 0) return
        const store: IStore = get()

        // TODO: 临时处理
        const newLegalCurrencyRate = {}
        data[0].legalCurrencyRate.forEach(item => {
          newLegalCurrencyRate[item.currency] = item.rate
        })

        const newData = { ...data[0], legalCurrencyRate: newLegalCurrencyRate }
        store.assetsModule.updateAssetsModule({ coinRate: newData })
      },
      /** 币种汇率推送 */
      wsRateSubscribe: () => {
        const state: IStore = get()
        ws.subscribe({
          subs: { biz: WsBizEnum.spot, type: WsTypesEnum.rate },
          throttleTime: WsThrottleTimeEnum.Market,
          // throttleType: WSThrottleTypeEnum.increment,
          callback: state.assetsModule.wsRateCallback,
        })
      },
      wsRateUnSubscribe: () => {
        const state: IStore = get()
        ws.unsubscribe({
          subs: { biz: WsBizEnum.spot, type: WsTypesEnum.rate },
          callback: state.assetsModule.wsRateCallback,
        })
      },
      /** C2C 账户变动推送 */
      wsC2CAccountChangedSubscribe: (callback?) => {
        ws.subscribe({
          subs: { biz: WsBizEnum.c2c, type: WsTypesEnum.c2cAccount },
          throttleTime: WsThrottleTimeEnum.Market,
          // throttleType: WSThrottleTypeEnum.increment,
          callback,
        })
      },
      wsC2CAccountChangedUnSubscribe: (callback?) => {
        ws.unsubscribe({
          subs: { biz: WsBizEnum.c2c, type: WsTypesEnum.c2cAccount },
          callback,
        })
      },
    },
    /** 财务记录 */
    recordModule: {
      /** 当前 tab */
      activeTab: FinancialRecordRouteEnum.main,
      /** 是否展示资产选择 */
      showAssetsSelect: false,
      /** 资产财务记录 */
      assetsRecord: {
        /** 总览 */
        overview: { ...defaultData },
        /** 充提 */
        main: { ...defaultData },
        /** 合约 */
        futures: { ...defaultData },
        /** 衍生品 */
        derivative: { ...defaultData },
        /** 其他 */
        other: { ...defaultData },
        /** 手续费 */
        fee: { ...defaultData },
        /** 返佣 */
        commission: { ...defaultData },
        /** c2c */
        c2c: { ...defaultData },
      },
      /** 资产财务记录详情 */
      assetsRecordDetail: {
        /** 财务流水 */
        serialNo: '',
        /** 状态 */
        statusCd: FinancialRecordStateEnum.success,
        /** 类型 */
        typeInd: AssetsRecordTypeEnum.recharge,
        /** 币种 如 USDT */
        businessCoin: '',
        /** 币种代码网络如 ERC_20 */
        symbol: '',
        /** 到账金额 */
        amount: 0,
        /** 区块总数 */
        blockTotal: 0,
        /** 区块确认数 */
        confirmation: 0,
        /** 地址 */
        address: '',
        /** 交易 hash */
        txHash: '',
        /** 创建时间 */
        createdByTime: null as any,
        /** 完成时间 */
        updatedByTime: null as any,
        /** 目标 uid */
        toUid: '',
        /** 来源 uid */
        fromUid: '',
        /** 驳回原因 */
        reason: '',
        /** 手续费 */
        fee: '',
        /** 转账网络 */
        mainnet: '',
        /** 渠道 */
        channelInd: RecordDetailsChannelIdEnum.blockchain,
        /** 手续费币种 */
        feeCoinName: '',
        /** 1 买单 2 卖单 */
        side: TradeDirectionEnum.buy,
        /** 1 限价 2 市价 */
        orderType: DelegationTypeEnum.limitOrder,
      } as AssetsRecordsDetails,
      updateRecordModule: (values: any) =>
        set((store: IStore) => {
          return produce(store, _store => {
            const newRecordModule = { ..._store.recordModule, ...values }
            _store.recordModule = newRecordModule
          })
        }),
      /** 更新资产财务记录 */
      updateAssetsRecord: (values: any, type?: string) =>
        set((store: IStore) => {
          return produce(store, _store => {
            const newAssetsRecord = {
              ..._store.recordModule,
              assetsRecord: type ? { ..._store.recordModule.assetsRecord, [type]: { ...values } } : { ...values },
            }
            _store.recordModule = newAssetsRecord
          })
        }),
    },
    /** 提现 */
    withdrawModule: {
      /** 提币方式 */
      withdrawType: AssetsWithdrawTypeEnum.blockchain,
      /** 常用提现地址列表 */
      addressList: [],
      /** 提现币种信息（可用数量） */
      amountInfo: {} as AssetsWithdrawCoinInfoResp,
      /** 提现表单数据 */
      formData: {
        amount: '0.00',
        coin: {} as any,
        memo: '',
        error: false,
        network: {} as QuerySubCoinListSubCoinListResp,
        uid: '',
        amountInfo: {} as AssetsWithdrawCoinInfoResp,
        address: '',
      },
      /** 提现结果数据 */
      withdrawResult: {
        isSuccess: false,
        submitTime: null as any,
        estimatedFinishTime: null as any,
      },
      /** 收款人昵称 */
      nickName: '',
      updateWithdrawModule: (values: any) =>
        set((store: IStore) => {
          return produce(store, _store => {
            const newWithdrawModule = { ..._store.withdrawModule, ...values }
            _store.withdrawModule = newWithdrawModule
          })
        }),
    },
    /** 现货资产 - 资产信息 */
    userAssetsSpot: {
      // totalAmount: 总资产数、availableAmount: 用数量、lockAmount: 仓位数量
      buyCoin: {
        totalAmount: 0,
        lockAmount: 0,
        availableAmount: 0,
        availableAmountText: 0,
        coinName: '',
        symbol: '',
        coinId: 0,
      },
      sellCoin: { totalAmount: 0, lockAmount: 0, availableAmount: 0, coinName: '', symbol: '', coinId: 0 },
    },
    /** 杠杆资产 - 当前币种 */
    userAssetsMargin: {
      leverInfo: {
        marginLevel: '',
        marginLevelRisk: '',
        ladder: '', // 逐仓档位
      },
      buyCoin: {
        isDebt: '0', // 是否负债 0-否，1-是
        debt: '', // 单币种负债
        free: '', // 真实可用
        maxBorrow: '', // 最大可借
        total: '--', // 可用余额
        maxReturnable: '',
        totalAmount: '--',
        availableAmount: '--', // 可用余额
        lockAmount: '',
        coinName: '',
        symbol: '',
        coinId: 0,
      },
      sellCoin: {
        isDebt: '0',
        debt: '',
        free: '', // 真实可用
        maxBorrow: '',
        total: '--', // 可用余额
        maxReturnable: '',
        totalAmount: '--',
        availableAmount: '--', // 可用余额
        lockAmount: '',
        coinName: '',
        symbol: '',
        coinId: 0,
      },
    },
    /** 当前货币信息 */
    currencyInfo: {
      chineseName: '',
      currencyCode: 'CNY',
      englishName: '',
      exchangeRate: 1,
      precision: 2,
      symbol: '¥',
    },
    updateUserAssetsSpot: newUserAssetsSpot => set(produce(() => ({ userAssetsSpot: newUserAssetsSpot }))),
    updateUserAssetsMargin: newUserAssetsMargin => set(produce(() => ({ userAssetsMargin: newUserAssetsMargin }))),
    /** 是否展示提币地址管理指引 */
    showAddressGuide: cacheUtils.get(addressGuideVisible) === undefined ? true : cacheUtils.get(addressGuideVisible),
    updateShowAddressGuide: (newShowAddressGuide: boolean) =>
      set(
        produce((state: IStore) => {
          state.showAddressGuide = newShowAddressGuide
          cacheUtils.set(addressGuideVisible, newShowAddressGuide)
        })
      ),
    /** 资产枚举，从后端获取的数据字典 */
    assetsEnums: {
      /** 财务日志状态 */
      financialRecordStateEnum: {
        codeKey: AssetsDictionaryTypeEnum.recordStatusType,
        enums: [],
      } as IStoreEnum,
      /** 钱包财务日志类型 */
      walletFinancialRecordTypeEnum: {
        codeKey: AssetsDictionaryTypeEnum.walletOverviewType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志类型 */
      financialRecordTypeEnum: {
        codeKey: AssetsDictionaryTypeEnum.recordType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志类型 - 充提 */
      financialRecordTypeMainList: {
        codeKey: AssetsDictionaryTypeEnum.recordWithdrawType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志类型 - 手续费 */
      financialRecordTypeFeeList: {
        codeKey: AssetsDictionaryTypeEnum.recordFeeType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志类型 - 合约 */
      financialRecordTypePerpetualList: {
        codeKey: AssetsDictionaryTypeEnum.recordPerpetualType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约类型 */
      financialRecordTypeSwapList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualSwapType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 -合约 - 保证金记录类型 */
      financialRecordTypeMarginList: {
        codeKey: AssetsDictionaryTypeEnum.recordPerpetualMarginType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约 - 保证金触发类型 */
      financialRecordTypeOperationList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualOperationType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约 - 委托价格类型 */
      financialRecordTypeCttEntrustList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualOrderEntrustType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约 - 委托类型 */
      financialRecordTypeCttOrderList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualOrderType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约 - 订单类型 */
      financialRecordTypeEntrustStatusList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualOrderEntrustStatusType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约 - 交易方向 */
      financialRecordTypeCttSideList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualOrderSideType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约 - 仓位类型 */
      financialRecordTypeCttPositionSideList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualPositionType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约 - 资金明细类型 */
      financialRecordTypePerpetualBillList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualBillType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志 - 合约 - 迁移类型 */
      financialRecordTypePerpetualMigrateList: {
        codeKey: AssetsDictionaryTypeEnum.perpetualMigrateType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志类型 - 返佣 */
      financialRecordTypeCommissionList: {
        codeKey: AssetsDictionaryTypeEnum.recordCommissionType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志类型-c2c */
      financialRecordTypeC2CList: {
        codeKey: AssetsDictionaryTypeEnum.recordC2CType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志-c2c-业务类型 */
      c2cBillLogTypeList: {
        codeKey: AssetsDictionaryTypeEnum.c2cBillLogType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志-c2c-划转账户类型 */
      assetAccountTypeList: {
        codeKey: AssetsDictionaryTypeEnum.assetAccountType,
        enums: [],
      } as IStoreEnum,
      /** 财务日志-c2c-订单申诉原因 */
      c2cOrderAppealReasonTypeList: {
        codeKey: AssetsDictionaryTypeEnum.c2cOrderAppealReason,
        enums: [],
      } as IStoreEnum,
    },
    async fetchAssetEnums() {
      const state: IStore = get()
      const data = await getCodeDetailListBatch(Object.values(state.assetsEnums).map(item => item.codeKey))
      set(
        produce((draft: IStore) => {
          const items = Object.values(draft.assetsEnums)
          items.forEach((item, index) => {
            item.enums = data[index].map(enumValue => {
              return {
                label: enumValue.codeKey,
                value:
                  parseInt(enumValue.codeVal, 10).toString() === enumValue.codeVal
                    ? parseInt(enumValue.codeVal, 10)
                    : enumValue.codeVal,
              }
            })
          })
        })
      )
    },
    // /** ws 回调 - 现货资产 */
    async wsSpotAssetsCallback(SpotAssetsData: Asset_Body) {
      const data = SpotAssetsData
      const store: IStore = get()

      // 下单成功，data 里会包含标的币和计价币的资产数据
      // WS 回调数据去重 - 回调会返回重复记录，取最新的一条，最后一条是最新的
      store.updateIsHasAssetsWSInfo(true)
      let result: any = data
      result = removeRepeatData(result.reverse())

      const assetData = store.userAssetsSpot
      let newAssetData = JSON.parse(JSON.stringify(assetData))

      result.forEach((item, index) => {
        if (assetData?.buyCoin.coinId === item.coinId) {
          const { balance = '0', locked = '0', total = '0' } = item

          newAssetData = {
            ...newAssetData,
            buyCoin: {
              ...assetData.buyCoin,
              totalAmount: total,
              lockAmount: locked,
              availableAmount: balance,
              totalAmountText: formatCoinAmount(assetData.buyCoin.symbol, total, true),
              availableAmountText: formatCoinAmount(assetData.buyCoin.symbol, balance, true),
              lockAmountText: formatCoinAmount(assetData.buyCoin.symbol, locked, true),
            },
          }
        }
        if (assetData?.sellCoin.coinId === item.coinId) {
          const { balance = '0', locked = '0', total = '0' } = item

          newAssetData = {
            ...newAssetData,
            sellCoin: {
              ...assetData.sellCoin,
              totalAmount: total,
              lockAmount: locked,
              availableAmount: balance,
              totalAmountText: formatCoinAmount(assetData.sellCoin.symbol, total, true),
              availableAmountText: formatCoinAmount(assetData.sellCoin.symbol, balance, true),
              lockAmountText: formatCoinAmount(assetData.sellCoin.symbol, locked, true),
            },
          }
        }

        // 更新资产持仓
        store.updateUserAssetsSpot(newAssetData)
        if (index === result.length - 1) {
          store.updateUserAssetsSpot(newAssetData)
        }
      })
    },
    /** 订阅 - 现货资产 */
    wsSpotAssetsSubscribe: (callback?) => {
      const state: IStore = get()
      ws.subscribe({
        subs: { biz: WsBizEnum.spot, type: WsTypesEnum.asset },
        throttleTime: WsThrottleTimeEnum.Market,
        // throttleType: WSThrottleTypeEnum.increment,
        callback: callback || state.wsSpotAssetsCallback,
      })
    },
    /** 取消订阅 - 现货资产 */
    wsSpotAssetsUnSubscribe: (callback?) => {
      const state: IStore = get()
      ws.unsubscribe({
        subs: { biz: WsBizEnum.spot, type: WsTypesEnum.asset },
        callback: callback || state.wsSpotAssetsCallback,
      })
    },
    updateIsHasAssetsWSInfo: newIsHasAssetsWSInfo => set(produce(() => ({ isHasAssetsWSInfo: newIsHasAssetsWSInfo }))),
  }
}

const baseAssetsStore = create(subscribeWithSelector(getStore))

const useAssetsStore = createTrackedSelector(baseAssetsStore)

export { useAssetsStore, baseAssetsStore }
