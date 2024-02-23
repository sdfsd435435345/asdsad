import { t } from '@lingui/macro'
import UserLogin from '@/features/user/login'
import { getUserPageDefaultDescribeMeta } from '@/helper/user'
import { UserModuleDescribeKeyEnum } from '@/constants/user'

function Page() {
  return <UserLogin />
}

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      authTo: '/',
      pageProps,
      layoutParams,
      documentProps: getUserPageDefaultDescribeMeta(t`user.field.reuse_07`, UserModuleDescribeKeyEnum.default),
    },
  }
}

export { Page, onBeforeRender }
