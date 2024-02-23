import { setAutoFreeze } from 'immer'
import { initServerApi } from './utils/init-server-api'

setAutoFreeze(false)

/**
 * 初始化 服务端能力
 */
export const onInstallForServer = async (pageContext: PageContext) => {
  /** 注册 api */
  pageContext = await initServerApi(pageContext)
  return pageContext
}
