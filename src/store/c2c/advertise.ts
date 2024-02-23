/**
 * c2c-广告
 */
import produce from 'immer'
import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import { subscribeWithSelector } from 'zustand/middleware'
import {
  AdvertisingDictionaryTypeEnum,
  AdvertisingDirectionTypeEnum,
  HistoryTabTypeEnum,
  HistoryVersionTypeEnum,
  ValidDaysTypeEnum,
} from '@/constants/c2c/advertise'
import { getC2CAdvertiseVersionCache, setC2CAdvertiseVersionCache } from '@/helper/cache'
import {
  AdvertCoincidenceListResp,
  AdvertDetailResp,
  AdvertMerchantInfoResp,
  IAdvertiseHistoryForm,
  IAdvertisePaymentList,
  IAdvertPaymentList,
  IAdvertReceiptList,
  IPostAdvertiseForm,
} from '@/typings/api/c2c/advertise/post-advertise'
import { RecordsCoinListResp } from '@/typings/api/assets/assets'
import { C2CAreaListResp, C2CCoinListResp, C2CMainTypeListResp } from '@/typings/api/c2c/common'
import { AreaTransactionTypeEnum } from '@/constants/c2c/common'
import { IStoreEnum } from '@/typings/store/common'
import { getCodeDetailListBatch } from '@/apis/common'

type IStore = ReturnType<typeof getStore>

export const defaultAdvertiseForm = {
  /** 交易区 */
  currency: {} as C2CAreaListResp,
  /** 币种 */
  coin: {} as C2CCoinListResp,
  /** 广告方向 */
  advertDirectCd: AdvertisingDirectionTypeEnum.sell,
  /** 交易类型 */
  dealTypeCd: AreaTransactionTypeEnum.inside,
  /** 主链类型 */
  chainAddress: [] as C2CMainTypeListResp[],
  /** 单笔限额 - 最小值 */
  minAmount: '',
  /** 单笔限额 - 最大值 */
  maxAmount: '',
  /** 重合度 */
  coincidenceValue: 'low',
  /** 汇率单价 */
  price: '',
  /** 广告有效期 */
  validDays: 0,
  /** 成单数 */
  completedOrderCount: '',
  /** 认证等级 */
  certificationLevelCd: '',
  /** 支付方式/收款账号 */
  payments: [] as IAdvertisePaymentList[],
  /** 备注 */
  remark: '',
  /** 广告数量 */
  quantity: '',
  isFirstError: true,
  isSecondError: true,
  showCoincidenceTable: false,
  priceVolatilityEnabled: false,
  priceVolatilityHigh: '',
  priceVolatilityLow: '',
  priceVolatilityPercent: 0,
} as IPostAdvertiseForm

export const defaultHistoryForm = {
  /** 交易区 */
  areaIds: [],
  /** 币种 */
  coin: {} as RecordsCoinListResp,
  /** 广告方向 */
  advertDirectCds: [AdvertisingDirectionTypeEnum.buy, AdvertisingDirectionTypeEnum.sell],
  /** 交易方向 */
  tradeTypeCds: [AreaTransactionTypeEnum.inside, AreaTransactionTypeEnum.outside],
  /** 限额数量 */
  amount: '',
}

function getStore(set, get) {
  return {
    /** 发布广告单 */
    advertiseForm: defaultAdvertiseForm as IPostAdvertiseForm,
    updateAdvertiseForm: (values: Partial<IPostAdvertiseForm>) => {
      set((store: IStore) => {
        return produce(store, _store => {
          const newAdvertiseForm = { ..._store.advertiseForm, ...values }
          _store.advertiseForm = newAdvertiseForm
        })
      })
    },
    /** 发布广告单 - 下拉选项数据 */
    postOptions: {
      // 主链类型列表
      chainAddressList: [] as C2CMainTypeListResp[],
      // 支付方式列表
      paymentList: [] as IAdvertPaymentList[],
      // 交易区下收款账号列表
      receiptList: [] as IAdvertReceiptList[],
      // 交易区下币种列表
      coinList: [] as RecordsCoinListResp[],
      // 所有币种列表
      allCoinList: [] as RecordsCoinListResp[],
      // 广告重合度列表
      coincidenceData: {} as AdvertCoincidenceListResp,
      // 商家状态（信誉额度）
      merchantInfo: {} as AdvertMerchantInfoResp,
    },
    updatePostOptions: values => {
      set((store: IStore) => {
        return produce(store, _store => {
          const newPostOptions = { ..._store.postOptions, ...values }
          _store.postOptions = newPostOptions
        })
      })
    },
    /** 广告单记录 */
    advertiseHistory: {
      refreshing: false,
      /** 版本 */
      version: getC2CAdvertiseVersionCache() || HistoryVersionTypeEnum.normal,
      updateVersion: (newVersion: string) => {
        set((store: IStore) => {
          return produce(store, _store => {
            setC2CAdvertiseVersionCache(newVersion)
            _store.advertiseHistory = { ..._store.advertiseHistory, version: newVersion }
          })
        })
      },
      /** 当前 tab */
      activeTab: HistoryTabTypeEnum.on,
      historyForm: {
        /** 上架中 - 筛选表单 */
        on: defaultHistoryForm as IAdvertiseHistoryForm,
        /** 已下架 - 筛选表单 */
        off: defaultHistoryForm as IAdvertiseHistoryForm,
      },
    },
    updateAdvertiseHistory: values => {
      set((store: IStore) => {
        return produce(store, _store => {
          const newAdvertiseHistory = { ..._store.advertiseHistory, ...values }
          _store.advertiseHistory = newAdvertiseHistory
        })
      })
    },
    /** 广告单详情 */
    advertiseDetails: {} as AdvertDetailResp,
    updateAdvertiseDetails: (values: Partial<AdvertDetailResp>) => {
      set((store: IStore) => {
        return produce(store, _store => {
          const newAdvertiseDetail = { ..._store.advertiseDetails, ...values }
          _store.advertiseDetails = newAdvertiseDetail
        })
      })
    },
    /** 广告数据字典 */
    advertiseEnums: {
      /** 认证等级 */
      certificationLevelEnum: {
        codeKey: AdvertisingDictionaryTypeEnum.certificationLevel,
        enums: [],
      } as IStoreEnum,
      /** 支付类型 */
      paymentTypeEnum: {
        codeKey: AdvertisingDictionaryTypeEnum.paymentType,
        enums: [],
      } as IStoreEnum,
      /** 广告方向 */
      advertDirectEnum: {
        codeKey: AdvertisingDictionaryTypeEnum.advertDirect,
        enums: [],
      } as IStoreEnum,
      /** 广告交易类型 */
      detailAdvertDealTypeEnum: {
        codeKey: AdvertisingDictionaryTypeEnum.detailAdvertDealType,
        enums: [],
      } as IStoreEnum,
      /** 支付方式图标颜色 */
      paymentColorEnum: {
        codeKey: AdvertisingDictionaryTypeEnum.paymentColor,
        enums: [],
      } as IStoreEnum,
    },
    /** 获取广告数据字典 */
    async fetchAdvertiseEnums() {
      const state: IStore = get()
      const data = await getCodeDetailListBatch(
        Object.values(state.advertiseEnums).map(item => item.codeKey),
        {
          withFastPayServer: true,
          withFastPayToken: false,
        }
      )
      set(
        produce((draft: IStore) => {
          const items = Object.values(draft.advertiseEnums)
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
  }
}

const baseC2CAdvertiseStore = create(subscribeWithSelector(getStore))

const useC2CAdvertiseStore = createTrackedSelector(baseC2CAdvertiseStore)

export { useC2CAdvertiseStore, baseC2CAdvertiseStore }
