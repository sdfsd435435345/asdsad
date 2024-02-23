import { usePluginStore } from '@/store/plugin'

/**
 * jsbridge hooks 用法
 * 初始化：const jsbridge = useJsbridge()
 * 调用：jsbridge.value && jsbridge.value?.call('isLogin')
 *
 * 此 plugin 在 client-lifecycle 中已初始化，此处仅调用
 * @doc https://chandao.nbttfc365.com/zentao/doc-objectLibs-custom-0-8-1074.html#app=qa
 */
export default function useJsbridge() {
  const store = usePluginStore()
  return { value: store.jsBridge }
}
