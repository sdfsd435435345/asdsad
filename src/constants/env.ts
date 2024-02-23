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

export const EnvTypesMap = {
  [EnvTypesEnum.development]: 'staging',
  [EnvTypesEnum.dev]: 'dev',
  [EnvTypesEnum.test]: 'staging',
  [EnvTypesEnum.stress]: 'stress',
  [EnvTypesEnum.production]: 'prod',
}

export const getEnvS3Url = (mode, businessId) => {
  if (mode === EnvTypesEnum.production) {
    return `https://newbit-prod-s3.s3.ap-northeast-1.amazonaws.com/${businessId}_dnsConfig.json`
  }
  if (mode === EnvTypesEnum.dev) {
    return `https://newbit-dev-s3.s3.ap-southeast-1.amazonaws.com/${businessId}_dnsConfig.json`
  }
  if (mode === EnvTypesEnum.test) {
    return `https://newbit-staging-s3.s3.ap-southeast-1.amazonaws.com/${businessId}_dnsConfig.json`
  }
  // 默认采用测试环境
  return `https://newbit-staging-s3.s3.ap-southeast-1.amazonaws.com/${businessId}_dnsConfig.json`
}
