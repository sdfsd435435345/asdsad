/** 与业务无关的 基础模块 */
/** */
/** 主题 */
export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export const ThemeChartMap = {
  light: 'Light',
  dark: 'Dark',
}

export const ThemeBackGroundColor = {
  light: '#1A1F24',
  dark: '#1A1F24',
}

export enum ThemeColorEnum {
  default = 'default',
  orange = 'binance',
  blue = 'okx',
  green = 'kucoin',
}

export const pageOmitKeys = [
  '_serverFiles',
  '_parseUrl',
  '_pageRoutes',
  '_pageIsomorphicFileDefault',
  '_pageIsomorphicFile',
  '_pageContextRetrievedFromServer',
  '_onBeforeRouteHook',
  '_onBeforeRouteHook',
  '_objectCreatedByVitePluginSsr',
  '_isFirstRender',
  '_comesDirectlyFromServer',
  '_baseUrl',
  '_allPageIds',
  '_allPageFiles',
  'exports',
  'Page',
  '_baseAssets',
  '_getPageAssets',
  '_isPageContextRequest',
  '_isPreRendering',
  '_pageClientPath',
  '_pageId',
  '_pageServerFile',
  '_pageServerFileDefault',
  '_passToClient',
  //
  '_pageFilesLoaded',
  '_pageFilesAll',
  '_pageFilesAll',
  'pageExports',
  'exportsAll',
]
