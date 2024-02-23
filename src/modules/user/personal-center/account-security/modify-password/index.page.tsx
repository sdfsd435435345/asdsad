import { t } from '@lingui/macro'
import UserPersonalCenterModifyPassword from '@/features/user/personal-center/account-security/modify-password'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterModifyPassword />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/account-security/modify-password',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_20`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
