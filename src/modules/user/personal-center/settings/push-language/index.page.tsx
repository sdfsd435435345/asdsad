import { t } from '@lingui/macro'
import UserPersonalCenterSettingsPushLanguage from '@/features/user/personal-center/settings/push-language'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterSettingsPushLanguage />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/settings/push-language',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(
        t`modules_user_personal_center_settings_push_language_index_page_server_5101365`,
        UserModuleDescribeKeyEnum.default
      ),
    },
  }
}

export { Page, onBeforeRender }
