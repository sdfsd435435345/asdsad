import { baseUserStore } from '@/store/user'
import ws from '@/plugins/ws'
import { fetchAndUpdateUserInfo } from '@/helper/auth'
import { baseGuideMapStore } from '@/store/server'
import { wsUrl } from '../../env'

export async function initWS() {
  ws.setOptions({
    wsUrl,
    success() {
      if (baseUserStore.getState().isLogin) {
        ws.login()
      }
    },
    getToken: () => {
      return baseUserStore.getState().token?.accessToken as unknown as string
    },
  })
  ws.connect()
}

/** 登录态改变之后需要全局加载的信息 */
export function fetchAfterLogin() {
  if (!baseUserStore.getState().isLogin) {
    return
  }
  fetchAndUpdateUserInfo()
  // 获取 引导图接口
  baseGuideMapStore.getState().fetchGuideMapQueryAll()
}

baseUserStore.subscribe(
  userState => userState.isLogin,
  () => {
    if (baseUserStore.getState().isLogin) {
      ws.login()
    } else {
      ws.logout()
    }
    fetchAfterLogin()
  }
)
