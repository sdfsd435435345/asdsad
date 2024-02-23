import create from 'zustand'
import produce from 'immer'
import { createTrackedSelector } from 'react-tracked'
import { C2CCenterPersonType, C2CDressingPopupType } from '@/typings/api/c2c/center'
import { getV1C2cUserProfileApiRequest, getV1OtcIsOpenOtcApiRequest } from '@/apis/c2c/merchant'
import { getC2CList } from '@/apis/assets/c2c'
import { AssetsC2CListResp } from '@/typings/api/assets/assets'

type IStore = ReturnType<typeof getC2CCenterStore>

function getC2CCenterStore(set) {
  return {
    /** 个人中心用 */
    C2CCenterUser: {} as C2CCenterPersonType,
    /** 其他模块用，自身的信息 */
    c2cSelfUser: {} as C2CCenterPersonType,
    // 添加项
    async getC2CCenterUser(uid?: string, onlySelf = false) {
      const params = {
        uid: uid || '',
      }
      const { data, isOk } = await getV1C2cUserProfileApiRequest(params)
      set(
        produce((draft: IStore) => {
          if (isOk) {
            if (onlySelf) {
              draft.c2cSelfUser = data as C2CCenterPersonType
            } else {
              draft.C2CCenterUser = data as C2CCenterPersonType
            }
          }
        })
      )
    },
    // 添加项
    async getC2cSelfUser() {
      const { data, isOk } = await getV1C2cUserProfileApiRequest({
        uid: '',
      })
      set(
        produce((draft: IStore) => {
          if (isOk) {
            draft.c2cSelfUser = data as C2CCenterPersonType
          }
        })
      )
    },
    isOpenOTC: false as boolean,
    async getOTCStatus() {
      const { data, isOk } = await getV1OtcIsOpenOtcApiRequest({})
      set(
        produce((draft: IStore) => {
          if (isOk) {
            draft.isOpenOTC = data || false
          }
        })
      )
    },
    balanceList: [] as AssetsC2CListResp[],
    async getBalanceList() {
      const res = await getC2CList({})
      if (!res.isOk || !res.data) {
        return
      }
      set((old: IStore) => {
        return {
          ...old,
          balanceList: res.data,
        }
      })
    },
    // 保存的收款账户类型
    paymentTypeStore: '',
    async setPaymentTypeStore(type: string) {
      set(
        produce((draft: IStore) => {
          draft.paymentTypeStore = type
        })
      )
    },
    // 储存交易区
    tradeAreaStore: [] as Array<C2CDressingPopupType>,
    // 当前广告交易区
    currentTradeAreaStore: {},
    async setTradeAreaStore(data: Array<C2CDressingPopupType>) {
      set(
        produce((draft: IStore) => {
          draft.tradeAreaStore = data
        })
      )
    },
    async setCurrentTradeAreaStore(data) {
      set(
        produce((draft: IStore) => {
          draft.currentTradeAreaStore = data
        })
      )
    },
  }
}

const baseC2CCenterStore = create(getC2CCenterStore)
const useC2CCenterStore = createTrackedSelector(baseC2CCenterStore)

export { useC2CCenterStore, baseC2CCenterStore }
