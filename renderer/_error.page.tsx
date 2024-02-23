import LazyImage from '@/components/lazy-image'
import { JsbridgeCommandsEnum } from '@/constants/js-bridge'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { isApp } from '@/helper/is-app'
import useJsbridge from '@/hooks/use-jsbridge'
import LoadFail from '@/components/load-fail'
import { t } from '@lingui/macro'
import { useMount } from 'ahooks'

export function Page({ is404, errorInfo }: { is404: boolean; errorInfo?: string }) {
  // APP 重置 title
  const jsbridge = useJsbridge()
  useMount(() => {
    if (isApp()) {
      if (is404) {
        jsbridge.value?.call(JsbridgeCommandsEnum.changeTitle, '404')
      } else {
        jsbridge.value?.call(JsbridgeCommandsEnum.changeTitle, t`render/_error.page/index-0`)
      }
    }
  })

  if (is404) {
    return <LoadFail />
  }
  return <LoadFail name={t`render/_error.page/index-0`} />
}
