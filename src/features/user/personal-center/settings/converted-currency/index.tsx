import { useState, useEffect } from 'react'
import { useRequest } from 'ahooks'
import { useMount } from 'react-use'
import { Toast, Image } from 'react-vant'
import { t } from '@lingui/macro'
import UserSelectConfigurationItem from '@/features/user/common/select-configuration-item'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { useUserStore } from '@/store/user'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { UserSelectConfigurationItemType } from '@/typings/api/user'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { postMemberBaseCurrencyType } from '@/apis/user'
import { getIsLogin } from '@/helper/auth'
import NavBar from '@/components/navbar'

function UserPersonalCenterSettingsConvertedCurrency() {
  const [currencySymbolList, setCurrencySymbolList] = useState<Array<UserSelectConfigurationItemType>>([])
  const [fullScreenLoading, setFullScreenLoading] = useState<boolean>(false)

  const { setPersonalCenterSettings, updatePreferenceAndUserInfoData } = useUserStore()

  const { fiatCurrencyData, getFiatCurrencyData, updateFiatCurrencyData } = usePersonalCenterStore()

  const isLogin = getIsLogin()

  useEffect(() => {
    setFullScreenLoading(true)
    getFiatCurrencyData()
  }, [])

  useMount(() => {
    isLogin && updatePreferenceAndUserInfoData()
  })

  useEffect(() => {
    if (fiatCurrencyData) {
      let list: UserSelectConfigurationItemType[] = []
      fiatCurrencyData.currencyList.forEach(v => {
        list.push({
          key: v.id,
          value: v.currencyTypeCd,
          text: v.currencyEnName,
          icon: <Image src={`${oss_area_code_image_domain_address}${v.countryFlagImg}.png`} />,
          isChecked: v.currencyEnName === fiatCurrencyData.currencyEnName,
        })
      })

      setCurrencySymbolList(list)
      setFullScreenLoading(false)
    }
  }, [fiatCurrencyData])

  const handleSelectColors = (currencyTypeCd: string) => {
    let list: UserSelectConfigurationItemType[] = []

    currencySymbolList.forEach(v => {
      list.push({ ...v, isChecked: v.value === currencyTypeCd })
    })

    setCurrencySymbolList(list)
  }

  const postBaseCurrencyType = async (currencyTypeCd: string) => {
    const res = await postMemberBaseCurrencyType({ currencyTypeCd })
    if (res.isOk && res.data?.isSuccess) {
      updateFiatCurrencyData('currencyTypeCd', currencyTypeCd)

      await setPersonalCenterSettings({
        currencyTypeCd,
      })
      handleSelectColors(currencyTypeCd)
      Toast.success(t`features_user_personal_center_settings_converted_currency_index_587`)
      window.history.back()
    }
  }

  const { run } = useRequest(postBaseCurrencyType, { manual: true })

  const handleSettingOptions = (row: UserSelectConfigurationItemType) => run(row.value as string)

  return (
    <section className="user-personal-center-settings-currency">
      <NavBar title={t`user.account_security.settings_02`} />

      <div className="user-personal-center-settings-currency-wrap">
        <UserSelectConfigurationItem list={currencySymbolList} settingOptions={handleSettingOptions} />
      </div>

      <FullScreenLoading isShow={fullScreenLoading} />
    </section>
  )
}

export default UserPersonalCenterSettingsConvertedCurrency
