export const enum downloadAppType {
  ios = 'ios',
  android = 'android',
  h5 = 'h5',
  google = 'google',
  appstore = 'appstore',
}

export const enum downloadDesktopType {
  windows = 'windows',
  mac = 'mac',
  linux = 'linux',
}

export const downloadTypeRanking = {
  [downloadAppType.appstore]: 1,
  [downloadAppType.ios]: 2,
  [downloadAppType.android]: 3,
  [downloadAppType.google]: 4,
  [downloadDesktopType.mac]: 5,
  [downloadDesktopType.windows]: 6,
  [downloadDesktopType.linux]: 7,
}

export const downloadIconsType = {
  [downloadAppType.ios]: 'download_apple',
  [downloadAppType.android]: 'download_android',
  [downloadAppType.google]: 'download_google',
  [downloadAppType.appstore]: 'download_apple',

  [downloadDesktopType.windows]: 'download_windows',
  [downloadDesktopType.linux]: 'download_linux',
  [downloadDesktopType.mac]: 'download_apple',
}

export enum downloadAppStatus {
  active = 1,
  inActive = 2,
}
