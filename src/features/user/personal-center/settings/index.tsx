import { useMount } from 'react-use'
import NavBar from '@/components/navbar'
import { Cell, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { useCommonStore } from '@/store/common'
import { usePageContext } from '@/hooks/use-page-context'
import { UserUpsAndDownsColorEnum } from '@/constants/user'
import { link } from '@/helper/link'
import { getIsLogin } from '@/helper/auth'
import { useUserStore } from '@/store/user'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { I18nsMap } from '@/constants/i18n'
import styles from './index.module.css'

export default function UserPersonalCenterSettings() {
  const pageContext = usePageContext()
  const { isFusionMode } = useCommonStore()

  const isLogin = getIsLogin()
  const { personalCenterSettings, updatePreferenceAndUserInfoData } = useUserStore()
  const { fiatCurrencyData } = usePersonalCenterStore()
  const { colors, pushLanguage } = personalCenterSettings

  useMount(() => {
    isLogin && updatePreferenceAndUserInfoData()
  })

  const handleUnLoginStatus = (url: string, isCheck: boolean) => {
    if (isCheck) {
      isLogin ? link(url) : Toast.info(t`features_user_personal_center_index_510102`)
      return
    }

    link(url)
  }

  return (
    <div className={`settins ${styles.scoped}`}>
      <NavBar
        title={
          <div>
            <img src="" alt="" />
            <span>{t`user.pageContent.title_12`}</span>
          </div>
        }
        onClickLeft={() => link(isFusionMode ? '/markets/spot' : '/personal-center')}
      />

      <div className="settins-wrap">
        <Cell
          title={t`user.account_security.settings_01`}
          isLink
          value={I18nsMap[pageContext.locale as string]}
          onClick={() => link('/personal-center/settings/language')}
        />

        {!isFusionMode && (
          <Cell
            title={t`features_user_personal_center_settings_index_619`}
            isLink
            value={I18nsMap[pushLanguage as string] || t`features_user_personal_center_settings_index_5101268`}
            onClick={() => handleUnLoginStatus('/personal-center/settings/push-language', true)}
          />
        )}

        {!isFusionMode && (
          <Cell
            title={t`user.account_security.settings_02`}
            isLink
            value={fiatCurrencyData?.currencyEnName}
            onClick={() => handleUnLoginStatus('/personal-center/settings/converted-currency', true)}
          />
        )}
      </div>
    </div>
  )
}
