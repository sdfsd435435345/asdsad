import { Button, Toast } from 'react-vant'
import Link from '@/components/link'
import SignInWith from '@/features/user/login/component/sign-in-with'
import { t } from '@lingui/macro'
import { useUserStore } from '@/store/user'
import NavBar from '@/components/navbar'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { usePageContext } from '@/hooks/use-page-context'
import { UserRegisterTypeEnum } from '@/constants/user'
import { useLayoutStore } from '@/store/layout'
import styles from './index.module.css'

export default function UserRegister() {
  const { headerData } = useLayoutStore()
  const store = useUserStore()
  const pageContext = usePageContext()
  const { invitationCode } = pageContext.urlParsed.search
  const hasInvitationCode = invitationCode ? `?invitationCode=${invitationCode}` : ''

  const handleNextStep = async () => {
    await store.setUserTransitionDatas({
      thirdPartyAccountType: 0,
      thirdPartyAccount: '',
      registerType: UserRegisterTypeEnum.default,
    })
    link(`/register/residence${hasInvitationCode}`)
  }

  // const handleThirdPartyOnSuccess = async (thirdPartyAccountType: string, thirdPartyAccount: string) => {
  //   if (!thirdPartyAccount) {
  //     Toast.info(t`features_user_register_index_5101258`)
  //     return
  //   }
  //   await store.setUserTransitionDatas({
  //     thirdPartyAccountType,
  //     thirdPartyAccount,
  //     registerType: UserRegisterTypeEnum.thirdParty,
  //   })
  //   link('/register/residence')
  // }
  return (
    <section className={`register ${styles.scoped}`}>
      <NavBar title="" right={<Icon name="close" className="text-xl" hasTheme />} onClickRight={() => link('/')} />
      <div className="register-wrap">
        <div className="logo">
          <Icon isRemoteUrl name="fastpay/logo" />
        </div>
        <div className="title text-center">
          <label>
            {t({
              id: 'features_user_register_index_5101295',
              values: { 0: 'FastPay' },
            })}
          </label>
        </div>
        <div className="register-btn">
          <Button size="large" type="primary" onClick={handleNextStep}>
            {t`user.register_02`}
          </Button>
        </div>

        <div className="login">
          <label>{t`user.field.reuse_06`}</label>
          <Link href="/login" prefetch className="customize-link-style">
            {t`user.field.reuse_07`}
          </Link>
        </div>
        <div className="third-party-wrap">
          <SignInWith />
          <div className="tips">
            <label>
              {t`user.register_03`}
              <Link href="/home" prefetch className="customize-link-style">
                {t`user.register_04`}
              </Link>
              {t`user.register_05`}
              <Link href="/home" prefetch className="customize-link-style">
                {t`user.register_06`}
              </Link>
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
