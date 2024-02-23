import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { Button, Divider } from 'react-vant'
// TODO: 需要外部化处理 firebase
import { initializeApp } from 'firebase/app'
import { getThirdPartyConfig } from '@/apis/user'
import { UserVerifyTypeEnum, SignInWithEnum } from '@/constants/user'
import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth'
import { useMount } from 'ahooks'
import styles from './index.module.css'

let googleProvider
let appleProvider
let auth
function ThirdParty({ onSuccess }) {
  const getConfigInfo = async () => {
    const res = await getThirdPartyConfig({})
    if (res.isOk) {
      initializeApp(res.data!)
      googleProvider = new GoogleAuthProvider()
      appleProvider = new OAuthProvider('apple.com')

      auth = getAuth()
    }
  }

  const handleGoogleLogin = async () => {
    /** google 登录弹窗 */
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user as any
        const type = user.email ? UserVerifyTypeEnum.email : UserVerifyTypeEnum.phone
        const params = {
          loginType: SignInWithEnum.google,
          accessToken: user.accessToken,
          account: user.email || user.phoneNumber,
        }
        onSuccess && onSuccess(type, params)
      })
      .catch(error => {
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.error(credential)
      })
  }

  const handleAppleLogin = async () => {
    appleProvider.addScope('email')
    appleProvider.addScope('name')
    /** apple 登录弹窗 */
    signInWithPopup(auth, appleProvider)
      .then(result => {
        const user = result?.user as any
        const type = user.email ? UserVerifyTypeEnum.email : UserVerifyTypeEnum.phone
        const params = {
          loginType: SignInWithEnum.apple,
          accessToken: user?.accessToken,
          account: user.email || user.phoneNumber,
        }
        onSuccess && onSuccess(type, params)
      })
      .catch(error => {
        const credential = OAuthProvider.credentialFromError(error)
        console.error(credential)
      })
  }

  useMount(() => {
    getConfigInfo()
  })

  return (
    <div className={styles.scoped}>
      <Divider>{t`features_user_common_third_party_index_tefxrwmhb5`}</Divider>

      <div className="third-party">
        {/* <Button size="large" type="default" icon={<Icon name="login_icon_apple" hasTheme />} onClick={handleAppleLogin}>
          {t`user.third_party_02`}
        </Button> */}
        <div className="flex flex-col items-center" onClick={handleAppleLogin}>
          <div className="w-10 h-10 rounded-full border-line_color_01 border flex justify-center items-center">
            <Icon name="login_icon_apple" hasTheme />
          </div>
          <div className="text-text_color_03 text-sm">Apple</div>
        </div>
        <div className="flex flex-col items-center" onClick={handleGoogleLogin}>
          <div className="w-10 h-10 rounded-full border-line_color_01 border flex justify-center items-center">
            <Icon name="login_icon_google" />
          </div>
          <div className="text-text_color_03 text-sm">Google</div>
        </div>

        {/* <Button size="large" type="default" icon={<Icon name="login_icon_google" />} onClick={handleGoogleLogin}>
          {t`user.third_party_03`}
        </Button> */}
      </div>
    </div>
  )
}

export default ThirdParty
