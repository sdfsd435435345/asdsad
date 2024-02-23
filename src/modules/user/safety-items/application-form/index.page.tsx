import { t } from '@lingui/macro'
import UserSafetyItemsApplicationForm from '@/features/user/safety-items/application-form'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserSafetyItemsApplicationForm />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.pageContent.title_05`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
