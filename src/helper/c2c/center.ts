import { t } from '@lingui/macro'
import { getBusinessName } from '@/helper/common'

export function getC2cCenterDefaultSeoMeta(pageTitle?: string) {
  const values = {
    businessName: getBusinessName(),
  }

  return {
    title: pageTitle,
    description: t({
      id: `modules_c2c_trade_index_page_y1nsgrwbv3`,
      values,
    }),
  }
}
