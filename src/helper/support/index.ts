import { t } from '@lingui/macro'
import { getBusinessName } from '../common'

export function getArtcleDefaultSeoMeta(pageTitle?: string) {
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

export function getSupportDefaultSeoMeta(pageTitle?: string) {
  const values = {
    businessName: getBusinessName(),
  }

  return {
    title: pageTitle,
    description: t({
      id: `helper_support_index_k95ei2_qmz`,
      values,
    }),
  }
}
