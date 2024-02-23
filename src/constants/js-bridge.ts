/**
 * @doc https://chandao.nbttfc365.com/zentao/doc-objectLibs-custom-0-8-1074.html#app=qa
 */
export enum JsbridgeCommandsEnum {
  isLogin = 'isLogin',
  bindRightButtonEvent = 'bindRightButtonEvent',
  bindLeftButtonEvent = 'bindLeftButtonEvent',
  changeTitle = 'changeTitle',
  jumpToLogin = 'jumpToLogin',
  toggleScreen = 'toggleScreen',
  finishPage = 'finishPage',
}

export enum JsbridgeScreenOrientaitonEnum {
  // 如果是0，则切换为横屏
  // 如果是1，则切换为竖屏
  portrait = '1',
  landscape = '0',
}
