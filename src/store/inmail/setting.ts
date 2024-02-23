import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import produce from 'immer'

const getSettingDefault = () => ({
  price: false, // 价格订阅
  quotes: false, // 行情移动
  contract: false, // 合约预警
  system: false, // 系统通知
  announcement: false, // 公告消息
  activity: false, // 最新活动
  coin: false, // 新币早知道
  email: false, // 营销类邮件
})
type IStore = ReturnType<typeof getStore>

function getStore(set, get) {
  return {
    setting: getSettingDefault(),
    restSetting: () =>
      set(
        produce((draft: IStore) => {
          draft.setting = getSettingDefault()
        })
      ),
    setSetting: (orderType, val) =>
      set(
        produce((draft: IStore) => {
          draft.setting[orderType] = val
        })
      ),
  }
}
const baseInmailtore = create(getStore)

const useInmailStore = createTrackedSelector(baseInmailtore)

export { useInmailStore, baseInmailtore }
