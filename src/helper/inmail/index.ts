import { t } from '@lingui/macro'
import { getBusinessName } from '@/helper/common'

export function getInmailDefaultSeoMeta(pageTitle?: string) {
  const values = {
    businessName: getBusinessName(),
  }

  return {
    title: pageTitle,
    description: t({
      id: `constants_seo_i467vaqbwg`,
      values,
    }),
  }
}
