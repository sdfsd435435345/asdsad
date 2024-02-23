# fastUrlUtils

> 环境相关工具类

```js

import { envUtils } from'@nbit-utils'
```


## 1. 引入 fastUrlUtils

```typescript
import { fastUrlUtils } from '../index'

const { getFastUrl } = fastUrlUtils
```

## 2. 定义环境枚举

```typescript
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
```

## 3. 定义 Nodejs 环境变量映射到实际业务的环境变量简称

```typescript
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
```

## 4. 定义 S3 配置文件名枚举

```typescript
/** S3 配置文件名枚举 */
export enum S3UrlNameEnum {
  /** dns 配置文件名 */
  dnsConfig = '_dnsConfig.json',
  /** 动态化配置文件名 */
  moduleAuthConfig = '_mainFuncStatus.json',
}
```

## 5. 定义获取 S3 域名配置信息的函数

```typescript
/**
 * 获取 S3 域名配置信息
 */
export const getBaseEnvS3Url = (mode, type, isHw = false, isIm = false) => {
  // ...函数内部代码...
}
```

## 6. 定义获取 S3 域名配置信息的函数

```typescript
/**
 * 获取 S3 域名配置信息
 */
export const getEnvS3Url = (mode, businessId, urlName = S3UrlNameEnum.dnsConfig, isHw = false, isIm = false) => {
  // ...函数内部代码...
}
```

## 7. 定义获取 S3 秘钥信息的函数

```typescript
/**
 * 获取 S3 秘钥信息
 */
export const getEnvSecretS3KeyConfig = (mode, accessKey, isHw = false, isIm = false) => {
  // ...函数内部代码...
}
```

## 8. 定义获取融合模式秘钥信息的函数

```typescript
/**
 * 获取融合模式秘钥信息
 */
export const getMergeModeEnvSecretS3KeyConfig = (mode, accessKey, isHw = false, isIm = false) => {
  // ...函数内部代码...
}
```
