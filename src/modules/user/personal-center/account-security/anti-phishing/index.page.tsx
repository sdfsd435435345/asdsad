import { t } from '@lingui/macro'
import UserPersonalCenterAntiPhishing from '@/features/user/personal-center/account-security/anti-phishing'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterAntiPhishing />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/account-security/anti-phishing',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_13`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
