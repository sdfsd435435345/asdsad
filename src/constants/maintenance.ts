import { businessId, newbitEnv } from '@/helper/env'
import { EnvTypesEnum } from './env'

export const maintenanceApiResCode = 9999

export const getS3MaintenanceApiUrl = () => {
  const mode = newbitEnv
  switch (mode) {
    case EnvTypesEnum.production:
      return `https://newbit-prod-s3.s3.ap-southeast-1.amazonaws.com/${businessId}_maintenanceConfig.json`
    case EnvTypesEnum.dev:
      return `https://newbit-dev-s3.s3.ap-southeast-1.amazonaws.com/${businessId}_maintenanceConfig.json`
    case EnvTypesEnum.test:
      return `https://newbit-staging-s3.s3.ap-southeast-1.amazonaws.com/${businessId}_maintenanceConfig.json`
    default:
      return `https://newbit-dev-s3.s3.ap-southeast-1.amazonaws.com/${businessId}_maintenanceConfig.json`
  }
}

/** maintenance page */
export function getMaintenanceRoutePath() {
  return '/maintenance'
}
