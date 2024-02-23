# fastUrlUtils

> url 加速相关工具类

```js

import {fastUrlUtils } from'@nbit-utils'
```

### Domain Constants

```typescript
// s3 匹配图片域名
export const originS3Domain = 'https://newbit-s3.s3.ap-southeast-1.amazonaws.com'
// s3 替换的图片域名
export const fastS3Domain = 'https://img.chainstar.cloud'
export const fastS3DomainOld = 'https://img.monkey00.com'
// oss 原地址
export const originOSSDomain = 'https://markcoin.oss-ap-southeast-1.aliyuncs.com'
export const fastOSSDomain = 'https://oss.chainstar.cloud'

// s3 加速
export const originProdS3Domain = 'https://newbit-prod-s3.s3.ap-northeast-1.amazonaws.com'
export const fastProdS3Domain = 'https://newbit-prod-s3.chainstar.cloud'
export const originTestS3Domain = 'https://newbit-staging-s3.s3.ap-southeast-1.amazonaws.com'
export const fastTestS3Domain = 'https://newbit-staging-s3.chainstar.cloud'
export const originDevS3Domain = 'https://newbit-dev-s3.s3.ap-southeast-1.amazonaws.com'
export const fastDevS3Domain = 'https://newbit-dev-s3.chainstar.cloud'

// upload 加速
export const originDevS3ProdUploadDomain = 'https://nb-sg-prod.S3.ap-northeast-1.amazonaws.com'
export const fastDevS3ProdUploadDomain = 'https://nb-sg-prod-s3.chainstar.cloud'
export const originDevS3DevUploadDomain = 'https://nb-sg-dev.S3.ap-southeast-1.amazonaws.com'
export const fastDevS3DevUploadDomain = 'https://nb-sg-dev-s3.chainstar.cloud'
```

### Function getFastUrl

```typescript
export function getFastUrl(url: string) {
  // function body
}
```

### Function getUrlWithTimestamp

```typescript
export function getUrlWithTimestamp(url: string) {
  // function body
}
```

### Function hasSingleChars

```typescript
function hasSingleChars(str, currentStr) {
  // function body
}
```

### Function getFileType

```typescript
export function getFileType(url) {
  // function body
}
```

### Function injectThemeImgUrl

```typescript
export function injectThemeImgUrl(url, theme) {
  // function body
}
```
