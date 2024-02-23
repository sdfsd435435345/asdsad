import { t } from '@lingui/macro'
import { getBusinessName } from './common'

export async function getKycDefaultSeoMeta(pageTitle?: string) {
  const values = {
    businessName: getBusinessName(),
  }
  const preTitle = pageTitle ? `${pageTitle} | ` : ''

  return {
    title: `${preTitle}${t({
      id: `modules_kyc_company_verified_material_index_page_server_qovx8dpfv3`,
      values,
    })}`,
    description: `${preTitle}${t({
      id: `modules_kyc_company_verified_material_index_page_server_efre42ngx6`,
      values,
    })}`,
  }
}
