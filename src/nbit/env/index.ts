
// 环境枚举
export enum EnvTypesEnum {
  // 本地环境
  development = 'development',
  // sg 开发环境
  dev = 'dev',
  // 测试环境
  test = 'test',
  // 压测环境
  stress = 'stress',
  // 生产环境
  production = 'production',
}

/**
 * 目前支持的云环境类别
 */
export enum ExtTypesEnum {
  // 默认环境
  default,
  // 华为云环境
  hw,
  // IM 环境
  im,
}

/**
 * Nodejs 环境变量映射到实际业务的环境变量简称
 */
export const EnvTypesMap = {
  [EnvTypesEnum.development]: 'staging',
  [EnvTypesEnum.dev]: 'dev',
  [EnvTypesEnum.test]: 'staging',
  [EnvTypesEnum.stress]: 'stress',
  [EnvTypesEnum.production]: 'prod',
}

/** S3 配置文件名枚举 */
export enum S3UrlNameEnum {
  /** dns 配置文件名 */
  dnsConfig = '_dnsConfig.json',
  /** 动态化配置文件名 */
  moduleAuthConfig = '_mainFuncStatus.json',
}

/**
 * 获取 S3 域名配置信息
 */
export const getBaseEnvS3Url = (mode, type, extType = ExtTypesEnum.default) => {
  
}
/**
 * 获取 S3 域名配置信息
 */
export const getEnvS3Url = (
  mode,
  businessId,
  urlName = S3UrlNameEnum.dnsConfig,
  extType = ExtTypesEnum.default,
) => {
  return getBaseEnvS3Url(mode, `${businessId}${urlName}`, extType)
}

/**
 * 获取 S3 秘钥信息
 */
export const getEnvSecretS3KeyConfig = (mode, accessKey, extType = ExtTypesEnum.default) => {
  return getBaseEnvS3Url(mode, `${accessKey}.json`, extType)
}

/**
 * 获取融合模式秘钥信息
 */
export const getMergeModeEnvSecretS3KeyConfig = (mode, accessKey, extType = ExtTypesEnum.default) => {
  if (mode === EnvTypesEnum.production) {
    let rootUrl = `https://hybird-accesskey-prod-saas.s3.ap-northeast-1.amazonaws.com/${accessKey}.json`
    if (extType === ExtTypesEnum.hw) {
      rootUrl = `https://hybird-accesskey-prod-huawei-saas.s3.ap-southeast-1.amazonaws.com/${accessKey}.json`
    }
    if (extType === ExtTypesEnum.im) {
      rootUrl = `https://hybird-accesskey-prod-saas.s3.ap-northeast-1.amazonaws.com/${accessKey}.json`
    }
    return rootUrl
  }
  if (mode === EnvTypesEnum.dev) {
    return `https://hybird-accesskey-dev-saas.s3.ap-northeast-1.amazonaws.com/${accessKey}.json`
  }
  if (mode === EnvTypesEnum.test) {
    return `https://hybird-accesskey-staging-saas.s3.ap-northeast-1.amazonaws.com/${accessKey}.json`
  }
  // 默认采用测试环境
  return `https://hybird-accesskey-staging-saas.s3.ap-northeast-1.amazonaws.com/${accessKey}.json`
}

/**
 * AWS S3 对象存储配置，上传需要的 config
 */
export function getEnvAwsS3Config(mode) {

  if (mode === EnvTypesEnum.production) {
    return {
      region: 'ap-northeast-1',
      accessKeyId: 'AKIAYR2KF6TGWOQ67CXX',
      secretAccessKey: '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',
      bucket: 'nb-sg-prod-saas',
    }
  }

  return {
    region: 'ap-southeast-1',
    accessKeyId: 'AKIAYR2KF6TGWOQ67CXX',
    secretAccessKey: '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',
    bucket: 'nb-sg-dev-saas',
  }
}

/**
 * 获取系统维护相关信息
 */
export const getEnvS3MaintenanceApiUrl = (mode: EnvTypesEnum, businessId) => {
 
}
