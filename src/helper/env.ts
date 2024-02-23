import { EnvTypesEnum } from '@/constants/env'

/** 获取是否是 NodeJs 服务器环境 */
export const envIsServer = import.meta.env.SSR
/** 获取是否是客户端环境 */
export const envIsClient = !envIsServer
/** 是否是开发环境 */
export const envIsDev = import.meta.env.VITE_NEWBIT_ENV === EnvTypesEnum.development
/** 是否是 sg dev 环境 */
export const envIsSGDev = import.meta.env.VITE_NEWBIT_ENV === EnvTypesEnum.dev
/** 是否是生产环境 */
export const envIsProd = import.meta.env.VITE_NEWBIT_ENV === EnvTypesEnum.production

export const envIsBuild = !envIsDev

export const baseUrl =  'http://16.162.108.36:10001'

export const wsUrl = import.meta.env.VITE_MARKCOIN_WS

export const port = import.meta.env.VITE_PORT
// 合约 ws
export const wsFuturesUrl = import.meta.env.VITE_MARKCOIN_WS_CONTRACT

// 现货 ws
export const wsCoinUrl = import.meta.env.VITE_MARKCOIN_WS

// git  最近的 id
export const gitCommitId = import.meta.env.VITE_GIT_COMMIT_ID

export const businessId = import.meta.env.VITE_MARKCOIN_BUSINESS_ID
export const H5Url = import.meta.env.VITE_MARKCOIN_H5_URL
export const WebUrl = import.meta.env.VITE_MARKCOIN_WEB_URL
/** AWS S3 config */
export const awsS3Config = {
  region: import.meta.env.VITE_AWS_S3_REGION,
  accessKeyId: import.meta.env.VITE_AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_S3_SECRET_ACCESS_KEY,
  bucket: import.meta.env.VITE_AWS_S3_BUCKET,
}
export const newbitEnv = import.meta.env.VITE_NEWBIT_ENV

export const c2cSdkAppId = Number(import.meta.env.VITE_MARKCOIN_C2C_SDK_APP_ID || '367825766')
