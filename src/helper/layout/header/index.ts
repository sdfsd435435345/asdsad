import { TlayoutProps } from '@/typings/api/layout'
import { pick } from 'lodash'

/** get header related data */
function extractHeaderData(layoutProps?: TlayoutProps) {
  if (layoutProps) return pick(layoutProps, ['imgWebLogo', 'businessName'])
}

export { extractHeaderData }
