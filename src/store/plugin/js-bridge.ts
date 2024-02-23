export interface DSBridge {
  call(handlerName: string, args?: any, responseCallback?: (retValue: any) => void): any
  call<T, R>(handlerName: string, args?: T, responseCallback?: (retValue: R) => void): R

  register(handlerName: string, handler: object | (() => any), async?: boolean): void
  register<F>(handlerName: string, handler: F, async?: boolean): void

  registerAsyn(handlerName: string, handler: object | (() => void)): void
  registerAsyn<F>(handlerName: string, handler: F): void

  hasNativeMethod(handlerName: string, type?: 'all' | 'asyn' | 'syn'): boolean
  disableJavascriptDialogBlock(disable?: boolean): void
}

export type IJsBridgeStore = ReturnType<typeof jsBridgePluginStoreHelper>

function jsBridgePluginStoreHelper(set, get) {
  return {
    jsBridge: null as null | DSBridge,
    setJsBridge: (val: DSBridge) =>
      set(() => {
        return { jsBridge: val }
      }),
  }
}

export default jsBridgePluginStoreHelper
