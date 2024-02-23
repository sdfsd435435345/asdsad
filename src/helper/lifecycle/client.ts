import { addGlobalLibrary } from '@/helper/externals'
import { setAutoFreeze } from 'immer'
import { isRouteWithRefreshToken } from '@/helper/fusion-api'
import { logGitCommitId } from '../common'
import { initSentry } from './utils/sentry'
import { getDeviceId } from './utils/client-device-id'
import { initCache } from '../cache/common'
import { fetchAfterLogin, initWS } from './utils/init-ws'
import { initClientApi } from './utils/init-client-api'
import { initVConsoleOnDev } from '../log'
import { clientInjectFirst } from './utils/inject'

setAutoFreeze(false)

/**
 * 初始化 客户端能力，例如注册 ws
 */
export const onInstallForClient = async (pageContext: PageContext) => {
  // 暂时不初始化 initSentry()
  /** 判断是否要进入融合模式* */
  /** 高优先级任务，例如打通 webview token */
  const isBlock = await clientInjectFirst(pageContext)
  await getDeviceId()
  /** 探测持久化储存 */
  initCache()
  /** 添加全局库 */
  addGlobalLibrary()
  /** 注册 WS */
  initWS()
  /** 注册 api */
  initClientApi()
  fetchAfterLogin()
  /** 额外功能 */
  /** vconsole logger on dev env */
  initVConsoleOnDev()
  logGitCommitId()
  if (isBlock === true) {
    return true
  }
}
