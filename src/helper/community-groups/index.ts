import { t } from '@lingui/macro'
import { getBusinessName } from '@/helper/common'

export function getCommunityGroupsDefaultSeoMeta(pageTitle?: string) {
  const values = {
    businessName: getBusinessName(),
  }

  return {
    title: pageTitle,
    description: t({
      id: `helper_community_groups_index_4z56lrxzym`,
      values,
    }),
  }
}
