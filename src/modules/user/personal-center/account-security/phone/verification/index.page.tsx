import { t } from '@lingui/macro'
import UserPersonalCenterPhoneVerification from '@/features/user/personal-center/account-security/phone/verification'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserPersonalCenterPhoneVerification />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/personal-center/account-security/phone',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_19`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
