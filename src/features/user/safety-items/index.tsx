import { useMemo, useRef, useState } from 'react'
import { useMount } from 'react-use'
import { Checkbox, Button, Form } from 'react-vant'
import UserTipsInfo from '@/features/user/common/tips-info'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import {
  UserValidateMethodEnum,
  UserEnabledStateTypeEnum,
  UserVerifyTypeEnum,
  GeeTestOperationTypeEnum,
} from '@/constants/user'
import { postMemberVerifyByAccoun } from '@/apis/user'
import { MemberVerifyMemberByAccounResp, MemberVerifyMemberByAccounReq } from '@/typings/user'
import { useUserStore } from '@/store/user'
import { getIsLogin } from '@/helper/auth'
import { useGeeTestBind } from '@/features/user/common/geetest'
import Icon from '@/components/icon'
import styles from './index.module.css'

export default function UserSafetyItems() {
  const [options, setOptions] = useState<Array<string>>([])
  const [userInfo, setUserInfo] = useState<MemberVerifyMemberByAccounResp>()
  const [loading, setLoading] = useState<boolean>(false)
  const data = useRef<MemberVerifyMemberByAccounReq>()

  const store = useUserStore()
  const isLogin = getIsLogin()
  const geeTestInit = useGeeTestBind()
  const [form] = Form.useForm()

  const info = useMemo(() => {
    return isLogin ? store.userInfo : store.userTransitionDatas
  }, [])

  const getVerifyByAccoun = async () => {
    const type = isLogin
      ? info.isBindEmailVerify === UserEnabledStateTypeEnum.enable
        ? UserVerifyTypeEnum.email
        : UserVerifyTypeEnum.phone
      : info.accountType

    data.current = {
      type,
      account:
        type === UserVerifyTypeEnum.phone
          ? info.mobile || info.mobileNumber
          : type === UserVerifyTypeEnum.email
          ? info.email
          : info.uid || info.userInfo.uid,
      mobileCountryCode: info.mobileCountryCode || info.mobileCountryCd,
    }

    const res = await postMemberVerifyByAccoun(data.current)
    if (res.isOk) {
      setUserInfo({ ...info, ...res.data })
    }
  }

  useMount(getVerifyByAccoun)

  const handleTransitionData = async () => {
    const resetItem = {
      isEmail: options.includes(UserValidateMethodEnum.email),
      isMobile: options.includes(UserValidateMethodEnum.phone),
      isGoogle: options.includes(UserValidateMethodEnum.validator),
    }

    const cacheInfo = isLogin ? { ...store.userInfo } : {}
    const cacheData = {
      ...cacheInfo,
      ...data.current,
      resetItem,
      kycType: userInfo?.kycType,
    }

    await store.setUserTransitionDatas(cacheData)

    link('/safety-items/application-form')
  }

  const geeTestOnError = () => setLoading(false)

  const geeTestOnSuccess = async () => {
    setLoading(false)
    handleTransitionData()
  }

  const onSubmit = async () => {
    setLoading(true)

    /** 极验验证 */
    const account = data.current?.account as string
    const operateType = GeeTestOperationTypeEnum.resetSecurity
    geeTestInit(account, operateType, geeTestOnSuccess, geeTestOnError)
  }

  return (
    <section className={`safetyitems ${styles.scoped}`}>
      <NavBar title="" right={<Icon name="close" hasTheme />} onClickRight={() => link('/')} />

      <UserTipsInfo slotContent={<p>{t`user.field.reuse_30_1`}</p>} />
      <div className="safetyitems-wrap">
        <div className="title">
          <label>{t`user.safety_items_01`}</label>
        </div>

        <Form form={form} layout="vertical" onFinish={onSubmit} autoComplete="off">
          <div className="checkbox-wrap">
            <Checkbox.Group onChange={v => setOptions(v)} defaultValue={[]}>
              {userInfo?.isOpenGoogleVerify === UserEnabledStateTypeEnum.enable && (
                <Checkbox
                  name="validator"
                  iconRender={({ checked: isActive }) => (
                    <Icon name={isActive ? 'login_verify_selected' : 'login_verify_unselected_black'} />
                  )}
                >{t`features_user_safety_items_index_510147`}</Checkbox>
              )}

              {userInfo?.isOpenEmailVerify === UserEnabledStateTypeEnum.enable && (
                <Checkbox
                  name="email"
                  iconRender={({ checked: isActive }) => (
                    <Icon name={isActive ? 'login_verify_selected' : 'login_verify_unselected_black'} />
                  )}
                >
                  {t`user.safety_items_04`} {userInfo.email as string} {t`user.safety_items_03`}
                </Checkbox>
              )}

              {userInfo?.isOpenPhoneVerify === UserEnabledStateTypeEnum.enable && (
                <Checkbox
                  name="phone"
                  iconRender={({ checked: isActive }) => (
                    <Icon name={isActive ? 'login_verify_selected' : 'login_verify_unselected_black'} />
                  )}
                >
                  {t`user.safety_items_02`} {`+${userInfo.mobileCountryCd}`} {userInfo.mobileNumber as string}{' '}
                  {t`user.safety_items_03`}
                </Checkbox>
              )}
            </Checkbox.Group>
          </div>

          <div className="reset">
            <Button size="large" loading={loading} type="primary" disabled={options.length < 1} nativeType="submit">
              {t`user.safety_items_07`}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  )
}
