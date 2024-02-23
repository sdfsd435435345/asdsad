import create from 'zustand'
import produce from 'immer'
import ws from '@/plugins/ws'
import { t } from '@lingui/macro'
import { baseUserStore } from '@/store/user'
import { createTrackedSelector } from 'react-tracked'
import { WsThrottleTimeEnum, InmailTypeEnum } from '@/constants/ws'
import { WSThrottleTypeEnum } from '@/plugins/ws/constants'
import { envIsDev, envIsSGDev } from '@/helper/env'

type IStore = ReturnType<typeof getStore>
function getStore(set, get) {
  const { deviceId, clearUserCacheData } = baseUserStore.getState()
  const getSettingDefault = () => [
    // {
    //   id: 1,
    //   name: t`features_message_index_5101225`,
    //   icon: 'msg_quotes_changes',
    // },
    // {
    //   id: 2,
    //   name: t`features_message_index_5101226`,
    //   icon: 'msg_price_subscription',
    // },
    // {
    //   id: 3,
    //   name: t`features_message_index_5101227`,
    //   icon: 'msg_contract_alert',
    //   collapseIcon: 'msg_announcement_news',
    // },
    {
      id: 60005,
      name: t`features_message_index_5101230`,
      icon: 'system_notification',
      collapseIcon: 'system_notification',
    },
    {
      id: 60006,
      name: t`features_inmail_push_settings_index_5101303`,
      icon: 'announcement_news',
      collapseIcon: 'announcement_news',
    },
    // {
    //   id: 6,
    //   name: t`features_inmail_push_settings_index_5101304`,
    //   icon: 'msg_new_currency',
    //   collapseIcon: 'msg_new_currency',
    // },
    // {
    //   id: 7,
    //   name: t`features_inmail_push_settings_index_5101305`,
    //   icon: 'msg_latest_activity',
    //   collapseIcon: 'msg_latest_activity',
    // },
  ]
  return {
    changeNum: 0,
    loginData: {
      action: 0,
      latestDeviceNo: '',
      isForceWindow: false,
      title: '',
      content: '',
    },
    loginModal: false,
    menuList: getSettingDefault(),
    setModalClose: value =>
      set(
        produce((draft: IStore) => {
          draft.loginModal = value
        })
      ),
    /** 通知站内信有 ws 推送来数据进行更新* */
    wsInmailDepthCallback: value =>
      set(
        produce((draft: IStore) => {
          value?.forEach(item => {
            const data = item?.noticeData
            if (data?.inboxMsgData) {
              // 站内信消息
              draft.changeNum += value.length
            } else if (data?.bizActionData) {
              /** 多点登录弹框提示* */
              const params = data?.bizActionData
              const latestDeviceNo = params?.latestDeviceNo || ''
              if (deviceId !== latestDeviceNo && params?.isForceWindow) {
                if (envIsSGDev || envIsDev) return
                clearUserCacheData()
                draft.loginData = params
                draft.loginModal = params?.isForceWindow
              }
            }
          })
        })
      ),
    wsInmailDepthSubscribe: () => {
      const state: IStore = get()
      ws.subscribe({
        subs: {
          biz: InmailTypeEnum.spot,
          type: InmailTypeEnum.type,
        },
        throttleTime: WsThrottleTimeEnum.Market,
        throttleType: WSThrottleTypeEnum.increment,
        callback: state.wsInmailDepthCallback,
      })
    },
    wsInmailDepthUnSubscribe: () => {
      const state: IStore = get()
      ws.unsubscribe({
        subs: {
          biz: InmailTypeEnum.spot,
          type: InmailTypeEnum.type,
        },
        callback: state.wsInmailDepthCallback,
      })
    },
  }
}

const baseInmailStore = create(getStore)
const useInmailStore = createTrackedSelector(baseInmailStore)

export { useInmailStore, baseInmailStore }
