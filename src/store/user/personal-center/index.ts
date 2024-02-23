import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { createTrackedSelector } from 'react-tracked'
import { createUpdateProp } from '@/helper/store'
import { UserEnabledStateTypeEnum, UserCurrencySymbolEnum } from '@/constants/user'
import { getMemberBaseSafaVerifyBaseInfo, getMemberCurrencyList } from '@/apis/user'
import { MemberBaseSafaVerifyBaseInfoResp } from '@/typings/user'
import { YapiGetV1MemberCurrencyListCurrencyListData } from '@/typings/yapi/MemberCurrencyListV1GetApi.d'
import { baseUserStore } from '@/store/user'
import produce from 'immer'
import cacheUtils from 'store'

type IStore = ReturnType<typeof getStore>

type BaseInfoStore = ReturnType<typeof getBaseInfoStore>

const fiatCurrencyData = 'FIAT_CURRENCY_DATA'

type FiatCurrencyDataType = {
  currencySymbol: string
  currencyEnName: string
  currencyList: Array<YapiGetV1MemberCurrencyListCurrencyListData>
  currencyTypeCd: string
}

function getBaseInfoStore(set) {
  return {
    baseInfoResult: <MemberBaseSafaVerifyBaseInfoResp>{},
    turnOnVerification: <boolean>false,
    async getBaseInfo() {
      const res = await getMemberBaseSafaVerifyBaseInfo({})
      if (res.isOk) {
        const { isOpenEmailVerify, isOpenPhoneVerify, isOpenGoogleVerify } = res.data!
        const securityItemArray = [isOpenEmailVerify, isOpenPhoneVerify, isOpenGoogleVerify]
        const openItem = securityItemArray.filter(item => item === UserEnabledStateTypeEnum.unEnable)

        set(
          produce((store: IStore) => {
            store.baseInfoResult = res.data!
            store.turnOnVerification = openItem.length > 1
          })
        )
      }
    },
    fiatCurrencyData:
      cacheUtils.get(fiatCurrencyData) ||
      <FiatCurrencyDataType>{
        currencySymbol: UserCurrencySymbolEnum.usd,
        currencyEnName: 'USD',
        currencyList: <Array<YapiGetV1MemberCurrencyListCurrencyListData>>[],
      },
    async getFiatCurrencyData() {
      const res = await getMemberCurrencyList({})
      if (res.isOk && res.data) {
        if (!res.data.currencyList || res.data.currencyList.length < 1) return

        set(
          produce((store: IStore) => {
            const { currencyEnName, currencySymbol } = res.data.currencyList.find(
              (v: YapiGetV1MemberCurrencyListCurrencyListData) =>
                store.fiatCurrencyData.currencyEnName === v.currencyEnName
            )
            const data = {
              currencyList: res.data.currencyList,
              currencyEnName,
              currencySymbol,
            }

            store.fiatCurrencyData = { ...data }
            cacheUtils.set(fiatCurrencyData, { ...data })
          })
        )
      }
    },
    updateFiatCurrencyData(key: string, values: string) {
      if (!key || !values) return
      const useStore = baseUserStore.getState()
      set((store: IStore) => {
        return produce(store, (_store: IStore) => {
          if (!_store.fiatCurrencyData?.currencyList || _store.fiatCurrencyData?.currencyList?.length < 1) return
          const { currencyEnName, currencySymbol, currencyTypeCd } = _store.fiatCurrencyData?.currencyList?.find(
            (v: YapiGetV1MemberCurrencyListCurrencyListData) => values === v[key]
          ) as FiatCurrencyDataType

          _store.fiatCurrencyData = { ..._store.fiatCurrencyData, currencyEnName, currencySymbol, currencyTypeCd }

          useStore.setPersonalCenterSettings({ currencySymbol: currencySymbol as UserCurrencySymbolEnum })

          cacheUtils.set(fiatCurrencyData, {
            ..._store.fiatCurrencyData,
            currencyEnName,
            currencySymbol,
            currencyTypeCd,
          })
        })
      })
    },
  }
}

function getStore(set) {
  return {
    ...createUpdateProp<BaseInfoStore>(set),
    ...getBaseInfoStore(set),
  }
}

const basePersonalCenterStore = create(subscribeWithSelector(getStore))

const usePersonalCenterStore = createTrackedSelector(basePersonalCenterStore)

export { usePersonalCenterStore, basePersonalCenterStore }
