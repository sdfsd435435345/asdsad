import { useState } from 'react'
import { useMount } from 'react-use'
import { Toast } from 'react-vant'
import { t } from '@lingui/macro'
import UserSelectConfigurationItem from '@/features/user/common/select-configuration-item'
import { I18nsEnum, I18nsMap } from '@/constants/i18n'
import { UserSelectConfigurationItemType } from '@/typings/api/user'
import { postMemberBasePushLanguage, getMemberBaseSettingsInfo } from '@/apis/user'
import { useUserStore } from '@/store/user'
import NavBar from '@/components/navbar'

function UserPersonalCenterSettingsPushLanguage() {
  const [languageList, setLanguageList] = useState<Array<UserSelectConfigurationItemType>>([])

  const userStore = useUserStore()

  const getBaseSettingsInfo = async () => {
    const res = await getMemberBaseSettingsInfo({})
    if (res.isOk) {
      let list: UserSelectConfigurationItemType[] = []
      Object.keys(I18nsMap).forEach((v, i) => {
        list.push({ key: i, value: I18nsEnum[v], text: I18nsMap[v], isChecked: v === res.data?.pushLanguage })
      })

      userStore.setPersonalCenterSettings({ pushLanguage: res.data?.pushLanguage })
      setLanguageList(list)
    }
  }

  useMount(() => {
    getBaseSettingsInfo()
  })

  const handleSettingOptions = async (row: UserSelectConfigurationItemType) => {
    const res = await postMemberBasePushLanguage({ language: row.value as I18nsEnum })
    if (res.isOk) {
      await userStore.setPersonalCenterSettings({ pushLanguage: row.value as I18nsEnum })
      Toast.success(t`features_user_personal_center_settings_converted_currency_index_587`)
      window.history.back()
    }
  }
  return (
    <section className="user-personal-center-settings-language">
      <NavBar title={t`features_user_personal_center_settings_push_language_index_618`} />

      <div className="user-personal-center-settings-language-wrap">
        <UserSelectConfigurationItem list={languageList} settingOptions={handleSettingOptions} />
      </div>
    </section>
  )
}

export default UserPersonalCenterSettingsPushLanguage
