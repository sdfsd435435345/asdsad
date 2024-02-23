import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { createTrackedSelector } from 'react-tracked'
import { ThemeEnum } from '@/constants/base'
import { setCookieLocale, setCookieTheme } from '@/helper/cookie'
import {
  getLangCache,
  getThemeCache,
  setLangCache,
  setThemeCache,
  getAccessKeyCache,
  setAccessKeyCache,
  setBusinessIdCache,
  getRestockTokenCache,
  setRestockTokenCache,
  setIsFusionModeCache,
} from '@/helper/cache'
import { getAggregationFusion, getAggregationBusinessId } from '@/helper/fusion-api'
import { setToken } from '@/helper/auth'
import { baseUserStore } from '@/store/user'
import { postMemberAuthRefreshToken } from '@/apis/user'
import { I18nsEnum } from '@/constants/i18n'
import { navigate } from 'vite-plugin-ssr/client/router'
import { getMaintenanceConfigFromS3 } from '@/apis/maintenance'
import produce from 'immer'

const defaultLocale = I18nsEnum['en-US']

type IStore = ReturnType<typeof getStore>

const themeCache = getThemeCache()
const langCache = getLangCache()

function getStore(set, get) {
  return {
    maintenanceMode: {
      triggerCheck: false,
      isMaintenance: false,
    },
    setMaintenanceMode: ({ triggerCheck, isMaintenance }: { triggerCheck?: boolean; isMaintenance?: boolean }) =>
      set(
        produce((draft: IStore) => {
          if (triggerCheck) draft.maintenanceMode.triggerCheck = triggerCheck
          if (isMaintenance) draft.maintenanceMode.isMaintenance = isMaintenance
        })
      ),

    theme: themeCache || ThemeEnum.dark,
    setTheme: (currentTheme?: string) =>
      set((state: IStore) => {
        if (currentTheme) {
          setThemeCache(currentTheme)
          return { theme: currentTheme }
        }
        currentTheme = state.theme === ThemeEnum.dark ? ThemeEnum.light : ThemeEnum.dark
        setThemeCache(currentTheme)
        return { theme: currentTheme }
      }),
    locale: langCache || defaultLocale,
    setLocale: (currentLocale?: string) =>
      set(() => {
        if (currentLocale) {
          return { locale: currentLocale }
        }
        return {}
      }),
    secretKey: null,
    setSecretKey: (secretKey?: string) =>
      set(() => {
        if (secretKey) {
          return { secretKey }
        }
        return {}
      }),
    // 是否融合模式
    isFusionMode: getAggregationFusion(),
    accessKey: getAccessKeyCache() || '',
    businessId: getAggregationBusinessId(),
    restockToken: getRestockTokenCache() || '',
    setFusionMode: (isFusionMode?: boolean) =>
      set(() => {
        setIsFusionModeCache(isFusionMode)
        return { isFusionMode }
      }),
    // 存 accessKey 和 businessId
    setAccessKey: (accessKey: string) =>
      set(() => {
        setAccessKeyCache(accessKey)
        return {
          accessKey: accessKey || '',
        }
      }),
    setBusinessId: (data: string) =>
      set(() => {
        setBusinessIdCache(data)
        return {
          businessId: data || '',
        }
      }),
    setRestockToken: (data: string) =>
      set(() => {
        setRestockTokenCache(data)
        return {
          restockToken: data || '',
        }
      }),
    /** 更新商户 Token */
    async updateMerchantToken(refreshToken: string) {
      const userStore = baseUserStore.getState()
      const tokenTtl = userStore.personalCenterSettings.tokenTtl as number
      const res = await postMemberAuthRefreshToken({ refreshToken, tokenTtl })
      if (res.isOk && res.data) {
        setToken(res.data)
        userStore.updatePreferenceAndUserInfoData()
      }
    },
    // 刷新次数，组件订阅更新即可起到订阅事件的作用，避免多加一个 context，同时不会两个页面都需要刷新，所以放在公共 store 里就行
    refreshCounter: 0,
    updateRefreshCounter: () => {
      set(old => {
        return {
          ...old,
          refreshCounter: old.refreshCounter + 1,
        }
      })
    },
    c2cMode: {
      isPublic: false,
      c2cBusinessId: '',
    },
  }
}

const baseCommonStore = create(subscribeWithSelector(getStore))
// 添加监听，A 模块变动去修改 B 模块状态
baseCommonStore.subscribe(
  state => state.theme,
  theme => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('theme', theme)
      setCookieTheme(theme)
    }
  }
)
baseCommonStore.subscribe(
  state => state.locale,
  locale => {
    if (typeof window !== 'undefined') {
      setLangCache(locale)
      setCookieLocale(locale)
    }
  }
)

/**
 * check isMaintenance mode on trigger
 * set maintenance mode to true
 * redirect to current page to render maintenance page
 */
baseCommonStore.subscribe(
  state => state.maintenanceMode.triggerCheck,
  () => {
    const { setMaintenanceMode } = baseCommonStore.getState()
    getMaintenanceConfigFromS3({}).then(res => {
      const maintenanceState = res.data.state
      setMaintenanceMode({ isMaintenance: maintenanceState })
      navigate(window.location.pathname)
    })
  }
)

const useCommonStore = createTrackedSelector(baseCommonStore)
// TODO: 必须要这样调用：baseCommonStore.getState()
export { useCommonStore, baseCommonStore }
